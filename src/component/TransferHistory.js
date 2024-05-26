import React from 'react'
import  { useEffect,useContext } from 'react'
import '../style/CustomerList.css'
import '../style/Home.css'
import Datacontext from '../context/Datacontex'


const TransferHistory = () => {
    const context=useContext(Datacontext)
    const {hisdata,gethisdata}= context
    useEffect(()=>{
      

      gethisdata()

    
  },[]) 
    var a=1;
  return (
    <div style={{minHeight:"78vh"}}>
         <div className='container myflex1 mb-5 mt-5' style={{  height:"auto"}}>
        Transfer Money</div>


        <div className='container'>
<table className="table table-hover mytable" >
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Date</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Debits</th>
      <th scope="col">Credits</th>
      
    </tr>
  </thead>
  <tbody>

  

{hisdata &&hisdata.map((data)=>{ return(
    <tr>
    <th scope="row">{a++}</th>
    <td>{data.date}</td>
    <td>{data.nameFrom}</td>
    <td>{data.nameTo}</td>
    <td className='debits'>{data.Debits}</td>
    <td className='credits'>{data.Credits}</td>
  
    
  </tr> )})}
   
    
    
  </tbody>
</table>
        
</div>

      
    </div>
  )
}

export default TransferHistory
