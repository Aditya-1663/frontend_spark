import '../style/Footer.css'
import React from 'react'
import { Link} from 'react-router-dom';


const Footer = () => {
    return (
        <div className='container-fluid tomargin' >
            <hr className="" />

            <div className="bg-dark text-center text-white  footer"  >

                <div className="container p-4 mb-3 myflexd flex-sm-row justify-content-center flex-row"   >
                    <section className="" style={{ width:"500px"}} >
                        

                            <div className="row d-flex justify-content-center  flex-column">
                                <div className="row-lg-2 col-md mb-4 mb-md-0"  >
                                    <h5 className="text-uppercase " style={{fontWeight:"bolder"}}>Our Services:-</h5>

                                </div>


                                <div className="col-lg col-md mb-4 mb-md-0">
                                   

                                    <ul className="list-unstyled mb-0">
                                        <li   >
                                           <Link to="/ViewAllAccount">
                <button type="button" style={{ border: "0px solid white" }} className="btn my-2 ">View Customer</button></Link>
                                        </li>
                                        <li>
                                           <Link to="/TranferFund">
                <button type="button" style={{ border: "0px solid white" }} className="btn my-2">Tranfer Fund</button></Link>
                                        </li>
                                        <li>
                                           <Link to="/TransferHistory">
                <button type="button" style={{ border: "0px solid white" }} className="btn my-2 ">View Transaction</button></Link>
                                        </li>
                                       

                                    </ul>
                                </div>
                              
                               




                            </div>

                        
                    </section>
                    <div className="container p-4 mb-3 display-6 d-flex justify-content-center flex-column  myfont"  >
                        <img className='d-flex justify-content-center' src="https://cdn-icons-png.flaticon.com/128/4519/4519107.png" style={{height:"90px",width:"100px", margin:"0 45%"}}>
                            </img>
                            <div   >

                            Spark Bank Of India</div>
                            </div>





                    <section className="m-3"style={{ width:"500px"}} >
                    <div className="row  ">
                                <div className="row-lg-2 col-md mb-4 mb-md-0"  >
                                    <h5 className="text-uppercase " style={{fontWeight:"bolder"}}>Contant Us:-</h5>

                                </div>
                                <div className='myfont '>
                                    
                                    <p>Mobile Number:- 1234567890</p>
                                    <p>Email Id:- sparkfoundation@gmail.com</p>
                                </div>
                         <div>
                        <a className="btn btn-outline-light btn-floating mx-1 mb-3" href="https://www.facebook.com/thesparksfoundation.info" role="button"
                        ><i className="fab fa-facebook-f"></i></a>


                        <a className="btn btn-outline-light btn-floating mx-1 mb-3" href="https://twitter.com/tsfsingapore" role="button"
                        ><i className="fab fa-twitter"></i></a>

                        <a className="btn btn-outline-light btn-floating mx-1 mb-3" href="https://internship.thesparksfoundation.info/" role="button"
                        ><i className="fab fa-google"></i></a>

                        <a className="btn btn-outline-light btn-floating mx-1 mb-3" href="https://www.linkedin.com/company/the-sparks-foundation/" role="button"
                        ><i className="fab fa-linkedin-in"></i></a>
</div>


</div>


                    </section>


                </div>


            </div>


        </div>
    );
};

export default Footer
