import React from 'react';
import "./Proffesorhome.css"

function ProfSemBox() {
  return (
    <div className="electiveBox profSemBox">
        <div className="card-body sembox" >
            <div>
                <h5 style={{ fontSize: "1.1rem", fontWeight: "700", marginRight:"4rem", marginBottom:"0" }}>Semester 5</h5>
            </div>
            <div style={{display: "flex"}}>
                <button className="sembtn"> Elective 1</button>
                <button className="sembtn"> Elective 2</button>
            </div>
        </div>
    </div>
  )
}

export default ProfSemBox