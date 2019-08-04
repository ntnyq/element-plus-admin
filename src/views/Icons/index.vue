<template>
  <div class="icons-container">
    <h1>{{ $t('iconTitle') }}</h1>
    <div class="icons-wrapper">
      <div
        v-for="(icon, index) in icons"
        :key="index"
      >
        <el-tooltip
          :open-delay="100"
          placement="top"
        >
          <div slot="content">
            {{ generateIconCode(icon) }}
          </div>
          <div
            v-clipboard:copy="generateIconCode(icon)"
            v-clipboard:success="handleCopySuccess"
            class="icon-item"
          >
            <svg-icon :name="icon" />
            <span>{{ icon }}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import icons from './helper'

Vue.use(VueClipboard)

export default {
  name: 'Icons',

  data () {
    return {
      icons
    }
  },

  methods: {
    generateIconCode (symbol) {
      return `<svg-icon name="${symbol}" />`
    },

    handleCopySuccess () {
      this.$message.success('图标复制成功，快去使用吧！')
    }
  }
}
</script>

<style lang="scss">
.icons-container {
  position: relative;
  flex: 1 0;
  overflow-y: auto;

  h1 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 50px;
    text-align: center;
  }

  .icons-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 960px;
    margin: 0 auto;
  }

  .icon-item {
    width: 110px;
    height: 110px;
    margin: 20px;
    font-size: 30px;
    color: #333;
    text-align: center;
    cursor: pointer;

    span {
      display: block;
      margin-top: 10px;
      font-size: 20px;
    }
  }
}
</style>
