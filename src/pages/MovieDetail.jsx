//importo link per collegamento a home
import { Link } from "react-router-dom";

//importo useparams per recuperare id da url page
import { useParams, useNavigate } from "react-router-dom";

//importo axios per eseguire chiamate verso backend
import axios from "axios";

//importo usestate e useeffect per poter elaborare i dati
import { useState, useEffect } from "react";

//importo componente per card review
import ReviewCard from "../components/ReviewCard";

//definisco endpoint base per avere dettaglio film
const endpoint_base = "http://localhost:3000/api/movies/";

function MovieDetail() {
  //recupero e scompongo oggetto risposta di useparams salvandomi l'id
  const { id } = useParams();

  //definisco variabile di stato dove andare a salvare oggetto dettaglio film
  const [movieDetail, setMovieDetail] = useState([]);

  //definisco redirect per poter utilizzare usenavigate in caso di errore
  const redirect = useNavigate();

  //definisco funzione per effettuare chiamata axios
  function fetchMovieDetail() {
    axios
      .get(endpoint_base + id)
      .then((res) => setMovieDetail(res.data))
      .catch((err) => {
        console.log(err);
        if ((err.status = 404)) redirect("/404_not_found");
        if ((err.status = 500)) redirect("/500_error_internal_server");
      });
  }

  //effettuo chiamata axios
  useEffect(fetchMovieDetail, []);

  //destrutturo oggetto moviedetail
  const {
    title,
    director,
    genre,
    release_year,
    abstract,
    image,
    reviews,
    main_actors,
  } = movieDetail;

  function renderReviewCards() {
    return reviews?.map((review) => {
      return <ReviewCard key={review.id} review={review} />;
    });
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{release_year}</p>
      <img src={image} alt={title} />
      <p>{director}</p>
      <p>{genre}</p>
      <p>{abstract}</p>
      <div>
        Main Actors :
        <ul>
          {main_actors?.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </div>
      <div className="container">
        <h1>Reviews:</h1>
        {renderReviewCards()}
      </div>
      <Link to={"/"}>
        <button className="btn btn-outline-primary">Torna alla homepage</button>
      </Link>
      <h3 className="text-danger">pagina di dettaglio film {id}</h3>
    </>
  );
}
export default MovieDetail;
