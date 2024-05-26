// import React from 'react'
import React, { useEffect,useContext,useState } from 'react'
import Datacontext from '../context/Datacontex'
const Transfer = () => {
  const [cardential,setcardential]=useState({name:"",email:"",Mo_number:"",amount:"",address:"",account:""})
  const finddata= async()=>{
   
   
    const host = "http://localhost:5000"||"https://backend-spark.onrender.com";
   const response = await fetch(`${host}/addcustomer/finddata/${localStorage.getItem('localdata')}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
       
     }
   });
   const json=await response.json();
   setcardential(json.data)
   
  }
  useEffect(()=>{
    
    finddata();
 
  },[]) 
 
  // ////////////////////////////////////////////
  const context=useContext(Datacontext)
  const {transfer}= context
  const [transfermoney,settransfer]=useState({name1:"",email1:"",name2:"",email2:"",transfer_amount:""})
  const handlesubmit=async(e)=>{
      settransfer({name1:cardential.name,email1:cardential.email,name2:transfermoney.name2,email2:transfermoney.email2,transfer_amount:transfermoney.transfer_amount})
        e.preventDefault();
        try {
          transfer(transfermoney.email1,transfermoney.email2,transfermoney.name1,transfermoney.name2,transfermoney.transfer_amount)
         
         
        } catch (error) {
           alert("transtions failed")
        }
         
          }
    const onchange=(e)=>{
            settransfer({...transfermoney,[e.target.name] : e.target.value})
          }














  return (
    <div  style={{minHeight:"78vh"}}>
        <div className='container myflex1 mb-4 mt-4' style={{  height:"auto"}}>
        Transfer Money</div>
        <div className='container p-3 pb-5' style={{ border:"2px white solid", height:"85%" }}>

        <div className='container  d-flex justify-content-center mt-2'  style={{  height:"auto"}}>
       <form onSubmit={handlesubmit}  style={{  width:"70%"}}>
        <h3>Detail of Appitcant:-</h3>
        <div className='row  d-flex justify-content-center  '>
         <div className="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
        <label htmlFor="exampleInputEmail1"  style={{}}className="form-label">Name
        </label>
        <label htmlFor="exampleInputEmail1"  style={{marginLeft:"40px"}}className="form-label">
           {cardential.name}
        </label>
        
     </div>
        <div className="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
      <label htmlFor="exampleInputEmail1" className="form-label">Email Id</label>
    
      <label htmlFor="exampleInputEmail1"  style={{marginLeft:"40px"}}className="form-label">
            {cardential.email}
        </label>
   
  </div></div>
  <div className='row  d-flex justify-content-center  '>

        <div className="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
      <label htmlFor="exampleInputEmail1" className="form-label">Account Number</label>
      <label htmlFor="exampleInputEmail1"  style={{marginLeft:"40px"}}className="form-label">
            {cardential.account}
        </label>
   
  </div>
        <div className="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
      <label htmlFor="exampleInputEmail1" className="form-label">Amount</label>
      <label htmlFor="exampleInputEmail1"  style={{marginLeft:"40px"}}className="form-label">
            {cardential.amount}
        </label>
   
  </div>
  </div>
  <h3>Detail of Beneficiary:-</h3>
  <div className='row  d-flex justify-content-center  '>
         <div className="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input  required onChange={onchange} value={transfermoney.name2} name='name2' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     </div>
        <div className="col-lg col-md mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">Email Id</label>
    <input  required onChange={onchange} type="email" value={transfermoney.email2} name='email2' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  </div>
  <h3>Enter the amount to transfer:-</h3>
  <div className='row  d-flex justify-content-center  '>
         <div className="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
        
        <input  required onChange={onchange} value={transfermoney.transfer_amount} name='transfer_amount' type="number" className="form-control" id="exampleInputEmail1" style={{width:"60%"}} aria-describedby="emailHelp"/>
     </div>
        
  </div>
  <div className=' d-flex justify-content-center mb-5'>

  <button type="submit" className="btn " style={{border:"2px white solid"}}>Transfer</button>
  </div>
</form>


      </div>



        
        
        
        
        </div>
      
    </div>
  )
}

export default Transfer
