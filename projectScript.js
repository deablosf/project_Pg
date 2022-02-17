const eximList = ["Amalgom", "Cerbo", "Kin", "Protean", "Quark"]

const eximDetails = {
    Amalgom: {
        text: "They got all the flavors but a crazy straw!",
        image: "url('./assets/Amalgoms.jpg')"
    },
    Cerbo: {
        text: "Their brains scream at you, till you cry! Powers: Telepathy, Mind Control, Telekinesis, Force Field, Mind Blast",
        image: "url('./assets/Cerbos.png')"
    },
    Kin: {
        text: "They heavy, you heavy and we all fall up! Powers: Absorption, Density Manipulation, Native Elemental Control, Super Speed",
        image: "url('./assets/Kin.png')"
    },
    Protean: {
        text: "That's no bat that's Jamal with a RPG! Powers: Animal Transformation, Body Adaptation, Boost, Natural Weaponry, True Flight",
        image: "url('./assets/Proteans.png')"
    },
    Quark: {
        text: "AVATAR Mutha FUGDER! Power: Absorption, Boost, Native Element Control, Super Speed",
        image: "url('./assets/Quarks.png')"
    }
}

const boroughList = ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten"]

let setState = {
    boroughDet: 1
}

const boroughDetails = {
    Bronx: "It's burning Baby! The Bronx is in the hands of Fletcher & Welch armed forces. This UK based PMC has an answer to the recent mayhem that has taken grip of the northern borough, extreme Non-lethal Force. This was their answer to crime in the UK and in the words of the their CEO 'if it’s good enough for her majesty's kingdom, it will be good enough for a peninsula a fraction of the size'. F&W underestimated The Bronx, there rages a decade long civil war between Thirteen criminal warlords; these are the ex-generals of Ramesses, the abdicated Underworld Shogun of the Silk streets.",
    Brooklyn: "It's Hipsters Baby! In Brooklyn information is power, and silence speaks volumes. 'I know something you don't know, I got something to tell you'; the ebb and flow of the most dangerous deals made in this borough. Info and Data brokers, overnight startups, the crypto-stock market, wise guys, double thinkers, and entrepreneurs stomp the pavement and search for the next leg up.",
    Manhattan: "It's Tourists Baby! Bulldozing into the future with stationary and mobile camera drones placed all over the island, boasting Big Brother-esque 24/7 monitoring for its citizens, Manhattan stands tall. Additionally N.Y.C.A.R (New York City Augmented Reality) has revolutionized the blending of physical and digital space. (Why be you when you can be a you that's only tied down by the near limitless potential of this new blossoming technology. Go into a store and let NYCAR show you what you'd look like in this season's most daring attire. Restaurants with interactive menus and custom entertainment. You might be able to wear what you want but on the digital plain you can customize yourself, your belongings and the world around you. Take control, the power to change your life, behind rose tinted glass. -NYCAR) Now the people of Manhattan live two lives, but which one is worth living?",
    Queens: "IT smells like something's cooking Baby! Queens is slowly being dragged into tomorrow by the Eden foundation and its affiliates. Foundation Funds or FF points (known as forbidden fruit) is the currency Eden is aggressively marketing to all residents and businesses in Queens. Thanks to the corporate restrictions lifted during the cold war, Queens has become a corporate playground with the people fighting to have their human rights outweigh Eden's corporate rights.",
    Staten: "No ... Staten Island the prototype solution to overpopulation, active but still under construction, Megastructure Zero. When completed the structure will take up half the island and stand more than 30 stories tall. Residents, offices, factory space, parks, malls, supermarkets, stores of all kinds, an indoor harbor, and much more will be within reach once the construction has completed."
}

const eximClassHtml = document.getElementById('eximButtonsWrap');
const eximDetailsHtml = document.getElementById('eximDetails');
const eximImageHtml = document.getElementById('eximIm');
const theCityImHtml = document.getElementById('theCityIm');
const boroughDetailsHtml = document.getElementById('boroughDetails');


const eximDetschanger = (z) => {
    eximImageHtml.removeAttribute("style");
    eximDetailsHtml.innerText = eximDetails[z].text;
    eximImageHtml.style.backgroundImage = eximDetails[z].image;
 };

 const invisibleButton = () => {
    if (setState.boroughDet == 1) {
        document.getElementById("bronx").style.display="none";
        document.getElementById("brooklyn1").style.display="none";
        document.getElementById("queens2").style.display="none";
        document.getElementById("staten1").style.display="none";
        document.getElementById("manhattan1").style.display="none";
        setTimeout(() => {
            theCityImHtml.classList.remove("theCityImNorm");
        }, 2000);
    } else {
        document.getElementById("bronx").removeAttribute("style");
        document.getElementById("brooklyn1").removeAttribute("style");
        document.getElementById("queens2").removeAttribute("style");
        document.getElementById("staten1").removeAttribute("style");
        document.getElementById("manhattan1").removeAttribute("style");
        theCityImHtml.classList.remove("theCityImManh");
        theCityImHtml.classList.remove("theCityImBroo");
        theCityImHtml.classList.remove("theCityImBron");
        theCityImHtml.classList.remove("theCityImQuee");
        theCityImHtml.classList.remove("theCityImStat");
        theCityImHtml.classList.add("theCityImNorm");
        setState.boroughDet = 1
    }
 }

const boroughDetsHtml = (z) => {
    boroughDetailsHtml.innerText = boroughDetails[z]
    if (setState.boroughDet == 1) {
        invisibleButton()
        if (z == "Manhattan") {
            theCityImHtml.classList.add("zoomInMan");
            setTimeout(() => {
                theCityImHtml.classList.add("theCityImManh");
                theCityImHtml.classList.remove("zoomInMan");
            }, 2000);
        } else if (z == "Brooklyn") {
            theCityImHtml.classList.add("zoomInBk");
            setTimeout(() => {
                theCityImHtml.classList.add("theCityImBroo");
                theCityImHtml.classList.remove("zoomInBk");
            }, 2000);
        } else if (z == "Bronx") {
            theCityImHtml.classList.add("zoomInBr");
            setTimeout(() => {
                theCityImHtml.classList.add("theCityImBron");
                theCityImHtml.classList.remove("zoomInBr");
            }, 2000);
        } else if (z == "Queens") {
            theCityImHtml.classList.add("zoomInQ");
            setTimeout(() => {
                theCityImHtml.classList.add("theCityImQuee");
                theCityImHtml.classList.remove("zoomInQ");
            }, 2000);
        } else if (z == "Staten") {
            theCityImHtml.classList.add("zoomInS");
            setTimeout(() => {
                theCityImHtml.classList.add("theCityImStat");
                theCityImHtml.classList.remove("zoomInS");
            }, 2000);
        }
        setState.boroughDet = 2
    } else {
        invisibleButton()
    }
    
};

let classification = () => {
    theCityImHtml.classList.add("theCityImNorm");
    eximClassHtml.innerHTML = eximList.map(classi => 
        '<button class="eximbuttons" onclick="eximDetschanger(' + `'${classi}'` + ')">' + classi.replace(/_/g, ' ') + '</button>'
        ).join('');
        console.log("I'm on")
};

// let boroughDescrip = () => {
//     theCityImHtml.innerHTML = boroughList.map(boro => 
//         '<button class="borougButtons" onclick="boroughDetsHtml(' + `'${boro}'` + ')">' + boro.replace(/_/g, ' ') + '</button>'
//         ).join('');
//         console.log("I'm on")
// }
 

 classification()
 // boroughDescrip()