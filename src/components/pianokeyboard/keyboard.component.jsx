import React from "react";
import Tone from "tone";
import "./keyboard.styles.scss";

import ControlBar from '../controlbar/controlbar.component';

import KEYBOARD_DATA from "./keyboard.data";
import SAMPLE_DATA from "./sample.data";
import SAMPLE_CORRESPOND from "./samplecorrespond.data";


class Keyboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keys: KEYBOARD_DATA,
      correspond: SAMPLE_CORRESPOND,
      isLoaded: false,
      isRecording: false, 
      isPlaying: false,
      chord: true,
      record: []
    };

    this.sampler = new Tone.Sampler(SAMPLE_DATA, {
      onload: () => {
        this.setState({ isLoaded: true });
      }
    }).toMaster();
    
   
  }

  componentDidMount() {
    // // this.vol = new Tone.Volume(-20);
    // this.pattern = new Tone.Pattern( (time, note) => {
    //   this.sampler.triggerAttackRelease(note, "1n")
    //   console.log(note)
    //   this.note = note
    // }, this.vol, ["C#3",["G3","D3"],"A4"], "up")
    // this.pattern.start();
  }


  // toMaster() {
  //   console.log("import done");
  // }

  // handlestartloop = () => {
    
    
  //   Tone.Transport.start();
  // }

  handleendloop = () => {
    Tone.Transport.stop();
  }

  handleAttack = id => {
    this.sampler.triggerAttack(this.state.correspond[id]);
    if(this.state.isRecording){
      this.setState((prevState) => ({
        record: [...prevState.record, [id, this.state.chord, Math.random()]]
    }));
    };
  };

  handleRelease = id => {
    this.sampler.triggerRelease(this.state.correspond[id]);
  };

  handlePlay = () => {

   
    this.setState({isPlaying : true}, 
      () => {
        
          this.state.record.forEach((item, i) => {
            setTimeout(() => {
              this.sampler.triggerAttackRelease(this.state.correspond[item[0]], '0.75')
            }, i * 800);
            
          });
        
      },
        
      );
      setTimeout(()=>{this.setState({isPlaying : false});}, this.state.record.length * 800);
      

  };

  

  handleClear = () => {
    this.setState(
        {record: []}
    );
  };

  

  render() {
    const { keys, isLoaded, record, isRecording, isPlaying } = this.state;
    let btnRecording =  isRecording ? "btn-recording" : "";
    let btnPlaying = isPlaying ? "btn-playing" : "";
    if (isLoaded) {
      return (
        <div className="container">
          <div className="record-bar">
          { record.map(item => (<div className="record-item" key={item[2]}>{item[0]}</div>)) }
          </div>
          <ControlBar 
            btnRecording={btnRecording} 
            btnPlaying={btnPlaying}
            onRecord={() => this.setState({ isRecording: !isRecording })} 
            onPlay={() => this.handlePlay()} onClear={() => this.handleClear()} 
          />
          <div className="piano-keyboard">
            {keys.map(({ id, name, type, blacks, ...otherKeyProps }) => (
              <div className={`piano-key ${type}`} key={id} {...otherKeyProps}>
                <div
                  className="white-active"
                  onMouseDown={() => this.handleAttack(id)}
                  onMouseUp={() => this.handleRelease(id)}
                  onMouseLeave={() => this.handleRelease(id)}
                />
                {blacks.map(({ id, name, type, ...otherKeyProps }) => (
                  <div
                    className={`piano-key ${type}`}
                    key={id}
                    {...otherKeyProps}
                    onMouseDown={() => this.handleAttack(id)}
                    onMouseUp={() => this.handleRelease(id)}
                    onMouseLeave={() => this.handleRelease(id)}
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
