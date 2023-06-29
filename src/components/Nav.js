import React from 'react';
import { Link } from 'react-router-dom';
import AloeLogo from '../logo.svg';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-center">
                <Link className="navbar-brand col-6 col-lg-4" to="/homepage">
                    <img src={AloeLogo} alt="Aloe Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-6 col-lg-8" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mb-2 mb-lg-0 text-nowrap">
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/homepage">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/homepage">Order Online</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/homepage">About</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/homepage">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;