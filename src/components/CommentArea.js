import React from "react";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import NewCommentList from "./CommentList";
import "../styles/CommentArea.css";

const NewCommentArea = ({ bookId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWY1Y2IxNGE1MTAwMTQ2NjQwMDkiLCJpYXQiOjE2ODUyODY4NTUsImV4cCI6MTY4NjQ5NjQ1NX0.sjGUMcjItzFvPHIX88YW5fSLEeOpOpp4XTCeJQyY9gk",
          },
        }
      );
      const response = await data.json();
      //console.log(response);
      setComments(response);
      setLoading(false);
    } catch (error) {
      if (error) {
        setError("Errore nella ricezione dei dati");
      }
    }
  };
  useEffect(() => {
    if (bookId !== "") {
      getComments();
    }
  }, [bookId]);
  return (
    <div className="newCommentAreaContainer">
      {loading && !error && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      )}
      {!loading && !error && (
        <NewCommentList
          bookId={bookId}
          comments={comments}
          refreshFunction={getComments}
        />
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          <h3 className="text-danger">{error}</h3>
        </div>
      )}
    </div>
  );
};

export default NewCommentArea;
