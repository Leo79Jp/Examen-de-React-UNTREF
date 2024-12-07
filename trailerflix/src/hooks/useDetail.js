import { useEffect, useState } from "react"

const useDetail = () => {

    const [peliculas, setPeliculas] = useState([])
  
    useEffect(() => {
      fetch('../src/datos/trailerflix.json')
        .then(response => response.json())
        .then(datos => { setPeliculas(datos) })
    }, [])
  
  return (
    {peliculas}
    
  )
}
export default useDetail