import React from 'react';
import './controlbar.styles.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTrash } from '@fortawesome/free-solid-svg-icons'

const ControlBar = ({ isRecording, isPlaying, onRecord, onPlay, onClear }) => {
    let btnRecording =  isRecording ? "btn-recording" : "";
    let btnPlaying = isPlaying ? "btn-playing" : "";
    return(
        <div className="control-bar">
            <div className={`btn-control ${btnRecording}`} onClick={onRecord}>
                <div className="circle">
                    <div className={`circle-inner`}>
                    </div>
                </div>
            </div>
            <div className={`btn-control ${btnPlaying}`} onClick={onPlay}><h1><FontAwesomeIcon icon={faPlay} /></h1></div>
            <div className="btn-control" onClick={onClear}><h1><FontAwesomeIcon icon={faTrash} /></h1></div>
        </div>    
    );
}

export default ControlBar;