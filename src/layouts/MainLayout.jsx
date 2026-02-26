import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

//importo funzione context
import { useMain } from "../context/MainContext";

//importo loader componente da attivare se è vero
import Loader from "../components/Loader";

function MainLayout() {
  //definisco isloading
  const { isLoading } = useMain();

  return (
    <>
      <header className="bg-black position-fixed">
        <div className=" container py-3 d-flex justify-content-around align-items-center">
          <div className="col">
            <Link to="/">
              <img
                className="logo"
                src="src\assets\logo_cinescaffale.png"
                alt="Logo CineScaffale"
              />
            </Link>
          </div>
          <div className="col">
            <h1 className="text-light ">Tutto il cinema, a portata di click</h1>
          </div>
        </div>
      </header>
      <main className="container">
        <Outlet />
        {isLoading && <Loader />}
      </main>
    </>
  );
}
export default MainLayout;
