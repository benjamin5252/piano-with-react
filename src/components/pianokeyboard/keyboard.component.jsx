import React from "react";
import Tone from "tone";
import "./keyboard.styles.scss";

import KEYBOARD_DATA from "./keyboard.data";
import SAMPLE_DATA from "./sample.data";


class Keyboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: KEYBOARD_DATA,
      isLoaded: false
    };

    this.handleAttack = this.handleAttack.bind(this);
    this.sampler = new Tone.Sampler(SAMPLE_DATA, {
      onload: () => {
        this.setState({ isLoaded: true });
      }
    }).toMaster();
  }

  toMaster() {
    console.log("import done");
  }

  handleAttack = name => {
    this.sampler.triggerAttack(name);
  };

  handleRelease = name => {
    this.sampler.triggerRelease(name);
  };

  render() {
    const { keys, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className="container">
          <div className="piano-keyboard">
            {keys.map(({ id, name, type, blacks, ...otherKeyProps }) => (
              <div className={`piano-key ${type}`} key={id} {...otherKeyProps}>
                <div
                  className="white-active"
                  onMouseDown={() => this.handleAttack(name)}
                  onMouseUp={() => this.handleRelease(name)}
                  onMouseLeave={() => this.handleRelease(name)}
                />
                {blacks.map(({ id, name, type, ...otherKeyProps }) => (
                  <div
                    className={`piano-key ${type}`}
                    key={id}
                    {...otherKeyProps}
                    onMouseDown={() => this.handleAttack(name)}
                    onMouseUp={() => this.handleRelease(name)}
                    onMouseLeave={() => this.handleRelease(name)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div className="loading-audio">Loading Audio ...</div>;
    }
  }
}

export default Keyboard;
