import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import StuElective from "./StuElective";
import { Route, Routes } from "react-router";
import Feedback from "./Feedback";

function Home(props) {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
const [details, setDetails] = React.useState(null);
const [isLoading, setIsLoading] = React.useState(true);

React.useEffect(() => {
  const getDetails = async () => {
    const email = { userEmail: props.emailid };
    // try {
      const response = await fetch(
        "https://electiveselector.onrender.com/selectedElectives",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(email)
        }
      );
      
      const result = await response.json();
      const receivedMessage = result.message;
      console.log(receivedMessage);
      setDetails({
        subjectName1: receivedMessage.sub1.subTitle,
        subjectName2: receivedMessage.sub2.subTitle,
        facultyName1: receivedMessage.sub1.facultyName,
        facultyName2: receivedMessage.sub2.facultyName
      });
      setIsLoading(false);
      // console.log(details);
    // } catch (error) {
    //   console.error(error);
    //   setDetails("An Error has occured!");
    // }
  };

  getDetails();
}, []);

  if(isLoading) return <p>loading...</p>

  const {subjectName1, subjectName2, facultyName1, facultyName2} = details;

  return (
    <div className="stuHome">
      <Navbar screen={"stu"} />
      <div style={{position: "relative", top: "5rem"}} className="student">
        <Routes>
          <Route path="/" element={<>
            <>
              <h4 className="heading">Welcome, Sanskruti</h4>
              <div className="card">
                <div className="card-body">Semester 6</div>
              </div>
              <h4 style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                Selected Electives
              </h4>
              <div className="row">
                <div className="col-2"></div>
                <ol
                  className="col-6 elective-list"
                  style={{ margin: "auto", fontSize: "1rem", fontWeight: "700" }}
                >
                  <li>
                    <div className="electiveBox">
                      <div className="card-body elective">
                        <h5 style={{ fontSize: "0.9rem", fontWeight: "700" }}>
                          {subjectName1}
                        </h5>
                        <p style={{ fontSize: "0.7rem", marginBottom: "0.4rem" }}>
                          {facultyName1}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="electiveBox">
                      <div className="card-body elective">
                        <h5 style={{ fontSize: "0.9rem", fontWeight: "700" }}>
                          {subjectName2}
                        </h5>
                        <p style={{ fontSize: "0.7rem", marginBottom: "0.4rem" }}>
                          {facultyName2}
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </>
          </>} />
          <Route path="/announcement" element={<Announcement screen={"stu"} />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/elecSelec" element={<StuElective />} />
        </Routes>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
