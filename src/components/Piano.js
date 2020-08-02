import React, { Component } from "react";

const whiteKeyNums = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16, 17, 19, 21, 23];
const blackKeyNums = [1, 3, 6, 8, 10, 13, 15, 18, 20, 22];

class Piano extends Component {
  render() {
    const pianoKeys = [];
    for (var i = 0; i < 24; i++) {
      if (whiteKeyNums.includes(i) && this.props.pianoKeys.includes(i)) {
        pianoKeys.push(<WhiteKey highlighted></WhiteKey>);
      } else if (whiteKeyNums.includes(i))
        pianoKeys.push(<WhiteKey></WhiteKey>);
    }

    return (
      <div className="pianoc">
        <div className="whiteKeyContainer">{pianoKeys}</div>
        <div className="blackKeyContainer">
          <BlackKey></BlackKey>
          <BlackKey></BlackKey>
          <SpaceBetween></SpaceBetween>
          <BlackKey></BlackKey>
          <BlackKey></BlackKey>
          <BlackKey></BlackKey>
          <SpaceBetween></SpaceBetween>
          <BlackKey></BlackKey>
          <BlackKey></BlackKey>
          <SpaceBetween></SpaceBetween>
          <BlackKey></BlackKey>
          <BlackKey></BlackKey>
          <BlackKey></BlackKey>
        </div>
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
