<template>
  <div class="sign-in-container">
    <div class="sign-in-form">
      <el-form
        ref="form"
        :model="formValues"
        :rules="formRules"
      >
        <h1 class="sitn-in-title">
          ElementPlus Admin
        </h1>
        <el-form-item prop="username">
          <el-input
            v-model.trim="formValues.username"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="formValues.password"
            type="new-password"
            placeholder="请输入密码"
            @keyup.enter="handleSignIn"
          />
        </el-form-item>
      </el-form>
      <el-button
        class="sign-in-btn"
        type="primary"
        :loading="isLoading"
        @click.stop="handleSignIn"
      >
        {{ i18n.t(`action.signIn`) }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  unref,
  computed,
  reactive,
  defineComponent,
} from 'vue'
import { useEnhancer } from '@/enhancers'

export default defineComponent({
  name: 'SignIn',

  setup () {
    const {
      i18n,
      route,
      router,
    } = useEnhancer()

    const form = ref(null)
    const isLoading = ref(false)

    const formValues = reactive({
      username: '',
      password: '',
    })
    const formRules = reactive({
      username: { required: true, message: '请填写用户名', trigger: ['blur', 'change'] },
      password: { required: true, message: '请填写密码', trigger: ['blur', 'change'] },
    })

    const redirect = computed(() => route.query && route.query.redirect)

    const handleSignIn = () => {
      const formValidator = unref(form)

      // @ts-expect-error TODO
      formValidator.validate((valid: boolean) => {
        if (!valid) return false
        isLoading.value = true
        router.push(redirect.value || '/')
        isLoading.value = false
      })
    }

    return {
      i18n,
      form, // Must return
      isLoading,
      formValues,
      formRules,
      handleSignIn,
    }
  },
})
</script>

<style lang="scss" scoped>
.sign-in-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .sign-in-form {
    position: relative;
    padding: 15px;
    width: 100%;
    max-width: 460px;
  }

  .sitn-in-title {
    position: relative;
    margin-bottom: 30px;
    text-align: center;
    font-size: 32px;
  }

  .sign-in-btn {
    position: relative;
    width: 100%;
    margin-top: 10px;
    letter-spacing: 10px;
    font-size: 20px;
  }
}
</style>
