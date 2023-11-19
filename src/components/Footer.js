import React from 'react';
import { Link } from 'react-router-dom';
import AloeLogo from '../logo.svg';
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";


function Footer() {
    return (
        <div className="footer container-fluid d-flex flex-column">
            <div className="footer-main-content row d-flex">
                <div className="footer-hero d-flex col-12 col-lg-6 col-xl-6 col-xxl-6">
                    <Link className="footer-logo align-self-center" to="/homepage">
                        <img src={AloeLogo} alt="Aloe Logo"/>
                    </Link>
                    <div className="footer-headers d-flex align-self-center flex-column">
                        <h1 className="mb-5">
                            Thess<span>aloe</span>niki
                        </h1>
                        <h4>Authentic, pure, ours.</h4>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-between col-6">
                    <div className="d-flex row justify-content-end">
                        <ul className="footer-menu d-flex justify-content-between mb-0 col-8 col-lg-11">
                            <li className="mb-0">Home</li>
                            <li className="mb-0">About</li>
                            <li className="mb-0">Contact Us</li>
                            <li className="mb-0">Order Online</li>
                        </ul>
                    </div>
                    <div className="d-flex row justify-content-end">
                        <div className="d-flex justify-content-between align-items-center col-8 col-lg-11">
                            <p className="mb-0">Find us on Social Media</p>
                            <div className="footer-socials d-flex justify-content-between col-5">
                                <BsFacebook className="footer-socials-bslogo" />
                                <BsInstagram className="footer-socials-bslogo" />
                                <BsPinterest className="footer-socials-bslogo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyrights row d-flex justify-content-center">
                <h5 className="d-flex justify-content-center mb-0">© 2023 Thessaloeniki</h5>
            </div>
        </div>
    )
}

export default Footer;