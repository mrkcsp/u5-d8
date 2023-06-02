import React from "react";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const AddComment = ({ bookId, closeFunction, refreshFunction }) => {
  const [commentText, setCommentText] = useState("");
  const [rate, setRate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const sendComment = async () => {
    const myComment = {
      comment: commentText,
      rate: rate,
      elementId: bookId,
    };
    setLoading(true);
    try {
      const data = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWY1Y2IxNGE1MTAwMTQ2NjQwMDkiLCJpYXQiOjE2ODUyODY4NTUsImV4cCI6MTY4NjQ5NjQ1NX0.sjGUMcjItzFvPHIX88YW5fSLEeOpOpp4XTCeJQyY9gk",
          },
          method: "POST",
          body: JSON.stringify(myComment),
        }
      );
      const response = await data.json();
      console.log(response);
      setLoading(false);
    } catch (error) {
      if (error) setError("Errore nell'invio dei dati");
    }
  };
  const validate = () => {
    return commentText && rate;
  };
  const saveButtonEvent = async () => {
    if (validate()) {
      await sendComment();
      await refreshFunction();
      closeFunction();
    } else {
      setError("Campi incompleti");
    }
  };
  return (
    <div className="modal show" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 style={{ color: "black" }} className="modal-title">
              Aggiungi il tuo commento
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeFunction}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label
                style={{ color: "black" }}
                htmlFor="comment-text"
                className="form-label"
              >
                Testo del commento
              </label>
              <textarea
                className="form-control"
                id="comment-text"
                rows="5"
                cols="30"
                onChange={(e) => setCommentText(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label
                style={{ color: "black" }}
                htmlFor="comment-rating"
                className="form-label"
              >
                Valutazione
              </label>
              <input
                className="form-control"
                type="number"
                name="rate"
                min="1"
                max="5"
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {loading && !error && (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" />
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={closeFunction}
            >
              Chiudi
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={saveButtonEvent}
            >
              Salva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
