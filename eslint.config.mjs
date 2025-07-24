// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'
import pluginOxLint from 'eslint-plugin-oxlint'

export default defineESLintConfig(
  {
    svgo: true,
  },
  // @ts-expect-error types not matching
  ...pluginOxLint.configs['flat/recommended'],
)
