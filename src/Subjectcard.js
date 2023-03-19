import React from 'react';
import './Subjectcard.css';

function Subjectcard() {
  return (
    <div className="card subjcard">
        <div className="card-body">
            <div className="form">
                <input type="text" class="form-control inputBox" placeholder="Choose Subject" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                <input type="text" class="form-control inputBox" placeholder="Choose Teacher" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                <label className='label'>Add Resources</label>
                <input type="file" className="upload" id="myFile" name="filename"/>
                <button className="defbtn">Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Subjectcard