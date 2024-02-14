document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".container");
    var card = document.querySelector(".card");

    container.addEventListener("mouseenter", function() {
        card.classList.add("hovered");
    });

    container.addEventListener("mouseleave", function() {
        card.classList.remove("hovered");
    });
});
