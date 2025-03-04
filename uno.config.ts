/**
 * @file UnoCSS config
 */

import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { presetLegacyCompat } from '@unocss/preset-legacy-compat'
import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],

  presets: [
    presetWind4(),
    presetIcons({
      autoInstall: true,
      // mode: 'mask',
      prefix: 'icon-',
      scale: 1.2,
      collections: {
        admin: FileSystemIconLoader('./src/icons'),
      },
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

      // @pg
      'border-base': 'border-#050505:6',

      // @pg
      'z-navbar': 'z-1000',
      'z-overlay': 'z-9999',
      'z-sidebar': 'z-1001',
      'z-sidebar-plus': 'z-1002',
    },
  ],

  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      primary_dark: 'var(--el-color-primary-light-5)',
    },
  },
})
