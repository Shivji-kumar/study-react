import React from "react";
import Student from "./students";
import {useState, useEffect} from "react";

function HomeTable(props) {

    const editStudentHandler=props.editStudentHandler;
    var init_students  = [];
    const [students, setStudents]= useState(init_students);
    useEffect(()=>{
        fetch('http://localhost:2000/students')
        .then((res)=>{
            return res.json()})
            .then(students=>{console.log(students)
            setStudents(students);
        })
    },[]);

    const deleteHandler =(id)=>{
        console.log('calling delete '+id);

        const updatedStudents =students.filter(
            (student) => student.id !==id);
            console.log(updatedStudents);
            setStudents(updatedStudents);
    };
    const editHandler =(student)=>{
        console.log("student1:"+student);
        editStudentHandler(student);
    }
    return (
        <div className="homeTableStyle">
            {students.map((student)=>{
                return(
                    <student
                    name={student.name}
                    email={student.email}
                    marks={student.marks}
                    mobile={student.mobile}
                    key={student.id}
                    id={student.id}
                    deleteHandler={deleteHandler}
                    editHandler ={editHandler}/>
                );
            })}
        </div>
    );
 }
export default HomeTable;