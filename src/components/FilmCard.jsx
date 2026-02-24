import { Link } from "react-router-dom";

function FilmCard() {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://m.media-amazon.com/images/I/81ynV-Akv-L.jpg"
        alt="titolo film"
      />
      <div className="card-body"></div>
      <h2 className="card-title">titolo film</h2>

      <p className="card-text">direttore</p>
      <p className="card-text">anno</p>

      <Link to={"/film/2"}>
        <button className="btn btn-outline-primary">Vai al dettaglio</button>
      </Link>
    </div>
  );
}
export default FilmCard;
