import React from "react";
import { Link } from "react-router-dom";
import "./startpicture.styles.scss";

class StartPicture extends React.Component {
  state = {};
  render() {
    return (
      <div className="start-picture">
        <Link className="option" to="/piano">
          <div className="btn btn-start">
            <h2>Start</h2>
          </div>
        </Link>
      </div>
    );
  }
}

export default StartPicture;