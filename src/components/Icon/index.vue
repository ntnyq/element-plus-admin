<template>
  <i :class="`hd-icon-${name}`"></i>
</template>

<script>
import './style'

export default {
  name: 'DzIcon',

  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
