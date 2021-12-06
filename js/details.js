let faqs = document.querySelectorAll(".box");

faqs.forEach(faq => {
    faq.addEventListener("click", function (e) {
        faq.classList.toggle("active");
    });
});

function getSection() {
    let parms = new URLSearchParams(document.location.search);
    let section = parms.get("section");

    let sectionName = document.querySelector(`.${section}`);
    sectionName.classList.add("active");
}

getSection();