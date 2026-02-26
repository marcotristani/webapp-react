import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header className="bg-dark position-fixed">
        <div class=" container py-3 d-flex justify-content-around align-items-center">
          <div className="col">
            <Link to="/">
              <img
                className="logo"
                src="src/assets/logo_cinescaffale.png"
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
      </main>
    </>
  );
}
export default MainLayout;
