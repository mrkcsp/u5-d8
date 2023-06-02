import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const SearchBar = ({ totalBooksList, setBooks }) => {
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = (event) => {
    setSearchWord(event.target.value);
  };

  useEffect(() => {
    const filterBooks = () => {
      if (searchWord !== "") {
        const filteredBooks = totalBooksList.filter((book) =>
          book.title.toLowerCase().includes(searchWord.toLowerCase())
        );
        setBooks(filteredBooks);
      } else {
        setBooks(totalBooksList);
      }
    };
    filterBooks();
  }, [searchWord, totalBooksList, setBooks]);

  return (
    <Container className="mt-3 fs-4">
      <Row sm={12}>
        <input
          style={{
            border: "2px solid",
            borderRadius: "5px",
            padding: "5px",
            marginLeft: "10px",
          }}
          type="text"
          placeholder="Che libro stai cercando..."
          value={searchWord}
          onChange={handleSearch}
        />
      </Row>
    </Container>
  );
};

export default SearchBar;
