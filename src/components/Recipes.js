import React, {useState, useEffect} from "react";


function Recipes() {

    const [isRecipesVisible, setRecipesVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        // Check if the user has scrolled to the "Recipes" section
        const recipesSection = document.getElementById("section-3");
        if (recipesSection) {
            const recipesSectionOffset = recipesSection.getBoundingClientRect().top;
            if (recipesSectionOffset < window.innerHeight / 2) {
            setRecipesVisible(true);
            }
        }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const text1 = "We’re all familiar with the wonderful benefits of consuming aloe vera."
    const text2 = "Whether it’s strengthening your hair, clearing up skin, reducing heartburn,"
    const text3 = "or maintaining eye health, this nutritious herb is a worthwhile addition to your diet."
    const text4 = "Sure, there are people who really enjoy eating aloe vera,"
    const text5 = "but for those who don’t, we came up with some delicious Aloe Vera Recipes for you!"

    return (
        <div className={`recipes container d-flex flex-column align-items-center ${isRecipesVisible ? "recipes-visible" : ""}`}>
            <div className="recipes-introduction d-flex flex-column align-items-center text-center">
                <div className="recipes-introduction-headers d-flex justify-content-center">
                    <h1 className={`recipes-introduction-headers-header1 ${isRecipesVisible ? "centered" : ""}`}>R</h1>
                    <h1 className={`recipes-introduction-headers-header2 ${isRecipesVisible ? "centered" : ""}`}>e</h1>
                    <h1 className={`recipes-introduction-headers-header3 ${isRecipesVisible ? "centered" : ""}`}>c</h1>
                    <h1 className={`recipes-introduction-headers-header4 ${isRecipesVisible ? "centered" : ""}`}>i</h1>
                    <h1 className={`recipes-introduction-headers-header5 ${isRecipesVisible ? "centered" : ""}`}>p</h1>
                    <h1 className={`recipes-introduction-headers-header6 ${isRecipesVisible ? "centered" : ""}`}>e</h1>
                    <h1 className={`recipes-introduction-headers-header7 ${isRecipesVisible ? "centered" : ""}`}>s</h1>
                </div>
                <div className="recipes-introduction-text">
                    <div className={`recipes-introduction-text-line1 ${isRecipesVisible ? "centered" : ""}`}>{text1}</div>
                    <div className={`recipes-introduction-text-line2 ${isRecipesVisible ? "centered" : ""}`}>{text2}</div>
                    <div className={`recipes-introduction-text-line3 ${isRecipesVisible ? "centered" : ""}`}>{text3}</div>
                    <div className={`recipes-introduction-text-line4 ${isRecipesVisible ? "centered" : ""}`}>{text4}</div>
                    <div className={`recipes-introduction-text-line5 ${isRecipesVisible ? "centered" : ""}`}>{text5}</div>
                </div>
            </div>
            <div className="recipes-top-left col-8">
                <div className="bottom-right">
                    <div className="row d-flex justify-content-between">
                        <h2 className="recipes-title mb-0">Aloe Vera Recipe 1</h2>
                        <div className="recipes-instructions d-flex flex-column col-6">
                            <h4>Instructions</h4>
                        </div>
                        <div className="recipes-text d-flex col-6">
                            <p className="mb-0">
                                Discover the charm of our Aloe Vera plants, nurtured with dedication and care. 
                                These thriving green companions are the heart of our Aloe family, 
                                cultivated with utmost precision to deliver the purest Aloe experience. 
                                Grown from 5-year-old mature plants, our Aloe Vera specimens offer 
                                a living testament to nature's wonders. With leaves meticulously 
                                selected to preserve their full 100% gel capacity, these plants 
                                are a source of wellness and vitality. When you welcome an Aloe Vera plant
                                into your space, you invite a touch of nature's magic that not only 
                                beautifies your surroundings but also offers the potential for a host of health benefits. 
                                Embrace the vitality and elegance that our Aloe Vera plants bring to your home, 
                                and let nature's goodness flourish in your life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recipes-top-left col-8">
                <div className="bottom-right">
                    <div className="row d-flex justify-content-between">
                        <h2 className="recipes-title mb-0">Aloe Vera Recipe 2</h2>
                        <div className="recipes-instructions d-flex flex-column col-6">
                            <h4>Instructions</h4>
                        </div>
                        <div className="recipes-text d-flex col-6">
                            <p className="mb-0">
                                Discover the charm of our Aloe Vera plants, nurtured with dedication and care. 
                                These thriving green companions are the heart of our Aloe family, 
                                cultivated with utmost precision to deliver the purest Aloe experience. 
                                Grown from 5-year-old mature plants, our Aloe Vera specimens offer 
                                a living testament to nature's wonders. With leaves meticulously 
                                selected to preserve their full 100% gel capacity, these plants 
                                are a source of wellness and vitality. When you welcome an Aloe Vera plant
                                into your space, you invite a touch of nature's magic that not only 
                                beautifies your surroundings but also offers the potential for a host of health benefits. 
                                Embrace the vitality and elegance that our Aloe Vera plants bring to your home, 
                                and let nature's goodness flourish in your life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recipes-top-left col-8">
                <div className="bottom-right">
                    <div className="row d-flex justify-content-between">
                        <h2 className="recipes-title mb-0">Aloe Vera Recipe 3</h2>
                        <div className="recipes-instructions d-flex flex-column col-6">
                            <h4>Instructions</h4>
                        </div>
                        <div className="recipes-text d-flex col-6">
                            <p className="mb-0">
                                Discover the charm of our Aloe Vera plants, nurtured with dedication and care. 
                                These thriving green companions are the heart of our Aloe family, 
                                cultivated with utmost precision to deliver the purest Aloe experience. 
                                Grown from 5-year-old mature plants, our Aloe Vera specimens offer 
                                a living testament to nature's wonders. With leaves meticulously 
                                selected to preserve their full 100% gel capacity, these plants 
                                are a source of wellness and vitality. When you welcome an Aloe Vera plant
                                into your space, you invite a touch of nature's magic that not only 
                                beautifies your surroundings but also offers the potential for a host of health benefits. 
                                Embrace the vitality and elegance that our Aloe Vera plants bring to your home, 
                                and let nature's goodness flourish in your life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Recipes;