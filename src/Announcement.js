import React from 'react';
import "./Announcement.css";

function Announcement(props) {
  return (
    <div className="purpbox">
      <div className="messages">
        <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Elective 1 Released : Algorithmic Graph Theory Dr. xyz Business Analytics by Dr. xyz Blockchain and Technology by Dr. xyz Click here to choose one.</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
        <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Electives for Semester 6 will be released soon.</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
        <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Electives for Semester 6 will be released soon. Electives for Semester 6 will be released soon.</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
        <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Search for the keywords to learn more about each warning.To ignore, add // eslint-disable-next-line to the line before.WARNING in [eslint] src\ProffesorHome.js Line 4:8:  'Electivecard' is defined but never used  no-unused-vars</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
      </div>
      <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Elective 1 Released : Algorithmic Graph Theory Dr. xyz Business Analytics by Dr. xyz Blockchain and Technology by Dr. xyz Click here to choose one.</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
        <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Elective 1 Released : Algorithmic Graph Theory Dr. xyz Business Analytics by Dr. xyz Blockchain and Technology by Dr. xyz Click here to choose one.</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
        <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Elective 1 Released : Algorithmic Graph Theory Dr. xyz Business Analytics by Dr. xyz Blockchain and Technology by Dr. xyz Click here to choose one.</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
        <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Elective 1 Released : Algorithmic Graph Theory Dr. xyz Business Analytics by Dr. xyz Blockchain and Technology by Dr. xyz Click here to choose one.</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
        <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Elective 1 Released : Algorithmic Graph Theory Dr. xyz Business Analytics by Dr. xyz Blockchain and Technology by Dr. xyz Click here to choose one.</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
        <div className="card msg ">
          <p style={{textAlign:"left", fontSize:"0.8rem", fontWeight:"600"}}>Elective 1 Released : Algorithmic Graph Theory Dr. xyz Business Analytics by Dr. xyz Blockchain and Technology by Dr. xyz Click here to choose one.</p>
          <p style={{textAlign:"right", fontSize:"0.6rem", fontWeight:"700"}}>Dr. Mainak Adhikari   23/03/23</p>
        </div>
      {props.screen==="prof" && 
        <div className="texting">
          <form className="InputandBtn">
            <textarea type="text"
              className="my-2 inputbox form-control"
              placeholder="Enter your Announcement"
              // value={inputval}
              // onChange={handleInput}
                rows="1"></textarea>
            <button type="submit" className="my-3 btn sendBtn" >
              Send
            </button>
          </form>
        </div>
      }
    </div>
  )
}

export default Announcement