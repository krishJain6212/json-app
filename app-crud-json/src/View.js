import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewUser() {

    const [name,setname] = useState("");
    const [email,setEmail] = useState("") 
   const  {vId} = useParams();
   
   useEffect(()=>{
    // fetch('http://localhost:4500/users/'+vId)
    fetch(`http://localhost:4500/users/${vId}`)
    .then((res)=>{return res.json()})
    .then((data)=>{
        setname(data.name);
        setEmail(data.email)
    })
   },[])

  return (
    <div className='border rounded w-50 m-auto mt-5'>
      <h1 className='bg-danger text-light rounded-top mb-0 py-3'>
        id: {vId}
      </h1>
<div className=' text-start bg-success-subtle pb-5'>
      <h3 className='mx-3 pt-5'> <span className='text-success'>Name : </span>{name}</h3>
      <h3 className='mt-3 mx-3'> <span className='text-success'>Email : </span>{email}</h3>
      </div>
<div className='border-top '>
<Link to="/Home" className='btn btn-warning my-2 mx-4 '>Goback</Link>
</div>
</div>
   
  )
}

export default ViewUser