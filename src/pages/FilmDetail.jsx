import { Link } from "react-router-dom";

function FilmDetail() {
  return (
    <>
      <Link to={"/"}>
        <button className="btn btn-outline-primary">Torna alla homepage</button>
      </Link>

      <h3 className="text-danger">pagina di dettaglio film</h3>
    </>
  );
}
export default FilmDetail;
