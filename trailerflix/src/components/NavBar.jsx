import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from "react-router-dom";


export default function NavBar() {
    const { usuario, login, logout } = useContext(AuthContext) 
    const [inputUsuario, setInputUsuario] = useState('emilys')
    const [inputPassword, setInputPassword] = useState('emilyspass')
    const handleChangeUsuario = (event) => {
      setInputUsuario(event.target.value);
    };
  
    const handleChangePassword = (event) => {
      setInputPassword(event.target.value);
    };
  
    const handleLogin = (event) => {
      event.preventDefault()
      login(inputUsuario, inputPassword)
    }
    const handleLogout = () => {
      logout()
      setInputUsuario('')
      setInputPassword('') 
      navigate("/")
    }
    const navigate = useNavigate();

  return (
        <div className="login-container">

        {!usuario ? (
            <form id="loginForm">
                <input 
                type="text" 
                id="username" 
                placeholder="Usuario" 
                required
                value={inputUsuario}
                onChange={handleChangeUsuario}
                />
                <input 
                type="password" 
                id="password" 
                placeholder="Contraseña" 
                required
                value={inputPassword}
                onChange={handleChangePassword}
                />
                <button type="submit" onClick={handleLogin}>Ingresar</button>
            </form>
        ) : (
            <div id="userInfo">
                <span id="userNameDisplay">Bienvenido, {inputUsuario}</span>
                <button id="logoutBtn" onClick={handleLogout}>Cerrar sesión</button>
            </div>
        )}
        </div>
  )
}
