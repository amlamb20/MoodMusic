import React, { Component } from "react";

class Chord extends Component {
  render() {
    const { chordName } = this.props;
    return (
      <div
        className="chordContainer"
        onClick={() => this.props.onChordClick(chordName)}
      >
        <ChordName chordName={chordName} />
      </div>
    );
  }
}

export default Chord;

const ChordName = (props) => <div className="chordName">{props.chordName}</div>;
