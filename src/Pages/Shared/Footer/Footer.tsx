import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='myfootecss'>
            <div className=" mt-5">
                <div className="card ">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h2 style={{ color: "#8ca3ba" }}>
                                        <img
                                            style={{
                                            width: "100px",
                                            height: "40px",
                                            marginRight: "10px",
                                            }}
                                            src="/logo.png"
                                            alt="SL-Voyager Logo"
                                        /><br></br>
                                        AI-Integrated Tourism Management System for Sri Lanka
                                        </h2>

                                </div>
                                <p className="card-text">
                                    Develop a secure and efficient blockchain-based medical records management system. By integrating advanced technologies such as blockchain, machine learning, natural language processing, and image processing, the system will provide a comprehensive solution for efficient and secure medical data management.

                                </p>
                                <div className="social mt-2 mb-3">
                                    <i className="fa fa-facebook-official fa-lg" onClick={() => { window.location.replace("") }}></i>
                                    <i className="fa fa-instagram fa-lg" onClick={() => { window.location.replace("") }}></i>
                                    <i className="fa fa-twitter fa-lg" onClick={() => { window.location.replace("") }}></i>
                                    <i className="fa fa-linkedin-square fa-lg" onClick={() => { window.location.replace("") }}></i>
                                    <i className="fa fa-github" onClick={() => { window.location.replace("https://github.com/Dananji-Siriwardana/SL-Voyager.git") }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Team Members</h5>
                            <ul>
                                <li>Tharaka Basuru</li>
                                <li>Nadara Peiris</li>
                                <li>Dananji Siriwardana</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Downloads</h5>
                            <ul className="card-text">
                                <li>Project Proposal</li>
                                <li>Project Charter</li>
                                <li>Log Book</li>
                                <li>Final Report</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Contact Us</h5>
                            <ul className="card-text">
                                <li>SLIIT</li>
                                <li>Malabe</li>
                                <li>Sri Lanka</li>
                                <li>076 6135565</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="row" style={{ fontSize: "10px", textAlign: "center" }}>
                        <div>
                            Designed and Developed by 24-25J-291 Team<br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;