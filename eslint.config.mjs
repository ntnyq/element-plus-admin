// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'
import pluginOxLint from 'eslint-plugin-oxlint'

export default defineESLintConfig(
  {
    svgo: true,
    depend: {
      allowed: ['axios'],
    },
    vue: {
      overrides: {
        'vue/no-literals-in-template': 'off',
      },
      sfcBlocks: {
        blocks: {
          styles: false,
        },
      },
    },
  },
  ...pluginOxLint.configs['flat/recommended'],
)
