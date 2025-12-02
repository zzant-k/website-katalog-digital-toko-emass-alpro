// POPUP BELI
function showBeli() {
    const overlay = document.getElementById("overlay-beli");
    const popup = document.getElementById("popup-beli");

    overlay.style.display = "flex";

    setTimeout(() => {
        popup.classList.add("show");
    }, 10);

    setTimeout(() => {
        window.location.href = "emas.html";
    }, 3000);
}

function closeBeli() {
    const overlay = document.getElementById("overlay-beli");
    const popup = document.getElementById("popup-beli");

    popup.classList.remove("show");

    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
}


function showPopup() {
    const pop = document.getElementById("popup");
    pop.style.display = "flex";

    // auto close 2.5s
    setTimeout(() => {
        closePopup();
    }, 3000);
}

function closePopup() {
    const pop = document.getElementById("popup");
    pop.style.animation = "fadeIn 0.3s reverse forwards";

    setTimeout(() => {
        pop.style.display = "none";
    }, 250);
}
