import React from "react";
import { Button, Modal } from "react-bootstrap";

const OrderModal = ({ modalClose, modalShow }): JSX.Element => {
  return (
    <>
      <Modal
        show={modalShow}
        onHide={modalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            ABC Groceries - Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderModal;
