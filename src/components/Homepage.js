import React from 'react';

function Homepage() {
    return (
        <div>
            <section className="homepage-s1">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
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
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            Right col
                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default Homepage;