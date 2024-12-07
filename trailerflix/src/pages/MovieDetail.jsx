import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function MovieDetail() {
  const { usuario } = useContext(AuthContext);

  const [peliculas, setPeliculas] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`../src/datos/trailerflix.json`)
      .then((response) => response.json())
      .then((datos) => {
        setPeliculas(datos);
      })
      .catch((error) => console.error({ error }));
    // .catch(error => {
    //     console.error('Error al cargar las opciones de ciudades desde datos.json:', error);
    //     // Manejar el error, por ejemplo, mostrar un mensaje al usuario
    //     // Swal.fire({
    //     //     title: "Error!",
    //     //     text: "Error al cargar las opciones de ciudades desde datos.json",
    //     //     icon: "error"
    //     //   });
    // });
  }, []);

  const result = peliculas?.find((item) => item.id === parseInt(id));

  return (
    <>
      <header>
        <div className="title">
          <h1> Detalles de la Película</h1>
        </div>
        <NavBar />
      </header>
      {!usuario ? null : (
        // <Main />

        <main className="container">
          <div className="movie-details">
            <div className="movie-poster">
              <img src={`.${result?.poster}`} alt={result?.titulo} />
            </div>
            <div className="movie-info">
              <h2>{result?.titulo}</h2>
              <p>
                <strong>Resumen:</strong> {result?.resumen}
              </p>
              <iframe
                width="560"
                height="315"
                src={result?.trailer}
                frameborder="0"
                allowfullscreen
              ></iframe>
              <p>
                <strong>Reparto:</strong> {result?.reparto}
              </p>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
