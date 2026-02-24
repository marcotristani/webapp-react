//importo link per collegamento a home
import { Link } from "react-router-dom";

//importo useparams per recuperare id da url page
import { useParams } from "react-router-dom";

//importo axios per eseguire chiamate verso backend
import axios from "axios";

//importo usestate e useeffect per poter elaborare i dati
import { useState, useEffect } from "react";

//importo componente per card review
import ReviewCard from "../components/ReviewCard";

const moviedetail = {
  id: 3,
  title: "Titanic",
  director: "James Cameron",
  genre: "Romance",
  release_year: 1997,
  abstract:
    "A romantic story set against the tragic sinking of the RMS Titanic.",
  image: "matrix.jpg",
  created_at: "2024-11-29T10:40:13.000Z",
  updated_at: "2025-05-22T10:55:27.000Z",
  reviews: [
    {
      id: 7,
      movie_id: 3,
      name: "Grace",
      vote: 5,
      text: "A heartbreaking love story.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 8,
      movie_id: 3,
      name: "Hank",
      vote: 4,
      text: "Beautiful visuals and a moving plot.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
    {
      id: 9,
      movie_id: 3,
      name: "Ivy",
      vote: 3,
      text: "A bit too melodramatic for my taste.",
      created_at: "2024-11-29T10:40:13.000Z",
      updated_at: "2024-11-29T10:40:13.000Z",
    },
  ],
  main_actors: ["Leonardo DiCaprio", "Kate Winslet"],
};

//definisco endpoint base per avere dettaglio film
const endpoint_base = "http://localhost:3000/api/movies/";

function MovieDetail() {
  //recupero e scompongo oggetto risposta di useparams salvandomi l'id
  const { id } = useParams();

  //definisco variabile di stato dove andare a salvare oggetto dettaglio film
  const [movieDetail, setMovieDetail] = useState([]);

  //definisco funzione per effettuare chiamata axios
  function fetchMovieDetail() {
    axios
      .get(endpoint_base + id)
      .then((res) => setMovieDetail(res.data))
      .catch((err) => console.log(err));
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
      <img src={`http://localhost:3000/api/movies/img/${image}`} alt={title} />
      <p>{director}</p>
      <p>{genre}</p>
      <p>{abstract}</p>
      <div>
        Main Actors :
        {/* <ul>
          {main_actors.map((actor, index) => (
            <li key={index}>{actor},</li>
          ))}
        </ul> */}
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
