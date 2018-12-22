import Icon from './Icon'

const components = [ Icon ]

const install = Vue => {
  if (install.installed) {
    return
  }

  components.map(component => {
    Vue.component(component.name, component)
  })
}

const component = {
  install,
  Icon
}

export default component
