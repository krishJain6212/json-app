import { Alert } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

const [Users, setUsers] = useState("")
const nav = useNavigate()
  useEffect(()=>{
      fetch('http://localhost:4500/users')
      .then((res)=>{return res.json()})
      .then(
        (data)=>{
          setUsers(data) 
        }
      ) 
    },[])
    const HandleView = (x)=>{
       nav('/view/'+x)
    }
    const HandleEdit = (x)=>{
      nav('/Edit/'+x)
    }
    const HandleDelete = (x)=>{
      fetch('http://localhost:4500/users/'+x,{
        method:"delete",
        headers:{"content-type":"application/json"},
      }) 
      window.location.reload();
      alert("user deleted..")
    }
  return (
    <div>
       <div className='text-start'> 
       <Link to="/User" className='btn btn-warning my-2 mx-4'>Add User</Link>
       </div>
    <table className="table"><thead><tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
   {Users && Users.map((v)=>(
     <tr key={v.id}>
     <th scope="row">{v.id}</th>
     <td>{v.name}</td>
     <td>{v.email}</td>
     <td>
       <button onClick={()=>{HandleView(v.id)}} className='btn btn-info'>View</button>
       <button onClick={()=>{HandleEdit(v.id)}} className='btn btn-success mx-3'>Edit</button>
       <button onClick={()=>{HandleDelete(v.id)}} className='btn btn-danger'>Delete</button>
     </td>
   </tr>
   ))}
  </tbody>
</table>
    </div>
  )
}

export default Home