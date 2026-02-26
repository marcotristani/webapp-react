import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ReviewForm = ({ reloadReviews }) => {
  // creiamo stringa di ref all'endpoint del BE
  const endpoint = `http://localhost:3000/api/reviews/add`;

  //recupero id da parametro url
  const { id } = useParams();

  //definisco redirect per errore da server
  const redirect = useNavigate();

  // creo oggetto per valori di default form
  const initialFormData = {
    movie_id: id,
    name: "",
    text: "",
    vote: 0,
  };

  // var di stato per gestire oggetto dei valori input form
  const [formData, setFormData] = useState(initialFormData);

  // funzione di gestione dei dati del form
  function setFieldValue(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  // funzione per gestione della chiamata al submit del form
  const handleSubmit = (e) => {
    // inibiamo comportamento di base del form
    e.preventDefault();
    // gestisci la chiamata in post all'endpoint in axios
    axios
      .post(endpoint, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        // svuota campi form (e var di stato)
        setFormData(initialFormData);
        // ri-esegui funzione di chiamata su page padre
        reloadReviews();
      })
      .catch((err) => {
        console.log(err);
        if ((err.status = 500)) redirect("/500_error_internal_server");
      });
  };

  return (
    <div className="card-form  p-3 border border-3 rounded-2">
      <header className="card-header p-2">
        <h5>Nuova Recensione</h5>
      </header>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>
          <div className="form-group">
            <label>Recensione</label>
            <textarea
              className="form-control"
              name="text"
              value={formData.text}
              onChange={setFieldValue}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Voto</label>
            <input
              type="number"
              name="vote"
              min="1"
              max="5"
              className="form-control"
              value={formData.vote}
              onChange={setFieldValue}
            />
          </div>
          <div className="d-flex justify-content-end pt-3">
            <button type="submit" className="btn btn-primary">
              Invia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
