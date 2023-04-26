import React, { useState, useEffect } from "react";
import StuSubject from "./StuSubject";

function StuElective(props) {
 
  const [details, setDetails] = useState([]);
  const email = props.emailid;


  function getsem() {
    let s1 = email.substring(3, 7);
    console.log(s1);
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

  const getDetails = async () => {
    console.log(props.emailid);
    console.log(email);

    const ans = getsem();
    console.log(ans);

    const response = await fetch("https://electiveselector.onrender.com/sem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        semNum: ans,
        userEmail: "lcs2020048@iiitl.ac.in",
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
      facultyName6: sol.e2s3.facultyName
    });
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
            
          />
          <StuSubject 
            subject={details.subjectName2}
            faculty={details.facultyName2}
           
          />
            <StuSubject 
            subject={details.subjectName3}
            faculty={details.facultyName3}
           
          />
        </div>
      </div>
      <div className="electiveCd">
        <h5 className="heading elective">Elective 2</h5>
        <div className="allsubjcontainer">
          <StuSubject
            subject={details.subjectName4}
            faculty={details.facultyName4}
           
          />
          <StuSubject
            subject={details.subjectName5}
            faculty={details.facultyName5}
            
          />
          <StuSubject
            subject={details.subjectName6}
            faculty={details.facultyName6}
            
          />
        </div>
      </div>
    </div>
  );
}

export default StuElective;
