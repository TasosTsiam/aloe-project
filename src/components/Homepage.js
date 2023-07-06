import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import aloe1 from '../images/aloe-1.jpg';
import aloe2 from '../images/aloe-2.jpg';
import aloe3 from '../images/aloe-3.jpg';
import aloe5 from '../images/aloe-5.jpg';
import aloe6 from '../images/aloe-6.jpg';
import aloe7 from '../images/aloe-7.jpg';


function Homepage() {

    const [open, setOpen] = useState(false);

    const [backgroundImage, setBackgroundImage] = useState(aloe1);
    function hover1() {
        setBackgroundImage(aloe1);
    }
    function hover2() {
        setBackgroundImage(aloe2);
    }
    function hover3() {
        setBackgroundImage(aloe3);
    }

    return (
        <>
            <section className="homepage-s1">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="s1-left-div d-flex flex-column justify-content-center col-lg-6 col-md-6 col-sm-6 col-12">
                            <h4>Authentic, pure, ours.</h4>
                            <h1 className="text-wrap" style={{width: "35rem"}}>
                                Welcome to
                                Thess<span>aloe</span>niki
                            </h1>
                            <p className="text-wrap" style={{width: "35rem"}}>
                                All the way from a western town in Thessaloniki, as a family that focuses
                                on innovative farming, we try our best to maintain and produce pure, authentic,
                                beneficial products, that can enhance our day-to-day life and health.
                            </p>
                            <div className="button-container d-flex">
                                <Button
                                    onMouseOver={hover1}
                                    onClick={() => setOpen(!open)}
                                    aria-controls="fade-buttons"
                                    aria-expanded={open}
                                >
                                    Click me
                                </Button>
                                <Fade in={open}>
                                    <div id="fade-buttons">
                                        <Button className="button-2" onMouseOver={hover2}>Products</Button>
                                        <Button className="button-3" onMouseOver={hover3}>Recipes</Button>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                        <div className="s1-right-div d-flex justify-content-center col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="d-flex justify-content-center gradient-img-container" style={{"background-image": `url(${backgroundImage})`}}>
                                <div className="gradient-image-1 d-flex justify-content-center">
                                    <svg className="align-self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#ffffff"><path d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 0 0 0H104l0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z"/></svg>
                                </div>
                                <div className="gradient-image-2 d-flex justify-content-center">
                                    <svg className="align-self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#ffffff"><path d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 0 0 0H104l0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z"/></svg>
                                </div>
                                <div className="gradient-image-3 d-flex justify-content-center">
                                    <svg className="align-self-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="#ffffff"><path d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 0 0 0H104l0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z"/></svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default Homepage;