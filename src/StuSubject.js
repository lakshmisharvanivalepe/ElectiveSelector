import React from 'react';
import "./StuSubject.css"

function StuSubject() {
  return (
    <div className="card subjcard stusubj">
      <div className="card-body">
        <h5 style={{ fontSize: "1rem", fontWeight: "700", lineHeight: "1.5rem"}}>Algorithmic </h5>
        <p style={{ fontSize: "0.7rem", fontWeight: "500",marginBottom: "0.4rem" }}>Dr. Mary Samuel</p>
        <button className="defbtn"> Resources</button>
        <button className="selectbtn defbtn"> Select</button>
      </div>
    </div>
  )
}

export default StuSubject