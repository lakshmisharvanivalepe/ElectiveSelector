import React from 'react';
import StuSubject from './StuSubject';

function StuElective() {
  return (
    <div className="electiveCd">
      <h5 className="heading elective">Elective 1</h5>
      <div className="allsubjcontainer">
      <StuSubject />
      <StuSubject />
      <StuSubject />
      <StuSubject />
      </div>
    </div>
  )
}

export default StuElective