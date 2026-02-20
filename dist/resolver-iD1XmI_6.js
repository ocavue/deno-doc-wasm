import { createDebug } from "obug";
import { once } from "@ocavue/utils";
import { ResolverFactory } from "oxc-resolver";

//#region src/debug.ts
const debug = createDebug("deno-doc-wasm");

//#endregion
//#region src/resolver.ts
function createOxcResolver() {
	return new ResolverFactory({
		"conditionNames": [
			"types",
			"node",
			"import"
		],
		"mainFields": [
			"types",
			"module",
			"main"
		],
		preferRelative: true
	});
}
const getOxcResolver = once(createOxcResolver);

//#endregion
export { debug as n, getOxcResolver as t };