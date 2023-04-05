import React from 'react';
import "./StuSubject.css";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

function StuSubject() {

  const [openDialog, handleDisplay] = React.useState(false);

  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };

  return (
    <div className="card subjcard stusubj">
      <div className="card-body">
        <h5 style={{ fontSize: "1rem", fontWeight: "700", lineHeight: "1.5rem"}}>Algorithmic </h5>
        <p style={{ fontSize: "0.7rem", fontWeight: "500",marginBottom: "0.4rem" }}>Dr. Mary Samuel</p>
        <button className="defbtn"> Resources</button>
        <button className="selectbtn defbtn" onClick={openDialogBox} > Select</button>
      </div>
      <Dialog onClose = {handleClose} open = {openDialog}>
        <DialogTitle> Confirm Dialog </DialogTitle>
        <h3 style={{marginTop: "-20px", padding: "2rem", fontSize: "1.1rem"}}>Are you sure to select the item?  </h3>
        <br></br>
        <div style = {{display:"flex", flexDirection:"row"}}>
            <button className="dialougeboxbtn" style={{backgroundColor:"red"}} onClick = {handleClose}>
              Cancel
            </button>
            <button className="dialougeboxbtn" style={{backgroundColor:"green"}} onClick = {handleClose}>
              Confirm
            </button>
        </div>
      </Dialog>
    </div>
  )
}

export default StuSubject