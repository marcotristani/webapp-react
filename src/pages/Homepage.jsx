//importo axios per eseguire chiamate verso backend
import axios from "axios";

//importo usestate e useeffect per poter elaborare i dati
import { useState, useEffect } from "react";

//importo componente moviecard
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

import { useMain } from "../context/MainContext";

//salvo endpoint dove andare a effettuare chiamata
const endpoint = "http://localhost:3000/api/movies";

function Homepage() {
  //creo variabile di stato dove andare a salvare lista film
  const [listMovies, setListMovies] = useState([]);

  //imposto redirect
  const redirect = useNavigate();

  // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
  const { setIsLoading } = useMain();

  //creo funzione per effettuare chiamata axios
  const fetchMovies = () => {
    //attivo loader
    setIsLoading(true);

    axios
      .get(endpoint)
      .then((res) => setListMovies(res.data.movies))
      .catch((err) => {
        console.log(err);
        if ((err.status = 500)) redirect("/500_error_internal_server");
      })
      .finally(setIsLoading(false));
  };

  //effettuo chiamata axios verso backend per ottenere lista movies
  useEffect(fetchMovies, []);
  console.log(listMovies);

  //funzione per generare cards
  function renderCards() {
    return listMovies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  }

  return (
    <>
      <div className="container d-flex flex-wrap">{renderCards()}</div>
    </>
  );
}
export default Homepage;
