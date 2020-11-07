<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <svg-icon name="language" />
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
import { localeKeys } from '@/i18n'

export default {
  computed: {
    ...mapGetters([
      'language',
    ]),
  },

  data () {
    return {
      localeKeys,
    }
  },

  methods: {
    handleSetLanguage (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      this.$message({
        message: this.$i18n.t('tip.languageSwitched'),
        type: 'success',
      })
    },
  },
}
</script>

<style lang="scss">
.international {
  .svg-icon-language {
    font-size: 20px;
    vertical-align: -5px;
    cursor: pointer;
  }
}
</style>
