import { it, assert, expect } from 'vitest'

import { doc } from '../dist/index.js'

it('can parse from deno.land/std/fmt/colors.ts', async () => {
  const url = 'https://deno.land/std@0.104.0/fmt/colors.ts'
  const records = await doc([url])
  const entries = records[url]
  assert.equal(entries.length, 49)
  const fnStripColor = entries.find(
    (n) => n.kind === 'function' && n.name === 'stripColor',
  )
  assert(fnStripColor, 'unable to locate specific node')
  assert(fnStripColor.kind === 'function')
  assert(fnStripColor.functionDef)
  assert.deepEqual(fnStripColor.functionDef.params, [
    {
      kind: 'identifier',
      name: 'string',
      optional: false,
      tsType: {
        repr: 'string',
        kind: 'keyword',
        keyword: 'string',
      },
    },
  ])
})


it('can parse from unpkg.com', async () => {
  const url = 'https://unpkg.com/@ocavue/utils@1.5.0'
  const records = await doc([url])
  const entries = records[url]
  expect(entries.map(entry => ({
    name: entry.name,
    kind: entry.kind,
  }))).toMatchInlineSnapshot(`
    [
      {
        "kind": "variable",
        "name": "Counter",
      },
      {
        "kind": "variable",
        "name": "DefaultMap",
      },
      {
        "kind": "variable",
        "name": "DefaultWeakMap",
      },
      {
        "kind": "variable",
        "name": "WeakCounter",
      },
      {
        "kind": "function",
        "name": "formatBytes",
      },
      {
        "kind": "function",
        "name": "getDocument",
      },
      {
        "kind": "function",
        "name": "getDocumentElement",
      },
      {
        "kind": "function",
        "name": "getId",
      },
      {
        "kind": "function",
        "name": "getWindow",
      },
      {
        "kind": "function",
        "name": "isDeepEqual",
      },
      {
        "kind": "function",
        "name": "isDocument",
      },
      {
        "kind": "function",
        "name": "isDocumentFragment",
      },
      {
        "kind": "function",
        "name": "isElement",
      },
      {
        "kind": "function",
        "name": "isElementLike",
      },
      {
        "kind": "function",
        "name": "isHTMLElement",
      },
      {
        "kind": "function",
        "name": "isMap",
      },
      {
        "kind": "function",
        "name": "isMathMLElement",
      },
      {
        "kind": "function",
        "name": "isNodeLike",
      },
      {
        "kind": "function",
        "name": "isNotNullish",
      },
      {
        "kind": "function",
        "name": "isObject",
      },
      {
        "kind": "function",
        "name": "isSVGElement",
      },
      {
        "kind": "function",
        "name": "isSet",
      },
      {
        "kind": "function",
        "name": "isShadowRoot",
      },
      {
        "kind": "function",
        "name": "isTextNode",
      },
      {
        "kind": "function",
        "name": "isWindowLike",
      },
      {
        "kind": "function",
        "name": "mapGroupBy",
      },
      {
        "kind": "function",
        "name": "mapValues",
      },
      {
        "kind": "function",
        "name": "objectEntries",
      },
      {
        "kind": "function",
        "name": "objectGroupBy",
      },
      {
        "kind": "function",
        "name": "once",
      },
      {
        "kind": "function",
        "name": "sleep",
      },
      {
        "kind": "variable",
        "name": "supportsRegexLookbehind",
      },
    ]
  `)
})
