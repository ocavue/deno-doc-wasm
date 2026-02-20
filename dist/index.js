import { n as generateHtml, r as generateHtmlAsJSON, t as doc$1 } from "./deno__doc-B3k7eFVb.js";

//#region src/doc.ts
/**
* I need to create an patched version for the `doc` function because it by default use some Deno specific dependencies.
* 
* I tried to use https://github.com/denoland/dnt to convert @deno/doc to a Node.js module but it failed because dnt cannot handle the WASM module and throw this error: https://github.com/denoland/dnt/blob/74e37c78bf485e4fc2a346e41b0f22533d0af47d/rs-lib/src/specifiers.rs#L136
*/
/** Timeout for fetching modules in milliseconds */
const FETCH_TIMEOUT_MS = 30 * 1e3;
/**
* Create a custom module loader for @deno/doc.
*
* Fetches modules from URLs using fetch(), with proper timeout handling.
*/
function createLoader() {
	return async (specifier, _isDynamic, _cacheSetting, _checksum) => {
		let url;
		try {
			url = new URL(specifier);
		} catch {
			return;
		}
		if (url.protocol !== "http:" && url.protocol !== "https:") return;
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
		try {
			const response = await fetch(url.toString(), {
				redirect: "follow",
				signal: controller.signal
			});
			clearTimeout(timeoutId);
			if (response.status !== 200) return;
			const content = await response.text();
			const headers = {};
			for (const [key, value] of response.headers) headers[key.toLowerCase()] = value;
			return {
				kind: "module",
				specifier: response.url,
				headers,
				content
			};
		} catch {
			clearTimeout(timeoutId);
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
		if (specifier.startsWith(".") || specifier.startsWith("/")) return new URL(specifier, referrer).toString();
		if (!specifier.startsWith("http://") && !specifier.startsWith("https://")) {
			if (new URL(referrer).hostname === "esm.sh") return `https://esm.sh/${specifier}`;
		}
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
* import { doc } from "https://deno.land/x/deno_doc/mod.ts";
*
* const entries = await doc(["https://deno.land/std/fmt/colors.ts"]);
*
* for (const entry of entries) {
*   console.log(`name: ${entry.name} kind: ${entry.kind}`);
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
export { doc, generateHtml, generateHtmlAsJSON };