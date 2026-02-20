import { once } from "@ocavue/utils"
import { ResolverFactory } from "oxc-resolver"


function createOxcResolver() {
    return new ResolverFactory({
        "conditionNames": ["node", "import"],
        "mainFields": ["module", "main"],
        preferRelative: true,
    })
}

export const getOxcResolver = once(createOxcResolver)
