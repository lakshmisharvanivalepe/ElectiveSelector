import React from 'react';
import ESlogoCircleWN from "./images/ESlogoCircleWN.svg";
import './Navbar.css';

function Navbar() {
  return (
    <div>
        <nav className="navbar fixed-top sticky-top navbar-expand-lg bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={ESlogoCircleWN} alt="Bootstrap" width="160" height="80" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#">Announcement</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Feedback</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Elective Selection</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar