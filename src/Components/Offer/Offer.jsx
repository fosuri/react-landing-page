import React, { useState } from "react";
import { Container, Button, Modal, Form } from "react-bootstrap";
import "./Offer.css";
import "../Components.css";
import images from "../../assets/Data/offer.json";

export default function Offer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    event.preventDefault(); 
    setShow(true);
  };
  return (
    <>
      <Container
        className="offer"
        style={{
          backgroundColor: "greenyellow",
        }}
      >
        <h2>
          <span class="red-text">KUUM </span>PAKKUMINE
        </h2>

        <Container className="offer-content">
          <Container className="offer-info">
            <h3>KEENIA</h3>
            <p className="offer-description">
              Suunduge seikluste ja imelise looduse maailma meie
              ekskursioonireisiga Keeniasse! Alates hämmastavatest savannidest
              ja iidsetest hõimudest kuni piiramatute India ookeani randadeni —
              teid ootab unustamatu reis, mis on täis erksaid elamusi.
            </p>

            <Container>
              <p style={{ color: "#1d1d1d", fontWeight: "bold" }}>
                Rühm: KUNI 12 inimest
              </p>
              <p style={{ color: "#1d1d1d", fontWeight: "bold" }}>
                Reisi aeg: 22. - 29. MAI
              </p>
            </Container>

            <p style={{ marginBottom: "0px" }}>
              <Button
                className="fos-button"
                style={{ width: "100%", padding: "13px 0px" }}
              >
                MIKS MEIE?
              </Button>
            </p>
          </Container>

          <Container className="offer-image-slider">
            <Container className="slider-items">
              {images.map((item) => (
                <img
                  src={require(`../../assets/images/${item.image}`)}
                  alt={item.alt}
                />
              ))}
            </Container>
          </Container>
        </Container>
        <a className="fos-link arimo" onClick={handleShow} href="/">
          Kas soovite saada uudiskirju teiste pakkumiste kohta?
        </a>
      </Container>

      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header
          closeButton
          style={{ border: "0", outline: "0" }}
        ></Modal.Header>
        <Modal.Body className="text-center">
          <Form>
            <Form.Group>
              <Form.Label className="arimo fos-ppw-label">
                Kas soovite saada uudiskirju teiste pakkumiste kohta?
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Sisestage e-posti aadress"
                className="montserrat fos-ppw-input me-auto ms-auto"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ border: "0", outline: "0" }}>
          <Button
            className="fos-button me-auto ms-auto"
            id="fos-ppw-button"
            onClick={handleClose}
          >
            TELLIMA
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
