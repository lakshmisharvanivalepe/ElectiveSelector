import React from 'react';
import "./Proffesorhome.css"
import { Link } from 'react-router-dom';

function ProfSemBox(props) {
  return (
    <div className="electiveBox profSemBox">
        <div className="card-body sembox" >
            <div>
                <h5 style={{ fontSize: "1.1rem", fontWeight: "700", marginRight:"4rem", marginBottom:"0" }}>Semester {props.sem}</h5>
            </div>
            <div style={{display: "flex"}}>
                <Link to="/electivelist"><button className="sembtn">Elective 1</button></Link>
                <Link to="/electivelist"><button className="sembtn">Elective 2</button></Link>
            </div>
        </div>
    </div>
  )
}

export default ProfSemBox