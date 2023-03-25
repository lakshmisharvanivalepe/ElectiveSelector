import React, { useState } from 'react'
import Subjectcard from './Subjectcard';
import "./Electivecard.css"

function Electivecard(props) {
  

  return (
    <div className="electiveCd">
        <h5 className="heading elective">Elective {props.number}</h5>
        <div className="allsubjcontainer">
            {/* map will be used here to have all the card but for now it will be hardcoded  */}
            <Subjectcard onSave={(data)=>{setE1(data)}}/>
            <Subjectcard />
            <Subjectcard />

        </div>
    </div>
  )
}

export default Electivecard