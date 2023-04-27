import React, { useState, useEffect } from "react";
import StuSubject from "./StuSubject";

function StuElective(props) {
 
  const [details, setDetails] = useState([]);
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const email = props.emailid;


  function getsem() {
    let s1 = email.substring(3, 7);
    // console.log(s1);
    const d = new Date();
    const curYear = parseInt(d.getFullYear());
    const curMonth = parseInt(d.getMonth());
    const year = parseInt(s1);
    const x = curYear - year;

    if (x === 2 && curMonth >= 6 && curMonth <= 11) {
      return "5";
    } else if (x === 3) {
      if (curMonth >= 6 && curMonth <= 11) {
        return "7";
      } else {
        return "6";
      }
    }
  }
  
  const ans = getsem();


  const getDetails = async () => {
    console.log(props.emailid);
    console.log(email);

    console.log(ans);

    const response = await fetch("https://electiveselector.onrender.com/sem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        semNum: ans,
        userEmail: props.emailid,
      }),
    });

    const result = await response.json();
    const sol = result.message;

    console.log(result.message);

    setDetails({
      subjectName1: sol.e1s1.subTitle,
      subjectName2: sol.e1s2.subTitle,
      subjectName3: sol.e1s3.subTitle,
      facultyName1: sol.e1s1.facultyName,
      facultyName2: sol.e1s2.facultyName,
      facultyName3: sol.e1s3.facultyName,
      subjectName4: sol.e2s1.subTitle,
      subjectName5: sol.e2s2.subTitle,
      subjectName6: sol.e2s3.subTitle,
      facultyName4: sol.e2s1.facultyName,
      facultyName5: sol.e2s2.facultyName,
      facultyName6: sol.e2s3.facultyName,
      branchList1: sol.el1branchList,
      branchList2: sol.el2branchList,
      pdfUrl1: sol.e1s1.pdfUrl,
      pdfUrl2: sol.e1s2.pdfUrl,
      pdfUrl3: sol.e1s3.pdfUrl,
      pdfUrl4: sol.e2s1.pdfUrl,
      pdfUrl5: sol.e2s2.pdfUrl,
      pdfUrl6: sol.e2s3.pdfUrl
    });

    setChoice1(sol.choiceString1);
    setChoice2(sol.choiceString2);
  };

  const selectChoice1 = async (e) => {
    const response = await fetch(
      "https://electiveselector.onrender.com/choose",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: props.emailid,
          userName: localStorage.getItem("displayName"),
          semNum: ans,
          electiveNum: "1",
          choiceString: e,
          branchList: details.branchList1
        }),
      }
    );

    const result = await response.json();
    const sol = result.message;
    console.log(sol);
    // window.location.reload(false);
    
  }
  const selectChoice2 = async (e) => {
    const data = {
      userEmail: props.emailid,
      userName: localStorage.getItem("displayName"),
      semNum: ans,
      electiveNum: "2",
      choiceString: e,
      branchList: details.branchList2
    }; 
    console.log(data);
    const response = await fetch(
      "https://electiveselector.onrender.com/choose",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    const sol = result.message;
    console.log(sol);
    // window.location.reload(false);
  };
  
  useEffect(() => {
    getDetails();
  }, []);


  return (
    <div>
      <div className="electiveCd">
        <h5 className="heading elective">Elective 1</h5>
        <div className="allsubjcontainer">
          <StuSubject
            subject={details.subjectName1}
            faculty={details.facultyName1}
            selected={choice1}
            id={0}
            onSelect={selectChoice1}
            link={details.pdfUrl1}
          />
          <StuSubject
            subject={details.subjectName2}
            faculty={details.facultyName2}
            selected={choice1}
            id={1}
            onSelect={selectChoice1}
            link={details.pdfUrl2}
          />
          <StuSubject
            subject={details.subjectName3}
            faculty={details.facultyName3}
            selected={choice1}
            id={2}
            onSelect={selectChoice1}
            link={details.pdfUrl3}
          />
        </div>
      </div>
      <div className="electiveCd">
        <h5 className="heading elective">Elective 2</h5>
        <div className="allsubjcontainer">
          <StuSubject
            subject={details.subjectName4}
            faculty={details.facultyName4}
            selected={choice2}
            id={0}
            onSelect={selectChoice2}
            link={details.pdfUrl4}
          />
          <StuSubject
            subject={details.subjectName5}
            faculty={details.facultyName5}
            selected={choice2}
            id={1}
            onSelect={selectChoice2}
            link={details.pdfUrl5}
          />
          <StuSubject
            subject={details.subjectName6}
            faculty={details.facultyName6}
            selected={choice2}
            id={2}
            onSelect={selectChoice2}
            link={details.pdfUrl6}
          />
        </div>
      </div>
    </div>
  );
}

export default StuElective;
