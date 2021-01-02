/**
 * @file Global components
 * @module components/index
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { App } from 'vue'
import SvgIcon from './SvgIcon'
import Screenfull from './Screenfull.vue'

const components = [
  SvgIcon,
  Screenfull,
]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default install
