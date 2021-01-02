/**
 * @file Constants of storage
 * @module constants/storage
 * @author ntnyq <https://github.com/ntnyq>
 */

const { VUE_APP_BRAND_PREFIX = '' } = process.env

/**
 * Token storage key
 */
export const APP_TOKEN_KEY = `${VUE_APP_BRAND_PREFIX}TOKEN`

/**
 * Username storage key
 */
export const APP_USERNAME_KEY = `${VUE_APP_BRAND_PREFIX}USERNAME`

/**
 * Language storage key
 */
export const APP_LANGUAGE_KEY = `${VUE_APP_BRAND_PREFIX}LANGUAGE`

/**
 * Theme storage key
 */
export const APP_THEME_KEY = `${VUE_APP_BRAND_PREFIX}THEME`
