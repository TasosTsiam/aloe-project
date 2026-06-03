import React, { useState, useRef, useEffect } from 'react';
import AloeLogo from '../images/logo.svg';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

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

    // -------------------------------------------------------------   DRAGGING CODE    -------------------------------------------------------------


    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const dragOffsetRef = useRef(0);
    const startX = useRef(0);

    const containerRef = useRef(null);
    const loginRef = useRef(null);

    const containerWidthRef = useRef(0);
    const cardWidthRef = useRef(0);

    const [progress, setProgress] = useState(0);
    const startDragOffset = useRef(0);
    const progressRef = useRef(0);


    const handleMouseMove = (e) => {
        const offset = startDragOffset.current + (e.clientX - startX.current);
        setDragOffset(offset);
        dragOffsetRef.current = offset;
        const rawProgress = offset / (containerWidthRef.current - cardWidthRef.current);
        const clampedProgress = Math.max(0, Math.min(1, rawProgress));
        setProgress(clampedProgress);
        progressRef.current = clampedProgress;
    }

    const handleMouseUp = () => {
        setIsDragging(false);

        if (startDragOffset.current === 0) {

            if (dragOffsetRef.current >= (containerWidthRef.current - cardWidthRef.current) / 2) {
                setDragOffset(containerWidthRef.current - cardWidthRef.current);
                setProgress(1);
                dragOffsetRef.current = containerWidthRef.current - cardWidthRef.current;
            } else {
                setDragOffset(0);
                setProgress(0);
                dragOffsetRef.current = 0;
            }
        }
        else {
            if (dragOffsetRef.current > (containerWidthRef.current - cardWidthRef.current) / 2) {
                setDragOffset(containerWidthRef.current - cardWidthRef.current);
                setProgress(1);
                dragOffsetRef.current = containerWidthRef.current - cardWidthRef.current;
            } else {
                setDragOffset(0);
                setProgress(0);
                dragOffsetRef.current = 0;
            }
        }
    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }

    }, [isDragging])

    useEffect(() => {
        containerWidthRef.current = containerRef.current.offsetWidth;
        cardWidthRef.current = loginRef.current.offsetWidth;
    }, [])

    // -------------------------------------------------------------   DRAGGING CODE    -------------------------------------------------------------

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
        <div className="login-container d-flex" ref={containerRef}>
            <div className="login-signup-wrapper d-flex flex-column"
                style={{
                    transform: `translateX(${dragOffset}px)`,
                    transition: isDragging ? 'none' : 'transform 0.4s ease'
                }}
                ref={loginRef}
            >
                <div className="logo-brand d-flex align-items-center justify-content-center gap-3 p-3">
                    <div className="website-logo">
                        <img src={AloeLogo} alt="Aloe Logo"/>
                    </div>
                    <div className="website-brand">
                        Thess<span>aloe</span>niki
                    </div>
                </div>
                <div className="drag-arrow-right"
                    style={{opacity: 1 - progress}}
                    onMouseDown={(e) => {
                        setIsDragging(true);
                        startX.current = e.clientX;
                        startDragOffset.current = dragOffsetRef.current;
                    }}
                >
                    <RxDoubleArrowRight size={30}></RxDoubleArrowRight>
                </div>
                <div className="drag-arrow-left"
                    style={{opacity: progress}}
                    onMouseDown={(e) => {
                        setIsDragging(true);
                        startX.current = e.clientX;
                        startDragOffset.current = dragOffsetRef.current;
                    }}
                >
                    <RxDoubleArrowLeft size={30}></RxDoubleArrowLeft>
                </div>
                <div className="login-signup-contents">
                    <div className="signup-content d-flex flex-column align-items-center p-3"
                        style={{
                            opacity: Math.max(0, (progress - 0.5) * 2),
                            pointerEvents: progress < 0.5 ? 'none' : 'auto',
                            transition: isDragging ? 'none' : 'opacity 0.4s ease'
                        }}
                    >
                        <div className="d-flex flex-column text-center">
                            <div>Don't have an account? Sign Up!</div>
                            <div>...or drag the arrows to Log in</div>
                        </div>
                        <div className="signup-form d-flex flex-column justify-content-center mt-4 gap-4">
                            <form id="signup-form" className="signup-info d-flex flex-column align-items-center gap-1">
                                <div className="input-wrapper">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={loginData.username}
                                        onChange={handleLoginInputChange}
                                        className=""
                                    />
                                    {formErrors.username && <div className="input-error">{formErrors.username}</div>}
                                </div>
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
                                <div className="input-wrapper">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Confirm Password"
                                        value={loginData.password}
                                        onChange={handleLoginInputChange}
                                        className=""
                                    />
                                    {formErrors.password && <div className="input-error">{formErrors.password}</div>}
                                </div>
                            </form>
                            <button type="button" form="delivery-form" className="signup-button d-flex align-self-center justify-content-center mt-3" onClick={() => {
                                verifyUserInput();
                            }}>
                                <div>Sign Up</div>
                            </button>
                            <div className="or-wrapper d-flex justify-content-center gap-2 opacity-75">
                                <div className="line"></div>
                                <div>OR</div>
                                <div className="line"></div>
                            </div>
                            <button className="google-button d-flex justify-content-center align-items-center gap-2">
                                <FcGoogle></FcGoogle>
                                <div>Sign Up with Google</div>
                            </button>
                            <button className="apple-button d-flex justify-content-center align-items-center gap-2">
                                <FaApple></FaApple>
                                <div>Sign Up with Apple</div>
                            </button>
                        </div>
                    </div>
                    <div className="login-content d-flex flex-column align-items-center gap-5 p-3"
                        style={{
                            opacity: 1 - (progress * 2),
                            pointerEvents: progress > 0.5 ? 'none' : 'auto',
                            transition: isDragging ? 'none' : 'opacity 0.4s ease'
                        }}
                    >
                        <div className="d-flex flex-column text-center">
                            <div>Already have an account? Log in!</div>
                            <div>...or drag the arrows to Sign Up</div>
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
                            <button type="button" form="delivery-form" className="login-button d-flex align-self-center justify-content-center mt-4" onClick={() => {
                                verifyUserInput();
                            }}>
                                <div>Login</div>
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
                </div>
            </div>
            <div className="login-image-wrapper"
                style={{
                    opacity: 1 - progress,
                    pointerEvents: progress > 0.5 ? 'none' : 'auto',
                    transition: isDragging ? 'none' : 'opacity 0.4s ease'
                }}>

            </div>
            <div className="signup-image-wrapper"
                style={{
                    opacity: progress,
                    pointerEvents: progress > 0.5 ? 'none' : 'auto',
                    transition: isDragging ? 'none' : 'opacity 0.4s ease'
                }}>

            </div>
        </div>
    )
}

export default Login;