import React from "react";
import aloe1 from '../images/aloe-1.jpg';
import aloe2 from '../images/aloe-2.jpg';
import aloe3 from '../images/aloe-3.jpg';


function S1RightDiv({ backgroundImage, boxShadow }) {

    return (
        <div className="s1-right-div">
            <div className="d-flex justify-content-center gradient-img-container"
                style={
                    {"background-image": `url(${backgroundImage})`,
                    boxShadow: boxShadow}
                }
            >
                <div className="gradient-image-1 d-flex justify-content-center"
                    style={
                        backgroundImage === aloe1 ? {
                            left: '-30%',
                            top: '-10%',
                            height: '230px',
                            width: '230px',
                            transform: 'rotate(-25deg)'} :
                        backgroundImage === aloe2 ? {
                            left: '87%',
                            top: '-13%',
                            height: '150px',
                            width: '150px',
                            transform: 'rotate(10deg)'
                        } :
                        backgroundImage === aloe3 ? {
                            left: '-7%',
                            top: '100%',
                            height: '100px',
                            width: '100px',
                            transform: 'rotate(-45deg)'
                        } : {}
                    }
                >
                    <svg className="align-self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        style={
                            backgroundImage === aloe1 ? {height: '4.5rem'} :
                            backgroundImage === aloe2 ? {height: '3rem'} :
                            backgroundImage === aloe3 ? {height: '2rem'} : {}
                        }
                    >
                        <defs>
                            <linearGradient id="fillGradient1" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0%" stop-color="transparent" />
                                <stop offset="90%" stop-color="#DEFF5C" />
                                <stop offset="91%" stop-color="white" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#fillGradient1)" d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 0 0 0H104l0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z"/>
                    </svg>
                </div>
                <div className="gradient-image-2 d-flex justify-content-center"
                    style={
                        backgroundImage === aloe1 ? {
                            left: '-51%',
                            top: '-17%',
                            height: '100px',
                            width: '100px',
                            transform: 'rotate(5deg)'} :
                        backgroundImage === aloe2 ? {
                            left: '45%',
                            top: '70%',
                            height: '230px',
                            width: '230px',
                            transform: 'rotate(45deg)'
                        } :
                        backgroundImage === aloe3 ? {
                            left: '-57%',
                            top: '55%',
                            height: '320px',
                            width: '320px',
                            transform: 'rotate(-15deg)'
                        } : {}
                    }
                >
                    <svg className="align-self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        style={
                            backgroundImage === aloe1 ? {height: '2rem'} :
                            backgroundImage === aloe2 ? {height: '4.5rem'} :
                            backgroundImage === aloe3 ? {height: '5.5rem'} : {}
                        }
                    >
                        <defs>
                            <linearGradient id="fillGradient2" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0%" stop-color="transparent" />
                                <stop offset="90%" stop-color="#990012" />
                                <stop offset="91%" stop-color="white" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#fillGradient2)" d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 0 0 0H104l0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z"/>
                    </svg>
                </div>
                <div className="gradient-image-3 d-flex justify-content-center"
                    style={
                        backgroundImage === aloe1 ? {
                            left: '-61%',
                            top: '-12%',
                            height: '150px',
                            width: '150px',
                            transform: 'rotate(45deg)'} :
                        backgroundImage === aloe2 ? {
                            left: '2%',
                            top: '-8%',
                            height: '100px',
                            width: '100px',
                            transform: 'rotate(-25deg)'
                        } :
                        backgroundImage === aloe3 ? {
                            left: '-70%',
                            top: '94%',
                            height: '150px',
                            width: '150px',
                            transform: 'rotate(30deg)'
                        } : {}
                    }
                >
                    <svg className="align-self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        style={
                            backgroundImage === aloe1 ? {height: '3rem'} :
                            backgroundImage === aloe2 ? {height: '2rem'} :
                            backgroundImage === aloe3 ? {height: '3rem'} : {}
                        }
                    >
                        <defs>
                            <linearGradient id="fillGradient3" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0%" stop-color="transparent" />
                                <stop offset="90%" stop-color="#EBA937" />
                                <stop offset="91%" stop-color="white" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#fillGradient3)" d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 0 0 0H104l0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}


export default S1RightDiv;