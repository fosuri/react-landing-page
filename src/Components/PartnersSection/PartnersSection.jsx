import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import partners from "../../assets/Data/partners.json";
import "../Components.css";
import "./PartnersSection.css"
export default function PartnersSection() {
  return (
    <>
      <Container className="partners-section">
        <h2>MEIE PARTNERID</h2>
        <Container>
          <Row className="fos-partners-row">
            {partners.map((item,index) => {
              return (
                <Col className="fos-partners-container" key={index}>
                  <div className="partners-image">
                    <img
                      src={require(`../../assets/images/logos/${item.image}`)}
                      alt={item.alt}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>

      </Container>
    </>
  )
}
