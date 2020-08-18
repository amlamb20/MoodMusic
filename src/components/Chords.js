import React, { Component } from "react";
import Chord from "./Chord";
import Piano from "./Piano";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Form } from "react-bootstrap";

// Progression library
const progs = [
  [1, 2, 3, 4],
  [1, 3, 2, 1],
  [1, 4, 5, 4],
  [1, 5, 4, 4],
  [4, 5, 4, 5],
  [1, 5, 1, 5],
  [1, 4, 1, 4],
];

// Major keys
const keys = [
  ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
  ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"],
  ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"],
  ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"],
  ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"],
  ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"],
  ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
  ["Ab", "Bbm", "Cm", "Db", "Eb", "Fm", "Gdim"],
  ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"],
  ["Bb", "Cm", "Dm", "Eb", "F", "Gm", "Adim"],
  ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"],
];

// keyPosition map: used for starting position in displaying piano chords
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
    chords: ["Em", "Em", "Am", "F"],
    pianoKeys: [0, 1, 2],
    chordBoxes: [
      [1, "Em", "highlight"],
      [3, "Em", "no-highlight"],
      [6, "Am", "no-highlight"],
      [1, "Em", "no-highlight"],
    ],
  };

  componentDidMount() {
    this.handleShuffle();
  }

  // Select chord progression at random and generates chords in selected key
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

    // Update piano diagram
    this.handleChordClick(chords[0]);
  };

  // Changes current chords to newly selected key
  handleKeyChange = (event) => {
    const chords = this.state.currentProg.reduce((acc, val) => {
      acc.push(keys[event.target.value][val - 1]);
      return acc;
    }, []);
    this.setState({ key: event.target.value, chords });

    // Update piano display
    this.handleChordClick(chords[0]);
  };

  // Displays user selected chord on the piano
  handleChordClick = (chordName) => {
    const pianoKeys = [];
    let kp = keyPosition.get(chordName.substring(0, 1));
    if (chordName.includes("#")) kp++;
    if (chordName.includes("b")) kp--;
    pianoKeys.push(kp);
    if (chordName.includes("m")) pianoKeys.push(kp + 3);
    else pianoKeys.push(kp + 4);
    pianoKeys.push(kp + 7);
    this.setState({ pianoKeys });
  };

  numToRoman = (num) => {
    switch (num) {
      case 1:
        return "i";
      case 2:
        return "ii";
      case 3:
        return "iii";
      case 4:
        return "iv";
      case 5:
        return "v";
      case 6:
        return "vi";
      case 7:
        return "vii";
    }
  };

  render() {
    const currentChords = [];
    for (var i = 0; i < 4; i++) {
      currentChords.push(
        <Chord
          key={i}
          chordName={this.state.chords[i]}
          chordRomanNumeral={this.numToRoman(this.state.currentProg[i])}
          onChordClick={this.handleChordClick}
        />
      );
    }

    const keyOptions = [];
    for (i = 0; i < keys.length; i++) {
      keyOptions.push(<option value={i}>{keys[i][0]}</option>);
    }

    return (
      <React.Fragment>
        {/* Piano display */}
        <Piano pianoKeys={this.state.pianoKeys} />

        <div className="chordDisplay">{currentChords}</div>

        <Container>
          <Row>
            <Col>
              <div className="mr-auto controls">
                {/* <Button variant="primary">Play</Button> */}
                <Button
                  variant="primary"
                  onClick={this.handleShuffle}
                  className="shuffleButton"
                >
                  Shuffle Chords
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
                    {keyOptions}
                  </Form.Control>
                  <Form.Control as="select" className="keyMood sel">
                    <option value value="1">
                      Major
                    </option>
                    <option value="2">Minor</option>
                  </Form.Control>
                </Row>
                {/* <Row className="myFormLabel">
                  <p>Instrument</p>
                </Row>
                <Row>
                  <Form.Control as="select" className="sel">
                    <option value="0">Piano</option>
                    <option value="1">Guitar</option>
                  </Form.Control>
                </Row> */}
              </Container>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Chords;
