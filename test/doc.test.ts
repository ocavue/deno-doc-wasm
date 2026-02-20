import { expect, it } from 'vitest'

import { doc } from '../dist/index.js'

it('can parse from deno.land/std/fmt/colors.ts', async () => {

  const colorsDoc = await doc(["https://deno.land/std/fmt/colors.ts"]);

  expect(colorsDoc).toMatchInlineSnapshot()
})
