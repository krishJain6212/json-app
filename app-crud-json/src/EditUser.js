import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
function EditUser() {

    const {eId} = useParams();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  useEffect(()=>{
    // fetch('http://localhost:4500/users/'+vId)
    fetch(`http://localhost:4500/users/${eId}`)
    .then((res)=>{return res.json()})
    .then((data)=>{
    //   console.log(data)
        setname(data.name);
        setEmail(data.email)
    })
   },[])


  

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log({name,email})
    const objUser = {name,email};

    // fetch("",{})

    fetch(`http://localhost:4500/users/${eId}`,{
        method:"put",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(objUser)

    })
    .then((res)=>{
        if(res)
            {
                alert("user updated..!");
                navigate('/Home')
            }
    })
    // .then((res)=>{return res.json()})
    // .then((data)=>{console.log(data)})

  }

  return (
    <div>
      <div className="m-auto w-50 border mt-5">
        <div className="row" >
          <div className="px-5 py-4">
            <div>
              <h1>Edit user deatils</h1>
            </div>
           
            <form onSubmit={handleSubmit}>

            <div className="mb-3 text-start">
                <label for="formGroupExampleInput" className="form-label fw-bold fs-5">
               Id
                </label>
                <input
                disabled={true}
                  type="text"
                  value={eId}
                 onChange={()=>{setname("sfd")}}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter name..."
                />
              </div>
              <div className="mb-3 text-start">
                <label for="formGroupExampleInput" className="form-label fw-bold fs-5">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter name..."
                />
              </div>

              <div className="mb-3 text-start">
                <label for="formGroupExampleInput" className="form-label fw-bold fs-5">
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter email..."
                />
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary me-3">
                  Update{" "}
                </button>
                <Link to="/Home" className="btn btn-warning">
                {" "}
                Go Back
              </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
</div>
  );
}

export default EditUser;