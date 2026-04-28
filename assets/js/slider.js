/**
 * Slider JS - Homepage Slider Logic
 */

class Slider {
    constructor() {
        this.index = 0;
        this.slidesContainer = document.getElementById("slideBox");
        this.sliderElement = document.querySelector(".slider");
        
        if (!this.slidesContainer || !this.sliderElement) return;

        this.totalSlides = this.slidesContainer.children.length;
        this.init();
    }

    init() {
        // Start autoplay
        this.autoplay = setInterval(() => this.moveSlide(1), 2500);

        // Pause on hover
        this.sliderElement.addEventListener("mouseenter", () => clearInterval(this.autoplay));
        this.sliderElement.addEventListener("mouseleave", () => {
            this.autoplay = setInterval(() => this.moveSlide(1), 2500);
        });

        // Handle window resize
        window.addEventListener("resize", () => this.updatePosition());
    }

    moveSlide(direction) {
        this.index += direction;

        if (this.index < 0) this.index = this.totalSlides - 1;
        if (this.index >= this.totalSlides) this.index = 0;

        this.updatePosition();
    }

    updatePosition() {
        const sliderWidth = this.sliderElement.offsetWidth;
        this.slidesContainer.style.transition = "transform 0.5s ease-in-out";
        this.slidesContainer.style.transform = `translateX(-${this.index * sliderWidth}px)`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Slider();
});
