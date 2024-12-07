import { useNavigate } from "react-router-dom";
import useCard from "../hooks/useCard";

export default function Card({id}) {
    const {peliculas}  = useCard()
    const navigate = useNavigate()

    const result = peliculas?.find(item => item.id === id)
    return (

            <div className="card" key={result?.id} onClick={() => navigate(`movie/${result?.id}`)}>
                        <div className="card-picture">
                            <img src={result?.poster} alt={result?.titulo} title={result?.titulo} />
                        </div>
                        <div className="card-bottom">
                            <p className="card-bottom-title">{result?.titulo}</p>
                            <p>{result?.categoria}</p>
                        </div>
            </div>
  )
}
