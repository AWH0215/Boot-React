import type { ReactNode } from "react"
import useCustomLogin from "../../hooks/useCustomLogin"
import { getCookie } from "../../util/cookieUtil"

function AuthComponent({ children }: { children: ReactNode }) {

  const { isLogin, moveToLoginReturn } = useCustomLogin()

  if (!isLogin && !getCookie("member")) {
    return moveToLoginReturn()
  }

  return (
    <>
      {children}
    </>
  )
}

export default AuthComponent
