import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Card } from "react-bootstrap";
import Layout from "./Layout";

const BookDetails = () => {
  const { asin } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBookDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://epibooks.onrender.com/${asin}`);
      const data = await response.json();
      setDetails(data);
      setLoading(false);
    } catch (error) {
      setError("C'è stato un errore");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  return (
    <Layout>
      {loading && <Spinner animation="border" />}
      {!loading && error && <div>Errore!</div>}
      {!loading && !error && details && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <Card style={{ width: "23rem" }}>
            <Card.Img
              variant="top"
              src={details[0].img}
              className="object-fit-cover w-100 imageHeight"
            />
            <Card.Body>
              <Card.Title className="card-details">
                {details[0].title}
              </Card.Title>
              <Card.Text className="card-details">
                <b>ASIN:</b> {details[0].asin}
              </Card.Text>
              <Card.Text className="card-details">
                <b>Categoria:</b> {details[0].category}
              </Card.Text>
              <Card.Text className="card-details">
                <b>Prezzo:</b> {`${details[0].price} $`}
              </Card.Text>
              <Link to="/">
                <button style={{ width: "100%", borderRadius: "5px" }}>
                  Torna alla home page
                </button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      )}
    </Layout>
  );
};

export default BookDetails;
