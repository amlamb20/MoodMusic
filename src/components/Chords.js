import React, { Component } from "react";
import Chord from "./Chord";
import Piano from "./Piano";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Form } from "react-bootstrap";

const progs = [
  [1, 2, 3, 4],
  [1, 3, 2, 1],
  [1, 4, 5, 4],
  [1, 5, 4, 4],
  [4, 5, 4, 5],
  [1, 5, 1, 5],
  [1, 4, 1, 4],
];

const keys = [
  ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
  ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"],
  //["Db", "Ebm", "Fm", "Gb", "Ab", "Bbm", "Cdim"],
  ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
];

let keyPosition = new Map();
keyPosition.set("C", 0);
keyPosition.set("D", 2);
keyPosition.set("E", 4);
keyPosition.set("F", 5);
keyPosition.set("G", 7);
keyPosition.set("A", 9);
keyPosition.set("B", 11);

class Chords extends Component {
  state = {
    key: 0,
    currentProg: [1, 3, 6, 4],
    chords: ["C", "Em", "Am", "F"],
    pianoKeys: [0, 4, 7],
  };

  handleShuffle = () => {
    const currentProg = progs[Math.floor(Math.random() * progs.length)];
    const chords = currentProg.reduce((acc, val) => {
      acc.push(keys[this.state.key][val - 1]);
      return acc;
    }, []);
    this.setState({
      currentProg,
      chords,
    });
  };

  handleKeyChange = (event) => {
    const chords = this.state.currentProg.reduce((acc, val) => {
      acc.push(keys[event.target.value][val - 1]);
      return acc;
    }, []);
    this.setState({ key: event.target.value, chords });
  };

  handleChordClick = (chordName) => {
    const pianoKeys = [];
    const kp = keyPosition.get(chordName.substring(0, 1));
    pianoKeys.push(kp);
    if (chordName.includes("m")) pianoKeys.push(kp + 3);
    else pianoKeys.push(kp + 4);
    pianoKeys.push(kp + 7);
    this.setState({ pianoKeys });
  };

  render() {
    return (
      <React.Fragment>
        <Piano pianoKeys={this.state.pianoKeys} />

        <div className="chordDisplay">
          <Chord
            chordName={this.state.chords[0]}
            onChordClick={this.handleChordClick}
          />
          <Chord
            chordName={this.state.chords[1]}
            onChordClick={this.handleChordClick}
          />
          <Chord
            chordName={this.state.chords[2]}
            onChordClick={this.handleChordClick}
          />
          <Chord
            chordName={this.state.chords[3]}
            onChordClick={this.handleChordClick}
          />
        </div>

        <Container>
          <Row>
            <Col>
              <div className="mr-auto controls">
                <Button variant="primary">Play</Button>
                <Button variant="primary" onClick={this.handleShuffle}>
                  Shuffle
                </Button>
              </div>
            </Col>
            <Col>
              <Container>
                <Row className="myFormLabel">
                  <p>Key</p>
                </Row>
                <Row>
                  <Form.Control
                    as="select"
                    onChange={this.handleKeyChange}
                    className="keyLetter sel"
                  >
                    <option value="0">C</option>
                    <option value="1">C#/Db</option>
                    <option value="2">D</option>
                  </Form.Control>
                  <Form.Control as="select" className="keyMood sel">
                    <option value value="1">
                      Major
                    </option>
                    <option value="2">Minor</option>
                  </Form.Control>
                </Row>
                <Row className="myFormLabel">
                  <p>Instrument</p>
                </Row>
                <Row>
                  <Form.Control as="select" className="sel">
                    <option value="0">Piano</option>
                    <option value="1">Guitar</option>
                  </Form.Control>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Chords;
