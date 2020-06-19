import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/image/original.svg";
import "./header.styles.scss";

class Header extends React.Component {
  state =  { 
    popShow: false
  };

  handleChange = () => {
    this.setState({popShow: !this.state.popShow});
  }

  render() {
    let popSowTag = this.state.popShow ? "pop-show" : "pop-close";
    let barCrossTag =  this.state.popShow ? "bar-cross" : "";
    return (
      <div className="header">
        <div className="container">
          <div className="header-inner">
            <Link className="option" to="/">
              <div className="logo-box">
                <Logo className="logo header-item" />
              </div>
            </Link>

            <div onClick={this.handleChange} className="hamburger header-item">
              <div className={`bar ${barCrossTag}`} />
              <div className={`bar ${barCrossTag}`} />
            </div>
            <div className="options">
              <div className="header-item">
                <h2>Discription</h2>
              </div>
              <div className="header-item">
                <h2>Tutorial</h2>
              </div>
              <div className="header-item">
                <h2>Log In</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={`pop-up-menu ${popSowTag}`}>
            <div className="container">
              <div className="pop-up-menu-inner">
                <div className="pop-up-menu-item"><h1>Discription</h1></div>
                <div className="pop-up-menu-item"><h1>Tutorial</h1></div>
                <div className="pop-up-menu-item"><h1>Log in</h1></div>
              </div>  
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
