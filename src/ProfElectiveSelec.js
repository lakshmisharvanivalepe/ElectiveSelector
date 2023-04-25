import React, {useState}from 'react'
import Electivecard from './Electivecard'
import { selectClasses } from '@mui/material';

function ProfElectiveSelec(props) {
    const prof_email = props.email;
    var semesterNum = '5';
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
    };
    semesterNum = selectedOption;
  return (
    <div>
      <h4 className="heading">Elective Selection</h4>
      <select
        className="form-select card card-body"
        aria-label="Default select example"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Select Semester</option>
        <option value="5">Semester 5</option>
        <option value="6">Semester 6</option>
        <option value="7">Semester 7</option>
      </select>
      {/* here also we will have map */}
      <Electivecard number={1} prof_mail={prof_email} semNum={semesterNum} />
      <Electivecard number={2} prof_mail={prof_email} semNum={semesterNum} />
    </div>
  );
}

export default ProfElectiveSelec