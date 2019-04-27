<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <svg-icon
        class="international-icon"
        name="language"
      />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="locale in localeKeys"
        :key="locale"
        :disabled="language===locale"
        :command="locale"
      >
        {{ $t(`language.${locale}`) }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
import { localeKeys } from '@i18n'

export default {
  computed: {
    ...mapGetters([
      'language'
    ])
  },

  data () {
    return {
      localeKeys
    }
  },

  methods: {
    handleSetLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss">
.international-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px !important;
}
</style>
