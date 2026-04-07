// @ts-check

import { defineESLintConfig } from '@ntnyq/eslint-config'

export default defineESLintConfig({
  oxfmt: true,
  svgo: true,
  depend: {
    allowed: ['axios'],
  },
})
