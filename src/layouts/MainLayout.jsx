import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>
        <h1 className="text-warning">Sono l'header</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default MainLayout;
