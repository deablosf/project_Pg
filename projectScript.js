const eximList = ["Amalgom", "Cerbo", "Kin", "Protean", "Quark"]

const eximDetails = {
    Amalgom: {
        text: "They got all the flavors but a stranger!",
        image: ""
    },
    Cerbo: {
        text: "They brains scream at you, till you cry!",
        image: "(/assets/Cerbos.png)"
    },
    Kin: {
        text: "They heavy, you heavy and we all fall up!",
        image: "(/assets/Kin.png)"
    },
    Protean: {
        text: "That's no bat that's Jamal with a RPG!",
        image: "(/assets/Proteans.png)"
    },
    Quark: {
        text: "AVATAR Mutha FUGDER!",
        image: "(/assets/Quarks.png)"
    }
}

const boroughList = ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten"]

const boroughDetails = {
    Bronx: "It's burning Baby!",
    Brooklyn: "It's Hipsters Baby!",
    Manhattan: "It's Tourists Baby!",
    Queens: "IT smells like something's cooking Baby",
    Staten: "No ..."
}

const eximDetailsHtml = document.getElementById('eximDetails');
const boroughDetailsHtml = document.getElementById('boroughDetails');
const eximClassHtml = document.getElementById('eximButtonsWrap');
const theCityImHtml = document.getElementById('theCityIm');

const eximDetschanger = (z) => {
    eximDetailsHtml.innerText = eximDetails[z].text
 };

const boroughDetsHtml = (z) => {
    boroughDetailsHtml.innerText = boroughDetails[z]
};

let classification = () => {
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