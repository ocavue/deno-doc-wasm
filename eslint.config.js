import { defineESLintConfig } from '@ocavue/eslint-config'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineESLintConfig({}, [globalIgnores('./dist')])
