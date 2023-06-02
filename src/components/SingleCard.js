import Card from "react-bootstrap/Card";
import "../styles/myCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SingleCard = ({
  asin,
  title,
  img,
  price,
  category,
  selected,
  setSelected,
}) => {
  const [OpenModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!OpenModal);
  };
  const selectBook = () => {
    setSelected(asin);
    toggleModal();
  };

  const openToggle = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Card
        className={`${
          selected === asin ? "border border-danger shadow" : null
        }`}
        key={asin}
        style={{ width: "18rem" }}
        onClick={selectBook}
      >
        <Card.Img className="object-fit-cover w-100 imageHeight" src={img} />
        <Card.Body>
          <Card.Title className="card-details">{title}</Card.Title>
          <Card.Text className="card-details">
            <b>ASIN:</b> {asin}
          </Card.Text>
          <Card.Text className="card-details">
            <b>Categoria:</b> {category}
          </Card.Text>
          <Card.Text className="card-details">
            <b>Prezzo: </b>
            {`${price} $`}
          </Card.Text>
          <Link to={`/book/${asin}`}>
            <button style={{ width: "100%", borderRadius: "5px" }}>
              Dettagli
            </button>
          </Link>
          <button
            style={{ width: "100%", borderRadius: "5px", marginTop: "10px" }}
            onClick={openToggle}
          >
            Vedi i commenti
          </button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleCard;
