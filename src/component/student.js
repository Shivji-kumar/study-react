import React from 'react'
 
function Student(props) {
    
    return (
        <div Style={{border:'1px solid blue'}}>
            <h1>Name:{props.name}</h1>
            <h2>Email:{props.email}</h2>
            <h3>Mobile:{props.mobile}</h3>
            <h1>Id:{props.id}</h1>
            <h1>Roll:{props.roll}</h1>
        </div>
    )
}

export default Student;
