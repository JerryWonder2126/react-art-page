import { useDashboardContext } from "../../../contexts/DashboardContext"
import Login from "./Login/Login"

const Auth = ({children}) => {
  const {authState} = useDashboardContext()
  return (
    <>
      {
        authState ? children : <Login />
      }
    </>
  )
}

export default Auth