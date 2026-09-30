import React, { useState, useEffect } from 'react';
import AboutDesktop from './AboutDesktop';
import AboutMobile from './AboutMobile';
import chapter1 from "../images/chapter-01.jpg"
import chapter2 from "../images/chapter-02.jpg"
import chapter3 from "../images/chapter-03.jpg"
import chapter4 from "../images/chapter-04.jpg"

// About.js is now just a thin SWITCH — it owns the shared text/image data
// (since both versions need it) and decides WHICH component to mount.
// It does NOT own any of the engagement logic itself anymore. That's the
// whole point: AboutDesktop's hooks (the rAF loop, the wheel listener,
// masterProgress) only exist at all when AboutDesktop is actually mounted.
// On mobile, AboutDesktop never mounts — so none of that code ever runs,
// full stop, with zero defensive checks needed inside it.

function About({ scrollBypass }) {

    // ── TEXT MARKUP ──────────────────────────────────────────────
    //  |        (standalone, spaces around it) = stanza / line break
    //  *...*    = emphasized phrase (italic + heavier weight)
    // ─────────────────────────────────────────────────────────────

    const text1 = `...Back in 2012, when our father flew to Cyprus for a summer visit to his sister.
    Days into the trip, disaster struck in the most unlikely form: *a toaster!*
    Attempting the season's boldest culinary feat — a single slice of toast — he burned both palms.
    | As he winced through the pain, our aunt moved fast. She sliced a leaf straight from her Aloe Vera plant,
    split it open, and pressed its gel to his burns. *The relief was almost instant.*
    | That single moment became the spark for everything that followed.`;

    const text2 = `...our father and us, his two sons, had turned the family farm into a business,
    growing seasonal vegetables and selling them fresh at street markets.
    We built a name for quality. But one product surprised everyone.
    | Our father had carried three small Aloe Vera plants back from that trip.
    Against the odds, he insisted we gamble part of our land on them — coaxing *three into thousands,*
    then bringing them to market alongside the vegetables.
    | An unlikely sight: Aloe Vera, sitting on a bench where cabbages should be.`;

    const text3 = `...We invested. We tended those plants with care,
    giving them the time they needed to grow properly.
    Meanwhile, we studied — hundreds of different Aloe Vera benefits,
    so we'd know exactly what to recommend, and why.
    | Years later, we're proud to serve those who tried it once and never stopped.
    For skin, or for drinking, the benefits are real, lasting, and unmistakable — but only under one condition:
    | Your Aloe Vera gel must come from a leaf *at least 3 years old.* Ideally, *5.*
    | It must be *fresh.*
    | It must be *free of preservatives.*`;

    const text4 = `*...Freshness above all.*
    | Skip the mass-produced Aloe Vera — liter bottles stretched thin with preservatives,
    a fragment of what the plant actually offers. We do it differently:
    | Cut the leaf → extract the gel within the hour → bottle it in small 200ml portions → sell it the very next day →
    you use it within 7 days, while its benefits are *still raw and strong.*
    | After that window, the potency fades fast. Want it to last? Freeze it into ice cubes —
    it holds for months, just as fresh. One cube a day is all it takes.
    | That's our philosophy — and why this site exists. We're a local business, rooted in the street markets of *Thessaloniki.*
    To keep every bottle 100% fresh, we deliver only within our hometown: order, and it arrives ready, potent, and yours the same day.`;

    const texts = [text1, text2, text3, text4];

    const paragraphTitles = [
        "It all started...",
        "By 2013...",
        "So we listened... ",
        "One simple principle...",
    ];

    const chapters = [
        {
            number: "Chapter - 01",
            image: chapter1,
            title1: "A curious man...",
            title2: "...and his adventures",
            description: "A tantalizing beverage that beckons the senses...",
        },
        {
            number: "Chapter - 02",
            image: chapter2,
            title1: "When Vision...",
            title2: "...became Reality",
            description: "A tantalizing beverage that beckons the senses...",
        },
        {
            number: "Chapter - 03",
            image: chapter3,
            title1: "And Reality...",
            title2: "...became Legacy",
            description: "A tantalizing beverage that beckons the senses...",
        },
        {
            number: "Chapter - 04",
            image: chapter4,
            title1: "And here we are...",
            title2: "...at your Disposal",
            description: "A tantalizing beverage that beckons the senses...",
        }
    ]

    const [isMobileLayout, setIsMobileLayout] = useState(
        window.matchMedia('(max-width: 999.98px)').matches
    );

    useEffect(() => {
        const query = window.matchMedia('(max-width: 999.98px)');
        const handleChange = (e) => setIsMobileLayout(e.matches);
        query.addEventListener('change', handleChange);
        return () => query.removeEventListener('change', handleChange);
    }, []);

    return isMobileLayout ? (
        <AboutMobile
            texts={texts}
            paragraphTitles={paragraphTitles}
            chapters={chapters}
        />
    ) : (
        <AboutDesktop
            texts={texts}
            paragraphTitles={paragraphTitles}
            chapters={chapters}
            scrollBypass={scrollBypass}
        />
    );
}

export default About;