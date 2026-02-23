import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h2 className="text-primary">homepage</h2>
      <Link to={"/film/2"}>
        <button>Vai al dettaglio</button>
      </Link>
    </>
  );
}
export default Homepage;
