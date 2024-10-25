import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../Components.css";
import "./WhySection.css";
import why from "../../assets/Data/why.json";

export default class WhySection extends Component {
  render() {
    return (
      <>
        <Container
          className="why-section"
          style={{
            backgroundColor: "greenyellow",
          }}
        >
          <h2 className="fos-why-h2">
            <span className="red-text">MIKS </span>TULLA MEIEGA?
          </h2>

          <Container>
            {why.map((item, index) => {
              const splitTitle = item.title.split(" ");
              return (
                <Row
                  key={index}
                  className={index % 2 === 0 ? "fos-row" : "fos-row-reverse"}
                  style={{
                    marginBottom: "40px",
                  }}
                >
                  <Col md={6}>
                    <h3>
                      {splitTitle[0]}
                      <br />
                      {splitTitle[1]}
                    </h3>
                    <p>{item.description}</p>
                  </Col>
                  <Col md={6}>
                    <img
                      src={require(`../../assets/images/${item.image}`)}
                      alt={item.alt}
                      className="img-fluid"
                      // style={{aspectRatio: "16/9", objectFit: "cover", width: "100%", height: "auto"}}
                    />
                  </Col>
                </Row>
              );
            })}
          </Container>
        </Container>
      </>
    );
  }
}
