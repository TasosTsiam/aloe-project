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

    const nectarText1 = `Indulge in the exquisite blend of Mavrodaphne Nectar, a tantalizing
                        beverage that beckons the senses with its delightful taste and inherent health benefits.
                        This recipe combines Aloe Vera gel, honey and the ancient Greek wine Mavrodaphne,
                        to create a symphony of flavors that both soothes and energizes.
                        Beyond its delicious appeal, Mavrodaphne Nectar is a potent health elixir.
                        The synergy of these three ingredients fortifies your respiratory system,
                        providing additional support against colds and respiratory ailments. `

    const nectarText2 = `This divine elixir, aptly named "Nectar," pays homage to the legendary drink of the Olympic Gods,
                        bestowing a sense of majesty to your well-being.`

    const sauceText1 = `Indulge in the culinary enchantment of AmourRose Sauce,
                        a remarkable infusion of beets, honey, and aloe gel that elevates your dining experience to new heights.
                        Crafted with precision and love, this deep-red elixir embodies the perfect blend of romance and flavor.
                        To create this ambrosial delight, simply blend the freshest well-boiled beets,
                        a drizzle of honey, and a touch of aloe gel.
                        The result is a luxurious sauce that transcends ordinary dining,
                        lending an air of high-class sophistication to your culinary creations.`

    const sauceText2 = `Pour the "AmourRose Sauce" over your salads, roasted vegetables,
                        grilled meats, or seafood to unlock a world of gastronomic bliss.`

    const smoothieText1 = `Dive into the world of our "Blissful Symphony" smoothie.
                            Melding your favorite milk with ripe strawberries, a banana,
                            and the refreshing essence of aloe gel ice cubes, this concoction is a treat for your senses.
                            As you blend these elements, a harmonious mix unfolds, offering a satisfying experience
                            that pleases your taste buds.
                            Strawberries and banana contribute natural sweetness and essential nutrients,
                            while aloe gel ice cubes - that you can have if you pour gel into an icebox -
                            add a unique, refreshing touch, whilst also providing
                            all the benefits of Aloe Vera.`

    const smoothieText2 = `Enjoy this revitalizing elixir, a departure from the ordinary,
                            and let each sip bring a moment of culinary joy.`

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
            <div className="recipes-top-left-1 col-8">
                <div className="bottom-right-1">
                    <div className="row d-flex justify-content-between">
                        <h2 className="recipes-title mb-0">Mavrodaphne Nectar</h2>
                        <div className="recipes-instructions d-flex flex-column col-6">
                            <h4>Instructions</h4>
                        </div>
                        <div className="recipes-text d-flex flex-column col-6">
                            <p className="mb-3">
                                {nectarText1}
                            </p>
                            <p className="mb-0">
                                {nectarText2}
                            </p>
                            <div className="recipes-ingredients d-flex mt-5">
                                <div className="d-flex flex-column">
                                    <h6>Ingredients</h6>
                                    <p className="mb-0">Mavrodaphne</p>
                                    <p className="mb-0">Honey</p>
                                    <p className="mb-0">Aloe Vera gel</p>
                                </div>
                                <div className="d-flex flex-column">
                                <h6>Portion</h6>
                                    <p className="mb-0">20%</p>
                                    <p className="mb-0">20%</p>
                                    <p className="mb-0">60%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recipes-top-left-2 col-8">
                <div className="bottom-right-2">
                    <div className="row d-flex justify-content-between">
                        <h2 className="recipes-title mb-0">AmourRose Sauce</h2>
                        <div className="recipes-instructions d-flex flex-column col-6">
                            <h4>Instructions</h4>
                        </div>
                        <div className="recipes-text d-flex flex-column col-6">
                            <p className="mb-3">
                                {sauceText1}
                            </p>
                            <p className="mb-0">
                                {sauceText2}
                            </p>
                            <div className="recipes-ingredients d-flex mt-5">
                                <div className="d-flex flex-column">
                                    <h6>Ingredients</h6>
                                    <p className="mb-0">Beets</p>
                                    <p className="mb-0">Honey</p>
                                    <p className="mb-0">Aloe Vera gel</p>
                                </div>
                                <div className="d-flex flex-column">
                                <h6>Portion</h6>
                                    <p className="mb-0">400ml</p>
                                    <p className="mb-0">3 tablespoons</p>
                                    <p className="mb-0">100ml</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recipes-top-left-3 col-8">
                <div className="bottom-right-3">
                    <div className="row d-flex justify-content-between">
                        <h2 className="recipes-title mb-0">Blissful Symphony</h2>
                        <div className="recipes-instructions d-flex flex-column col-6">
                            <h4>Instructions</h4>
                        </div>
                        <div className="recipes-text d-flex flex-column col-6">
                            <p className="mb-3">
                                {smoothieText1}
                            </p>
                            <p className="mb-0">
                                {smoothieText2}
                            </p>
                            <div className="recipes-ingredients d-flex mt-5">
                                <div className="d-flex flex-column">
                                    <h6>Ingredients</h6>
                                    <p className="mb-0">Milk</p>
                                    <p className="mb-0">Strawberries</p>
                                    <p className="mb-0">Banana</p>
                                    <p className="mb-0">Aloe Vera gel</p>
                                </div>
                                <div className="d-flex flex-column">
                                <h6>Portion</h6>
                                    <p className="mb-0">400ml</p>
                                    <p className="mb-0">80gr</p>
                                    <p className="mb-0">1 full piece</p>
                                    <p className="mb-0">2-3 Ice cubes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Recipes;