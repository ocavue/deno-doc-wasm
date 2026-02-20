import { t as doc$1 } from "./deno__doc-B3k7eFVb.js";
import { t as debug } from "./debug-C007cULw.js";
import { readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { ResolverFactory } from "oxc-resolver";

//#region src/doc.ts
/**
* I need to create an patched version for the `doc` function because it by default use some Deno specific dependencies.
*
* I tried to use https://github.com/denoland/dnt to convert @deno/doc to a Node.js module but it failed because dnt cannot handle the WASM module and throw this error: https://github.com/denoland/dnt/blob/74e37c78bf485e4fc2a346e41b0f22533d0af47d/rs-lib/src/specifiers.rs#L136
*/
const resolver = new ResolverFactory({
	"conditionNames": ["node", "import"],
	"mainFields": ["module", "main"],
	preferRelative: true
});
/** Timeout for fetching modules in milliseconds */
const FETCH_TIMEOUT_MS = 30 * 1e3;
/**
* Create a custom module loader for @deno/doc.
*
* Fetches modules from URLs using fetch(), with proper timeout handling.
*/
function createLoader() {
	return async (specifier, _isDynamic, _cacheSetting, _checksum) => {
		debug("loading module %s", specifier);
		let url;
		try {
			url = new URL(specifier);
		} catch {
			console.warn(`[deno-doc-wasm] Failed to parse specifier: ${specifier}`);
			return;
		}
		if (url.protocol === "file:") try {
			return {
				kind: "module",
				specifier,
				headers: {},
				content: await readFile(fileURLToPath(url), "utf-8")
			};
		} catch (error) {
			console.warn(`[deno-doc-wasm] Failed to read local file ${specifier}: ${error}`);
			return;
		}
		if (url.protocol !== "http:" && url.protocol !== "https:") {
			console.warn(`[deno-doc-wasm] Unsupported protocol ${url.protocol} for specifier: ${specifier}`);
			return;
		}
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
		try {
			const response = await fetch(url.toString(), {
				redirect: "follow",
				signal: controller.signal
			});
			clearTimeout(timeoutId);
			if (response.status !== 200) {
				console.warn(`[deno-doc-wasm] Failed to fetch module ${specifier}: ${response.status} ${response.statusText}`);
				return;
			}
			const content = await response.text();
			const headers = {};
			for (const [key, value] of response.headers) headers[key.toLowerCase()] = value;
			return {
				kind: "module",
				specifier: response.url,
				headers,
				content
			};
		} catch (error) {
			clearTimeout(timeoutId);
			console.warn(`[deno-doc-wasm] Failed to fetch module ${specifier}: ${error}`);
			return;
		}
	};
}
/**
* Create a module resolver for @deno/doc.
*
* Handles resolving relative imports and esm.sh redirects.
*/
function createResolver() {
	return (specifier, referrer) => {
		debug("resolving module %s from %s", specifier, referrer);
		if (specifier.startsWith(".") || specifier.startsWith("/")) return new URL(specifier, referrer).toString();
		if (!specifier.startsWith("http://") && !specifier.startsWith("https://")) {
			if (new URL(referrer).hostname === "esm.sh") return `https://esm.sh/${specifier}`;
		}
		if (referrer.startsWith("file://")) {
			const filePath = fileURLToPath(new URL(referrer));
			debug("filePath: %s", filePath);
			const resolved = resolver.resolveFileSync(filePath, specifier);
			if (resolved.error) console.warn(`[deno-doc-wasm] Failed to resolve file ${specifier} from ${filePath} using oxc-resolver: ${resolved.error}`);
			const resolvedPath = resolved.path;
			if (resolvedPath) {
				const relativeURL = pathToFileURL(resolvedPath).toString();
				debug("relativeURL: %s", relativeURL);
				return relativeURL;
			}
		}
		console.warn(`[deno-doc-wasm] ~~ Failed to resolve module ${specifier} from ${referrer}`);
		return specifier;
	};
}
/**
* Generate asynchronously an array of documentation nodes for the supplied
* module.
*
* ### Example
*
* ```ts
* import { doc } from "@deno/doc";
*
* const records = await doc(["https://deno.land/std/fmt/colors.ts"]);
* const colorsDoc = records["https://deno.land/std/fmt/colors.ts"];
*
* for (const node of colorsDoc) {
*   console.log(`name: ${node.name} kind: ${node.kind}`);
* }
* ```
*
* @param specifiers List of the URL strings of the specifiers to document
* @param options A set of options for generating the documentation
* @returns A promise that resolves with an array of documentation nodes
*/
function doc(specifiers, options = {}) {
	const docOptions = { ...options };
	if (!docOptions.load) docOptions.load = createLoader();
	if (!docOptions.resolve) docOptions.resolve = createResolver();
	return doc$1(specifiers, docOptions);
}

//#endregion
export { createLoader, doc };