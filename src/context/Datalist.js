import React from 'react'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

import Datacontext from "./Datacontex";
const host = "http://localhost:5000"||"https://backend-spark.onrender.com";


const Datalist = (props) => {
  const navigate = useNavigate();


    // const [data,setdata]=useState(indata)
//  console.log(data)
 const getcustomerdata = [];

  const [data,setdata] = useState(getcustomerdata);

  //get notes

  const getdata = async () => {
    // console.log("hgfj")
    const response = await fetch(`${host}/addcustomer/allcustomers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       
      },
    });
   
    const jsonData = await response.json();
    
    setdata(jsonData);
   
  };

const transfer =async(email1,email2,name1,name2,transfer_amount)=>{
  const response = await fetch(`${host}/tranfermoney/transfer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
     // "auth-token":[ localStorage.getItem('token')] 
      // "auth-token":localStorage.getItem('token'),
    },
    body: JSON.stringify({email1,email2,name1,name2,transfer_amount }),
  });
 const json= await response.json()
  alert(json.error)
   if(json.success){
    navigate("/TransferHistory")
   }

  // alert(json.success)
  // return json.success;

}

// 
// Transaction History


const gethistory = [];

const [hisdata,sethisdata] = useState(gethistory);



const gethisdata = async () => {
 
  const response = await fetch(`${host}/tranfermoney/transferHistory`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
     
    },
  });
 
  const jsonData = await response.json();
  
  sethisdata(jsonData);
 
};




  return (
    <Datacontext.Provider value={{data,setdata,getdata,transfer,hisdata,gethisdata}}> {props.children}</Datacontext.Provider>
)}

export default Datalist
