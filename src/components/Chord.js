import React, { Component } from "react";

class Chord extends Component {
  render() {
    const { chordName, chordRomanNumeral } = this.props;
    return (
      <div
        className="chordContainer"
        onClick={() => this.props.onChordClick(chordName)}
      >
        <ChordName chordName={chordName} />
        <ChordRomanNumeral chordRomanNumeral={chordRomanNumeral} />
      </div>
    );
  }
}

export default Chord;

const ChordName = (props) => <div className="chordName">{props.chordName}</div>;
const ChordRomanNumeral = (props) => (
  <div className="chordRomanNumeral">{props.chordRomanNumeral}</div>
);
