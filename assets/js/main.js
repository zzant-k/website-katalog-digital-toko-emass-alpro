/**
 * Main JS - Global Interactions
 */

function initNavbar() {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("main-nav");

    if (burger && nav) {
        // Remove existing listeners if any
        const newBurger = burger.cloneNode(true);
        burger.parentNode.replaceChild(newBurger, burger);

        newBurger.addEventListener("click", () => {
            nav.classList.toggle("active");
            newBurger.classList.toggle("active");
        });
    }

    // Active Link Highlighting
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("#main-nav ul li a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (currentPath.includes(linkPath) && linkPath !== "#") {
            link.classList.add("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // If navbar is already there (static), init immediately
    if (document.getElementById("burger")) {
        initNavbar();
    }

    // Smooth Scroll Offset Adjustment
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== "#" && href.startsWith("#")) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = target.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile nav if open
                    const nav = document.getElementById("main-nav");
                    const burger = document.getElementById("burger");
                    if (nav && nav.classList.contains("active")) {
                        nav.classList.remove("active");
                        if (burger) burger.classList.remove("active");
                    }
                }
            }
        });
    });
});

// Listen for dynamic navbar injection
document.addEventListener("navbarLoaded", initNavbar);
