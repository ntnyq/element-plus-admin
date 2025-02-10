/**
 * @file UnoCSS config
 */

import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { presetLegacyCompat } from '@unocss/preset-legacy-compat'
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],

  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
      collections: {
        admin: FileSystemIconLoader('./src/icons'),
      },
      // mode: 'mask',
      prefix: 'icon-',
      scale: 1.2,
      extraProperties: {
        color: 'inherit',
        // Avoid crushing of icons in crowded situations
        'min-width': '1.2em',
      },
    }),
    presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true,
    }),
  ],

  shortcuts: [
    {
      'flex-center': 'flex items-center justify-center',
      'flex-col-center': 'flex-center flex-col',
      'wh-full': 'w-full h-full',

      'z-overlay': 'z-9999',
    },
  ],

  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      primary_dark: 'var(--el-color-primary-light-5)',
    },
  },
})
