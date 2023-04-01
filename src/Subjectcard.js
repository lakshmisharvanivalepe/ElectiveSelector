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
            {/* <button className="defbtn">
              Clear All
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subjectcard