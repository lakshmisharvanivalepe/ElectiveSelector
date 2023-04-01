import React from 'react'
import Electivecard from './Electivecard'

function ProfElectiveSelec(props) {
    const prof_email = props.email;
  return (
    <div>
        <h4 className="heading">Elective Selection</h4>
        <select
          className="form-select card card-body"
          aria-label="Default select example"
        >
          <option value="5">Semester 5</option>
          <option value="6">Semester 6</option>
          <option value="7">Semester 7</option>
        </select>
        {/* here also we will have map */}
        <Electivecard number={1} prof_email={prof_email} />
        <Electivecard number={2} prof_email={prof_email} />
    </div>
  )
}

export default ProfElectiveSelec