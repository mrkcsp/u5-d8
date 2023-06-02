import React, { useState, useEffect } from "react";
import { Container, Col, Row, Spinner } from "react-bootstrap";
import LatestRelease from "./LatestRelease";
import NewCommentArea from "./CommentArea";
import SearchBar from "./SearchBar";
import "../styles/main.css";
import MyFooter from "./MyFooter";
import Navigation from "./MyNav";
import Welcome from "./Welcome";

function Main({ searchedBook }) {
  const [booksList, setBooksList] = useState([]);
  const [totalBooksList, setTotalBooksList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const data = await fetch("https://epibooks.onrender.com/");
        const response = await data.json();
        setBooksList(response);
        setTotalBooksList(response);
        setLoading(false);
      } catch (error) {
        setError("Errore nella ricezione dei dati");
        setLoading(false);
      }
    };

    if (searchedBook === "") {
      getBooks();
    } else {
      const filteredBooks = totalBooksList.filter((book) =>
        book.title.toLowerCase().includes(searchedBook.toLowerCase())
      );
      setBooksList(filteredBooks);
    }
  }, [searchedBook]);

  return (
    <>
      <Navigation />
      <SearchBar totalBooksList={totalBooksList} setBooks={setBooksList} />

      <Welcome />
      {loading && !error && <Spinner animation="border" />}
      {!loading && !error && (
        <>
          <Container className="mt-3 mb-3">
            <Row>
              <Col sm={6} lg={8} xl={9}>
                <LatestRelease
                  booksList={booksList}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Col>
              <Col sm={6} lg={4} xl={3}>
                {!selected ? (
                  <div className="commentsContainer"></div>
                ) : (
                  <NewCommentArea bookId={selected} />
                )}
              </Col>
            </Row>
          </Container>
        </>
      )}
      {error && <h2 className="text-danger">{error}</h2>}
      <MyFooter />
    </>
  );
}

export default Main;
