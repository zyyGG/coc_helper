<template>
  <div @click="handleclick">
    This is Login Page
    <div>
      Hello wolrd
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue"

import apiLogin from "@/api/login"

async function handleClick() {
  const result = await apiLogin({

  })
}

</script>
<style lang="css" scoped></style>