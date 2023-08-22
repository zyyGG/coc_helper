<template>
  <div class="flex flex-col items-center">
    <div class="flex gap-5 text-2xl">
      <div class="title-text" :class="{ 'opacity-30': !select }" @click="select = true">登录</div>
      <div class="title-text" :class="{ 'opacity-30': select }" @click="select = false">注册</div>
    </div>

    <div class="flex flex-col py-8">
      <input type="text" class="input-large" placeholder="账号/邮箱" v-model="userInfo.user_name" />
      <p v-show="false">Error msg</p>
      <input type="password" class="input-large" placeholder="密码" v-model="userPassword" />
      <p v-show="false">Error msg</p>
    </div>

    <div class="flex flex-col gap-5 items-center">
      <div class="flex gap-5">
        <button class="btn-primary" @click="handleClick">{{ select ? "登录" : "注册" }}</button>
      </div>
      <div>
        <a href="#" class="text-sm opacity-70">忘记密码请联系管理员</a>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, reactive, onMounted, computed } from "vue"
import apiLogin from "@/api/login"

import Message from "@/components/Message/index"
import { cryptionRsa, cryptionMd5 } from "@/utils/cryption"
import { useRouter } from "vue-router";

const router = useRouter()

const select = ref(true);
const userPassword = ref("")
const userInfo = reactive({
  user_name: "",
  password: computed({
    get: () => cryptionMd5(userPassword.value),
    set: (value: string) => {
      userPassword.value = value
    }
  }),
})

async function handleClick() {
  // 验证用户输入
  if (!verifyInfo) return

  if (!select) {
    try {
      const result = await apiLogin({
        info: cryptionRsa(JSON.stringify(userInfo))
      })
      if (result.code !== 200) {
        Message.error("登录失败")
      } else {
        Message.success("登录成功")
        router.push("/home")
      }
    } catch (err) {
      Message.error("登录失败")
    }
  } else {
    Message.warn("注册功能暂时未完成")
  }
}

// 输入的信息进行检测
function verifyInfo() {
  try {
    if (userInfo.user_name.length > 50) {
      Message.error("名称长度不能大于50个字符")
    }
  } catch (err) {
    console.log(err)
    Message.error("未知错误")
  }
}

</script>
<style lang="css" scoped>
.title-text {
  @apply cursor-pointer transition-opacity;
}

.input {
  @apply bg-deep-dark-400 border-none outline-none transition-all focus: scale-105 my-5;
}

.input-large {
  @apply input w-[24rem] h-10 px-3 py-1 rounded-xl;
}

.btn {
  @apply px-4 py-1 rounded-xl transition-all hover: scale-105;
}

.btn-primary {
  @apply btn bg-deep-dark-400;
}
</style>