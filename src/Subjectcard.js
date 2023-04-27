import React, { useState, useRef } from "react";
import './Subjectcard.css';
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "./Firebase";
import { v4 } from "uuid";

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

  const [pdf, uploadPdf] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    uploadPdf(selectedFile);
    
    const pdfRef = ref(storage, `pdfs/${selectedFile.name + v4()}`);
    uploadBytes(pdfRef, pdf)
      .then(() => {
        alert("PDF UPLOADED");
        getDownloadURL(pdfRef).then((url) => {
          setDownloadUrl(url);
          console.log(downloadUrl);
          localStorage.setItem("url", url);
        });
      })
      .catch((error) => {
        console.error(error);
      });

  };
  const pdflink = localStorage.getItem("url");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access field values using refs
    const subject = subjectName.current.value;
    const faculty = facultyName.current.value;
    const file = pdflink;
    console.log(file);

    // Call the onSubmit callback with form data
    props.onSubmit({
      subjectName: subject,
      facultyName: faculty,
      fileName: pdflink,
    });
    localStorage.removeItem("url");
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
              onChange={handleFileChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subjectcard