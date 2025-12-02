// ==============================
// SLIDER
// ==============================
let index = 0;
const slides = document.getElementById("slideBox");

if (slides) {
    const totalSlides = slides.children.length;

    function moveSlide(direction) {
        index += direction;

        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        const sliderSize = document.querySelector(".slider").offsetWidth;

        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(-${index * sliderSize}px)`;
    }

    setInterval(() => moveSlide(1), 2500);
}



// ==============================
// JUMLAH PRODUK (+ dan -)
// ==============================
document.querySelectorAll(".jumlah-wrapper").forEach(wrapper => {
    let jumlah = 0;
    const minusBtn = wrapper.querySelector(".minus");
    const plusBtn = wrapper.querySelector(".plus");
    const jumlahDisplay = wrapper.querySelector(".jumlah");

    if (plusBtn && jumlahDisplay) {
        plusBtn.addEventListener("click", () => {
            jumlah++;
            jumlahDisplay.textContent = jumlah;
        });
    }

    if (minusBtn && jumlahDisplay) {
        minusBtn.addEventListener("click", () => {
            if (jumlah > 0) {
                jumlah--;
                jumlahDisplay.textContent = jumlah;
            }
        });
    }
});



// ==============================
// POPUP KERANJANG
// ==============================
function showKeranjang() {
    const overlay = document.getElementById("overlay-keranjang");
    const popup = document.getElementById("popup-keranjang");

    if (!overlay || !popup) return;

    overlay.style.display = "flex";

    setTimeout(() => popup.classList.add("show"), 10);

    setTimeout(() => {
        window.location.href = "index2.html";
    }, 3000);
}

function closeKeranjang() {
    const overlay = document.getElementById("overlay-keranjang");
    const popup = document.getElementById("popup-keranjang");

    if (!overlay || !popup) return;

    popup.classList.remove("show");
    setTimeout(() => overlay.style.display = "none", 300);
}



// ==============================
// POPUP BELI
// ==============================
function showBeli() {
    const overlay = document.getElementById("overlay-beli");
    const popup = document.getElementById("popup-beli");

    if (!overlay || !popup) return;

    overlay.style.display = "flex";

    setTimeout(() => popup.classList.add("show"), 10);

    setTimeout(() => {
        window.location.href = "index2.html";
    }, 3000);
}

function closeBeli() {
    const overlay = document.getElementById("overlay-beli");
    const popup = document.getElementById("popup-beli");

    if (!overlay || !popup) return;

    popup.classList.remove("show");
    setTimeout(() => overlay.style.display = "none", 300);
}



// ==============================
// EVENT LISTENER TOMBOL POPUP
// ==============================

document.querySelectorAll(".keranjang").forEach(btn => {
    btn.addEventListener("click", showKeranjang);
});

document.querySelectorAll(".beli").forEach(btn => {
    btn.addEventListener("click", showBeli);
});


document.querySelectorAll(".sumbit").forEach(btn => {
    btn.addEventListener("click", submit);
});



function submit() {
    const overlay = document.getElementById("overlay-beli");
    const popup = document.getElementById("popup-beli");

    if (!overlay || !popup) return;

    overlay.style.display = "flex";

    setTimeout(() => popup.classList.add("show"), 10);

    setTimeout(() => {
        window.location.href = "index2.html";
    }, 3000);
}

function closeBeli() {
    const overlay = document.getElementById("overlay-beli");
    const popup = document.getElementById("popup-beli");

    if (!overlay || !popup) return;

    popup.classList.remove("show");
    setTimeout(() => overlay.style.display = "none", 300);
}
