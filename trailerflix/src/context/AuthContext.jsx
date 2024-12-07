import { createContext } from "react"

import useAuth from "../hooks/useAuth"

export const AuthContext = createContext()

export const AuthProvider = ( {children}) => {
    const {usuario, login, logout } = useAuth()

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
        {children}
    </AuthContext.Provider>
  )
}

