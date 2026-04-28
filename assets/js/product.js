/**
 * Product JS - Logic for Product Details
 */

class ProductManager {
    constructor() {
        this.initQuantityControls();
        this.initPopups();
    }

    initQuantityControls() {
        const wrappers = document.querySelectorAll(".quantity-wrapper");
        
        wrappers.forEach(wrapper => {
            let quantity = 0;
            const minusBtn = wrapper.querySelector(".minus");
            const plusBtn = wrapper.querySelector(".plus");
            const display = wrapper.querySelector(".current-quantity");

            if (plusBtn && display) {
                plusBtn.addEventListener("click", () => {
                    quantity++;
                    display.textContent = quantity;
                });
            }

            if (minusBtn && display) {
                minusBtn.addEventListener("click", () => {
                    if (quantity > 0) {
                        quantity--;
                        display.textContent = quantity;
                    }
                });
            }
        });
    }

    initPopups() {
        const btnCart = document.querySelector(".btn-cart");
        const btnBuy = document.querySelector(".btn-buy");
        const btnSubmit = document.querySelector(".btn-submit");

        if (btnCart) btnCart.addEventListener("click", () => this.showPopup("overlay-keranjang", "popup-keranjang"));
        if (btnBuy) btnBuy.addEventListener("click", () => this.showPopup("overlay-beli", "popup-beli"));
        if (btnSubmit) btnSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            this.showPopup("overlay-beli", "popup-beli");
        });

        // Close buttons
        document.querySelectorAll(".close-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const overlay = e.target.closest(".overlay");
                this.closePopup(overlay.id, overlay.querySelector(".popup").id);
            });
        });
    }

    showPopup(overlayId, popupId) {
        const overlay = document.getElementById(overlayId);
        const popup = document.getElementById(popupId);

        if (!overlay || !popup) return;

        overlay.style.display = "flex";
        setTimeout(() => popup.classList.add("show"), 10);

        // Auto-redirect or close after delay if needed
        // setTimeout(() => { window.location.href = "../index.html"; }, 3000);
    }

    closePopup(overlayId, popupId) {
        const overlay = document.getElementById(overlayId);
        const popup = document.getElementById(popupId);

        if (!overlay || !popup) return;

        popup.classList.remove("show");
        setTimeout(() => overlay.style.display = "none", 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ProductManager();
});
