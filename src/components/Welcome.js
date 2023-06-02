import React from "react";
import { Container, Carousel } from "react-bootstrap";
import data from "../data/romance.json";
import "../styles/Welcome.css";

function Welcome() {
  return (
    <div className={`d-flex justify-content-center align-items-center vh-25`}>
      <Container className="d-flex flex-column justify-content-center">
        <h2 className="card-details my-2">
          Benvenuto, la piattaforma online per una lettura mistica di ebook.
        </h2>
        <Carousel className="mx-auto my-2 w-100 h-50 d-flex flex-column justify-content-center">
          {[6, 2, 4].map((index) => (
            <Carousel.Item key={index}>
              <div className="d-flex">
                <div className="w-50">
                  <img
                    className="w-100"
                    src={data[index].img}
                    alt="Prima metà"
                  />
                </div>
                <div className="w-50">
                  <img
                    className="w-100"
                    src={data[index + 1].img}
                    alt="Seconda metà"
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default Welcome;
