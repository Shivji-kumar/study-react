import React from 'react'
import {useState} from 'react';

function HomeForm() {

            const resetButtonStyle ={margin: '5px', padding: '3px', fontSize:'25px',backgroundColor:'red',borderRadius:'8px'};
            const submitButtonStyle ={margin: '5px', padding: '3px', fontSize:'25px',backgroundColor:'blue',borderRadius:'8px'};
           
            const empty_Student = {
                name:'',
                email:'',
                id:'',
                mobile:'',
                roll:'',
            };
            const [student, setStudent]=useState(empty_Student);

            const updateHandler =()=>{
                var student2={...student, mobile:'8886577585', roll:15,};
                setStudent(student2);
            }
            const resetHandler =()=>{
                setStudent(empty_Student);
            }
           const changeHandler = (event) =>{
                console.log("field Name: "+event.target.name);
                console.log("field Value: "+event.target.value);
                var student2={...student, [event.target.name]:event.target.value};
            setStudent(student2);
            }

            return (
                <div className="homeFormStyle">
                    <div style={{minHeight:'700px%'}}>
                        <h1>Name: <input type="text" id="studentName" name='name' value={student.name} onChange={(event)=>{changeHandler(event)}}/></h1>
                        <h1>Email: <input type="text" id="studentEmail" name='email' value={student.email} onChange={(event)=>{changeHandler(event)}} /></h1>
                        <h1>Id: <input type="text" id="studentId" name='id' value={student.id} onChange={(event)=>{changeHandler(event)}} /></h1>
                        <h1>Mobile: <input type="text" id="studentMobile" name='mobile' value={student.mobile} onChange={(event)=>{changeHandler(event)}} /></h1>
                        <h1>Roll: <input type="text" id="studentId" name='id' value={student.id} onChange={(event)=>{changeHandler(event)}} /></h1>
                        {/* </div><div style={{min/height:'100px', margin:'10px'}}>*/}
                        <input style={resetButtonStyle} type="submit" value="Reset" onClick={resetHandler}/>
                        <input style={submitButtonStyle} type="submit" value="save"/>
                        <input style={resetButtonStyle} type="submit" value="Update" onClick={updateHandler}/>

                        <button>Submit</button>

                    </div>
                </div>
    )
}

export default HomeForm
