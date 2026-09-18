import React from "react";
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { scroller } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';


function S1LeftDiv({ hover1, hover2, hover3 }) {

    const [open, setOpen] = useState(false);

    // --- NEW: mobile slider state (0 = Swipe me, 1 = Products, 2 = Recipes) ---
    const slides = [
        { label: "Swipe me", scrollTo: null, hover: hover1 },
        { label: "Products", scrollTo: "section-2", hover: hover2 },
        { label: "Recipes", scrollTo: "section-3", hover: hover3 },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // activeIndex is the single source of truth — this effect is the ONLY
    // place that ever calls hover1/hover2/hover3. Whatever changes
    // activeIndex (arrows, swipe, anything added later) automatically
    // gets the bottle-swap animation for free, with no duplicated calls.
    useEffect(() => {
        slides[activeIndex].hover();
    }, [activeIndex]);

    const goNext = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const goPrev = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleTap = () => {
        const target = slides[activeIndex].scrollTo;
        if (target) {
            scroller.scrollTo(target, { duration: 300, smooth: true });
        }
        // "Swipe me" (index 0) has no scroll target — tap does nothing, by design.
    };

    // --- Basic swipe detection, arrows remain the reliable fallback ---
    const [touchStartX, setTouchStartX] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const SWIPE_THRESHOLD = 40; // px — ignore accidental taps/jitter

        if (deltaX > SWIPE_THRESHOLD) {
            goPrev();
        } else if (deltaX < -SWIPE_THRESHOLD) {
            goNext();
        }
        setTouchStartX(null);
    };

    return (
        <div className="s1-left-div">
            <h4>Authentic, pure, ours.</h4>
            <h1>
                Welcome to
                Thess<span>aloe</span>niki
            </h1>
            <p>
                All the way from a western town in Thessaloniki, as a family that focuses
                on innovative farming, we try our best to maintain and produce authentic,
                beneficial products that can enhance our day-to-day life and health.
            </p>

            {/* DESKTOP — unchanged, hover-driven, shown via CSS at 768px+ */}
            <div className="button-container-desktop d-flex">
                <Button
                    onMouseOver={hover1}
                    onClick={() => setOpen(!open)}
                    aria-controls="fade-buttons"
                    aria-expanded={open}
                >
                    Click me
                </Button>
                <CSSTransition
                    in={open}
                    timeout={300}
                    classNames="fade"
                    unmountOnExit
                >
                    <div id="fade-buttons">
                        <ScrollLink to="section-2" duration={300}>
                            <Button className="button-2" onMouseOver={hover2}>
                                Products
                            </Button>
                        </ScrollLink>
                        <ScrollLink to="section-3" duration={300}>
                            <Button className="button-3" onMouseOver={hover3}>
                                Recipes
                            </Button>
                        </ScrollLink>
                    </div>
                </CSSTransition>
            </div>

            {/* MOBILE — new slider, shown via CSS below 992px */}
            <div className="button-slider-mobile d-flex align-items-center justify-content-center">
                <button className="slider-arrow slider-arrow-left" onClick={goPrev} aria-label="Previous">
                    ‹
                </button>

                <div
                    className="slider-touch-zone"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <CSSTransition
                        key={activeIndex}
                        in={true}
                        appear={true}
                        timeout={300}
                        classNames="fade"
                    >
                        <Button className="slider-button" onClick={handleTap}>
                            {slides[activeIndex].label}
                        </Button>
                    </CSSTransition>
                </div>

                <button className="slider-arrow slider-arrow-right" onClick={goNext} aria-label="Next">
                    ›
                </button>
            </div>
        </div>
    )

  }

  export default S1LeftDiv;