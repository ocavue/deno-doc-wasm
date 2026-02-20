import {  it, assert } from 'vitest'

import { doc } from '../dist/index.js'

it('can parse from deno.land/std/fmt/colors.ts', async () => {
  const records = await doc(
    ["https://deno.land/std@0.104.0/fmt/colors.ts"],
  );
  const entries = records["https://deno.land/std@0.104.0/fmt/colors.ts"];
  assert.equal(entries.length, 49);
  const fnStripColor = entries.find((n) =>
    n.kind === "function" && n.name === "stripColor"
  );
  assert(fnStripColor, "unable to locate specific node");
  assert(fnStripColor.kind === "function");
  assert(fnStripColor.functionDef);
  assert.deepEqual(fnStripColor.functionDef.params, [{
    kind: "identifier",
    name: "string",
    optional: false,
    tsType: {
      repr: "string",
      kind: "keyword", 
      keyword: "string",
    },
  }]);
})


