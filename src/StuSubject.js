import React,{useState} from 'react';
import "./StuSubject.css";
import { DialogTitle } from '@mui/material';
// import App from './App'
import Dialog from "@mui/material/Dialog";
import firebase from "firebase/compat/app";
import "firebase/storage";

function StuSubject(props) {
  
  const [openDialog, setDialog] = useState(false);
  // console.log(props.selected);
  //const [details, setDetails] = useState([]);

const mail=props.email;

  const handleRedirect = () => {
    window.open(props.link, '_blank'); // replace with your desired URL
  };


  const handleClose = () => {
    setDialog(false);
  };


  const openDialogBox = () => {
    setDialog(true);
  };
  var temp = ['0', '0', '0'];
  const i = props.id;

  const handleSubmit = () => {
    setDialog(false);
    temp[i] = "1";
    const s = temp[0] + temp[1] + temp[2];
    props.onSelect(s);

  }
  const selected = props.selected[i];

  const isDisabled = selected !== '2' || props.subject === "NA";
  let color = ''
  if(isDisabled) {
    color = selected === '1' ? 'green' : props.subject === "NA" ? 'gray' : 'gray'
  }
  let innertext = "Select";
  if(selected === '1') innertext = "Selected";

    return (
      <div className="card subjcard stusubj">
        <div className="card-body">
          <h5
            style={{
              fontSize: "1.1rem",
              fontWeight: "700",
              lineHeight: "1.5rem",
            }}
          >
            {props.subject}
          </h5>
          <p
            style={{
              fontSize: "0.87rem",
              fontWeight: "500",
              marginBottom: "0.4rem",
            }}
          >
            {props.faculty}
          </p>
          <div className="resbtn">
            <button
              className="defbtn"
              disabled={isDisabled && selected !== "1"}
              style={{
                backgroundColor:
                  props.subject === "NA" || selected === "0" ? "gray" : "",
              }}
              onClick={handleRedirect}
            >
              {" "}
              Resources
            </button>
            <button
              disabled={isDisabled}
              style={{
                backgroundColor: props.subject === "NA" ? "gray" : color,
              }}
              className="selectbtn defbtn"
              onClick={openDialogBox}
            >
              {" "}
              {innertext}
            </button>
          </div>
        </div>
        <Dialog onClose={handleClose} open={openDialog}>
          <DialogTitle> Confirm Dialog </DialogTitle>
          <h3
            style={{ marginTop: "-20px", padding: "2rem", fontSize: "1.1rem" }}
          >
            Are you sure to select the item?{" "}
          </h3>
          <br></br>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button
              className="dialougeboxbtn"
              style={{ backgroundColor: "red" }}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="dialougeboxbtn"
              style={{ backgroundColor: "green" }}
              onClick={handleSubmit}
            >
              Confirm
            </button>
          </div>
        </Dialog>
      </div>
    );
}

export default StuSubject;
