import React, {useState, useEffect} from "react";
import {BsCheck2, BsArrowRight, BsArrowLeft} from "react-icons/bs";
import {Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import { useNavigate } from "react-router-dom";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Products () {

    const navigate = useNavigate();

    const [featureDescription1, setFeatureDescription1] = useState(true)
    const [featureDescription2, setFeatureDescription2] = useState(true)
    const [featureDescription3, setFeatureDescription3] = useState(true)

    const [fdButton1, setFdButton1] = useState(true)
    const [fdButton2, setFdButton2] = useState(true)
    const [fdButton3, setFdButton3] = useState(true)

    //--------------------- Code that connects with Backend server files -------------------------

    const [products, setProducts] = useState([]);

    //--------------------- Code that connects with Backend server files -------------------------

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

    const [isMobileLayout, setIsMobileLayout] = useState(
        window.matchMedia('(max-width: 799.98px)').matches
    );

    useEffect(() => {
        const query = window.matchMedia('(max-width: 799.98px)');

        const handleChange = (e) => {
            setIsMobileLayout(e.matches);
        };

        query.addEventListener('change', handleChange);
        return () => {
            query.removeEventListener('change', handleChange);
        };
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="container-fluid py-3 px-3 products-container">
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
                                spaceBetween={20}
                                breakpoints={{
                                    1300: { spaceBetween: 20 },
                                    800: { spaceBetween: 200 },
                                    668: { spaceBetween: 20 },
                                    0: { spaceBetween: 180 }
                                }}
                            >
                                {isMobileLayout
                                ?
                                    <SwiperSlide className="carditem-mobile justify-content-between">
                                        <div className="product-2 d-flex align-items-center p-3">
                                            {/* Image of this product resides in that div. */}
                                        </div>
                                        <div className="content d-flex flex-column justify-content-between flex-grow-1">
                                            {
                                                featureDescription1 ? (
                                                    <div id="features" className="flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center">
                                                            <h4 className="mb-0">{products[0]?.name}</h4>
                                                            <h4 className="title-h3-2 mb-0">$ {products[0]?.price}</h4>
                                                        </div>
                                                        <div className="check-icons-wrapper align-content-center">
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[0]?.features[0]}</p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[0]?.features[1]} </p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[0]?.features[2]} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                : (
                                                    <div id="description" className="d-flex flex-column flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center" style={{"padding-bottom" : "0"}}>
                                                            <h4 className="mb-0">{products[0]?.name}</h4>
                                                            <h4 className="title-h3-2 mb-0">$ {products[0]?.price}</h4>
                                                        </div>
                                                        <div className="d-flex flex-grow-1 text-center align-items-center">
                                                            <p className="description-text mb-0">
                                                                {products[0]?.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    )
                                            }
                                            <div className="description-btn d-flex justify-content-center mt-0">
                                                {
                                                    fdButton1 ? (
                                                        <button onClick={handleClick1}>Description <span> <BsArrowRight/></span></button>
                                                    )
                                                    : (
                                                        <button onClick={handleClick1}><span><BsArrowLeft/> </span> Features</button>
                                                        )
                                                }
                                            </div>
                                            <div className="button d-flex flex-column justify-content-center align-items-center text-center">
                                                <button className="button" onClick={() => navigate("/order")}>
                                                    Order
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                :
                                    <SwiperSlide className="carditem-desktop d-flex flex-column justify-content-between">
                                        <div className="product-2 d-flex align-items-center p-3">
                                            {/* Image of this product resides in that div. */}
                                        </div>
                                        <div className="content d-flex flex-column justify-content-between flex-grow-1">
                                            {
                                                featureDescription1 ? (
                                                    <div id="features" className="flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center">
                                                            <h4 className="mb-0">{products[0]?.name}</h4>
                                                            <h4 className="title-h3-2 mb-0">$ {products[0]?.price}</h4>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[0]?.features[0]}</p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[0]?.features[1]} </p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[0]?.features[2]} </p>
                                                        </div>
                                                    </div>
                                                )
                                                : (
                                                    <div id="description" className="d-flex flex-column flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center" style={{"padding-bottom" : "0"}}>
                                                            <h4 className="mb-0">{products[0]?.name}</h4>
                                                            <h4 className="title-h3-2 mb-0">$ {products[0]?.price}</h4>
                                                        </div>
                                                        <div className="d-flex text-center align-items-center">
                                                            <p className="description-text mb-0">
                                                                {products[0]?.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    )
                                            }
                                            <div className="description-btn d-flex justify-content-center mt-0">
                                                {
                                                    fdButton1 ? (
                                                        <button onClick={handleClick1}>Description <span> <BsArrowRight/></span></button>
                                                    )
                                                    : (
                                                        <button onClick={handleClick1}><span><BsArrowLeft/> </span> Features</button>
                                                        )
                                                }
                                            </div>
                                            <div className="button d-flex flex-column justify-content-center align-items-center text-center">
                                                <button className="button" onClick={() => navigate("/order")}>
                                                    Order
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                }
                                {isMobileLayout
                                ?
                                    <SwiperSlide className="carditem-mobile d-flex flex-column justify-content-between">
                                        <div className="product-1 d-flex align-items-center p-3">
                                            {/* Image of this product resides in that div. */}
                                        </div>
                                        <div className="content d-flex flex-column justify-content-between flex-grow-1">
                                            {
                                                featureDescription2 ? (
                                                    <div id="features" className="flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center">
                                                            <h4 className="mb-0">{products[1]?.name}</h4>
                                                            <h4 className="title-h3-1 mb-0">$ {products[1]?.price}</h4>
                                                        </div>
                                                        <div className="check-icons-wrapper align-content-center">
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[1]?.features[0]} </p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[1]?.features[1]} </p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[1]?.features[2]} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                : (
                                                    <div id="description" className="d-flex flex-column flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center" style={{"padding-bottom" : "0"}}>
                                                            <h4 className="mb-0">{products[1]?.name}</h4>
                                                            <h4 className="title-h3-1 mb-0">$ {products[1]?.price}</h4>
                                                        </div>
                                                        <div className="d-flex flex-grow-1 text-center align-items-center">
                                                            <p className="description-text mb-0">
                                                                {products[1]?.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    )
                                            }
                                            <div className="description-btn d-flex justify-content-center mt-0">
                                                {
                                                    fdButton2 ? (
                                                        <button onClick={handleClick2}>Description <span> <BsArrowRight/></span></button>
                                                    )
                                                    : (
                                                        <button onClick={handleClick2}><span><BsArrowLeft/> </span> Features</button>
                                                        )
                                                }
                                            </div>
                                            <div className="button d-flex flex-column justify-content-center align-items-center text-center">
                                                <button className="button" onClick={() => navigate("/order")}>
                                                    Order
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                :
                                    <SwiperSlide className="carditem-desktop d-flex flex-column justify-content-between">
                                        <div className="product-1 d-flex align-items-center p-3">
                                            {/* Image of this product resides in that div. */}
                                        </div>
                                        <div className="content d-flex flex-column justify-content-between flex-grow-1">
                                            {
                                                featureDescription2 ? (
                                                    <div id="features" className="flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center">
                                                            <h4 className="mb-0">{products[1]?.name}</h4>
                                                            <h4 className="title-h3-1 mb-0">$ {products[1]?.price}</h4>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[1]?.features[0]} </p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[1]?.features[1]} </p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[1]?.features[2]} </p>
                                                        </div>
                                                    </div>
                                                )
                                                : (
                                                    <div id="description" className="d-flex flex-column flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center" style={{"padding-bottom" : "0"}}>
                                                            <h4 className="mb-0">{products[1]?.name}</h4>
                                                            <h4 className="title-h3-1 mb-0">$ {products[1]?.price}</h4>
                                                        </div>
                                                        <div className="d-flex text-center align-items-center">
                                                            <p className="description-text mb-0">
                                                                {products[1]?.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    )
                                            }
                                            <div className="description-btn d-flex justify-content-center mt-0">
                                                {
                                                    fdButton2 ? (
                                                        <button onClick={handleClick2}>Description <span> <BsArrowRight/></span></button>
                                                    )
                                                    : (
                                                        <button onClick={handleClick2}><span><BsArrowLeft/> </span> Features</button>
                                                        )
                                                }
                                            </div>
                                            <div className="button d-flex flex-column justify-content-center align-items-center text-center">
                                                <button className="button" onClick={() => navigate("/order")}>
                                                    Order
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                }
                                {isMobileLayout
                                ?
                                    <SwiperSlide className="carditem-mobile d-flex flex-column justify-content-between">
                                        <div className="product-3 d-flex align-items-center p-3">
                                            {/* Image of this product resides in that div. */}
                                        </div>
                                        <div className="content d-flex flex-column justify-content-between flex-grow-1">
                                            {
                                                featureDescription3 ? (
                                                    <div id="features" className="flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center">
                                                            <h4 className="mb-0">{products[2]?.name}</h4>
                                                            <h4 className="title-h3-3 mb-0">$ {products[2]?.price}</h4>
                                                        </div>
                                                        <div className="check-icons-wrapper align-content-center">
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[2]?.features[0]} </p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[2]?.features[1]} </p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[2]?.features[2]} </p>
                                                            </div>
                                                            <div className="d-flex">
                                                                <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                                <p className="mb-0 "> {products[2]?.features[3]} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                : (
                                                    <div id="description" className="d-flex flex-column flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center" style={{"padding-bottom" : "0"}}>
                                                            <h4 className="mb-0">{products[2]?.name}</h4>
                                                            <h4 className="title-h3-3 mb-0">$ {products[2]?.price}</h4>
                                                        </div>
                                                        <div className="d-flex flex-grow-1 text-center align-items-center">
                                                            <p className="description-text mb-0">
                                                                {products[2]?.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    )
                                            }
                                            <div className="description-btn d-flex justify-content-center mt-0">
                                                {
                                                    fdButton3 ? (
                                                        <button onClick={handleClick3}>Description <span> <BsArrowRight/></span></button>
                                                    )
                                                    : (
                                                        <button onClick={handleClick3}><span><BsArrowLeft/> </span> Features</button>
                                                        )
                                                }
                                            </div>
                                            <div className="button d-flex flex-column justify-content-center align-items-center text-center">
                                                <button className="button" onClick={() => navigate("/order")}>
                                                    Order
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                :
                                    <SwiperSlide className="carditem-desktop d-flex flex-column justify-content-between">
                                        <div className="product-3 d-flex align-items-center p-3">
                                            {/* Image of this product resides in that div. */}
                                        </div>
                                        <div className="content d-flex flex-column justify-content-between flex-grow-1">
                                            {
                                                featureDescription3 ? (
                                                    <div id="features" className="flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center">
                                                            <h4 className="mb-0">{products[2]?.name}</h4>
                                                            <h4 className="title-h3-3 mb-0">$ {products[2]?.price}</h4>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[2]?.features[0]} </p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[2]?.features[1]} </p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[2]?.features[2]} </p>
                                                        </div>
                                                        <div className="d-flex">
                                                            <BsCheck2 className="priceplans-bs-icon align-self-center"/>
                                                            <p className="mb-0 "> {products[2]?.features[3]} </p>
                                                        </div>
                                                    </div>
                                                )
                                                : (
                                                    <div id="description" className="d-flex flex-column flex-grow-1">
                                                        <div className="title d-flex justify-content-between align-items-center" style={{"padding-bottom" : "0"}}>
                                                            <h4 className="mb-0">{products[2]?.name}</h4>
                                                            <h4 className="title-h3-3 mb-0">$ {products[2]?.price}</h4>
                                                        </div>
                                                        <div className="d-flex text-center align-items-center">
                                                            <p className="description-text mb-0">
                                                                {products[2]?.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    )
                                            }
                                            <div className="description-btn d-flex justify-content-center mt-0">
                                                {
                                                    fdButton3 ? (
                                                        <button onClick={handleClick3}>Description <span> <BsArrowRight/></span></button>
                                                    )
                                                    : (
                                                        <button onClick={handleClick3}><span><BsArrowLeft/> </span> Features</button>
                                                        )
                                                }
                                            </div>
                                            <div className="button d-flex flex-column justify-content-center align-items-center text-center">
                                                <button className="button" onClick={() => navigate("/order")}>
                                                    Order
                                                </button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;