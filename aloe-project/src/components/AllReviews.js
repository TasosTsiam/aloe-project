import React, { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function AllReviews({review, productName}) {

    return (
        <div className="all-reviews-border d-flex flex-column justify-content-center">
            <div className="ar-user-image-wrapper d-flex flex-column">
                <div className="d-flex">
                    <div className="ar-user-image">

                    </div>
                    <div className="ar-user-name align-content-center px-2">
                        <p>{review.firstName} {review.lastName}</p>
                        <p>{review.city}</p>
                    </div>
                </div>
                <div className="ar-purchased-product align-content-center flex-grow-1 text-end">
                    Has Bought ~ <span>{productName}</span>
                </div>
            </div>
            <div className="align-self-end">
                <FaQuoteLeft size={16} />
            </div>
            <div className="user-review">
                {review.text}
            </div>
            <div className="review-star align-self-center">
                {Array.from({length: review.rating}, (_, i) =>
                    <AiFillStar size={16} color="white" style={{ marginTop: "2rem"}}/>
                )}
            </div>
            <div className="vote-review align-self-end d-flex align-items-center">
                <p style={{marginBottom: 0, fontSize: 14}}>Is this review Helpful</p>
                <div>
                    <button className="yes-button"><FaThumbsUp size={20}/></button>
                    <button className="no-button"><FaThumbsDown size={20}/></button>
                </div>
            </div>
        </div>
    )
}

export default AllReviews;