import { h, VNodeTypes } from 'vue'

interface ISvgIconProps {
  name: string
}

export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  setup (props: ISvgIconProps): VNodeTypes {
    return () => h('svg', {
      class: ['svg-icon', `svg-icon-${props.name}`],
      'aria-hidden': true,
    }, h('use', {
      'xlink:href': `#icon-${props.name}`,
    }))
  },
}
