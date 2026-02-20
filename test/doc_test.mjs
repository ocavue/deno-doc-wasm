import { doc } from '../dist/index.js'

// TODO: remove this file
const colorsDoc = await doc(["https://deno.land/std/fmt/colors.ts"]);

console.log(colorsDoc)
