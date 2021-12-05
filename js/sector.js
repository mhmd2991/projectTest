//Select Element passed in
function selectElement(selector) {
    return document.querySelector(selector);
}

//Get The Link
function getTitle() {
    let href = document.location.href;
    let id = href.split('=')[1];
    for (let i = 0; i < database.length; i++) {
        if (database[i].sectorCode === id) {
            selectElement('.title').innerHTML += `${database[i].sectorName}`;
        }
    }
    return id;
}

function PrintInfo() {
    let id = getTitle();
    for (let i = 0; i < tourism.length; i++) {
        if (tourism[i].id === id) {
            selectElement(".left").innerHTML += `
<div class="box">
<div class="inner-box">
<div class="title"><a href="steps.html?id=${tourism[i].tId}">${tourism[i].info}</a></div>
<div class="desc">${tourism[i].desc}</div>
</div>
<a href="steps.html?id=${tourism[i].tId}" class="btn">اختار</a>
</div>
`;
        }
    }
}

//Print All Result in the database
function PrintAll() {

    for (let i = 0; i < database.length; i++) {
        selectElement('.right').innerHTML += `
<div class="item">
<a href="sector.html?id=${database[i].sectorCode}">${database[i].sectorName}</a>
</div>
`;
    }
}

PrintInfo();
PrintAll();