<template>
  <div class="sign-in-container">
    <div class="sign-in-form">
      <ElForm
        ref="formRef"
        :model="formValues"
        :rules="formRules"
      >
        <h1 class="sign-in-title">
          ElementPlus Admin
        </h1>
        <ElFormItem prop="username">
          <ElInput
            v-model.trim="formValues.username"
            placeholder="请输入用户名"
          />
        </ElFormItem>
        <ElFormItem prop="password">
          <ElInput
            @keyup.enter="handleSignIn"
            v-model.trim="formValues.password"
            type="new-password"
            placeholder="请输入密码"
          />
        </ElFormItem>
      </ElForm>
      <ElButton
        @click.stop="handleSignIn"
        class="sign-in-btn"
        type="primary"
        :loading="isLoading"
      >
        {{ i18n.t(`action.signIn`) }}
      </ElButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './style.scss'
import type { FormInstance, FormRules } from 'element-plus'
import { useEnhancer } from '@/enhancers'
import { useUserStore } from '@/store/user'

const { i18n, route, router } = useEnhancer()
const userStore = useUserStore()
const formRef = $ref<FormInstance>()
const formValues = reactive({
  username: ``,
  password: ``,
})
const formRules: FormRules = reactive({
  username: {
    required: true,
    message: `请填写用户名`,
    trigger: [`blur`, `change`],
  },
  password: {
    required: true,
    message: `请填写密码`,
    trigger: [`blur`, `change`],
  },
})
const redirect = $computed(() => route.query.redirect as string)
let isLoading = $ref(false)

const handleSignIn = async () => {
  try {
    await formRef.validate()
    isLoading = true
    userStore.setToken(`${formValues.username}_${formValues.password}`)
    router.push(redirect || `/`)
  } catch (err) {
    console.log(err)
  } finally {
    isLoading = false
  }
}
</script>
