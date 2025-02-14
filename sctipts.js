function checkImageVisibility() {
    const container = document.querySelector(".complectation");
    const image = document.querySelector(".complectation-image");
    const text = document.querySelector(".complectation-text");

    if (container.clientWidth < text.clientWidth + image.clientWidth + 40) {
        image.style.display = "none";
        container.style.flexDirection = "column";
    } else {
        image.style.display = "block";
        container.style.flexDirection = "row";
    }
}

// Проверяем при загрузке и изменении размера окна
window.addEventListener("load", checkImageVisibility);
window.addEventListener("resize", checkImageVisibility);
