import { Link } from "react-router-dom";

function FilmCard() {
  return (
    <div className="card">
      <h2>titolo film</h2>

      <p>direttore</p>
      <p>anno</p>
      <img
        src="https://m.media-amazon.com/images/I/81ynV-Akv-L.jpg"
        alt="titolo film"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius
        aspernatur corrupti ipsa aliquid amet ipsum, quasi voluptates doloribus,
        hic distinctio reiciendis, autem ab blanditiis nemo quidem tempore
        quisquam voluptatem!
      </p>
      <Link to={"/film/2"}>
        <button className="btn btn-outline-primary">Vai al dettaglio</button>
      </Link>
    </div>
  );
}
export default FilmCard;
