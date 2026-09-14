// ResQDE – Frontend
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");

    if (!nav) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            nav.style.background = "rgba(9, 11, 13, 0.94)";
        } else {
            nav.style.background = "rgba(9, 11, 13, 0.72)";
        }
    });
});
