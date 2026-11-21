import axios from "axios"
import { API_SERVER_HOST } from "./host"

export const loginPost = async (email: string, pw: string) => {

  const header = { headers: { "Content-Type": "application/x-www-form-urlencoded" } }

  const form = new URLSearchParams()
  form.append('username', email)
  form.append('password', pw)

  const res = await axios.post(`${API_SERVER_HOST}/api/member/login`, form, header)

  await new Promise(resolve => setTimeout(resolve, 2000))

  if (res.data.error) {
    throw new Error(res.data.error)
  }

  return res.data
}
