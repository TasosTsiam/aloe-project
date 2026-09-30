import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

function AboutDesktop({ texts, paragraphTitles, chapters, scrollBypass }) {

    // =========================================================================
    //  THE MASTER PROGRESS ENGINE  (0 → 7)
    //
    //  Segment map:
    //    0→1  seg 0 (even)  text1 lights   |  1→2  seg 1 (odd)  card1→2 slides
    //    2→3  seg 2 (even)  text2 lights   |  3→4  seg 3 (odd)  card2→3 slides
    //    4→5  seg 4 (even)  text3 lights   |  5→6  seg 5 (odd)  card3→4 slides
    //    6→7  seg 6 (even)  text4 lights
    // =========================================================================

    const [masterProgress, setMasterProgress] = useState(0);

    const masterProgressRef = useRef(0);
    masterProgressRef.current = masterProgress;

    const scrollBypassRef = useRef(false);
    scrollBypassRef.current = scrollBypass;

    // Remembers whether bypass was active LAST frame, so the poll can
    // detect the exact true→false transition and run the one-time
    // catch-up check right at that moment.
    const wasBypassedRef = useRef(false);

    // --- DERIVED VALUES (pure math, recalculated every render) ---

    const currentSegment = Math.min(6, Math.floor(masterProgress));
    const localProgress = masterProgress - currentSegment;
    const isTextSegment = currentSegment % 2 === 0;

    const textIndex = Math.min(3, Math.floor(masterProgress / 2));
    const lightingTarget = isTextSegment ? localProgress : 1;

    const cardProgress = isTextSegment
        ? currentSegment / 2
        : (currentSegment - 1) / 2 + localProgress;

    // --- TEXT PREPARATION ---

    const activeText = texts[textIndex];
    const cleanedText = activeText.replace(/\s+/g, " ").trim();

    const words = [];
    cleanedText.split("*").forEach((segment, segIndex) => {
        const emphasized = segIndex % 2 === 1;
        segment.split(" ").forEach((w) => {
            if (w === "") return;
            if (w === "|") {
                words.push({ isBreak: true });
            } else {
                words.push({ text: w, emphasized });
            }
        });
    });

    let overallIndex = 0;
    const totalLetters = words.reduce(
        (sum, w) => (w.isBreak ? sum : sum + w.text.length), 0
    );

    // --- THE VISIBLE VALUES (they chase the invisible targets) ---

    const [displayProgress, setDisplayProgress] = useState(0);
    const [displayCardProgress, setDisplayCardProgress] = useState(0);

    const lightingTargetRef = useRef(0);
    lightingTargetRef.current = lightingTarget;

    const cardTargetRef = useRef(0);
    cardTargetRef.current = cardProgress;

    // --- VISUAL GATE CONDITIONS ---

    const finalLetterThreshold = (totalLetters - 1) / totalLetters;
    const isTextVisuallyLit = displayProgress >= finalLetterThreshold;
    const isTextVisuallyUnlit = displayProgress <= 1 / totalLetters;

    const gatesRef = useRef({});
    gatesRef.current = {
        textLit: isTextVisuallyLit,
        textUnlit: isTextVisuallyUnlit,
        cardVisual: displayCardProgress,
    };

    // --- SNAP + POP CONTROL when the active paragraph swaps ---
    const [showText, setShowText] = useState(true);

    const showTextRef = useRef(true);
    showTextRef.current = showText;

    const prevDisplayProgressRef = useRef(0);
    const clearedLettersRef = useRef(new Set());

    useLayoutEffect(() => {
        const arrivingLit = lightingTargetRef.current > 0.5;
        setDisplayProgress(arrivingLit ? 1 : 0);
        prevDisplayProgressRef.current = arrivingLit ? 1 : 0;
        clearedLettersRef.current = new Set();

        setShowText(false);
        const timeoutID = setTimeout(() => {
            setShowText(true);
        }, 2000);

        return () => {
            clearTimeout(timeoutID);
        };
    }, [textIndex]);

    useEffect(() => {
        prevDisplayProgressRef.current = displayProgress;
    }, [displayProgress]);

    // =========================================================================
    //  THE ENGAGEMENT SYSTEM
    // =========================================================================

    const sectionRef = useRef(null);
    const engagedRef = useRef(false);
    const canEngageRef = useRef(true);
    const prevTopRef = useRef(null);

    const engage = () => {
        engagedRef.current = true;
        engageTimeRef.current = performance.now();
    };

    const release = () => {
        engagedRef.current = false;
        canEngageRef.current = false;
    };

    const engageTimeRef = useRef(0);
    const lastWheelTimeRef = useRef(0);

    // --- ONE rAF loop drives the chases AND the alignment watching ---
    useEffect(() => {
        let frameID;
        let lastTime = performance.now();

        const tick = (now) => {
            const dt = now - lastTime;
            lastTime = now;

            const textEase = 1 - Math.pow(1 - 0.05, dt / 20);
            const cardEase = 1 - Math.pow(1 - 0.08, dt / 20);

            setDisplayProgress(prev => prev + (lightingTargetRef.current - prev) * textEase);
            setDisplayCardProgress(prev => prev + (cardTargetRef.current - prev) * cardEase);

            if (sectionRef.current) {
                const top = sectionRef.current.getBoundingClientRect().top;

                if (engagedRef.current) {
                    const inGrace = (now - engageTimeRef.current) < 600;
                    const wheelActive = (now - lastWheelTimeRef.current) < 250;

                    if (!inGrace && !wheelActive && Math.abs(top) > 100) {
                        release();
                    }
                    else if (Math.abs(top) > 0.5) {
                        window.scrollTo({ top: window.scrollY + top, behavior: 'instant' });
                    }
                } else {
                    const bypassNow = scrollBypassRef.current;
                    const bypassJustEnded = wasBypassedRef.current && !bypassNow;
                    wasBypassedRef.current = bypassNow;

                    if (bypassJustEnded && canEngageRef.current && Math.abs(top) < 40) {
                        window.scrollTo({ top: window.scrollY + top, behavior: 'instant' });
                        engage();
                    }
                    else if (prevTopRef.current !== null && !bypassNow) {
                        const prevTop = prevTopRef.current;

                        if (!canEngageRef.current) {
                            if (Math.abs(top) > 150) canEngageRef.current = true;
                        } else {
                            const crossedDownward = prevTop >= 0 && top < 0;
                            const crossedUpward = prevTop <= 0 && top > 0;

                            if (crossedDownward || crossedUpward) {
                                window.scrollTo({ top: window.scrollY + top, behavior: 'instant' });
                                engage();
                            }
                        }
                    }
                }

                prevTopRef.current = top;
            }

            frameID = requestAnimationFrame(tick);
        };

        frameID = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(frameID);
        };
    }, []);

    // --- THE WHEEL: inert while disengaged; sole owner while engaged ---

    useEffect(() => {
        const handleWheel = (e) => {
            if (!engagedRef.current) return;

            lastWheelTimeRef.current = performance.now();
            e.preventDefault();

            const m = masterProgressRef.current;
            if (m >= 6.9995 && e.deltaY > 0) {
                release();
                window.scrollBy(0, e.deltaY);
                return;
            }
            if (m <= 0.0005 && e.deltaY < 0) {
                release();
                window.scrollBy(0, e.deltaY);
                return;
            }

            setMasterProgress(prev => {
                const seg = Math.min(6, Math.floor(prev));
                const isText = seg % 2 === 0;

                if (isText && !showTextRef.current) {
                    return prev;
                }

                const speed = isText ? 0.0005 : 0.0015;

                let next = Math.max(0, Math.min(7, prev + e.deltaY * speed));
                next = Math.max(seg - 1, Math.min(next, seg + 1));

                const ceiling = seg + 0.9999;
                const floor = seg + 0.0001;
                const gates = gatesRef.current;

                if (isText) {
                    if (!gates.textLit) next = Math.min(next, ceiling);
                    if (!gates.textUnlit) next = Math.max(next, floor);
                } else {
                    const slideDoneValue = (seg + 1) / 2;
                    const slideStartValue = (seg - 1) / 2;
                    if (Math.abs(gates.cardVisual - slideDoneValue) > 0.01) next = Math.min(next, ceiling);
                    if (Math.abs(gates.cardVisual - slideStartValue) > 0.01) next = Math.max(next, floor);
                }

                return next;
            });
        };

        const handleKeys = (e) => {
            if (!engagedRef.current) return;
            const scrollKeys = [" ", "Spacebar", "PageDown", "PageUp", "ArrowDown", "ArrowUp", "Home", "End"];
            if (scrollKeys.includes(e.key)) {
                e.preventDefault();
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("keydown", handleKeys);
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeys);
        };
    }, []);

    // --- LAYOUT MEASUREMENT ---

    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);

    useLayoutEffect(() => {
        setCardWidth(cardRef.current.offsetWidth);
    }, [])

    // =========================================================================

    return (
        <div className="about-container-desktop d-flex" ref={sectionRef}>
            <div className="left-wrapper">
                <div className="text-drop-ring" key={`ring-${textIndex}`}></div>
                <div className="paragraph-title"
                    style={{
                        opacity: showText ? 1 : 0,
                        transition: showText ? `opacity 0.6s ease-in-out` : 'none',
                    }}
                    >{paragraphTitles[textIndex]}
                </div>
                {showText && (
                    words.map((word, wordIndex) => {

                        if (word.isBreak) {
                            return <span className="line-break" key={wordIndex}></span>;
                        }

                        const letters = word.text.split("");

                        return (
                            <span className={`word-span ${word.emphasized ? "emphasized" : ""}`} key={wordIndex}>
                                {letters.map((letter, letterIndex) => {
                                    const currentIndex = overallIndex;
                                    overallIndex = overallIndex + 1;
                                    const letterProgress = currentIndex / totalLetters;
                                    const isLit = displayProgress > letterProgress;
                                    const wasLit = prevDisplayProgressRef.current > letterProgress;
                                    const justLitNow = isLit && !wasLit;

                                    if (justLitNow) {
                                        clearedLettersRef.current.add(currentIndex);
                                    }
                                    const canAnimate = clearedLettersRef.current.has(currentIndex);

                                    return (
                                        <span className={`letter-span ${isLit ? "active-letter" : ""}`}
                                            key={letterIndex}
                                            style={{
                                                opacity: isLit ? 1 : 0,
                                                transition: `opacity 0.3s ease-in-out`,
                                                animation: canAnimate ? undefined : 'none',
                                            }}
                                        >
                                            {letter}
                                        </span>
                                    )
                                })}
                            </span>
                        );
                    })
                )}
            </div>
            <div className="right-wrapper">
                <div className="cards-track">
                    {chapters.map((chapter, index) => {
                        const cardLocalProgress = Math.max(0, Math.min(1, displayCardProgress - index));
                        const scale = 1 - (cardLocalProgress * 0.30);

                        return (
                            <div className="chapter-card d-flex flex-column p-3"
                                key={chapter.number}
                                ref={index === 0 ? cardRef : null}
                                style={{
                                    transform: `translateX(${(Math.max(0, (index - displayCardProgress) * (cardWidth + 55)))}px) scale(${scale})`,
                                    transition: 'none',
                                    willChange: 'transform',
                                    backfaceVisibility: 'hidden',
                                }}
                            >
                                <div className="chapter-header p-2">{chapter.number}</div>
                                <div className={`chapter-image ${index === 3 ? "bg-size-cover" : ""}`} style={{ backgroundImage: `url(${chapter.image})` }}>

                                </div>
                                <div className="chapter-title d-flex flex-column px-4 py-4">
                                    <div>{chapter.title1}</div>
                                    <div>{chapter.title2}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutDesktop;