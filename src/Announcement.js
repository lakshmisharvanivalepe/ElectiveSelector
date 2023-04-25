import React, {useState, useEffect} from 'react';
import "./Announcement.css";

function Announcement() {
  const [info, setInfo] = useState([]);

  const loadInfo = async () =>{
    const response = await fetch(
      "https://electiveselector.onrender.com/announcement"
    );
    const ans = await response.json();
    console.log(ans.message);
    setInfo(ans.message);
  }

  useEffect( () => {
    loadInfo();
  }, [])

  return (
    <div className="purpbox">
      {/* <div className="card msg "> */}
      {info.map((post) => (
        <div className="card msg ">
          <p
            style={{
              textAlign: "left",
              fontSize: "0.8rem",
              fontWeight: "600",
            }}
          >
            Electives for Semester {post.semNum} has been released. The name of
            the courses offered for "Elective {post.electiveNum}" are given as
            follows:
            <br></br>
            1) {post.sub1.subTitle}: {post.sub1.facultyName}
            <br></br>
            2) {post.sub2.subTitle}: {post.sub2.facultyName}
            <br></br>
            {/* {post.sub3.subTitle !== "NA"
              ? `3) ${post.sub3.subTitle}: ${post.sub3.facultyName}`
              : ``} */}
            {post.sub3.subTitle !== 'NA' && (
        <p>
          3) {post.sub3.subTitle}: {post.sub3.facultyName}
        </p>
      )}
          </p>
          <p
            style={{
              textAlign: "right",
              fontSize: "0.6rem",
              fontWeight: "700",
            }}
          >
            {post.addedBy} {post.addedTime}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Announcement