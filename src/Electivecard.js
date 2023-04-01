import React, { useState } from 'react'
import Subjectcard from './Subjectcard';
import "./Electivecard.css"

function Electivecard(props) {

  const [choice1, setChoice1] = useState({});
  const [choice2, setChoice2] = useState({});
  const [choice3, setChoice3] = useState({});

  const handleSubmit = async () => {
    
    if (
      choice1.subjectName !== "N/A" ||
      choice2.subjectName !== "N/A" ||
      choice3.subjectName !== "N/A"
    ) {
      let newDate = new Date();
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      const currTime = new Date().toLocaleTimeString([], {
        hour12 : false
      });
      const  d = date + "-" + month + "-" + year;

      const post_details = {
        semNum: "7",
        electiveNum: props.number.toString(),
        sub1: {
          subTitle: choice1.subjectName,
          facultyName: choice1.facultyName,
        },
        sub2: {
          subTitle: choice2.subjectName,
          facultyName: choice2.facultyName,
        },
        sub3: {
          subTitle: choice3.subjectName,
          facultyName: choice3.facultyName,
        },
        addedBy: props.prof_email,
        addedTime: d + "\n" + currTime,
        scheduledAt: "a",
      }; 

      console.log(post_details);
      const response = await fetch(
        "https://electiveselector.onrender.com/addElectiveDetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post_details),
        }
      );
      const reply = await response.json();
      console.log(reply);
    } else {
      console.log("Please atleast one choice!");
    }
  }
  

  return (
    <div className="electiveCd">
      <h5 className="heading elective">Elective {props.number}</h5>
      <div className="allsubjcontainer">
        {/* map will be used here to have all the card but for now it will be hardcoded  */}
        {/* onSave=
        {(data) => {
          setE1(data);
        }} */}
        <Subjectcard
          onSave={(FormData) => {
            if(FormData.subjectName === ""){
              setChoice1({
                subjectName : "N/A",
                facultyName : "N/A",
                fileName : null
              })
            }
            else setChoice1(FormData);
            // console.log(choice1);
          }}
        />
        <Subjectcard
          onSave={(FormData) => {
            if (FormData.subjectName === "") {
              setChoice2({
                subjectName: "N/A",
                facultyName: "N/A",
                fileName: null,
              });
            } else setChoice2(FormData);

          }}
        />
        <Subjectcard
          onSave={(FormData) => {
           if (FormData.subjectName === "") {
             setChoice3({
               subjectName: "N/A",
               facultyName: "N/A",
               fileName: null,
             });
           } else setChoice3(FormData);

          }}
        />
        <Subjectcard
          onSave={(FormData) => {
            if(FormData.subjectName === ""){
              setChoice1({
                subjectName : "N/A",
                facultyName : "N/A",
                fileName : null
              })
            }
            else setChoice1(FormData);
            // console.log(choice1);
          }}
        />
      </div>
      {/* schedule and post button pending */}
      <p></p>
      <label style={{ fontSize: "0.8rem", fontWeight: "500" }}>
        Schedule your post <input type="datetime-local" style={{ marginLeft: "0.4rem"}} classname="form-control inputBox" />
      </label><br></br>
      <button onClick={handleSubmit} className='defbtn' style={{marginBottom:"1rem", marginTop:"2.5%"}}>Post Elective</button>
    </div>
  );
}

export default Electivecard