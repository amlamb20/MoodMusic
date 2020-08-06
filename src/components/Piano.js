import React, { Component } from "react";

const whiteKeyNums = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23];
const blackKeyNums = [1, 3, 6, 8, 10, 13, 15, 18, 20, 22];

class Piano extends Component {
  render() {
    const pianoKeysWhite = [];
    const pianoKeysBlack = [];
    for (var i = 0; i < whiteKeyNums.length + blackKeyNums.length; i++) {
      if (whiteKeyNums.includes(i)) {
        if (this.props.pianoKeys.includes(i))
          pianoKeysWhite.push(<WhiteKey highlighted></WhiteKey>);
        else pianoKeysWhite.push(<WhiteKey></WhiteKey>);
      } else {
        if ([2, 6, 9].includes(pianoKeysBlack.length))
          pianoKeysBlack.push(<SpaceBetween></SpaceBetween>);
        if (this.props.pianoKeys.includes(i)) {
          pianoKeysBlack.push(<BlackKey highlighted></BlackKey>);
        } else pianoKeysBlack.push(<BlackKey></BlackKey>);
      }
    }

    return (
      <div className="pianoc">
        <div className="whiteKeyContainer">{pianoKeysWhite}</div>
        <div className="blackKeyContainer">{pianoKeysBlack}</div>
      </div>
    );
  }
}

export default Piano;

const WhiteKey = (props) =>
  props.highlighted ? (
    <div className="whiteKey hl"></div>
  ) : (
    <div className="whiteKey"></div>
  );
const BlackKey = (props) =>
  props.highlighted ? (
    <div className="blackKey hl"></div>
  ) : (
    <div className="blackKey"></div>
  );
const SpaceBetween = (props) => <div className="spaceBetween"></div>;
