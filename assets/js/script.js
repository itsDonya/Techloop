// Hover effect
let animatedHoverButtons = document.querySelectorAll(".animated-hover");
animatedHoverButtons.forEach(button => {
    button.addEventListener("mouseenter", (e) => {
        button.classList.remove("left");
        button.classList.add("hovered");
        e.target.style.setProperty("--top", `${e.layerY}px`);
        e.target.style.setProperty("--left", `${e.layerX}px`);
    })
    button.addEventListener("mouseleave", (e) => {
        button.classList.remove("hovered");
        button.classList.add("left");
        e.target.style.setProperty("--top", `${e.layerY}px`);
        e.target.style.setProperty("--left", `${e.layerX}px`);
    })
})