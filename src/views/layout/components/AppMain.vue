<template>
  <div class="app-main">
    <transition
      name="el-zoom-in-center"
      mode="out-in"
    >
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
}
</script>
