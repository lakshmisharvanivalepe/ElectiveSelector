import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import Announcement from './Announcement';
import { Routes, Route } from "react-router-dom";
import ProfElectiveSelec from './ProfElectiveSelec';
import ProfSemBox from './ProfSemBox';
import "./Proffesorhome.css"
import ElectiveList from './ElectiveList';

function Proff(props) {
  return (
    <div>
      <Navbar screen={"prof"}/>
      <div style={{position: "relative", top: "5rem"}} className="professor">
        <Routes>
          <Route path="/" element={
            <div>
              <h4 className="heading">Students Elective List</h4>
              <ProfSemBox />
              <ProfSemBox />
              <ProfSemBox />
              {/* <ElectiveList /> */}
            </div>
          } />
          <Route path="/announcement" element={<Announcement screen = {"prof"} />} />
          <Route path="/elecSelec" element={<ProfElectiveSelec email = {props.emailid} />} />
          <Route path="/electivelist" element={<ElectiveList />} />
         </Routes>
      </div>
    </div>
  );
}

export default Proff