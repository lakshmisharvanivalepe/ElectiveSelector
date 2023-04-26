import React from 'react';
import "./Proffesorhome.css";
import { Link } from 'react-router-dom';

function ProfSemBox(props) {
  return (
      <div className="card profcard proflist" >
        <div className="card-body">
            <h5 style={{ fontSize: "1.45rem", fontWeight: "700", marginBottom:"1rem" }}>Semester {props.sem}</h5>
        </div>
        <div className="resbtn" style={{display: "flex"}}>
            <Link to="/electivelist" state={{ semNum: props.sem, elecNum: "1" }}><button className="sembtn defbtn">Elective 1</button></Link>
            <Link to="/electivelist" state={{ semNum: props.sem, elecNum: "2" }}><button className="sembtn defbtn">Elective 2</button></Link>
        </div>
      </div>
  )
}

export default ProfSemBox