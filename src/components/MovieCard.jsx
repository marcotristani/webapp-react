import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, director, image, genre, release_year } = movie;
  return (
    <div className="bg-primary card">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p className="card-text">{director}</p>
        <p className="card-text">{release_year}</p>
        <p className="card-text">{genre}</p>

        <Link to={`/movie/${id}`}>
          <button className="btn btn-outline-warning">Vai al dettaglio</button>
        </Link>
      </div>
    </div>
  );
}
export default MovieCard;
