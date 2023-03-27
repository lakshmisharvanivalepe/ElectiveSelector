import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import Electivecard from './Electivecard';
import Announcement from './Announcement';

function Proff(props) {
  const prof_email = props.emailid;
    const logout =()=>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div>
      <Navbar />
      <div className="professor">
        <h4 className="heading">Elective Selection</h4>
        <select
          className="form-select card card-body"
          aria-label="Default select example"
        >
          <option value="5">Semester 5</option>
          <option value="6">Semester 6</option>
          <option value="7">Semester 7</option>
        </select>
        {/* here also we will have map */}
        <Electivecard number={1} prof_email={prof_email} />
        <Electivecard number={2} prof_email={prof_email} />
        {/* <Announcement /> */}
      </div>
      <button className="defbtn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Proff