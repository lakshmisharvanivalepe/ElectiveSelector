import React from 'react';
import "./ElectiveList.css"

function ElectiveList() {
  return (
    <div>
        {/* <h4 className="heading">Semester 5 - Elective 1</h4> */}
        <div className="subheadingList">
            <h5 style={{ fontSize: "1.6rem", fontWeight: "700"}}>Semester 5 <span style={{ fontSize: "1.1rem", fontWeight: "700"}}>(Elective 1)</span></h5>
            <button className="exportbtn">Export as Sheets</button>
        </div>
        <div className="electiveCd tablebg">
            <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr style={{backgroundColor:"#CFE0F8"}}>
                <th scope="col">S.no</th>
                <th scope="col">Name</th>
                <th scope="col">Subject</th>
                <th scope="col">Roll no.</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Sanskruti Shahu</td>
                <td>AGT</td>
                <td>LCS2020056</td>
                </tr>
            </tbody>
            </table>
        </div>
     </div>
  )
}

export default ElectiveList