import "./App.css";

//importo librerie
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importo pages
import Homepage from "./pages/Homepage";
import FilmDetail from "./pages/FilmDetail";

//importo layout
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/film/:id" element={<FilmDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
