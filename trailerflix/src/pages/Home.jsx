import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Main from '../components/Main'
import NavBar from '../components/NavBar'
 
export default function Home() {
  const { usuario } = useContext(AuthContext) 
  return (
    <div className="black-background">
      <header>
        <div className="title">
            <h1 className="red-text logo-title">TRAILERFLIX</h1>
        </div>
      <NavBar />
    </header>
    {!usuario ? (null) : (<Main />)}

    </div>
  )
}
