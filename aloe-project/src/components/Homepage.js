import React from 'react';
import { useState, useEffect } from 'react';
import aloe1 from '../images/aloe-1.jpg';
import aloe2 from '../images/aloe-2.jpg';
import aloe3 from '../images/aloe-3.jpg';
import S1LeftDiv from './Section-1-left-div.js';
import S1RightDiv from './Section-1-right-div.js';
import Products from './Products.js';
import Recipes from './Recipes.js';
import About from './About.js';
import { BsArrowUp } from "react-icons/bs";
import Reviews from './Reviews.js';



function Homepage() {

    const [backgroundImage, setBackgroundImage] = useState(aloe1);

    const [boxShadow, setBoxShadow] = useState('');

    const [showScrollButton, setShowScrollButton] = useState(false);

    const [scrollButtonClicked, setScrollButtonClicked] = useState(false);

    const resetState = () => {
        setTimeout(() => setScrollButtonClicked(false), 2000);
    }

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

    const [removeMargin, setRemoveMargin] = useState(
                window.matchMedia('(max-width: 1249.98px)').matches
            );

        useEffect(() => {
            const query = window.matchMedia('(max-width: 1249.98px)');
            const handleChange = (e) => setRemoveMargin(e.matches);
            query.addEventListener('change', handleChange);
            return () => query.removeEventListener('change', handleChange);
        }, []);

    return (
        <>
            <section id="section-1" className="homepage">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="d-flex flex-column justify-content-center col-lg-6 col-12">
                            <S1LeftDiv hover1={hover1} hover2={hover2} hover3={hover3} />
                        </div>
                        <div className="d-flex justify-content-center col-lg-6 col-12">
                            <S1RightDiv backgroundImage={backgroundImage} boxShadow={boxShadow} />
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-2" className="homepage" style={{ margin: "15rem 0 5rem 0", padding: "2rem 0" }}>
                <Products />
            </section>
            {removeMargin
                ?
                    <section id="section-3" className="homepage" style={{padding: "5rem 0" }}>
                        <Recipes />
                    </section>
                :
                    <section id="section-3" className="homepage" style={{ marginBottom: "10rem", padding: "5rem 0" }}>
                        <Recipes />
                    </section>
            }
            <section id="section-4" className="homepage" style={{ marginBottom: "10rem", padding: "5rem 0" }}>
                <About scrollBypass={scrollButtonClicked} />
            </section>
            <section id="section-5" className="homepage" style={{ marginBottom: "10rem", padding: "5rem 0" }}>
                <Reviews />
            </section>
            <button
                className={`homepage-scroll-button ${showScrollButton ? 'visible' : ''}`}
                onClick={() => {scrollToTop(); setScrollButtonClicked(true); resetState();}}
            >
                <BsArrowUp/>
            </button>
        </>
    )
}

export default Homepage;