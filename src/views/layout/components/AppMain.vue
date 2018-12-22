<template>
  <div class="app-main">
    <transition name="el-zoom-in-center"
      mode="out-in">
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',

  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>
