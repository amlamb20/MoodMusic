import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Learn extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container fluid className="learnSection">
          <h1>How it Works</h1>
          <p>
            This is MoodMusic, a simple app that allows one to explore hundreds
            of chord progressions to foster inspiration for their next
            songwriting venture.
          </p>
        </Container>
      </React.Fragment>
    );
  }
}

export default Learn;
