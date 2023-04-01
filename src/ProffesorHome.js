import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import Electivecard from './Electivecard';
import Announcement from './Announcement';
import { Routes, Route } from "react-router-dom";
import ProfElectiveSelec from './ProfElectiveSelec';

function Proff(props) {
  return (
    <div>
      <Navbar screen={"prof"}/>
      <div style={{position: "relative", top: "5rem"}} className="professor">
        <Routes>
          <Route path="/" element={<>
            <Electivecard number={1} />
            <Electivecard number={2} />
          </>} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/elecSelec" element={<ProfElectiveSelec email = {props.emailid} />} />
         </Routes>
      </div>
    </div>
  );
}

export default Proff