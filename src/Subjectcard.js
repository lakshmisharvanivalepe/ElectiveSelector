import React, { useState, useRef } from "react";
import './Subjectcard.css';

function Subjectcard(props) {
  // const [formData, setFormData] = useState({
  //   subjectName: "",
  //   facultyName: "",
  //   fileName: null,
  // });

  // const submitHandler = (event) => {
  //   event.preventDefault(); 

  //   // console.log(formData);
  // };
  const subjectName = useRef(null);
  const facultyName = useRef(null);
  const fileName = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access field values using refs
    const subject = subjectName.current.value;
    const faculty = facultyName.current.value;
    const file = fileName.current.files[0];
    // Call the onSubmit callback with form data
    props.onSubmit({
      subjectName: subject,
      facultyName: faculty,
      fileName: file,
    });
  };

  // const handleChange = (event) => {
  //   const { name, value, files } = event.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: files ? files[0] : value,
  //   }));
  //   props.onSave(formData); 

  // };


  return (
    <div className="card subjcard">
      <div className="card-body">
        <div className="form">
          <form onChange={handleSubmit}>
            <input
              type="text"
              id="subjectName"
              name="subjectName"
              ref={subjectName}
              className="form-control inputBox"
              placeholder="Choose Subject"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <input
              type="text"
              id="facultyName"
              name="facultyName"
              ref={facultyName}
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
              ref={fileName}
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