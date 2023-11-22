import React, {useState} from "react";
import {BsCheck2, BsArrowRight, BsArrowLeft} from "react-icons/bs";
import {Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Products () {

    const [featureDescription1, setFeatureDescription1] = useState(true)
    const [featureDescription2, setFeatureDescription2] = useState(true)
    const [featureDescription3, setFeatureDescription3] = useState(true)

    const [fdButton1, setFdButton1] = useState(true)
    const [fdButton2, setFdButton2] = useState(true)
    const [fdButton3, setFdButton3] = useState(true)

    function handleClick1() {
        setFeatureDescription1(!featureDescription1)
        setFdButton1(!fdButton1)
    }

    function handleClick2() {
        setFeatureDescription2(!featureDescription2)
        setFdButton2(!fdButton2)
    }

    function handleClick3() {
        setFeatureDescription3(!featureDescription3)
        setFdButton3(!fdButton3)
    }

    return (
        <div className="container py-3 px-3 products-container">
            <div className="products-container-bottom-rightt">
                <div className="line-effect-wrapper py-1 px-5">
                    <div className="line-effect-wrapper-bottom-right">
                        <div className="priceplans">
                            <Swiper
                                // @ts-ignore
                                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                                slidesPerView={"auto"}
                                navigation
                                grabCursor={true}
                                initialSlide={1}
                                effect={'coverflow'}
                                centeredSlides={true}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 2.5,
                                }}
                                pagination={{clickable: true}}
                            >
                                <SwiperSlide className="priceplans-carditem d-flex flex-column justify-content-between">
                                    <div className="priceplans-product-2 d-flex align-items-center p-3">
                                        {/* Image of this product is resides in that div. */}
                                    </div>
                                    <div className="priceplans-content d-flex flex-column justify-content-between flex-grow-1">
                                        {
                                            featureDescription1 ? (
                                                <div id="features" className="flex-grow-1">
                                                    <div className="priceplans-title d-flex justify-content-between align-items-center">
                                                        <h4 className="mb-0">Aloe Leaves</h4>
                                                        <h4 className="priceplans-title-h3-2 mb-0">$ 2.99</h4>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> {'>'}500ml consumable Gel</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> 'How to use' guide steps </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> 1 Free Leaf for every 5 purchased! </p>
                                                    </div>
                                                </div>
                                            )
                                            : (
                                                <div id="description" className="d-flex flex-column flex-grow-1">
                                                    <div className="priceplans-title d-flex justify-content-between align-items-center" style={{"padding-bottom" : "0"}}>
                                                        <h4 className="mb-0">Aloe Leaves</h4>
                                                        <h4 className="priceplans-title-h3-2 mb-0">$ 2.99</h4>
                                                    </div>
                                                    <div className="d-flex text-center align-items-center">
                                                        <p className="priceplans-description-text mb-0">
                                                            Experience our premium Aloe Vera leaves,
                                                            sourced from 5-year-old mature plants.
                                                            We meticulously select leaves to preserve their full 100% gel capacity.
                                                            Order today, and we harvest and deliver them
                                                            with the utmost care for freshness and quality.
                                                        </p>
                                                    </div>
                                                </div>
                                                )
                                        }
                                        <div className="priceplans-description-btn d-flex justify-content-center mt-0">
                                            {
                                                fdButton1 ? (
                                                    <button onClick={handleClick1}>Description <span> <BsArrowRight/></span></button>
                                                )
                                                : (
                                                    <button onClick={handleClick1}><span><BsArrowLeft/> </span> Features</button>
                                                    )
                                            }
                                        </div>
                                        <div className="priceplans-button d-flex flex-column justify-content-center align-items-center text-center">
                                            <button className="button">Order</button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="priceplans-carditem d-flex flex-column justify-content-between">
                                    <div className="priceplans-product-1 d-flex align-items-center p-3">
                                        {/* Image of this product is resides in that div. */}
                                    </div>
                                    <div className="priceplans-content d-flex flex-column justify-content-between flex-grow-1">
                                        {
                                            featureDescription2 ? (
                                                <div id="features" className="flex-grow-1">
                                                    <div className="priceplans-title d-flex justify-content-between align-items-center">
                                                        <h4 className="mb-0">Bottles <span>{`(`}200ml{`)`}</span></h4>
                                                        <h4 className="priceplans-title-h3-1 mb-0">$ 4.99</h4>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> 100% pure </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> No chemical preservatives </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> 1 Free Bottle for every 4 purchased! </p>
                                                    </div>
                                                </div>
                                            )
                                            : (
                                                <div id="description" className="d-flex flex-column flex-grow-1">
                                                    <div className="priceplans-title d-flex justify-content-between align-items-center" style={{"padding-bottom" : "0"}}>
                                                        <h4 className="mb-0">Bottles</h4>
                                                        <h4 className="priceplans-title-h3-1 mb-0">$ 4.99</h4>
                                                    </div>
                                                    <div className="d-flex text-center align-items-center">
                                                        <p className="priceplans-description-text mb-0">
                                                            Purely sourced and crafted, our bottles
                                                            contain 100% fresh gel from mature Aloe plants.
                                                            No chemical preservatives, just a touch of natural lemon juice
                                                            to extend shelf life to 2-3 weeks.
                                                            Available in uniquely small portions, ensuring freshness.
                                                        </p>
                                                    </div>
                                                </div>
                                                )
                                        }
                                        <div className="priceplans-description-btn d-flex justify-content-center mt-0">
                                            {
                                                fdButton2 ? (
                                                    <button onClick={handleClick2}>Description <span> <BsArrowRight/></span></button>
                                                )
                                                : (
                                                    <button onClick={handleClick2}><span><BsArrowLeft/> </span> Features</button>
                                                    )
                                            }
                                        </div>
                                        <div className="priceplans-button d-flex flex-column justify-content-center align-items-center text-center">
                                            <button className="button">Order</button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="priceplans-carditem d-flex flex-column justify-content-between">
                                    <div className="priceplans-product-3 d-flex align-items-center p-3">
                                        {/* Image of this product is resides in that div. */}
                                    </div>
                                    <div className="priceplans-content d-flex flex-column justify-content-between flex-grow-1">
                                        {
                                            featureDescription3 ? (
                                                <div id="features" className="flex-grow-1">
                                                    <div className="priceplans-title d-flex justify-content-between align-items-center">
                                                        <h4 className="mb-0">Aloe Plants</h4>
                                                        <h4 className="priceplans-title-h3-3 mb-0">$ 9.99</h4>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> 1 year old </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> Transplantation guide steps </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> 'How to maintain' guide steps </p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                        <p className="mb-0 "> 1 Free plant for every 3 purchases! </p>
                                                    </div>
                                                </div>
                                            )
                                            : (
                                                <div id="description" className="d-flex flex-column flex-grow-1">
                                                    <div className="priceplans-title d-flex justify-content-between align-items-center" style={{"padding-bottom" : "0"}}>
                                                        <h4 className="mb-0">Aloe Plants</h4>
                                                        <h4 className="priceplans-title-h3-3 mb-0">$ 9.99</h4>
                                                    </div>
                                                    <div className="d-flex text-center align-items-center">
                                                        <p className="priceplans-description-text mb-0">
                                                            We provide instructions for you to help them mature properly,
                                                            as well as to make use of them!
                                                            These indoor plants not only adorn your space
                                                            but also cleanse the atmosphere and provide fresh oxygen,
                                                            making them both beautiful and beneficial companions.
                                                        </p>
                                                    </div>
                                                </div>
                                                )
                                        }
                                        <div className="priceplans-description-btn d-flex justify-content-center mt-0">
                                            {
                                                fdButton3 ? (
                                                    <button onClick={handleClick3}>Description <span> <BsArrowRight/></span></button>
                                                )
                                                : (
                                                    <button onClick={handleClick3}><span><BsArrowLeft/> </span> Features</button>
                                                    )
                                            }
                                        </div>
                                        <div className="priceplans-button d-flex flex-column justify-content-center align-items-center text-center">
                                            <button className="button">Order</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;