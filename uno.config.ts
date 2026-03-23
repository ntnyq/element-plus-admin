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
  presets: [
    presetIcons({
      autoInstall: true,
      collections: {
        admin: FileSystemIconLoader('./src/icons'),
      },
      extraProperties: {
        color: 'inherit',
        // Avoid crushing of icons in crowded situations
        'min-width': '1.2em',
      },
      prefix: 'icon-',
      scale: 1.2,
    }),
    presetWind4(),
    presetLegacyCompat({
      commaStyleColorFunction: true,
      legacyColorSpace: true,
    }),
  ],

  shortcuts: [
    {
      'border-base': 'border-gray-100 dark:border-gray-600',
      'flex-center': 'flex items-center justify-center',
      'flex-col-center': 'flex-center flex-col',
      'wh-full': 'w-full h-full',
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

  transformers: [transformerDirectives(), transformerVariantGroup()],
})
