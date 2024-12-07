import { useEffect, useState } from "react"

 const useAuth = () => {
   const [usuario, setUsuario] = useState(null)
   const [usuarios, setUsuarios] = useState(() => {
     // Restaurar del Local Storage
     const storeUsuario = window.localStorage.getItem('user')
     return (
        storeUsuario
        ? 
        console.log(
          setUsuario(JSON.parse(storeUsuario))
        ) 
        : null
      )
    })
    
    useEffect(() => {
      fetch('../src/datos/usuarios.json')
      .then(response => response.json())
      .then(datos => { setUsuarios(datos.users) })
    }, [])

    const login = (username, password) => {
      const resultado = usuarios.find((c) => c.username === username && c.password === password )
      setUsuario(resultado)
      // Guardar en el Local Storage
      window.localStorage.setItem('user', JSON.stringify(resultado))
    }
  
    const logout = () => {
      setUsuario(null)
      // Vaciar el Local Storage
      window.localStorage.removeItem('user')
    }
  
  return {usuario, login, logout}
}
export default useAuth