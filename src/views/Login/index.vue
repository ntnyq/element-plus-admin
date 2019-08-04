<template>
  <div class="login">
    <div class="login-form">
      <h1>Element Admin</h1>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <span class="form-item-icon">
            <svg-icon name="user" />
          </span>
          <el-input
            v-model.trim="loginForm.username"
            :placeholder="`请输入用户名`"
            icon-class="username"
            type="text"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="form-item-icon">
            <svg-icon name="password" />
          </span>
          <el-input
            @keyup.enter.native="handleLogin"
            v-model.trim="loginForm.password"
            :type="passwordType"
            :placeholder="`请输入密码`"
            name="password"
            auto-complete="on"
          />
          <svg-icon
            @click.native="showPwd"
            class="show-pwd"
            name="eye"
          />
        </el-form-item>
        <el-button
          @click.native.prevent="handleLogin"
          :loading="loading"
          type="primary"
          class="login-btn"
        >
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import './style'
import { isvalidUsername } from '@utils/validate'

export default {
  name: 'Login',

  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value && value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        username: 'admin',
        password: '1111111'
      },
      loginRules: {
        username: { required: true, trigger: 'blur', validator: validateUsername },
        password: { required: true, trigger: 'blur', validator: validatePassword }
      },
      passwordType: 'password',
      loading: false,
      redirect: undefined
    }
  },

  methods: {
    showPwd () {
      this.passwordType = this.passwordType === 'password' ? '' : 'password'
    },

    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$message.success(this.$i18n.t('tip.loginSuccess'))
          setTimeout(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }, 5e2)
        } else {
          this.$message.error('请认真填写登录信息！')
          return false
        }
      })
    }
  },

  watch: {
    $route: {
      handler (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.login {
  position: relative;

  .login-btn {
    width: 100%;
    margin: 30px 0;
    padding: 15px 20px;
    font-size: 28px;
  }
}
</style>
