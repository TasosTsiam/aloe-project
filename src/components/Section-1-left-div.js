import React from "react";
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import Button from 'react-bootstrap/Button';


function S1LeftDiv({ hover1, hover2, hover3 }) {

    const [open, setOpen] = useState(false);

    return (
        <div className="s1-left-div">
            <h4>Authentic, pure, ours.</h4>
            <h1 className="text-wrap" style={{width: "35rem"}}>
                Welcome to
                Thess<span>aloe</span>niki
            </h1>
            <p className="text-wrap" style={{width: "35rem"}}>
                All the way from a western town in Thessaloniki, as a family that focuses
                on innovative farming, we try our best to maintain and produce authentic,
                beneficial products that can enhance our day-to-day life and health.
            </p>
            <div className="button-container d-flex">
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
                        timeout={300} // Adjust the duration of the fade animation
                        classNames="fade"
                        unmountOnExit
                    >
                        <div id="fade-buttons">
                            <ScrollLink
                                to="section-2" // ID of the target element to scroll to
                                // Add smooth scrolling effect
                                duration={300} // Duration of the scroll animation in milliseconds
                            >
                                <Button className="button-2" onMouseOver={hover2}>
                                    Products
                                </Button>
                            </ScrollLink>
                            <ScrollLink
                                to="section-3" // ID of the target element to scroll to
                                // Add smooth scrolling effect
                                duration={300} // Duration of the scroll animation in milliseconds
                            >
                                <Button className="button-3" onMouseOver={hover3}>
                                Recipes
                                </Button>
                            </ScrollLink>
                        </div>
                </CSSTransition>
            </div>
        </div>
    )

  }

  export default S1LeftDiv;