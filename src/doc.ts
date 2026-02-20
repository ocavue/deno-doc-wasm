/**
 * I need to create an patched version for the `doc` function because it by default use some Deno specific dependencies.
 *
 * I tried to use https://github.com/denoland/dnt to convert @deno/doc to a Node.js module but it failed because dnt cannot handle the WASM module and throw this error: https://github.com/denoland/dnt/blob/74e37c78bf485e4fc2a346e41b0f22533d0af47d/rs-lib/src/specifiers.rs#L136
 */

import {
  doc as docBase,
  type DocNode,
  type DocOptions,
  type LoadResponse,
} from './re-export'

/** Timeout for fetching modules in milliseconds */
const FETCH_TIMEOUT_MS = 30 * 1000

/**
 * Create a custom module loader for @deno/doc.
 *
 * Fetches modules from URLs using fetch(), with proper timeout handling.
 */
export function createLoader(): (
  specifier: string,
  isDynamic?: boolean,
  cacheSetting?: string,
  checksum?: string,
) => Promise<LoadResponse | undefined> {
  return async (
    specifier: string,
    _isDynamic?: boolean,
    _cacheSetting?: string,
    _checksum?: string,
  ) => {
    let url: URL
    try {
      url = new URL(specifier)
    } catch {
      console.warn(`[deno-doc-wasm] Failed to parse specifier: ${specifier}`)
      return undefined
    }

    // Only handle http/https URLs
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      console.warn(`[deno-doc-wasm] Unsupported protocol ${url.protocol} for specifier: ${specifier}`)
      return undefined
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

    try {
      const response = await fetch(url.toString(), {
        redirect: 'follow',
        signal: controller.signal,
      })
      clearTimeout(timeoutId)

      if (response.status !== 200) {
        console.warn(`[deno-doc-wasm] Failed to fetch module ${specifier}: ${response.status} ${response.statusText}`)
        return undefined
      }

      const content = await response.text()
      const headers: Record<string, string> = {}
      for (const [key, value] of response.headers) {
        headers[key.toLowerCase()] = value
      }

      return {
        kind: 'module',
        specifier: response.url,
        headers,
        content,
      }
    } catch (error) {
      clearTimeout(timeoutId)
      console.warn(`[deno-doc-wasm] Failed to fetch module ${specifier}: ${error}`)
      return undefined
    }
  }
}

/**
 * Create a module resolver for @deno/doc.
 *
 * Handles resolving relative imports and esm.sh redirects.
 */
function createResolver(): (specifier: string, referrer: string) => string {
  return (specifier: string, referrer: string) => {
    // Handle relative imports
    if (specifier.startsWith('.') || specifier.startsWith('/')) {
      return new URL(specifier, referrer).toString()
    }

    // Handle bare specifiers - resolve through esm.sh
    if (!specifier.startsWith('http://') && !specifier.startsWith('https://')) {
      // Try to resolve bare specifier relative to esm.sh base
      const baseUrl = new URL(referrer)
      if (baseUrl.hostname === 'esm.sh') {
        return `https://esm.sh/${specifier}`
      }
    }

    return specifier
  }
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
export function doc(
  specifiers: string[],
  options: DocOptions = {},
): Promise<Record<string, Array<DocNode>>> {
  const docOptions: DocOptions = { ...options }
  if (!docOptions.load) {
    docOptions.load = createLoader()
  }
  if (!docOptions.resolve) {
    docOptions.resolve = createResolver()
  }
  return docBase(specifiers, docOptions)
}
