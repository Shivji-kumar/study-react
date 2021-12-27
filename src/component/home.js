import React from "react";
import HomeForm from "./homeForm";
import HomeTable from "./homeTable";
import {useState} from "react";
//import Student from "./student" <Student/> ;

function Home() {
    const [edit, setEdit] = useState(false);
    var init_student ={
        id: "",
        name: "",
        email: "",
        mobile: "",
        marks: "",
    };
    const [editStudent, setEditStudent] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        marks: "",
    });
    const editStudentHandler =(student)=>{
        setEdit(true);
        setEditStudent(student);
    }
    return (
        <div className="homeStyle">
            <HomeTable editStudentHandler={editStudentHandler}/>
            {edit && <HomeForm editStudent= {editStudent} operation='edit'/>}
            {!edit && <HomeForm editStudent={init_student} operation='add'/>}
        </div>
    );

}

export default Home;
