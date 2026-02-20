import { Bt as DocNode, t as DocOptions, v as LoadResponse } from "./mod-JKaN6sEW.js";

//#region src/doc.d.ts
/**
 * Create a custom module loader for @deno/doc.
 *
 * Fetches modules from URLs using fetch(), with proper timeout handling.
 */
declare function createLoader(): (specifier: string, isDynamic?: boolean, cacheSetting?: string, checksum?: string) => Promise<LoadResponse | undefined>;
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
declare function doc(specifiers: string[], options?: DocOptions): Promise<Record<string, Array<DocNode>>>;
//#endregion
export { createLoader, doc };