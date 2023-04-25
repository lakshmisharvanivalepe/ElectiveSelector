import React from 'react';
import ESlogoCircleWN from "./images/ESlogoCircleWN.svg";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    const logout =()=>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div>
        <nav className="navbar fixed-top sticky-top navbar-expand-lg">
            <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"><img src={ESlogoCircleWN} alt="Bootstrap" width="160" height="80" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink style={({isActive})=> { return isActive ? {color: "#7985EE"} :{}}} className="nav-link" to="/announcement" replace>Announcement</NavLink>
                </li>
                {/* {
                  props.screen==="stu" && (<li className="nav-item"><NavLink style={({isActive})=> { return isActive ? {color: "#7985EE"} :{}}} className="nav-link" to="/feedback">Feedback</NavLink></li>)
                } */}
                <li className="nav-item">
                    <NavLink style={({isActive})=> { return isActive ? {color: "#7985EE"} :{}}} className="nav-link" to="/elecSelec">Elective Selection</NavLink>
                </li>
                <button className="nav-item logoutbtn" onClick={logout}>Logout</button>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar