import React from 'react'
import '../style/Navbar.css'
import { Link,useLocation } from 'react-router-dom';

const Navbar = () => {
  const path=useLocation();
  return (
    <div>
      
      <nav className="navbar navbar-area navbar-area-2 navbar-expand-lg bg-body-tertiary mb-3 " data-bs-theme="dark">
  <div className="container-fluid"style={{height:"80%"}}>
    <Link className="navbar-brand  setimg" to="/"><img src="https://cdn-icons-png.flaticon.com/128/4519/4519107.png"></img>
      Spark Bank Of India</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav nav justify-content-end mx-5">
        <li className="nav-item mx-5 ">
          <Link className={`nav-link ${path.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-5 ">
          <Link className={`nav-link ${path.pathname==='/addcustomer'?'active':''}`} aria-current="page" to="/addcustomer">Add Customer</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className={`nav-link ${path.pathname==='/ViewAllAccount'?'active':''}`} to="/ViewAllAccount">View all accounts</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className={`nav-link ${path.pathname==='/TranferFund'?'active':''}`} to="/TranferFund">Transfer Fund</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className={`nav-link ${path.pathname==='/TransferHistory'?'active':''}`} to="/TransferHistory">Transaction</Link>
        </li>
      
    
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
