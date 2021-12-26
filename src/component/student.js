import React from 'react'
 
function Student(/*props*/{name, email, id, mobile, marks, deleteHandler, editHandler}) {
  //  console.log(props);
  // const {name, email, id, mobile,roll}=props;

    //var name = props.name;
   // var email = props.email;
   // var id  =props.id;
   // var mobile = props.mobile;
  //  var roll=props.roll;
  //  const deleteHandler1=(id)=>{
  //     console.log(id)
   //     alert('calling delete '+id);
//    }
    return (
        <div style={{border:'1px solid green'}}>
            <h1>Id: {id}</h1>
            <h1>Name: {name}</h1>
            <h1>Mobile: {mobile}</h1>
            <h1>Email: {email}</h1>
            <h1>marks: {marks}</h1>
            <input type="button" value="Edit" onCilient={()=>editHandler({'name' :name, 'email':email, 'id':id, 'mobile':mobile, 'marks':marks})}/><br/>
            <input type="button" value="Delete" onClick={()=>deleteHandler(id)}/>
            <br/>
            
        </div>
    )
}

export default Student;
