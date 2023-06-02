import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmWindow = ({ question, noFunction, yesFunction }) => {
  return (
    <div className="modal show" style={{ display: "block" }}>
      <Modal.Dialog centered>
        <Modal.Body className="fs-4">
          <p>{question}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary btn-danger" onClick={noFunction}>
            No
          </Button>
          <Button variant="primary btn-success" onClick={yesFunction}>
            Sì
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ConfirmWindow;
