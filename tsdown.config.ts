import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts', 'src/re-export.ts'],
  format: ['esm'],
  dts: { build: true },
  fixedExtension: false,
  sourcemap: false,
  inlineOnly: [
    '@jsr/deno__graph',
    '@jsr/deno__doc',
    '@jsr/deno__cache-dir',
    '@jsr/std__internal',
    '@jsr/std__path',
    '@jsr/std__fs',
    '@jsr/std__io',
    '@jsr/std__bytes',
    '@jsr/std__fmt',
  ],
  copy: [
    {
      from: 'node_modules/@deno/doc/deno_doc_wasm_bg.wasm',
      to: 'dist/',
    },
  ],
})
