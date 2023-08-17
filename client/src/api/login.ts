import requst from "@/service/index"

export default async (data?: loginReq) => {
  return requst<loginReq, loginRes>({
    url: "/api/login",
    method: "post",
    data
  })
}

interface loginReq {
  user_name: string,
  password: string
}
interface loginRes {
  token: string
}

