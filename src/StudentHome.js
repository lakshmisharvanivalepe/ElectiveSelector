import React from 'react';
import './Home.css';
import Navbar from './Navbar';

function Home() {
  const logout =()=>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className='stuHome'>
      <Navbar/>
      <div className="student">
        <h4 className="heading">Welcome, Sanskruti</h4>
        <div className="card">
          <div className="card-body">
            Semester 6
          </div>
        </div>
        <h4 style={{fontSize:"1.2rem",fontWeight:"700"}}>Selected Electives</h4>
        <div className="row">
          <div className="col-2"></div>
          <ol className="col-6 elective-list" style={{margin:"auto",fontSize:"1rem",fontWeight:"700"}}>
            <li>
            <div className="electiveBox">
              <div className="card-body elective">
                <h5 style={{fontSize:"0.9rem",fontWeight:"700"}}>Algorithmic Graph Theory</h5><p style={{fontSize:"0.7rem",marginBottom:"0.4rem"}}>Dr. Mary Samuel</p> 
              </div>
            </div>
            </li>
            <li>
            <div className="electiveBox">
              <div className="card-body elective">
                <h5 style={{fontSize:"0.9rem",fontWeight:"700"}}>People Management</h5><p style={{fontSize:"0.7rem",marginBottom:"0.4rem"}}>Dr. Bindu Singh</p> 
              </div>
            </div>
            </li>
          </ol>
        </div>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home