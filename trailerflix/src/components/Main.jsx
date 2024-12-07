import Card from './Card'
import useCard from '../hooks/useCard'

export default function Main() {

  const {peliculas, genero}  = useCard()

  return (
    <main>
      <article className="container loading">
        {
            genero.map((gen, index) =>(
              <>
                <article className="genero"key={index}>
                    <h2 key={index}>{gen}</h2>
                  </article>
                    {
                      peliculas.map(peli => (peli?.gen === gen && ( <Card key={peli?.id} id={peli?.id}/> )))
                    }
              </>
              ))
        }
            <div className="loader"></div>
        </article>
    </main>
  )
}
