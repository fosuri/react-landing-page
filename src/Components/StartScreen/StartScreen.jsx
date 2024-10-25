import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

import logo from "../../assets/images/first_screen.png";
import "./StartScreen.css";


export default class StartScreen extends Component {
  render() {
    return (
      <>
        <Container
          fluid
          className="bg-success"
          style={{
            backgroundImage: `url(${logo})`,
            height: "calc(100vh - 66px)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            className="montserrat"
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1 className="fos-ss-h1">TUUR KEENIASSE</h1>
            <p>
              <strong className="fos-ss-p">
                Avastage põnevaid seiklusi ja ainulaadset loodust meie Keenia
                ekskursioonil!
              </strong>
            </p>

            <p>
              <Button className="fos-button" id="fos-ss-button">UURI LÄHEMALT</Button>
            </p>
          </Container>
        </Container>
      </>
    );
  }
}
