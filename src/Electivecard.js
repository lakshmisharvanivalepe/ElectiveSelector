import React, { useState } from 'react'
import Subjectcard from './Subjectcard';
import "./Electivecard.css"

function Electivecard(props) {
  const email = localStorage.getItem("email");
  // console.log(props.semNum);


  const [choice1, setChoice1] = useState({
    subjectName: "NA",
    facultyName: "NA",
    fileName: null,
  });
  const [choice2, setChoice2] = useState({
    subjectName: "NA",
    facultyName: "NA",
    fileName: null,
  });
  const [choice3, setChoice3] = useState({
    subjectName: "NA",
    facultyName: "NA",
    fileName: null,
  });
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonId) => {
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(buttonId)) {
        return prevSelectedButtons.filter((id) => id !== buttonId);
      } else {
        return [...prevSelectedButtons, buttonId];
      }
    });
  };

  const handleSubmit = async () => {
    // console.log(selectedButtons);

    if (
      choice1.subjectName !== "NA" ||
      choice2.subjectName !== "NA" ||
      choice3.subjectName !== "NA"
    ) {
      let newDate = new Date();
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();

      const currTime = new Date().toLocaleTimeString([], {
        hour12: false
      });
      const d = date + "-" + month + "-" + year;


      const post_details = {
        semNum: props.semNum,
        electiveNum: props.number,
        sub1: {
          subTitle: choice1.subjectName,
          facultyName: choice1.facultyName,
          pdfUrl: choice1.fileName,
        },
        sub2: {
          subTitle: choice2.subjectName,
          facultyName: choice2.facultyName,
          pdfUrl: choice2.fileName,
        },
        sub3: {
          subTitle: choice3.subjectName,
          facultyName: choice3.facultyName,
          pdfUrl: choice3.fileName,
        },
        branchList: selectedButtons,
        addedBy: email,
        addedTime: d + "\n" + currTime
      };

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
      console.log(selectedButtons);
      // console.log(props.prof_mail);
    } else {
      console.log("Please choose atleast one choice!");
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
        <Subjectcard onSubmit={(FormData) => {
            if (FormData.subjectName === "") {
              setChoice1({
                subjectName: "NA",
                facultyName: "NA",
                fileName: null,
              });
            } else setChoice1(FormData);
            // console.log(choice1);
          }} />
        <Subjectcard
          onSubmit={(FormData) => {
            if (FormData.subjectName === "") {
              setChoice2({
                subjectName: "NA",
                facultyName: "NA",
                fileName: null,
              });
            } else setChoice2(FormData);
            // console.log(choice2);

          }}
        />
        <Subjectcard
          onSubmit={(FormData) => {
            if (FormData.subjectName === "") {
              setChoice3({
                subjectName: "NA",
                facultyName: "NA",
                fileName: null,
              });
            } else setChoice3(FormData);
            // console.log(choice3);

          }}
        />


      </div>
      <div>

        <div className="selbranch"><p> Select Branch/es </p></div>

        <input
          type="checkbox"
          value="IT"
          name="branch1" class="form-check-input"
          onClick={() => handleButtonClick("IT")}
        />{" "}
        <label class="form-check-label electivecheckbox" for="flexCheckChecked">
          IT
        </label>

        <input
          type="checkbox"
          value="IT"
          name="branch2" class="form-check-input"
          onClick={() => handleButtonClick("CS")}
        />{" "}
        <label class="form-check-label electivecheckbox" for="flexCheckChecked">
          CS
        </label>

        <input
          type="checkbox"
          value="IT"
          name="branch3" class="form-check-input"
          onClick={() => handleButtonClick("CSAI")}
        />{" "}
        <label class="form-check-label electivecheckbox" for="flexCheckChecked">
          CSAI
        </label>

        <input
          type="checkbox"
          value="IT"
          name="branch4" class="form-check-input"
          onClick={() => handleButtonClick("CSB")}
        />{" "}
        <label class="form-check-label electivecheckbox" for="flexCheckChecked">
          CSB
        </label>

      </div>

      <br></br>
      <button
        onClick={handleSubmit}
        className="postbtn"
        style={{ marginBottom: "1rem", marginTop: "2.5%" }}
      >
        Post Elective
      </button>
    </div>
  );
}

export default Electivecard