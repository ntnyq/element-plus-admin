<script>
export default {
  name: 'MenuItem',

  functional: true,

  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  render (h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      vnodes.push(<svg-icon name={(icon)} class="menu-item-icon" />)
    }

    if (title) {
      vnodes.push(<span class="menu-item-text" slot='title'>{title}</span>)
    }

    return vnodes
  }
}
</script>
