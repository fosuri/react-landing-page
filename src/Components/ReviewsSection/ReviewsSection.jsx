import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "../Components.css";
import "./ReviewsSection.css";
import reviews from "../../assets/Data/reviews.json";
import stars from "../../assets/images/icons/stars.svg";

export default function ReviewsSection() {
  return (
    <>
      <Container className="reviews-section">
        <h2>
          MIDA <span class="red-text">OSALEJAD </span>ÜTLEVAD
        </h2>
        <Container>
          <Row className="fos-review-row">
            {reviews.map((item, index) => {
              return (
                <Col className="fos-review-container arimo" key={index}>
                  <div className="review-image">
                    <img className='fos-avatar'
                      src={require(`../../assets/images/${item.image}`)}
                      alt={item.alt}
                    />
                  </div>
                  <img className='fos-stars' src={stars} alt="stars" />
                  <p>{item.description}</p>
                  <p className="mt-auto mb-0 reviewer-name">{item.name}</p>
                </Col>
              );
            })};
          </Row>
        </Container>
      </Container>
    </>
  );
}
