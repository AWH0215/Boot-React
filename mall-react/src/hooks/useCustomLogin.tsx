import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router"
import { loginPostAsync, logout, save } from "../slices/loginSlice"
import type { AppDispatch, RootState } from "../store"
import { getCookie } from "../util/cookieUtil"

const useCustomLogin = () => {

  const dispatch = useDispatch<AppDispatch>()

  const loginState = useSelector((state: RootState) => state.loginSlice)

  const loginStatus = loginState.status

  const isLogin = loginState.status === 'fulfilled'

  const navigate = useNavigate()

  const doLogin = async (email: string, pw: string) => {
    dispatch(loginPostAsync({ email, pw }))
  }

  const doLogout = () => {
    dispatch(logout())
  }

  const moveToLogin = () => {
    navigate("/member/login")
  }

  const moveToLoginReturn = () => {
    return <Navigate replace to="/member/login" />
  }

  const moveToPath = (path: string) => {
    navigate({ pathname: path }, { replace: true })
  }

  useEffect(() => {
    if (!isLogin) {

      const member = getCookie("member")

      console.log("member from cookie ")
      console.log(member)

      if (member) {
        dispatch(save(member))
      }
    }
  }, [])

  return { loginState, loginStatus, isLogin, doLogin, doLogout, moveToLogin, moveToLoginReturn, moveToPath }
}

export default useCustomLogin
