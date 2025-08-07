// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'
import pluginOxLint from 'eslint-plugin-oxlint'

export default defineESLintConfig(
  {
    svgo: true,
    depend: {
      allowed: ['axios'],
    },
  },
  ...pluginOxLint.configs['flat/recommended'],
)
