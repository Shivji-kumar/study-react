import React from "react";
import Student from "./student";

function HomeTable() {
    var students =[
        { name: "Kishu", roll: "89", mobile: "+9177637378"},
        { name: "Madhav", roll: "84", mobile: "+9170037378"},
        { name: "Kishan", roll: "85", mobile: "+917737378"},
        { name: "Keshav", roll: "87", mobile: "+9172237378"},
    ];
    const studentList= students.map((student) =>
    <Student name={students[0].name} roll={students[0].roll} mobile={students[0].mobile}/>
    ); 
    return(
       /*} <div className="homeTableStyle">
            <Student name={students[0].name} marks={students[0].marks} mobile={students[0].mobile} enrol={students[0].enrol}/>
            <Student name={students[1].name} marks={students[1].marks} mobile={students[1].mobile} enrol={students[1].enrol}/>
            <Student name={students[2].name} marks={students[2].marks} mobile={students[2].mobile} enrol={students[2].enrol}/>
            <Student name={students[3].name} marks={students[3].marks} mobile={students[3].mobile} enrol={students[3].enrol}/>
    </div>*/
     <div className="homeTableStyle">
           {studentList}
       </div>
    );
}


export default HomeTable;
