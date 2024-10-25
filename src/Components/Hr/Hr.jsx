import React, { Component } from 'react'
import { Container} from "react-bootstrap";

export default class Hr extends Component {
  render() {
    return (
      <Container>
        <hr
          style={{
            width: "100%",
            backgroundColor: "#272727",
            height: "4px",
            border: "0",
            opacity: "1",
            margin: "24px, 0px",
          }}
        />
      </Container>
    );
  }
}
