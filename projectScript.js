const eximList = ["Amalgom", "Cerbo", "Kin", "Protean", "Quark"]

const eximDetails = {
    Amalgom: "They got all the flavors but a stranger!",
    Cerbo: "They brains scream at you, till you cry!",
    Kin: "They heavy, you heavy and we all fall up!",
    Protean: "That's no bat that's Jamal with a RPG!",
    Quark: "AVATAR Mutha FUGDER!"
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
    eximDetailsHtml.innerText = eximDetails[z]
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