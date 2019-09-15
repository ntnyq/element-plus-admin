import Vue from 'vue'
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
  Select,
  Menu,
  MenuItem,
  MenuItemGroup,
  Message,
  Notification,
  Submenu,
  Form,
  FormItem,
  Tooltip,
} from 'element-ui'

Vue.prototype.$ELEMENT = { size: 'medium', zIndex: 9999 }

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Select)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tooltip)

Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
