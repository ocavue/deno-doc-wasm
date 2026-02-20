# deno-doc-wasm

[![NPM version](https://img.shields.io/npm/v/deno-doc-wasm?color=a1b858&label=)](https://www.npmjs.com/package/deno-doc-wasm)

A re-distribution of [`jsr:@deno/doc`](https://jsr.io/@deno/doc) for Node.js and Bun.

- [`deno_doc`](https://github.com/denoland/deno_doc) is a Rust crate that generates documentation for JavaScript and TypeScript modules. 
- [`jsr:@deno/doc`](https://jsr.io/@deno/doc) is a compiled WebAssembly version of the Rust crate, but it only works in Deno. 
- This package is re-distributing the `jsr:@deno/doc` package so that it can work in **Node.js** and **Bun** as well.

## Installation

```bash
npm install deno-doc-wasm
```

## Usage

### Generate documentation nodes

```ts
import { doc } from "@deno/doc";

const records = await doc(["https://deno.land/std/fmt/colors.ts"]);
const colorsDoc = records["https://deno.land/std/fmt/colors.ts"];

for (const node of colorsDoc) {
  console.log(`name: ${node.name} kind: ${node.kind}`);
}
```

### Generate HTML documentation

```ts
import { generateHtml } from 'deno-doc-wasm'

const html = await generateHtml(/* ... */)
```

## API reference

Please refer to the documentation for the original [`jsr:@deno/doc`](https://jsr.io/@deno/doc/doc) package.

