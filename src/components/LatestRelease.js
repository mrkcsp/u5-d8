import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleCard from "./SingleCard";

const LatestRelease = ({ booksList, selected, setSelected }) => {
  return (
    <Container>
      <Row className="g-2">
        {booksList.map((book) => (
          <Col key={book.asin} sm={12} lg={6} xl={4}>
            <SingleCard
              asin={book.asin}
              title={book.title}
              img={book.img}
              price={book.price}
              category={book.category}
              selected={selected}
              setSelected={setSelected}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestRelease;
