/**
 * @file Event Emitter
 */

import mitt from 'mitt'

type Events = {} & Record<string, unknown>

export const emitter = mitt<Events>()
