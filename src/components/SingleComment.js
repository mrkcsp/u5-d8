import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import RatingSystem from "./RatingSystem";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ConfirmWindow from "./ConfirmWindow";

const SingleComment = ({ comment, refreshFunction, title }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const deleteComment = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWY1Y2IxNGE1MTAwMTQ2NjQwMDkiLCJpYXQiOjE2ODUyODY4NTUsImV4cCI6MTY4NjQ5NjQ1NX0.sjGUMcjItzFvPHIX88YW5fSLEeOpOpp4XTCeJQyY9gk",
          },
          method: "DELETE",
        }
      );
      await data.json();
      setLoading(false);
    } catch (error) {
      if (error) setError("Errore nella cancellazione del commento");
    }
  };
  const deleteFunction = async () => {
    await deleteComment();
    await refreshFunction();
    closeConfirm();
  };
  const openConfirmWindow = () => {
    setShowConfirm(true);
  };
  const closeConfirm = () => {
    setShowConfirm(false);
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div>
          {" "}
          <b>Commento:</b> {comment.comment}
        </div>
        <br></br>
        <div>
          <Button
            variant="primary btn-danger"
            size="sm"
            onClick={openConfirmWindow}
          >
            Cancella
          </Button>
        </div>
      </div>
      <RatingSystem stars={comment.rate} />
      {loading && !error && <Spinner animation="border" />}
      {error && (
        <div>
          <h5 className="text-danger">{error}</h5>
        </div>
      )}
      {showConfirm && (
        <ConfirmWindow
          question="Sicuro di eliminare il commento ?"
          noFunction={closeConfirm}
          yesFunction={deleteFunction}
        />
      )}
    </ListGroup.Item>
  );
};

export default SingleComment;
