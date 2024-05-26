
import './App.css';
// import './my.css'
import {
  BrowserRouter as Router,
  
  Route,  Routes
  
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';

import ListTable from './component/ListTable';
import Datalist from './context/Datalist';
import Profile from './component/Profile';
import Transfer from './component/Transfer';
import TransferHistory from './component/TransferHistory';
import TransferForm from './component/TransferForm';
import Addcustomer from './component/Addcustomer';

function App(props) {
  // alert(props.View)
  return (
    <div>
      <Router>
      <Datalist>
      <Navbar/>
   {/* <ListTable/> */}
   {/* <TransferForm/> */}
      
     {/* <Profile/> */}
     {/* <Transfer/> */}
     {/* <TransferHistory/> */}
      {/* <Home/>  */}
      {/* <Addcustomer/> */}
    <Routes>
         <Route exact path="/ViewAllAccount/tranferprofile" element={  <Transfer/>} />
         <Route exact path="/ViewAllAccount/profile" element={  <Profile />} />
         <Route exact path="/ViewAllAccount" element={ <ListTable/>} />
         <Route path="/addcustomer" element={ <Addcustomer/>} />
         
         <Route path="/TranferFund" element={<TransferForm/>}/>
         <Route path="/TransferHistory" element={ <TransferHistory/>}/>
         {/* <Route path="/Transfer" element={<Transfer/>} /> */}
               <Route path="/" element={<Home/>} />
         </Routes>
      

     <Footer/>
     </Datalist>
      </Router>
    </div>
  );
}

export default App;
