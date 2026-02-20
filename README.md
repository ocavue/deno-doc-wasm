# deno-doc-wasm

[![NPM version](https://img.shields.io/npm/v/deno-doc-wasm?color=a1b858&label=)](https://www.npmjs.com/package/deno-doc-wasm)

Documentation generator for Node.js and Bun.

- **[`deno_doc`](https://github.com/denoland/deno_doc)** is a **Rust** crate that generates documentation for JavaScript and TypeScript modules.
- **[`@deno/doc`](https://github.com/denoland/deno_doc/tree/main/js)** is a compiled WebAssembly version of the Rust crate for **Deno**, published to [jsr.io](https://jsr.io).
- **[`deno-doc-wasm`](https://github)** (this project) is a re-distribution of the `jsr:@deno/doc` package so that it can work in **Node.js** and **Bun** as well, published to [npm](https://www.npmjs.com/package/deno-doc-wasm).

## Installation

```bash
npm install deno-doc-wasm
```

## Usage

The `doc()` function takes an array of string URL module specifiers and
potentially some options, and asynchronously resolves with a record of
documentation nodes keyed by the module URL, which represent the surface API of
the module.

A minimal example of using `doc()` and printing out some information about a
function:

```ts
import { doc } from 'deno-doc-wasm'

const records = await doc(['https://deno.land/std/fmt/colors.ts'])
const colorsDoc = records['https://deno.land/std/fmt/colors.ts']

for (const node of colorsDoc) {
  console.log(`name: ${node.name} kind: ${node.kind}`)
}
```

You can also generate documentation from local files using `file://` URLs:

```ts
import { pathToFileURL } from 'node:url'
import { doc } from 'deno-doc-wasm'

const url = pathToFileURL('./src/index.ts').toString()
const records = await doc([url])
const entries = records[url]

for (const node of entries) {
  console.log(`name: ${node.name} kind: ${node.kind}`)
}
```

## API reference

Please refer to the documentation for the original [`@deno/doc`](https://jsr.io/@deno/doc/doc) package.

## Credits

- This project would not be possible without the excellent work by the [Deno](https://deno.com/) team. The [`deno_doc`](https://github.com/denoland/deno_doc) crate is a well-designed and powerful documentation generator.
- Inspired by [@devdumpling](https://github.com/devdumpling)'s [work](https://github.com/npmx-dev/npmx.dev/pull/135) on integrating `@deno/doc` for [npmx.dev](https://npmx.dev).

## License

MIT
