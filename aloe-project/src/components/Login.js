import React, { useState, useRef, useEffect } from 'react';
import AloeLogo from '../images/logo.svg';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { RxDoubleArrowRight, RxDoubleArrowLeft} from "react-icons/rx";
import { VscArrowSwap } from "react-icons/vsc";

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

    // -------------------------------------------------------------   SIGNUP FORM CODE    -------------------------------------------------------------

    const [signupData, setSignupData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const handleSignupInputChange = (e) => {
        const {name, value} = e.target;

        setSignupData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    // -------------------------------------------------------------   SIGNUP FORM CODE    -------------------------------------------------------------

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
        const clampedOffset = Math.max(0, Math.min(containerWidthRef.current - cardWidthRef.current, offset));

        setDragOffset(clampedOffset);
        dragOffsetRef.current = clampedOffset;
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

    const [isMobileLayout, setIsMobileLayout] = useState(
        window.matchMedia('(max-width: 799.98px)').matches
    );

    useEffect(() => {
        const query = window.matchMedia('(max-width: 799.98px)');
        const handleChange = (e) => setIsMobileLayout(e.matches);
        query.addEventListener('change', handleChange);
        return () => query.removeEventListener('change', handleChange);
    }, []);

    const [isLoginContent, setIsLoginContent] = useState(true)
    const [isSignupContent, setIsSignupContent] = useState(false)

    useEffect(() => {

        if (isMobileLayout) {
            return;
        }

        const observer = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target === containerRef.current) {
                    containerWidthRef.current = entry.target.offsetWidth;
                }
                if (entry.target === loginRef.current) {
                    cardWidthRef.current = entry.target.offsetWidth;
                }
            });

            const newDragOffset = progressRef.current * (containerWidthRef.current - cardWidthRef.current);

            setDragOffset(newDragOffset);
            dragOffsetRef.current = newDragOffset;
        });

        observer.observe(containerRef.current);
        observer.observe(loginRef.current);

        return () => observer.disconnect();
    }, [isMobileLayout]);

    // -------------------------------------------------------------   DRAGGING CODE    -------------------------------------------------------------

    // -------------------------------------------------------------   CHECK VALID INPUT CODE    -------------------------------------------------------------

    const [loginErrors, setLoginErrors] = useState({});
    const [signupErrors, setSignupErrors] = useState({});

    const isEmpty = (value) => !value.trim();

    const verifySignupInput = (e) => {

        const errors = {};

        if (isEmpty(signupData.email)) {
            errors.email = "Invalid email";
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-z_A-Z]{2,6}$/.test(signupData.email)) {
            errors.email = "Invalid email";
        }

        if (isEmpty(signupData.username)) {
            errors.username = "Required";
        }
        else if (!/^[a-zA-Z -]{2,25}$/.test(signupData.username)) {
            errors.username = "English letters, between 2-25 length"
        }

        if (isEmpty(signupData.password)) {
            errors.password = "Required";
        }
        else if (!/^.{8,20}$/.test(signupData.password)) {
            errors.password = "Length must be between 8-20 charachers"
        }
        if (signupData.password !== signupData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match"
        }

        if (Object.keys(errors).length > 0) {
            setSignupErrors(errors);
            return false;
        }

        setSignupErrors({});
        return true;
    };

    const verifyLoginInput = (e) => {

        const errors = {};

        if (isEmpty(loginData.username)) {
            errors.username = "Required";
        }

        if (isEmpty(loginData.password)) {
            errors.password = "Required";
        }

        if (Object.keys(errors).length > 0) {
            setLoginErrors(errors);
            return false;
        }

        setLoginErrors({});
        return true;
    };

    // -------------------------------------------------------------   CHECK VALID INPUT CODE    -------------------------------------------------------------

    return (
        <div className="login-container d-flex" ref={containerRef}>
            {isMobileLayout
            ?
                (
                    <div className="mobile-version d-flex">
                        <div className="login-signup-wrapper d-flex flex-column">
                            <div className="logo-brand d-flex align-items-center justify-content-center gap-3 p-3">
                                <div className="website-logo">
                                    <img src={AloeLogo} alt="Aloe Logo"/>
                                </div>
                                <div className="website-brand">
                                    Thess<span>aloe</span>niki
                                </div>
                            </div>
                            <div className="switch-arrows"
                                onClick={() => {setIsLoginContent(!isLoginContent); setIsSignupContent(!isSignupContent)}}
                            >
                                <VscArrowSwap size={30}></VscArrowSwap>
                            </div>
                            {/* <div className="drag-arrow-left"
                                onMouseDown={(e) => {

                                }}
                            >
                                <RxDoubleArrowLeft size={30}></RxDoubleArrowLeft>
                            </div> */}
                            <div className="login-signup-contents">
                                <div className={`signup-content d-flex flex-column align-items-center p-3 ${isSignupContent ? "" : "is-hidden"}`}>
                                    <div className="d-flex flex-column text-center">
                                        <div>Don't have an account? Sign Up!</div>
                                        <div>...or click the arrows to Log in</div>
                                    </div>
                                    <div className="signup-form d-flex flex-column justify-content-center mt-4 gap-4">
                                        <form id="signup-form" className="signup-info d-flex flex-column align-items-center gap-1">
                                            <div className="input-wrapper">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={signupData.email}
                                                    onChange={handleSignupInputChange}
                                                    className=""
                                                />
                                                {signupErrors.email && <div className="input-error">{signupErrors.email}</div>}
                                            </div>
                                            <div className="input-wrapper">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Username"
                                                    value={signupData.username}
                                                    onChange={handleSignupInputChange}
                                                    className=""
                                                />
                                                {signupErrors.username && <div className="input-error">{signupErrors.username}</div>}
                                            </div>
                                            <div className="input-wrapper">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={signupData.password}
                                                    onChange={handleSignupInputChange}
                                                    className=""
                                                />
                                                {signupErrors.password && <div className="input-error">{signupErrors.password}</div>}
                                            </div>
                                            <div className="input-wrapper">
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    placeholder="Confirm Password"
                                                    value={signupData.confirmPassword}
                                                    onChange={handleSignupInputChange}
                                                    className=""
                                                />
                                                {signupErrors.confirmPassword && <div className="input-error">{signupErrors.confirmPassword}</div>}
                                            </div>
                                        </form>
                                        <button type="button" form="delivery-form" className="signup-button d-flex align-self-center justify-content-center mt-3" onClick={() => {
                                            verifySignupInput();
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
                                <div className={`login-content d-flex flex-column align-items-center gap-5 p-3 ${isLoginContent ? "" : "is-hidden"}`}>
                                    <div className="d-flex flex-column text-center">
                                        <div>Already have an account? Log in!</div>
                                        <div>...or click the arrows to Sign Up</div>
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
                                                {loginErrors.username && <div className="input-error">{loginErrors.username}</div>}
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
                                                {loginErrors.password && <div className="input-error">{loginErrors.password}</div>}
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
                                            verifyLoginInput();
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
                    </div>
                )
            :
                (
                    <div className="desktop-version d-flex">
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
                                                    value={signupData.email}
                                                    onChange={handleSignupInputChange}
                                                    className=""
                                                />
                                                {signupErrors.email && <div className="input-error">{signupErrors.email}</div>}
                                            </div>
                                            <div className="input-wrapper">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Username"
                                                    value={signupData.username}
                                                    onChange={handleSignupInputChange}
                                                    className=""
                                                />
                                                {signupErrors.username && <div className="input-error">{signupErrors.username}</div>}
                                            </div>
                                            <div className="input-wrapper">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={signupData.password}
                                                    onChange={handleSignupInputChange}
                                                    className=""
                                                />
                                                {signupErrors.password && <div className="input-error">{signupErrors.password}</div>}
                                            </div>
                                            <div className="input-wrapper">
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    placeholder="Confirm Password"
                                                    value={signupData.confirmPassword}
                                                    onChange={handleSignupInputChange}
                                                    className=""
                                                />
                                                {signupErrors.confirmPassword && <div className="input-error">{signupErrors.confirmPassword}</div>}
                                            </div>
                                        </form>
                                        <button type="button" form="delivery-form" className="signup-button d-flex align-self-center justify-content-center mt-3" onClick={() => {
                                            verifySignupInput();
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
                                                {loginErrors.username && <div className="input-error">{loginErrors.username}</div>}
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
                                                {loginErrors.password && <div className="input-error">{loginErrors.password}</div>}
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
                                            verifyLoginInput();
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
                )}
            
        </div>
    )
}

export default Login;