import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function ContactUs({ show, onHide }) {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [mail, setMail] = useState("");
  const [motivo, setMotivo] = useState("");

  const handleSubmit = () => {
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Compila il form di contatto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNome">
            <Form.Label>
              {" "}
              <b>Nome</b>{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCognome">
            <Form.Label>
              <b>Cognome</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo cognome"
              value={cognome}
              onChange={(event) => setCognome(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMail">
            <Form.Label>
              <b>Indirizzo e-mail</b>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci la tua email"
              value={mail}
              onChange={(event) => setMail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMotivo">
            <Form.Label>
              {" "}
              <b>Come possiamo aiutarti:</b>{" "}
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={motivo}
              onChange={(event) => setMotivo(event.target.value)}
            />
          </Form.Group>
          <Button className="m-1" variant="success" type="submit">
            Invia
          </Button>
          <Button variant="danger" onClick={onHide}>
            Chiudi
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ContactUs;
