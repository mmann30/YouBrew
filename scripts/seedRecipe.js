// Initial database seed information.
// !! ONLY USE FOR DEVELOPMENT !!
// This script empties and replaces the Recipe collection

const mongoose = require("mongoose");
const db = require("../models");

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/youbrew",
    {
        useMongoClient: true
    }
);

const recipeSeed = [
    {
        name: "Queen's Weiss",
        style: "hefeweissen",
        brewTime: 2,
        abv: "5.3%",
        desc: `A traditional Hefeweizen designed on a Bavarian water profile. 
            A simple light bodied ale, with a high wheat content to give crispness and a cloudy pale yellow color.  
            Subtle noble hop bitterness is present.  The star is the yeast, one of the oldest strains in the world, 
            which is specially treated to give bright clove and banana flavors, with a subtle pink bubble gum aftertaste.`,
        production: "Year-Round",
        notes: " "
    },
    {
        name: "Southern BEL",
        style: "Belgian single",
        brewTime: 4,
        abv: "6.8%",
        desc: `This deep Belgian pale with a traditional pilsner malt character and slight toasted biscuit notes. 
            Dark fruity Belgian esters are complemented by exotic coconut, clove and vanilla captured from the introduction of exotic 
            Peruvian wood. A subtle yet complex beer for the discerning palate.`,
        production: "Year-Round",
        notes: " "
    }, 
    {
        name: "Equilibrium",
        style: "pale ale",
        brewTime: 4,
        abv: "5.6%",
        desc: `A dry-hopped American pale ale that acknowledges our chemistry roots and is defined by balance. 
            Specifically developed to combine the best of old-world and new world pale ales - coupling a bitter and malty foundation 
            with citrus, pine, and melon undertones. A well-rounded style that showcases the wide spectrum and history of the style.`,
        production: "Year-Round",
        notes: " "
    },
    {
        name: "Bohemian riot",
        style: "pilsner",
        brewTime: 8,
        abv: "5.5%",
        desc: `In 1838, after nearly 600 years of inconsistent and poor quality beer, the people of Pilsen (an old Bohemian town) began an upheaval
            throughout the city, dumping full barrels in the streets to show their dissatisfaction. The city officials formed a city-owned brewery 
            that would begin brewing only bottom-fermented beers. Lagers were born. This classic style is built on a simple grain bill, 
            brewed with traditional lager ingredients delivering a clean, light-bodied style. Noble hops add slight bitterness while allowing the 
            distinctive spicy and piney aroma characteristics to show through. With a crisp, dry finish, this style is best enjoyed in warm temperatures. `,
        production: "Seasonal",
        notes: " "
    },
    {
        name: "Unseasonal",
        style: "American lager",
        brewTime: 8,
        abv: "5.4%",
        desc: `As our only year-round lager, Unseasonal Lager transcends all seasons. A beer outside of all traditional style guidelines, 
            it creates a style of its own.  Our flagship lager was specially crafted by the team at Arches Brewing to be a lager that calls Atlanta home.  
            A simple American grain bill is treated with old-world techniques creating a distinct color and body which is light enough for summer and 
            strong enough for winter.  All noble hops provide a classic mild and spicy bitterness.`,
        production: "Year-Round",
        notes: " "
    },
    {
        name: "Festbier",
        style: "Oktoberfest",
        brewTime: 8,
        abv: "7.1%",
        desc: `This traditional lager was designed to celebrate the coming of harvest in Munich. 
            The nutty, sweet malt character serves as a hearty base in this beer. The spicy yet elegant hop character balances 
            the malt body and provides a sharp bitterness before a clean finish.`,
        production: "Seasonal",
        notes: " "
    },
    {
        name: "Tripel",
        style: "Belgian triple",
        brewTime: 24,
        abv: "8.5%",
        desc: `A centuries-old favorite, we start by using a Belgian water profile which highlights the malt & ester character. 
            We use 2nd generation yeast that was fed by Southern Bel’ giving fruity esters that complement the style. 
            Slightly toasted grains are coupled with several additions of Candi sugar. The final act of this style is portrayed through 
            light spice, a subtle bitterness, and a hint of orange peel contributing to the aroma and taste.`,
        production: "Limited",
        notes: " "
    },
    {
        name: "Quad",
        style: "Belgian quadruple",
        brewTime: 52,
        abv: "12.6%",
        desc: `This limited release Belgian specialty combines seven grains to create a complex flavor profile with biscuit, 
            caramel, and chocolate character. Dark fruit undertones come from the addition of twenty pounds of dates and 
            five pounds of raisins, which are pureed and caramelized before adding them to the boil. Minimal hop contributions 
            prevent the sweetness of the fruit and candi sugar from becoming cloying without contributing bitterness. 
            This style is aged for 9-12 months before released each year in the Fall.`,
        production: "Specialty",
        notes: " "
    }
];

db.Recipe
    .remove({})
    .then(() => db.Recipe.collection.insertMany(recipeSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
