import React from 'react';
import { useState } from 'react';
import aloe1 from '../images/aloe-1.jpg';
import aloe2 from '../images/aloe-2.jpg';
import aloe3 from '../images/aloe-3.jpg';
import S1LeftDiv from './Section-1-left-div.js';
import S1RightDiv from './Section-1-right-div.js';
import Products from './Products.js';


function Homepage() {

    const [backgroundImage, setBackgroundImage] = useState(aloe1);

    const [boxShadow, setBoxShadow] = useState('');

    function hover1() {
        setBackgroundImage(aloe1);
        setBoxShadow('50px 60px 120px 20px white');
    }
    function hover2() {
        setBackgroundImage(aloe2);
        setBoxShadow('-50px 50px 120px 20px #FFE000');
    }
    function hover3() {
        setBackgroundImage(aloe3);
        setBoxShadow('0px 0px 150px 30px #00FC91');
    }

    return (
        <>
            <section className="homepage-s1">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <S1LeftDiv hover1={hover1} hover2={hover2} hover3={hover3} />
                        <S1RightDiv backgroundImage={backgroundImage} boxShadow={boxShadow} />
                        <Products />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage;