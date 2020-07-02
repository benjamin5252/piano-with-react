import React from "react";
import StartPicture from "../../components/startpicture/startpicture.component";
import './homepage.styles.scss';

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <div className="home-page">
        <StartPicture />
      </div>
    );
  }
}

export default HomePage;
