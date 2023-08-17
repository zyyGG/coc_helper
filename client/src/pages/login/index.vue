<template>
  <div class="flex flex-col items-center">
    <div class="flex gap-5 text-2xl">
      <div class="title-text" :class="{ 'opacity-30': !select }" @click="select = true">登录</div>
      <div class="title-text" :class="{ 'opacity-30': select }" @click="select = false">注册</div>
    </div>

    <div class="flex flex-col py-8">
      <input type="text" class="input-large" placeholder="账号/邮箱" v-model="userInfo.user_name" />
      <p v-show="false">Error msg</p>
      <input type="password" class="input-large" placeholder="密码" v-model="userInfo.password" />
      <p v-show="false">Error msg</p>
    </div>

    <div class="flex flex-col gap-5 items-center">
      <div class="flex gap-5">
        <button class="btn-primary" @click="handleClick">登录</button>
      </div>
      <div>
        <a href="#" class="text-sm opacity-70">忘记密码请联系管理员</a>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue"
import apiLogin from "@/api/login"

import Message from "@/components/Message/index"

const select = ref(true);
const userInfo = reactive({
  user_name:"",
  password:"",
})

async function handleClick(){
  Message.warn("成功assdada")
  if(!verifyInfo) return
  try{
    const result = await apiLogin({
      ...userInfo
    }) 
  }catch(err){
    
  }
  
}

function verifyInfo(){

}

</script>
<style lang="css" scoped>
.title-text {
  @apply cursor-pointer transition-opacity;
}

.input {
  @apply bg-deep-dark-400 border-none outline-none transition-all focus:scale-105 my-5;
}

.input-large {
  @apply input w-[24rem] h-10 px-3 py-1 rounded-xl;
}

.btn {
  @apply px-4 py-1 rounded-xl transition-all hover:scale-105;
}

.btn-primary {
  @apply btn bg-deep-dark-400;
}
</style>