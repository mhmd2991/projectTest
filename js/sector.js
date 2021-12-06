//Select Element passed in
function selectElement(selector) {
    return document.querySelector(selector);
}

//Get The Link
/*function getInfo() {
    let parms = new URLSearchParams(document.location.search);
    let id = parms.get("id");
    for (let i = 0; i < database.length; i++) {

        if (database[i].sectorCode === id) {
            selectElement('.title').innerHTML += `${database[i].sectorName}`;
            for (let j = 0; j < database[i].info.length; j++) {
                let info = database[i].info[j];
                selectElement(".left").innerHTML += `
<div class="box">
<div class="inner-box">
<div class="title"><a href="steps.html?id=${database[i].sectorCode}&num=${database[i].sectorN}">${info}</a></div>
<div class="desc">${database[i].desc}</div>
</div>
<a href="steps.html?id=${database[i].sectorCode}&num=${database[i].sectorN}" class="btn">اختار</a>
</div>
`;

            }

        }
    }
}

//Print All Result in the database
function PrintAll() {

    for (let i = 0; i < database.length; i++) {
        selectElement('.right').innerHTML += `
<div class="faq">
<div class="item">
<a href="sector.html?id=${database[i].sectorCode}">${database[i].sectorName}</a><i class="fas fa-angle-down"></i>
</div>
<div class="sub-items">
${database[i].info.map((inf) => '<div><a href="#">' + inf + '</a></div>').join("")}
</div>
</div>
`;
    }
}

let faqs = document.querySelectorAll(".faq");
console.log(faqs);
faqs.forEach(faq => {
    faq.addEventListener("click", function (e) {
        selectElement(".sub-items").classList.toggle("active");
    });
});

//PrintInfo();
getInfo();
PrintAll();*/

function getTitle() {
    let parms = new URLSearchParams(document.location.search);
    let id = parms.get("id");
    for (let i = 0; i < database.length; i++) {

        if (database[i].sectorCode === id) {
            selectElement('.title').innerHTML += `${database[i].sectorName}`;
            let sectionName = document.querySelector(`.${database[i].sectorN}`);
            sectionName.classList.add("active");
        }
    }
}

let faqs = document.querySelectorAll(".box");

faqs.forEach(faq => {
    faq.addEventListener("click", function (e) {
        faq.classList.toggle("active");
    });
});

getTitle();