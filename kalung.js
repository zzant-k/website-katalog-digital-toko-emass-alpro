let index = 0;
const slides = document.getElementById("slideBox");
const totalSlides = slides.children.length;

function moveSlide(direction) {
  index += direction;

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  const sliderSize = document.querySelector('.slider').offsetWidth;

  // Pastikan transition berjalan
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(-${index * sliderSize}px)`;
}
setInterval(() => moveSlide(1), 2500);

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const jumlahDisplay = document.querySelector(".jumlah");

let jumlah = 0;

plusBtn.addEventListener("click", () => {
    jumlah++;
    jumlahDisplay.textContent = jumlah;
});

minusBtn.addEventListener("click", () => {
    if (jumlah > 0) {
        jumlah--;
        jumlahDisplay.textContent = jumlah;
    }
});



// POPUP KERANJANG
function showKeranjang() {
    const overlay = document.getElementById("overlay-keranjang");
    const popup = document.getElementById("popup-keranjang");

    overlay.style.display = "flex";

    setTimeout(() => {
        popup.classList.add("show");
    }, 10);

    setTimeout(() => {
        window.location.href = "emas.html";
    }, 3000);
}

function closeKeranjang() {
    const overlay = document.getElementById("overlay-keranjang");
    const popup = document.getElementById("popup-keranjang");

    popup.classList.remove("show");

    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
}



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
