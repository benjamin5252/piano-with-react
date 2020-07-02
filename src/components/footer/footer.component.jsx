import React from 'react';
import "./footer.styles.scss";
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return(
        <div className="footer">
        <div className="container">
            <div className="center-line"></div>
            <div className="row">
                <div className="app-name contact col-12 col-md-6"><h1>King's Piano</h1></div>
                <div className="contact col-12 col-md-6"><h1><FontAwesomeIcon icon={faGithub} /></h1><h1><FontAwesomeIcon icon={faCodepen} /></h1></div>
            </div>
            <div className="copy-right"><span>King's Piano © 2020 by David Lan</span></div>
        </div>
    </div>
    );
}

export default Footer;