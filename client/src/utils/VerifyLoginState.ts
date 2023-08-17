import * as router from "vue-router"
// 检查是否存在登录记录
export default async function () {
  const sessionInfo = window.localStorage
  const result = sessionInfo.getItem("token")
  if (!result) {
    // useRouter().push("/login")
    await router.useRouter().push("/login")
    return undefined
  }
  return result
}

