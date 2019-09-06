<template>
  <div class="test">
    <h1>Test</h1>
    <p
      :style="`color: ${primaryColor};`"
      class="test-text"
    >
      I' in color
      <code>
        {{ primaryColor }}
      </code>
      and export from scss
    </p>
  </div>
</template>

<script>
import { primaryColor } from '@styles/core/_variables'

export default {
  name: 'Test',

  data () {
    return {
      primaryColor
    }
  }
}
</script>

<style lang="scss">
.test {
  padding: 20px;
  background-color: #fff;

  h1 {
    margin-bottom: 20px;
  }

  &-text {
    font-size: 24px;
  }
}
</style>
