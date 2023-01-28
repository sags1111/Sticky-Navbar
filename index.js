const navbarE1 = document.querySelector(".navbar");
const bottomContainere1 = document.querySelector(".bottom-container");
console.log(navbarE1.offsetHeight);
console.log(bottomContainere1.offsetTop);
window.addEventListener("scroll", () => {
    if (
        window.scrollY >
        bottomContainere1.offsetTop - navbarE1.offsetHeight - 50
    ) {
        navbarE1.classList.add("active");
    } else {
        navbarE1.classList.remove("active");
    }
});
