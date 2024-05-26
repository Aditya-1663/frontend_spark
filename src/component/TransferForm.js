import React ,{useState,useContext} from 'react'
import '../style/CustomerList.css'
import '../style/Home.css'
import Datacontext from '../context/Datacontex'


const TransferForm = () => {
  const context=useContext(Datacontext)
  const {transfer}= context

  const [cardential,setcardential]=useState({name1:"",email1:"",name2:"",email2:"",transfer_amount:""})
  const handlesubmit=async(e)=>{
      setcardential({name1:cardential.name1,email1:cardential.email1,name2:cardential.name2,email2:cardential.email2,transfer_amount:cardential.transfer_amount})
        e.preventDefault();
        try {
         transfer(cardential.email1,cardential.email2,cardential.name1,cardential.name2,cardential.transfer_amount)
        
        } catch (error) {
           alert("transtions failed")
        }
         
          }
    const onchange=(e)=>{
            setcardential({...cardential,[e.target.name] : e.target.value})
          }



  return (
    <div style={{height:"78vh"}}>
    <div className='container myflex1  mb-4 mt-4' style={{  height:"auto"}}>
     Transfer Money</div>
     <div className='container p-3 pb-5' style={{ border:"2px white solid", height:"85%"}}>
     <div className='container  d-flex justify-content-center mt-2 '  style={{  height:"auto"}}>
     <form onSubmit={ handlesubmit} style={{  width:"70%"}}>
      <h3>Detail of Appitcant:-</h3>
      <div className='row  d-flex justify-content-center  '>
       <div className="col-lg col-md-6 mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input  required onChange={onchange} type="text"  value={cardential.name1} name='name1' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
      <div className="col-lg col-md-6 mb-4">
    <label htmlFor="exampleInputEmail1" className="form-label">Email ID</label>
  <input  required onChange={onchange} type="email" className="form-control"  value={cardential.email1} name='email1' id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
</div>
</div>
<h3>Detail of Beneficiary:-</h3>
<div className='row  d-flex justify-content-center  '>
       <div className="col-lg col-md-6 mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
      <input  required onChange={onchange} type="text" className="form-control" id="exampleInputEmail1"  value={cardential.name2} name='name2' aria-describedby="emailHelp"/>
   </div>
      <div className="col-lg col-md mb-4">
    <label htmlFor="exampleInputEmail1" className="form-label">Email Id</label>
  <input  required onChange={onchange} type="email" className="form-control"  value={cardential.email2} name='email2' id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
</div>
</div>
<h3>Enter the amount to transfer:-</h3>
<div className='row  d-flex justify-content-center  '>
       <div className="col-lg col-md-6 mb-4">
      
      <input  required onChange={onchange} type="number" className="form-control"  value={cardential.transfer_amount} name='transfer_amount' id="exampleInputEmail1" style={{width:"60%"}} aria-describedby="emailHelp"/>
   </div>
      
</div>
<div className=' d-flex justify-content-center'>

<button type="submit" className="btn " style={{border:"2px white solid"}}>Transfer</button>
</div>
</form>


    </div>
</div>
  </div>
  )
}

export default TransferForm
