import { useEffect, useState } from "react"

const useCard = () => {

    const generos = ['Ciencia Ficción', 'Drama', 'Suceso Real', 'Suspenso', 'Fantasía', 'Familia', 'Acción', 'Terror', 'Aventura'].sort()

    const [genero, setGenero] = useState(generos)
    const [peliculas, setPeliculas] = useState([])
  
    useEffect(() => {
      fetch('../src/datos/trailerflix.json')
        .then(response => response.json())
        .then(datos => { setPeliculas(datos) })
    }, [])
  
  return (
    {peliculas, genero}
    
  )
}
export default useCard