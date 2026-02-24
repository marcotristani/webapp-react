import { Link } from "react-router-dom";

function FilmCard({ film }) {
  const { id, title, director, genre, release_year } = film;
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://m.media-amazon.com/images/I/81ynV-Akv-L.jpg"
        alt="titolo film"
      />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p className="card-text">{director}</p>
        <p className="card-text">{release_year}</p>
        <p>{genre}</p>

        <Link to={"/film/2"}>
          <button className="btn btn-outline-primary">Vai al dettaglio</button>
        </Link>
      </div>
    </div>
  );
}
export default FilmCard;
