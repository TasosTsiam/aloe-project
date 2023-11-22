import React from 'react';
import { useState, useEffect } from 'react';
import aloe1 from '../images/aloe-1.jpg';
import aloe2 from '../images/aloe-2.jpg';
import aloe3 from '../images/aloe-3.jpg';
import S1LeftDiv from './Section-1-left-div.js';
import S1RightDiv from './Section-1-right-div.js';
import Products from './Products.js';
import Recipes from './Recipes.js';
import { BsArrowUp } from "react-icons/bs";



function Homepage() {

    const [backgroundImage, setBackgroundImage] = useState(aloe1);

    const [boxShadow, setBoxShadow] = useState('');

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById('section-1');
            const scrollButtonThreshold = section1 ? section1.offsetTop + section1.offsetHeight : 0;

            if (window.pageYOffset > scrollButtonThreshold) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    function hover1() {
        setBackgroundImage(aloe1);
        setBoxShadow('20px 20px 40px 2px white');
    }
    function hover2() {
        setBackgroundImage(aloe2);
        setBoxShadow('-30px 30px 40px 2px white');
    }
    function hover3() {
        setBackgroundImage(aloe3);
        setBoxShadow('0px 0px 50px 4px white');
    }

    return (
        <>
            <section id="section-1" className="homepage">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="d-flex flex-column justify-content-center col-lg-6 col-md-6 col-sm-6 col-12">
                            <S1LeftDiv hover1={hover1} hover2={hover2} hover3={hover3} />
                        </div>
                        <div className="d-flex justify-content-center col-lg-6 col-md-6 col-sm-6 col-12">
                            <S1RightDiv backgroundImage={backgroundImage} boxShadow={boxShadow} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-2" className="homepage" style={{ margin: "15rem 0 5rem 0", padding: "2rem 0" }}>
                <div className="container-fluid d-flex align-items-center">
                    <div className="row d-flex col-12">
                        <Products />
                    </div>
                </div>
            </section>
            <section id="section-3" className="homepage" style={{ marginBottom: "10rem", padding: "5rem 0" }}>
                <div className="container-fluid d-flex align-items-center">
                    <div className="row d-flex col-12">
                        <Recipes />
                    </div>
                </div>
            </section>
            <button
                className={`homepage-scroll-button ${showScrollButton ? 'visible' : ''}`}
                onClick={scrollToTop}
            >
                <BsArrowUp/>
            </button>
        </>
    )
}

export default Homepage;