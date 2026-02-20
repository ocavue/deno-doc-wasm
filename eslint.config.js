import { defineESLintConfig } from '@ocavue/eslint-config'
import { globalIgnores } from 'eslint/config'

export default defineESLintConfig({}, [globalIgnores(['./dist'])])
