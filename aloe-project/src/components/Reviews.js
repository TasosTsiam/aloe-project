import React, { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import AllReviews from './AllReviews';

function Reviews() {

    const [isReviewsVisible, setReviewsVisible] = useState(false);
    const [activeReview, setActiveReview] = useState(null);
    const [allReviewsClicked, setAllReviewsClicked] = useState(false);
    const [addReviewClicked, setAddReviewClicked] = useState(false);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        product: "",
        rating: 0,
        reviewText: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRating = (value) => {
        setFormData(prev => ({
            ...prev,
            rating: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData); // simulate sending to server
    };

        useEffect(() => {
            const handleScroll = () => {
            // Check if the user has scrolled to the "Reviews" section
            const reviewsSection = document.getElementById("section-4");
            if (reviewsSection) {
                const reviewsSectionOffset = reviewsSection.getBoundingClientRect().top;
                if (reviewsSectionOffset < window.innerHeight / 2) {
                setReviewsVisible(true);
                }
            }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
            window.removeEventListener("scroll", handleScroll);
            };
        }, []);

        useEffect(
            () => {
                if (allReviewsClicked || addReviewClicked) {
                    document.body.style.overflow = "hidden";
                }
                else {
                    document.body.style.overflow = "auto";
                }
            }, [allReviewsClicked, addReviewClicked]
        );

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
        <div className={`reviews container d-flex flex-column align-items-center ${isReviewsVisible ? "reviews-visible" : ""}`}>
            {allReviewsClicked && (
                <div className="modal-overlay">
                    <button
                        className="close-modal"
                        onClick={() => setAllReviewsClicked(false)}
                    >
                        X
                    </button>
                    <div className="all-reviews-container">
                        <AllReviews></AllReviews>
                        <AllReviews></AllReviews>
                        <AllReviews></AllReviews>
                        <AllReviews></AllReviews>
                    </div>
                </div>
            )}
            {addReviewClicked && (
                <div className="modal-overlay">
                    <button
                        className="close-modal"
                        onClick={() => setAddReviewClicked(false)}
                    >
                        X
                    </button>
                    <div className="add-review-container">
                        <form  className="review-form d-flex flex-column align-items-center gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your first name"
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your last name"
                                value={formData.last_name}
                                onChange={handleChange}
                            />

                            <select
                                name="product"
                                value={formData.product}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select product</option>
                                <option value="Aloe Leaves">Aloe Leaves</option>
                                <option value="Bottle Gel">Bottle Gel</option>
                                <option value="Aloe Plant">Aloe Plant</option>
                            </select>
                            <textarea
                                name="reviewText"
                                placeholder="Write your review..."
                                value={formData.reviewText}
                                onChange={handleChange}
                            />
                            <div className="rating d-flex flex-column text-center">
                                <div>
                                    Your vote
                                </div>
                                <div>
                                    {[1,2,3,4,5].map((star) => (
                                        <AiFillStar
                                            key={star}
                                            size={24}
                                            color={formData.rating >= star ? "white" : "gray"}
                                            onClick={() => handleRating(star)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    ))}
                                </div>
                            </div>

                            <button type="submit">Submit</button>

                        </form>
                    </div>
                </div>
            )}
            <div className="bottle-wrapper d-flex">
                <div className="bottle-left d-flex flex-column justify-content-start">
                    <div className="bottle-text-left">
                        User
                    </div>
                    <div className="left-description">
                        We might be promising you the finest possible quality of Aloe Vera,
                        but what better than hearing it from our customers?
                        Click on the button below, and cruise through all of our customer reviews!
                    </div>
                    <div className="all-reviews-button">
                        <button onClick={() => setAllReviewsClicked(true)}>
                            See All
                        </button>
                    </div>
                </div>
                <div className="bottle">
                    <svg className={`align-self-center ${isReviewsVisible ? "reviews-visible" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        style={{height: "28rem", width: "auto"}}
                    >
                        <defs>
                            <linearGradient id="fillGradient4" x1="0" y1="1" x2="0" y2="0">
                                <stop offset="0%" stop-color="#DBF1FD" />
                                <stop offset="100%" stop-color="#DBF1FD" stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <path fill="url(#fillGradient4)" d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256V448c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0 0 0 0H104l0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z"/>
                    </svg>
                </div>
                <div className="bottle-right d-flex flex-column justify-content-start">
                    <div className="bottle-text-right text-end">
                        Reviews
                    </div>
                    <div className="right-description text-end">
                        In an attempt to help provide what stands out the most, in terms of quality,
                        we are showing the 4 highest liked Reviews by our customers.
                        Don't forget to engage, and like any review you might find useful.
                    </div>
                    <div className="add-review-button align-self-end">
                        <button onClick={() => setAddReviewClicked(true)}>
                            Add Review
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-parent">
                <div className={`review-wrapper1 ${isReviewsVisible ? "reviews-visible" : ""}`}>
                    <div className="drop" onMouseEnter={() => setActiveReview(1)} onMouseLeave={() => setActiveReview(null)}>

                    </div>
                    <div className={`review-popup ${activeReview === 1 ? "active" : ""}`}>
                        <div className="actual-border d-flex flex-column justify-content-center">
                            <div className="user-image-wrapper d-flex">
                                <div className="user-image">

                                </div>
                                <div className="user-name align-content-center px-2">
                                    <p>Frenkie De Jong</p>
                                    <p>Thessaloniki, Greece</p>
                                </div>
                                <div className="purchased-product align-content-center flex-grow-1 text-end">
                                    ~ <span>Aloe Leaves</span>
                                    <div className="review-star align-self-end">
                                        {Array.from({length: 5}, (_, i) =>
                                            <AiFillStar size={16} color="white"/>
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div className="quotes-sign align-self-end">
                                <FaQuoteLeft size={16} />
                            </div>
                            <div className="text-start">
                                {text1}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`review-wrapper2 ${isReviewsVisible ? "reviews-visible" : ""}`}>
                    <div className="drop" onMouseEnter={() => setActiveReview(2)} onMouseLeave={() => setActiveReview(null)}>

                    </div>
                    <div className={`review-popup ${activeReview === 2 ? "active" : ""}`}>
                        <div className="actual-border d-flex flex-column justify-content-center">
                            <div className="quotes-sign align-self-end">
                                <FaQuoteLeft size={16} />
                            </div>
                            <div className="text-start mb-4">
                                {text2}
                            </div>
                            <div className="user-image-wrapper d-flex">
                                <div className="user-image">

                                </div>
                                <div className="user-name align-content-center px-2">
                                    <p>Pedri Gonzalez</p>
                                    <p>Thessaloniki, Greece</p>
                                </div>
                                <div className="purchased-product align-content-center flex-grow-1 text-end">
                                    <div className="review-star align-self-center">
                                        {Array.from({length: 5}, (_, i) =>
                                            <AiFillStar size={16} color="white"/>
                                        )}
                                    </div>
                                    ~ <span>Bottle gel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`review-wrapper3 ${isReviewsVisible ? "reviews-visible" : ""}`}>
                    <div className="drop" onMouseEnter={() => setActiveReview(3)} onMouseLeave={() => setActiveReview(null)}>

                    </div>
                    <div className={`review-popup ${activeReview === 3 ? "active" : ""}`}>
                        <div className="actual-border d-flex flex-column justify-content-center">
                            <div className="quotes-sign align-self-start">
                                <FaQuoteLeft size={16} />
                            </div>
                            <div className="text-start mb-4">
                                {text3}
                            </div>
                            <div className="user-image-wrapper d-flex">
                                <div className="purchased-product align-content-center flex-grow-1 text-start">
                                    <div className="review-star align-self-center">
                                        {Array.from({length: 5}, (_, i) =>
                                            <AiFillStar size={16} color="white"/>
                                        )}
                                    </div>
                                    <span>Bottle gel </span>~
                                </div>
                                <div className="user-name align-content-center px-2">
                                    <p>Aitana Bonmati</p>
                                    <p>Thessaloniki, Greece</p>
                                </div>
                                <div className="user-image">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`review-wrapper4 ${isReviewsVisible ? "reviews-visible" : ""}`}>
                    <div className="drop" onMouseEnter={() => setActiveReview(4)} onMouseLeave={() => setActiveReview(null)}>

                    </div>
                    <div className={`review-popup ${activeReview === 4 ? "active" : ""}`}>
                        <div className="actual-border d-flex flex-column justify-content-center">
                            <div className="quotes-sign align-self-start">
                                <FaQuoteLeft size={16} />
                            </div>
                            <div className="text-start mb-4">
                                {text4}
                            </div>
                            <div className="user-image-wrapper d-flex">
                                <div className="purchased-product align-content-center flex-grow-1 text-start">
                                    <div className="review-star align-self-center">
                                        {Array.from({length: 5}, (_, i) =>
                                            <AiFillStar size={16} color="white"/>
                                        )}
                                    </div>
                                    <span>Aloe Plants </span>~
                                </div>
                                <div className="user-name align-content-center px-2">
                                    <p>Raphinha</p>
                                    <p>Thessaloniki, Greece</p>
                                </div>
                                <div className="user-image">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;