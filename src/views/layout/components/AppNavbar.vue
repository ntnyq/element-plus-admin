<template>
  <div class="app-navbar clearfix">
    <a
      @click="$store.dispatch('toggleCollapse')"
      class="hamburger fl"
      href="javascript:;"
      role="button"
    >
      <svg-icon :name="isCollapse ? 'right' : 'hamburger'" />
    </a>
    <router-link
      to="/"
      class="brand fl"
    >
      Element Admin
    </router-link>

    <div class="operations fr">
      <el-dropdown
        @command="handleCommand"
        placement="bottom"
        trigger="click"
        class="drop-menu"
      >
        <span class="icon-user">
          <svg-icon name="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="command in commands"
            :command="command.name"
            :key="command.name"
          >
            {{ command.text }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <lang-select class="lang-select fr" />
    <div class="username fr">
      <span>Hi,{{ username }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LangSelect from '@/components/LangSelect'

export default {
  name: 'AppNavbar',

  components: { LangSelect },

  computed: {
    ...mapState(['isCollapse'])
  },

  data () {
    return {
      username: 'ntntq',
      commands: [
        { name: 'profile', text: '个人信息' },
        { name: 'password', text: '修改密码' },
        { name: 'logout', text: '退出系统' }
      ]
    }
  },

  methods: {
    handleCommand (command) {
      if (!command) return

      switch (command) {
        case 'logout':
          this.$message.success('退出系统成功')
          this.$router.push({ name: 'Login' })
          break

        default:
          this.$message.info(command)
          break
      }
    }
  }
}
</script>
