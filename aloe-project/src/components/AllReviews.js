import React, { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function AllReviews() {

    const text1 = `I bought the aloe leaves for skincare and I’m really impressed.
                        The leaves are fresh, thick, and full of gel that works great for soothing my skin after sun exposure.
                        The quality feels excellent and the price is very affordable for what you get.
                        Definitely a great value and I’ll be ordering again.`
    const text2 = `The bottled aloe gel quickly became part of my daily routine.
                    I use it for skincare and sometimes in smoothies. It feels pure and refreshing,
                    and I love that it has no harsh chemicals.
                    The quality is great and the price is surprisingly affordable.`
    const text3 = `I ordered the aloe bottles out of curiosity and ended up loving them.
                    The gel feels light and helps keep my skin hydrated after long days outside.
                    The quality feels premium but the price is very reasonable.
                    I’ve already recommended it to friends.`
    const text4 = `The aloe plant arrived healthy and looks great in my home.
                    I like that I can use it for natural remedies whenever I need it.
                    It’s easy to care for and grows well. For the price, it’s an amazing value.`

    return (
        <div className="all-reviews-border d-flex flex-column justify-content-center">
            <div className="ar-user-image-wrapper d-flex">
                <div className="ar-user-image">

                </div>
                <div className="ar-user-name align-content-center px-2">
                    <p>Frenkie De Jong</p>
                    <p>Thessaloniki, Greece</p>
                </div>
                <div className="ar-purchased-product align-content-center flex-grow-1 text-end">
                    Has Bought ~ <span>Aloe Leaves</span>
                </div>

            </div>
            <div className="align-self-end">
                <FaQuoteLeft size={16} />
            </div>
            <div className="">
                {text1}
            </div>
            <div className="review-star align-self-center">
                {Array.from({length: 5}, (_, i) =>
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