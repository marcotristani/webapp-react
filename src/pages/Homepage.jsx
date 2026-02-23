import FilmCard from "../components/FilmCard";

function Homepage() {
  return (
    <>
      <h2 className="text-primary">homepage</h2>
      <div className="container">
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </div>
    </>
  );
}
export default Homepage;
