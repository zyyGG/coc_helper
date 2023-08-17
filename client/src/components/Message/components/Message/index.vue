<template>
  <div ref="MessageBox" class="base" :class="props.type">
    {{ props.message }}
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, render } from "vue"

interface Props {
  type: "success" | "error" | "msg",
  message: string,
  show: boolean,
  parent: HTMLBodyElement
}

const props = withDefaults(defineProps<Props>(), {})

const MessageBox = ref<HTMLDivElement>()


onMounted(async () => {

  MessageBox?.value?.animate(
    [
      { transform: "translate(-50%,-100px)" },
      { transform: "translate(-50%,20px)" }
    ],
    {
      duration: 500,
      easing: "ease-in-out",
      fill: "forwards"
    }
  ).finished.then(() => {
    setTimeout(() => {
      uninstall()
    }, 1000);
  })
  MessageBox.value?.addEventListener("click", uninstall)
})

function uninstall() {
  MessageBox.value?.animate(
    [
      { transform: "translate(-50%,-100px)" }
    ],
    {
      duration: 500,
      easing: "ease-in-out",
      fill: "forwards"
    }
  ).finished.then(() => {
    // MessageBox.value?.remove()
    render(null, props.parent)
  })
}
</script>
<style lang="css" scoped>
.base {
  @apply absolute top-0 left-1/2 rounded-xl px-5 py-2;
}

.success {
  @apply text-green-400 bg-green-200 bg-opacity-30;
}

.error{
  @apply text-red-400 bg-red-200 bg-opacity-30;
}

.warn{
  @apply text-yellow-400 bg-yellow-200 bg-opacity-30;
}
</style>