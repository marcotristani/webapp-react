//importo link per collegamento a home
import { Link } from "react-router-dom";

//importo useparams per recuperare id da url page
import { useParams } from "react-router-dom";

function FilmDetail() {
  //recupero e scompongo oggetto risposta di useparams salvandomi l'id
  const { id } = useParams();

  return (
    <>
      <h1>titolo film</h1>
      <p>anno di rilascio</p>
      <img
        src="https://m.media-amazon.com/images/I/81ynV-Akv-L.jpg"
        alt="titolo film"
      />
      <p>direttore</p>
      <p>genere</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus
        libero vero aliquam itaque, cumque et debitis sit. Adipisci beatae
        voluptatem similique sapiente placeat nesciunt numquam error earum
        necessitatibus exercitationem?
      </p>
      <p>attori principali</p>
      <div className="container">
        <div className="card-reviews">
          <h3>nome</h3>
          <p>voto</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            aliquid unde tempore amet eligendi! Nam corporis vero nostrum
            debitis dicta! Animi excepturi veniam eius nulla aliquam itaque
            distinctio architecto quos.
          </p>
        </div>
        <div className="card-reviews">
          <h3>nome</h3>
          <p>voto</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            aliquid unde tempore amet eligendi! Nam corporis vero nostrum
            debitis dicta! Animi excepturi veniam eius nulla aliquam itaque
            distinctio architecto quos.
          </p>
        </div>
        <div className="card-reviews">
          <h3>nome</h3>
          <p>voto</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            aliquid unde tempore amet eligendi! Nam corporis vero nostrum
            debitis dicta! Animi excepturi veniam eius nulla aliquam itaque
            distinctio architecto quos.
          </p>
        </div>
      </div>
      <Link to={"/"}>
        <button className="btn btn-outline-primary">Torna alla homepage</button>
      </Link>
      <h3 className="text-danger">pagina di dettaglio film {id}</h3>
    </>
  );
}
export default FilmDetail;
