import { once } from "@ocavue/utils"
import { ResolverFactory } from "oxc-resolver"


function createOxcResolver() {
    return new ResolverFactory({
        "conditionNames": ["types", "node", "import"],
        "mainFields": ["types", "module", "main"],
        preferRelative: true,
        tsconfig: "auto",
        extensions: [".ts", ".d.ts", ".mts", ".d.mts", ".cts", ".d.cts", ".js", ".mjs", ".cjs",
            ".js", ".json", ".node"
        ],
        extensionAlias: {
            ".js": [ ".d.ts", ".ts",],
            ".cjs": [".cts", ".d.cts", ".ts", ".d.ts"],
            ".mjs": [".mts", ".d.mts", ".ts", ".d.ts"],
            // "js": ["ts", "d.ts"],
            // "cjs": ["cts", "d.cts", "ts", "d.ts"],
            // "mjs": ["mts", "d.mts", "ts", "d.ts"],
        }
    })
}

export const getOxcResolver = once(createOxcResolver)
