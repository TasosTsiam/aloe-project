import React, { useState } from 'react';
import AloeLogo from '../images/logo.svg';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Login() {

    // -------------------------------------------------------------   LOGIN FORM CODE    -------------------------------------------------------------

    const [loginData, setLoginData] = useState({
            username: "",
            password: "",
        });

    const handleLoginInputChange = (e) => {
        const {name, value} = e.target;

        setLoginData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const [rememberMe, setRememberMe] = useState(false);

    // -------------------------------------------------------------   LOGIN FORM CODE    -------------------------------------------------------------

    // -------------------------------------------------------------   CHECK VALID INPUT CODE    -------------------------------------------------------------

    const [formErrors, setFormErrors] = useState({});

    const isEmpty = (value) => !value.trim();

    const verifyUserInput = (e) => {

        const errors = {};

        if (isEmpty(loginData.username)) {
            errors.username = "Required";
        }

        if (isEmpty(loginData.password)) {
            errors.password = "Required";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return false;
        }

        setFormErrors({});
        return true;
    };

    // -------------------------------------------------------------   CHECK VALID INPUT CODE    -------------------------------------------------------------

    return (
        <div className="login-container d-flex container">
            <div className="login-info-wrapper d-flex flex-column align-items-center gap-5">
                <div className="logo-brand d-flex align-items-center gap-3">
                    <div className="website-logo">
                        <img src={AloeLogo} alt="Aloe Logo"/>
                    </div>
                    <div className="website-brand">
                        Thess<span>aloe</span>niki
                    </div>
                </div>
                <div className="">
                    Already have an account? Log in!
                </div>
                <div className="login-form d-flex flex-column justify-content-center gap-4">
                    <form id="login-form" className="login-info d-flex flex-column align-items-center gap-4">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={loginData.username}
                                onChange={handleLoginInputChange}
                                className=""
                            />
                            {formErrors.username && <div className="input-error">{formErrors.username}</div>}
                        </div>
                        <div className="input-wrapper">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={handleLoginInputChange}
                                className=""
                            />
                            {formErrors.password && <div className="input-error">{formErrors.password}</div>}
                        </div>
                    </form>
                    <div className="remember-forgot d-flex justify-content-between">
                        <div className="remember-me d-flex gap-2">
                            <button
                                className="remember-button d-flex justify-content-center align-items-center align-self-center"
                                onClick={() => {
                                    setRememberMe(!rememberMe);
                                    }
                                }
                            >
                                {rememberMe && (<div className={`remember-background`}></div>)}
                            </button>
                            <p className="text-start mb-0">
                                Remember me
                            </p>
                        </div>
                        <div className="forgot-pass">
                            Forgot Password?
                        </div>
                    </div>
                    <button type="button" form="delivery-form" className="login-button d-flex align-self-center justify-content-center" onClick={() => {
                        verifyUserInput();
                    }}>
                        Login
                    </button>
                    <div className="or-wrapper d-flex justify-content-center gap-2 opacity-75">
                        <div className="line"></div>
                        <div>OR</div>
                        <div className="line"></div>
                    </div>
                    <button className="google-button d-flex justify-content-center align-items-center gap-2">
                        <FcGoogle></FcGoogle>
                        <div>Login with Google</div>
                    </button>
                    <button className="apple-button d-flex justify-content-center align-items-center gap-2">
                        <FaApple></FaApple>
                        <div>Login with Apple</div>
                    </button>
                </div>

            </div>
            <div className="login-image-wrapper">

            </div>
        </div>
    )
}

export default Login;