import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Adduser() {
    
  
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      // console.log({name,email})
      const objUser = {name,email};


  
      // fetch("",{})
  
      fetch('http://localhost:4500/users',{
          method:"post",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(objUser)
  
      })
      .then((res)=>{
          if(res)
              {
                  alert("user added..!");
                  navigate('/Home')
              }
      })
      
           
      // .then((res)=>{return res.json()})
      // .then((data)=>{console.log(data)})
  
    }
    
  return (
    <>
    <div className='text-start'>

        <form className='border m-auto rounded w-50 p-4 mt-5' onSubmit={handleSubmit}>
  <div className="form-group">
    <label className='fs-3' for="Name">Name</label>
    <input type="text" onChange={(e)=>{
        setname(e.target.value)
    }} className="form-control" id="Name"   placeholder="Enter your name here"/>
    
  </div>
  <div className="form-group">
    <label className='fs-3 mt-3' for="exampleInputEmail1">Email address</label>
    <input type="email" 
     onChange={(e)=>{
      setEmail(e.target.value)
     }}
    className="form-control" id="exampleInputEmail1" placeholder="Enter your Email here"/>
  </div>
  <button type="submit" className="btn mt-3 btn-primary">Submit</button>
  <Link to="/Home" className='btn btn-warning mt-3 ms-3'>Go back</Link>
</form>


    </div>
    </>
  )
}

export default Adduser