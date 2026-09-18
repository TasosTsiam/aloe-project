import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AloeLogo from '../images/logo.svg';

function Nav() {

    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        if (menuOpened) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
        }

        return () => {
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
        };
    }, [menuOpened]);

    return (
        <nav className="navigation-container">
            <div
                className="nav-small-viewport container-fluid"
                style={{
                    position: 'relative',
                    zIndex: menuOpened ? 10000 : 'auto',
                }}
            >
                <Link className="navbar-brand" to="/homepage">
                    <img src={AloeLogo} alt="Aloe Logo"/>
                </Link>

                {menuOpened
                    ? <button className="close-modal" onClick={() => setMenuOpened(false)}>X</button>
                    : <button className="navbar-toggler d-flex flex-column gap-2" onClick={() => setMenuOpened(true)}>
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                    </button>
                }
            </div>

            {menuOpened && (
                <div className="modal-nav-list-wrapper d-flex flex-column">
                    <ul className="modal-nav-list text-nowrap d-flex flex-column gap-4">
                        <li><Link className="modal-nav-link" to="/homepage" onClick={() => setMenuOpened(false)}>Home</Link></li>
                        <li><Link className="modal-nav-link" to="/order" onClick={() => setMenuOpened(false)}>Order Online</Link></li>
                        <li><Link className="modal-nav-link" to="/login" onClick={() => setMenuOpened(false)}>Login</Link></li>
                    </ul>
                    <div className="footer-copyrights">
                        <h5 className="">© 2023 Thessaloeniki</h5>
                    </div>
                </div>
            )}
            <div className="nav-large-viewport container-fluid">
                <Link className="navbar-brand justify-content-start" to="/homepage">
                    <img src={AloeLogo} alt="Aloe Logo"/>
                </Link>
                <div className="nav-list-wrapper">
                    <ul className="nav-list d-flex text-nowrap">
                        <li><Link className="nav-link" aria-current="page" to="/homepage">Home</Link></li>
                        <li><Link className="nav-link" aria-current="page" to="/order">Order Online</Link></li>
                        <li><Link className="nav-link" aria-current="page" to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;