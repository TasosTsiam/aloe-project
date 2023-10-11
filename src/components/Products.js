import React from "react";
import aloeBottle from '../images/aloe-bottle.jpg';
import {BsCheck2} from "react-icons/bs";
import {Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Products () {

    return (
        <div id="products-section" className="container py-3 px-3 products-container">
            <div className="line-effect-wrapper py-5 px-5">
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
                            <div className="priceplans-title d-flex flex-column align-items-center p-3">
                                <h3 className="priceplans-title-h3-1 mb-0">$ 4.99</h3>
                                <h6 className="mb-0 mt-2">BOTTLES</h6>
                            </div>
                            <div className="priceplans-features d-flex flex-column flex-grow-1">
                                <h5>Product Information</h5>
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
                            <div className="priceplans-button d-flex flex-column justify-content-center align-items-center text-center">
                                <button className="button">Order</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="priceplans-carditem d-flex flex-column justify-content-between">
                            <div className="priceplans-title d-flex flex-column align-items-center p-3">
                                <h3 className="priceplans-title-h3-2 mb-0">$ 2.99</h3>
                                <h6 className="mb-0 mt-2">ALOE LEAVES</h6>
                            </div>
                            <div className="priceplans-features d-flex flex-column flex-grow-1">
                                <h5>Product Information</h5>
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
                                    <p className="mb-0 "> 1 free Adobe stock video each month </p>
                                </div>
                            </div>
                            <div className="priceplans-button d-flex flex-column justify-content-center align-items-center text-center">
                                <button className="button">Order</button>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="priceplans-carditem d-flex flex-column justify-content-between">
                            <div className="priceplans-title d-flex flex-column align-items-center p-3">
                                <h3 className="priceplans-title-h3-3 mb-0">$ 9.99</h3>
                                <h6 className="mb-0 mt-2">ALOE PLANTS</h6>
                            </div>
                            <div className="priceplans-features d-flex flex-column flex-grow-1">
                                <h5>Product Information</h5>
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
                            <div className="priceplans-button d-flex flex-column justify-content-center align-items-center text-center">
                                <button className="button">Order</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Products;