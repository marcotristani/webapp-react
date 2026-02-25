import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Pagina non trovata</p>
      <Link to="/">
        <button>Torna alla Homepage</button>
      </Link>
    </div>
  );
}

export default NotFound;
