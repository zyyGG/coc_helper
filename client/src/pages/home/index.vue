<template>
  <div>
    Home
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { VerifyLoginState } from "@utils/index"

onMounted(() => {
  // 检查是否保存了对应的session数据
  VerifyLoginState()
})
</script>
<style lang="css" scoped></style>