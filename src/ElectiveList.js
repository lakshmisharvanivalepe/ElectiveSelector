import React from 'react';
import "./ElectiveList.css";
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ExportExcel from './ExportExcel';

function ElectiveList() {
    const location = useLocation();
    const { semNum, elecNum } = location.state;
    const [branches, setBranches] = useState();
    const [currbranchList, setCurrbranchList] = useState();
    const [subjects, setSubjects] = useState();
    const [currSubject, setCurrSubject] = useState();
    const [studentData, setStudentData] = useState();
    const [exportData, setExportData] = useState([]);

    useEffect(() => {
        const getDetails = async () => {
          
          try{
            console.log("sN "+semNum);
            const topass = {semNum: semNum, electiveNum: elecNum};
            console.log(topass);

            const response = await fetch(
              "https://electiveselector.onrender.com/branches",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(topass),
              }
            );

            
            const result = await response.json();
            const sol = result.message;
            setBranches(sol);
          } catch (error) {
            console.error(error);
          }
        };
      
    getDetails();
    
    }, []);

    const handleBranchChange = async (event) => {
        const selectedBranchString = event.target.value;
        console.log("val " + selectedBranchString);

        if(selectedBranchString=="default") 
        {
            console.log("def value ")
            setSubjects({});
            return;
        }
        const branchList  = selectedBranchString.split(",");

        setCurrbranchList(branchList);

        const topass = {semNum: semNum, electiveNum: elecNum, branchList: branchList};

        const response = await fetch(
            "https://electiveselector.onrender.com/subjects",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(topass),
            }
        );
        const result = await response.json();
        const sol = result.message;
        const obj = {
            subjectname1 : sol.sub1,
            subjectname2 : sol.sub2,
            subjectname3 : sol.sub3
        }
        setSubjects(obj);
    };

    const handleSubjChange = async (event) => 
    {
        const selectedSubjectString = event.target.value;
        console.log(selectedSubjectString)
        const subjectData  = selectedSubjectString.split(",");
        console.log(subjectData)
        const subject = subjectData[0];
        const proff = subjectData[1];

        setCurrSubject(subject);

        const sub = {subTitle:subject, facultyName:proff}

        const topass = {semNum: semNum, electiveNum: elecNum, sub:sub ,branchList: currbranchList}

        console.log("posting")
        console.log(topass)

        const response = await fetch(
            "https://electiveselector.onrender.com/semData",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(topass),
            }
        );
        const result = await response.json();
        const sol = result.message;

        console.log(sol);
        setStudentData(sol);

        sol && sol.map((student)=>{
            const email = student.userEmail.split("@");
            const rollNo = email[0];
            const currData = {Name: student.userName, Subject: student.sub.subTitle, RollNo: rollNo, Email: student.userEmail};
            setExportData(prevData => {
                console.log(prevData);
                return [...prevData, currData]
            })
        })
    };

    return (
    <div>
        <div className="subheadingList">
            <h5 style={{ fontSize: "1.6rem", fontWeight: "700"}}>Semester {semNum} <span style={{ fontSize: "1.1rem", fontWeight: "700"}}>(Elective {elecNum})</span></h5>
            <div>
            <select className="form-select" onChange={handleBranchChange}>
                <option value="default">Choose Branch</option>
                {branches && branches.map((branch) =>
                {
                    if(branch.length==0) 
                    {
                        return ;
                    }

                    let combinebranch='';
                    
                    branch && branch.map((eachbranch) => combinebranch=combinebranch+eachbranch+' | ')

                    combinebranch = combinebranch.substring(0, combinebranch.length - 3);
                    
                    return <option value={branch}>{combinebranch}</option>;
                })}
            </select>
            </div>
            <div>
            {subjects && 
            <select className="form-select" onChange={handleSubjChange}>
                <option value="default">Default</option>
                <>{subjects.subjectname1 && <option value={Object.values(subjects.subjectname1)}>{subjects.subjectname1.subTitle}</option>}
                  {subjects.subjectname2 && <option value={Object.values(subjects.subjectname2)}>{subjects.subjectname2.subTitle}</option>}
                  {subjects.subjectname3 && <option value={Object.values(subjects.subjectname3)}>{subjects.subjectname3.subTitle}</option>}</>
            </select>}
            </div>
            <ExportExcel excelData={exportData} fileName={"Semester"+semNum+"_Elective"+elecNum+"_"+currSubject} />
        </div>
        <div className="electiveCd tablebg">
            <table class="table table-striped table table-hover">
            <thead>
                <tr style={{backgroundColor:"#e7eaff"}}>
                <th scope="col">S.no</th>
                <th scope="col">Name</th>
                <th scope="col">Subject</th>
                <th scope="col">Roll no.</th>
                </tr>
            </thead>
            <tbody>
                {studentData ? (studentData.map((student,index) =>{
                    const email = student.userEmail.split("@");
                    const rollNo = email[0];
                    return (<tr key={index+1}>
                            <th scope="row">{index+1}</th>
                            <td>{student.userName}</td>
                            <td>{student.sub.subTitle}</td>
                            <td>{rollNo}</td>
                            </tr>)
                })) : <tr scope="row"></tr>}
            </tbody>
            </table>
        </div>
     </div>
  )
}

export default ElectiveList