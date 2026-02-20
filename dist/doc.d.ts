import { Bt as DocNode, t as DocOptions } from "./mod-D-2tLAqi.js";

//#region src/doc.d.ts
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
export { doc };