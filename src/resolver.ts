import { once } from "@ocavue/utils"
import { ResolverFactory } from "oxc-resolver"


function createOxcResolver() {
    return new ResolverFactory({
        "conditionNames": ["types", "node", "import"],
        "mainFields": ["types", "module", "main"],
        preferRelative: true,
    })
}

export const getOxcResolver = once(createOxcResolver)
