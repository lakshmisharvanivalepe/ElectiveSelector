import React, { useState } from "react";
import './Subjectcard.css';

function Subjectcard(props) {
  const [formData, setFormData] = useState({
    subjectName: "",
    facultyName: "",
    fileName: null,
  });

  const submitHandler = (event) => {
    event.preventDefault(); 

    // console.log(formData);
    props.onSave(formData); 
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };


  return (
    <div className="card subjcard">
      <div className="card-body">
        <div className="form">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              id="subjectName"
              name="subjectName"
              value={formData.subjectName}
              onChange={handleChange}
              className="form-control inputBox"
              placeholder="Choose Subject"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <input
              type="text"
              id="facultyName"
              name="facultyName"
              value={formData.facultyName}
              onChange={handleChange}
              className="form-control inputBox"
              placeholder="Choose Teacher"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <label className="label">Add Resources</label>
            <input
              type="file"
              className="upload"
              id="fileName"
              name="fileName"
              onChange={handleChange}
            />
            <label className="label">Select Branch/es</label>
            <div className="branchoption">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                <label class="form-check-label" for="flexCheckChecked">
                  CS
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  IT
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  CSAI
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                  CSB
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subjectcard