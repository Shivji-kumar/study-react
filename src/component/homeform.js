import React from "react";
import { useState } from "react";

function HomeForm(props) {

    var editStudent = props.editStudent;
    var operation =props.operation;
    console.log("HomeForm:"+editStudent)
    const init_Student={
                id: editStudent.id,
                name: editStudent.name,
                email: editStudent.email,
                mobile: editStudent.mobile,
                marks: editStudent.marks,
            };
            const [student, setStudent]=useState(init_Student);

            const updatedHandler =()=>{
                var student2={...student, mobile:"8886577585", marks:95};
                setStudent(student2);
            }
            const initializeStudent =(id, name , email, marks, mobile )=>{
                const student ={
                    [id]: id,
                    [name]: name,
                    [email]: email,
                    [mobile]: mobile,
                    [marks]: marks,
                };
                console.log("student:" +student);
                setStudent(student);
            };
            const resetHandler =()=>{
                setStudent({
                    'name': '',
                    'id':'',
                    'email': '',
                    'mobile':'',
                    'marks':'',

                });
            };
           const changeHandler = (event) =>{
                console.log("field Name: "+event.target.name);
                console.log("field Value: "+event.target.value);
                var student2={...student, [event.target.name]: event.target.value };
            setStudent(student2);
            };
            const editHandler =()=>
            {
                console.log("Going to save student:"+student);

                fetch('http://localhost: 2000/students/'+student.id, { 
                    method:'PUT',
                    headers:{"Content-Type": "application/json"},
                    body:JSON.stringify(student)

                })
                .then((res)=>{
                    console.log("Data has been saved:"+res);
                    setStudent({
                        'name':'',
                        'id':'',
                        'email':'',
                        'mobile':'',
                        'marks':'',
                    });
                });
            };

            const saveHandler =()=>{
                console.log("Going to save student:"+ student);
                fetch('http://localhost:2000/students', {
                    method:'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(student)
                })
                .then((res)=>{
                    console.log("response:"+res);
                });

            };
            

            return (
                <div className="homeFormStyle">
                    <h1>Student Details:</h1>
                    <div style={{minHeight: "350px"}}>
                        <lebel>Name:</lebel>
                        <input 
                        type="text"
                        id="studentName"
                        name="name"
                        value={student.name}
                        onChange={(event)=>{
                            changeHandler(event);
                        }}/>
                        <lebel>Email:</lebel>
                        <input
                        type="text"
                        id="studentEmail"
                        name="eamil"
                        value={student.email}
                        onChange={(event)=>{
                            changeHandler(event);
                        }}/>

                       <lebel>mobile:</lebel>
                        <input
                        type="text"
                        id="studentMobile"
                        name="mobile"
                        value={student.mobile}
                        onChange={(event)=>{
                            changeHandler(event);
                        }}/>
                         <lebel>Marks:</lebel>
                        <input
                        type="text"
                        id="studentMarks"
                        name="marks"
                        value={student.Marks}
                        onChange={(event)=>{
                            changeHandler(event);
                        }}/>

                       <lebel>Id:</lebel>
                        <input
                        type="text"
                        id="studentId"
                        name="id"
                        value={student.id}
                        onChange={(event)=>{
                            changeHandler(event);
                        }}/>

                    </div><br/><br/>
                    <div style={{mingHeight: "50px", padding: "20px"}}>
                        <input 
                        className="resetButtonStyle"
                        type="submit"
                        value="Reset"
                        onClick={resetHandler}/>


                        { operation =='add' && <input className="submitButtonStyle" type="submit" value="Save" onClick={saveHandler}/>}
                        {operation =='edit' && <input className="submitButtonStyle" type="submit" value="Update" onClick={editHandler}/>}
                    </div>
                    </div>
    )
}

export default HomeForm;