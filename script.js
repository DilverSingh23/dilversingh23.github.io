const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");
const downArrows = document.querySelectorAll(".down-arrow");

hamburger.addEventListener("click", () => {
    if(getComputedStyle(links).display == "none") {
        links.style.display = "flex";
    }
    else {
        links.style.display = "none";
    }
});

downArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        const description = arrow.parentElement.nextElementSibling;
        if (getComputedStyle(description).display == "none") {
            description.style.display = "flex";
        }
        else {
            description.style.display = "none"
        }
    });
});
