import React from 'react';

// Placeholder — build your real mobile structure here.
// Receives the same texts/paragraphTitles/chapters data as AboutDesktop,
// via props, so nothing needs to be duplicated between the two.
function AboutMobile({ texts, paragraphTitles, chapters }) {

    const chapterWordSets = texts.map((text) => {
        const cleaned = text.replace(/\s+/g, " ").trim();
        const words = [];
        cleaned.split("*").forEach((segment, segIndex) => {
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
        return words;
    });

    return (
        <div className="about-container-mobile p-3">
            {chapters.map((chapter, index) => (
                <div className="chapter-wrapper d-flex flex-column align-items-center py-5" key={chapter.number}>
                    <div className="top-side d-flex flex-column">
                        <p className="paragraph-title">{paragraphTitles[index]}</p>

                        <p>
                            {chapterWordSets[index].map((word, wordIndex) => {
                                if (word.isBreak) {
                                    return <span className="line-break" key={wordIndex}></span>;
                                }
                                return (
                                    <span
                                        className={`word-span ${word.emphasized ? "emphasized" : ""}`}
                                        key={wordIndex}
                                    >
                                        {word.text}{" "}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                    <div className="bottom-side" key={chapter.number}>
                        <div className="chapter-card d-flex flex-column p-3">
                            <div className="chapter-header p-2">{chapter.number}</div>
                            <div className={`chapter-image ${index === 3 ? "bg-size-cover" : ""}`} style={{ backgroundImage: `url(${chapter.image})` }}>

                            </div>
                            <div className="chapter-title d-flex flex-column px-4 py-4">
                                <div>{chapter.title1}</div>
                                <div>{chapter.title2}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AboutMobile;