import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import Announcement from './Announcement';
import  {Route,Routes} from "react-router-dom";
import ProfElectiveSelec from './ProfElectiveSelec';
import ProfSemBox from './ProfSemBox';
import "./Proffesorhome.css"
import ElectiveList from './ElectiveList';

function Proff(props) {
  const mail = props.emailid;
  // console.log(mail);
  return (
    <div>
      <Navbar screen={"prof"} />
      <div style={{ position: "relative", top: "5rem" }} className="professor">
        <Routes>
          <Route path="/" element={
            <div>
              <h4 className="heading">Students Elective List</h4>
              <ProfSemBox sem="5"/>
              <ProfSemBox sem="6"/>
              <ProfSemBox sem="7"/>
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

export default Proff;