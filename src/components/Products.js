import React from "react";
import aloeBottle from '../images/aloe-bottle.jpg';


function Products () {

    return (
        <div id="products-section" className="container py-3 px-3 products-container">
            <div className="line-effect-wrapper py-5 px-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                        <div className="card h-100">
                            <div className="image-container">
                                <img src={aloeBottle} alt="Card" className="card-img-top" style={{ borderRadius: "16px"}}/>
                            </div>
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
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                        <div className="card h-100">
                            <div className="image-container">
                                <img src={aloeBottle} alt="Card" className="card-img-top" style={{ borderRadius: "16px"}}/>
                            </div>
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
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                        <div className="card h-100">
                            <div className="image-container">
                                <img src={aloeBottle} alt="Card" className="card-img-top" style={{ borderRadius: "16px"}}/>
                            </div>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div className="row">
                                    <h5 className="col-6 card-title text-nowrap">Plants</h5>
                                    <p className="col-6 card_price text-nowrap text-end">$ 5.00</p>
                                </div>
                                <p className="card-text">
                                    Plant your own Aloe Vera!
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
        </div>
    )
}

export default Products;