import React from "react";
import aloeBottle from '../images/aloe-bottle.jpg';
import aloeLeaves from '../images/aloe-leaves.jpg';
import aloeFlowerpot from '../images/aloe-flowerpot.jpg';


function Products () {

    return (
        <div className="container products-container col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" style={{ margin: "20rem 0" }}>
            <div className="row">
                <div id="carouselExampleIndicators" className="carousel slide w-75">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex card-container justify-content-center" style={{ height: "600px" }}>
                                <div className="card d-block w-50" style={{ objectFit: "cover" }}>
                                    <img src={aloeBottle} alt="Card" className="card-img-top"/>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="row">
                                            <h5 className="col-6 card-title text-nowrap">Bottles</h5>
                                            <p className="col-6 card_price text-nowrap text-end">$ 3.00</p>
                                        </div>
                                        <p className="card-text">
                                            Ready-for-use gel of highest quality.
                                        </p>
                                        <button className="btn btn-primary col-12">
                                            Order
                                            <span className="delivery-icon"> &#x1F69A;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex card-container justify-content-center" style={{ height: "600px" }}>
                                <div className="card d-block w-50" style={{ objectFit: "cover" }}>
                                    <img src={aloeLeaves} alt="Card" className="card-img-top"/>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="row">
                                            <h5 className="col-6 card-title text-nowrap">Leaves</h5>
                                            <p className="col-6 card_price text-nowrap text-end">$ 2.00</p>
                                        </div>
                                        <p className="card-text">
                                            Freshly cut leaves to make your own aloe vera gel.
                                        </p>
                                        <button className="btn btn-primary col-12">
                                            Order
                                            <span className="delivery-icon"> &#x1F69A;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex card-container justify-content-center" style={{ height: "600px" }}>
                                <div className="card d-block w-50" style={{ objectFit: "cover" }}>
                                    <img src={aloeFlowerpot} alt="Card" className="card-img-top"/>
                                    <div className="card-body d-flex flex-column justify-content-between">
                                        <div className="row">
                                            <h5 className="col-6 card-title text-nowrap">Plants</h5>
                                            <p className="col-6 card_price text-nowrap text-end">$ 5.00</p>
                                        </div>
                                        <p className="card-text">
                                            Aloe bottles
                                        </p>
                                        <button className="btn btn-primary col-12">
                                            Order
                                            <span className="delivery-icon"> &#x1F69A;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products;