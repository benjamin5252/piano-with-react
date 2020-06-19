import React from "react";
import Keyboard from "../../components/pianokeyboard/keyboard.component";
import "./pianopage.styles.scss";

class PianoPage extends React.Component {
  state = {};
  render() {
    return (
      <div className="piano-page">
        <Keyboard />
      </div>
    );
  }
}

export default PianoPage;
