<template>
  <div class="home">
    <h1>Home</h1>
    <div class="home-demo">
      <h2>Filter示例</h2>
      <p>
        {{ currentTime | formatTime }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
      currentTime: Date.now(),
      timer: null,
    }
  },

  beforeDestroy () {
    this.timer && clearInterval(this.timer)
  },

  mounted () {
    this.timer = setInterval(() => {
      this.currentTime = Date.now()
    }, 1e3)
  },
}
</script>

<style lang="scss">
.home-demo {
  position: relative;
  padding: 30px 0;
  font-size: 18px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    font-weight: 500;
  }
}
</style>
