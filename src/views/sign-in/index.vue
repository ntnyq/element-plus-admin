<script lang="ts" setup>
import './style.scss'
import { useUserStore } from '@/store/user'
import { showSuccessTip } from '@/views/sign-in/utils'
import type { FormInstance, FormRules } from 'element-plus'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const isLoading = ref(false)
const userStore = useUserStore()
const formRef = ref<FormInstance>()
const formValues = reactive({
  username: '',
  password: '',
})
const formRules = shallowRef<FormRules>({
  username: {
    required: true,
    message: '请填写用户名',
    trigger: ['blur', 'change'],
  },
  password: {
    required: true,
    message: '请填写密码',
    trigger: ['blur', 'change'],
  },
})
const redirect = computed(() => route.query.redirect as string)

const handleSignIn = async () => {
  try {
    await formRef.value?.validate()
    isLoading.value = true

    userStore.setToken(`${formValues.username}_${formValues.password}`)
    showSuccessTip()
    router.push(redirect.value || '/')
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="sign-in-container">
    <div class="sign-in-form">
      <ElForm
        ref="formRef"
        :model="formValues"
        :rules="formRules"
      >
        <h1 class="sign-in-title">ElementPlus Admin</h1>
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
        :loading="isLoading"
        class="sign-in-btn"
        type="primary"
      >
        {{ t('action.signIn') }}
      </ElButton>
    </div>
  </div>
</template>
