// import { useState } from "react"
import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Addcustomer = () => {
    const navigate = useNavigate();
    const [cardential,setcardential]=useState({name:"",email:"",Mo_number:"",number:"",address:""})
    const handlesubmit=async(e)=>{
      // alert((cardential.address))
        e.preventDefault();
        const host = "http://localhost:5000"||"https://backend-spark.onrender.com";
        const response = await fetch(`${host}/addcustomer/createuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify({name:cardential.name,email:cardential.email,Mo_number:cardential.Mo_number,number:cardential.number,amount:cardential.amount,address:cardential.address})
          });
          const json=await response.json();
          console.log(json)
 
          if(json.success){
            // save the token and redirect
            localStorage.setItem('localdata',(json.user._id))
            alert(" account has be created successfully")
           navigate("/ViewAllAccount/profile")
          }
          else{
            alert(json.success+",/n account not be created")
          } 
          }
    const onchange=(e)=>{
            setcardential({...cardential,[e.target.name] : e.target.value})
          }




  return (
    <div style={{height:"78vh"}}>
    <div className='container myflex1  mb-4 mt-4' style={{  height:"auto"}}>
     Add customer</div>
     <div className='container p-3 pb-5' style={{ border:"2px white solid", height:"85%"}}>
     <div className='container  d-flex justify-content-center '  style={{  height:"auto"}}>
     <form  style={{  width:"70%"}} onSubmit={handlesubmit}>
      <h3>Detail of Appitcant:-</h3>
      <div className='row  d-flex justify-content-center  '>
       <div className="col-lg col-md-6 mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input  required onChange={onchange} type="text" className="form-control" value={cardential.name} name='name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
      <div className="col-lg col-md-6 mb-4">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
  <input  required onChange={onchange} type="email" className="form-control" value={(cardential.email).toLowerCase()} name='email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
</div>
</div>
{/* <h3>Detail of Beneficiary:-</h3> */}
<div className='row  d-flex justify-content-center  '>
       <div className="col-lg col-md-6 mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">Moblie Number</label>
      <input  required onChange={onchange} type="number" className="form-control" value={cardential.Mo_number} name='Mo_number' id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
      <div className="col-lg col-md mb-4">
    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
  <input  required onChange={onchange} type="text" className="form-control" value={cardential.address} name='address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
</div>
</div>
<h3>Inital amount</h3>
<div className='row  d-flex justify-content-center  '>
       <div className="col-lg col-md-6 mb-4">
      
      <input  required onChange={onchange} type="number" className="form-control" value={cardential.amount} name='amount' id="exampleInputEmail1" style={{width:"60%"}} aria-describedby="emailHelp"/>
   </div>
      
</div>
<div className=' d-flex justify-content-center'>

<button type="submit" className="btn "  style={{border:"2px white solid"}}>Submit</button>
</div>
</form>


    </div>
</div>
  </div>
  )
}

export default Addcustomer
