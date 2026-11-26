const products = [
    {
        id: 1,
        slug: "leaves",
        name: "Aloe Leaves",
        shortName: "Leaves",
        price: 2.99,
        features: [
            ">500ml consumable Gel",
            "'How to use' guide steps",
            "1 Free Leaf for every 5 purchased!",
        ],
        description: "Experience our premium Aloe Vera leaves, sourced from mature plants. We meticulously select leaves to preserve their full gel capacity. Order today, and we harvest them for you."
        ,
        giftEvery: 5
    },
    {
        id: 2,
        slug: "bottles",
        name: "Bottles (200ml)",
        shortName: "Bottles",
        price: 4.99,
        features: [
            "100% pure",
            "No chemical preservatives",
            "1 Free Bottle for every 4 purchased!"
        ],
        description:
            "Purely crafted, our bottles contain 100% fresh gel from mature Aloe plants. No chemical preservatives, just a touch of natural lemon juice to extend shelf life to 2-3 weeks."
        ,
        giftEvery: 4
    },
    {
        id: 3,
        slug: "plants",
        name: "Aloe Plants",
        shortName: "Plants",
        price: 9.99,
        features: [
            "1 year old",
            "Transplantation guide steps",
            "'How to maintain' guide steps",
            "1 Free plant for every 3 purchases!"
        ],
        description:
            "We provide instructions for you to help them mature properly! These indoor plants not only adorn your space but also cleanse the atmosphere and provide fresh oxygen."
        ,
        giftEvery: 3
    }
];

module.exports = products;