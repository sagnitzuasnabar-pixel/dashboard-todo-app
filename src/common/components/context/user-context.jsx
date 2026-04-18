import { createContext, useContext } from "react"
import AvatarMeImage  from "../../../assets/avatarDash.png"
const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const user = {
    name: "Sagnit Zuasnabar",
    role: "admin",
    photo: AvatarMeImage
  }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext);
}