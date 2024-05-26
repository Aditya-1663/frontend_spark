import React from "react";
import "../style/Home.css";
import { Link} from 'react-router-dom';

const Home = () => {

  return (
    <div className="mb-5" >
      <div className="container-fluid p-3  upper-box" style={{height:"auto",position:""}} >
        <div className="row container-fluid p-3">
          <div className="col container-fluid p-3">
            <div className=" mx-3 my-5">
              <h1 className="display-1 mt-3 mb-3 myfont">Spark Bank of India</h1>
              <p className="lead">Our Bank offers different type of accounts to meet your financial goals and secure your future. Choose from our wide range of deposit products that are specifically designed to keep your unique requirements in mind.</p>
              <hr className="my-4" />
              <p>A simple, convenient and hassle-free option to save and manage your money, open a savings account now. Enjoy an extensive range of features and benefits with Spark bank advantage saving account.</p>
              <div className=" text-center my-5"> <Link to="/addcustomer">
                <button type="button" style={{ border: "2px solid white" }} className="btn ">Add Customer</button></Link>
              </div>
            </div>


          </div>
          <div className="col container-fluid p-3 img-box"></div>
           {/* img is uploaded in css  */}
        </div>
      </div>


      <div className="container mycontainer display-1 mt-3 mb-3 myfont"><h1 className="display-3 mt-3 mb-3 myfont">Our services</h1></div>
      <div className="container ">





        <div className="row" >

          <div className="col-sm-4 pt-3">
            <div className="card pt-4">
              <img src="https://cdn-icons-png.flaticon.com/128/476/476863.png" className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title text-center text-center">Customers</h5>
                <p className="card-text text-center  text-center">List of all customer</p>
                <div className=" text-center"> <Link to="/ViewAllAccount">
                  <button type="button" className="btn ">List of customer</button></Link>
                </div>
              </div>
            </div>
          </div>




          <div className="col-sm-4 pt-3">
            <div className="card pt-4">
              <img src="https://cdn-icons-png.flaticon.com/128/3513/3513504.png" className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title text-center">Transfer Fund</h5>
                <p className="card-text text-center">Tranfer Money</p>
                <Link to="/TranferFund"><div className=" text-center"><button type="button" className="btn ">Tranfer Fund</button>
                </div></Link>
              </div>
            </div>
          </div>





          <div className="col-sm-4 pt-3">
            <div className="card pt-4">
              <img src="https://cdn-icons-png.flaticon.com/128/9770/9770860.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Transaction</h5>
                <p className="card-text text-center">View Transaction History</p>
                <div className=" text-center"> <Link to="/TransferHistory"><button type="button" className="btn ">Transactions</button>
                </Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>










    </div>
  );
};

export default Home;
