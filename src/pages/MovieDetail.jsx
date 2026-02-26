//importo link per collegamento a home
import { Link } from "react-router-dom";

//importo useparams per recuperare id da url page
import { useParams, useNavigate } from "react-router-dom";

//importo axios per eseguire chiamate verso backend
import axios from "axios";

//importo usestate e useeffect per poter elaborare i dati
import { useState, useEffect } from "react";

//importo usemain per loader in chiamata axios
import { useMain } from "../context/MainContext";

//importo componente per card review
import ReviewCard from "../components/ReviewCard";

//importo componente form
import ReviewForm from "../components/ReviewForm";

//definisco endpoint base per avere dettaglio film
const endpoint_base = "http://localhost:3000/api/movies/";

function MovieDetail() {
  //recupero e scompongo oggetto risposta di useparams salvandomi l'id
  const { id } = useParams();

  //definisco variabile di stato dove andare a salvare oggetto dettaglio film
  const [movieDetail, setMovieDetail] = useState([]);

  //definisco redirect per poter utilizzare usenavigate in caso di errore
  const redirect = useNavigate();

  // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
  const { setIsLoading } = useMain();

  //definisco funzione per effettuare chiamata axios
  function fetchMovieDetail() {
    //attivo loader
    setIsLoading(true);

    axios
      .get(endpoint_base + id)
      .then((res) => setMovieDetail(res.data))
      .catch((err) => {
        console.log(err);
        if ((err.status = 404)) redirect("/404_not_found");
        if ((err.status = 500)) redirect("/500_error_internal_server");
      })
      .finally(setIsLoading(false));
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
      <div className="row align-items-center mb-4">
        <div className="col-md-4">
          <img src={image} alt={title} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-8">
          <h1 className="display-5 fw-bold">{title}</h1>
          <p className="text-muted">
            {release_year} • {director} • {genre}
          </p>
          <h5 className="pt-3">Plot</h5>
          <p className="lead">{abstract}</p>
          <h5 className="pt-3">Main Actors</h5>
          <ul>
            {main_actors?.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-5">
        <h3 className="mb-3">Recensioni</h3>

        {renderReviewCards()}
      </div>
      <ReviewForm reloadReviews={fetchMovieDetail} />{" "}
      <Link to={"/"}>
        <button className="mt-3 btn btn-outline-primary">
          Torna alla homepage
        </button>
      </Link>
    </>
  );
}
export default MovieDetail;
