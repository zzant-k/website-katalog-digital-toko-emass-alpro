/**
 * Components Loader - Utility to inject shared UI elements
 */

const components = {
    navbar: `
        <div class="nav">
            <div class="logo">
                <a href="/index.html">
                    <img src="/assets/img/crown-gold.png" alt="Gold Shop Logo">
                </a>
            </div>
            <div class="burger" id="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav id="main-nav">
                <ul>
                    <li><a href="/index.html#services">PRODUCT</a></li>
                    <li><a href="/index.html#portofolio">GOLD TYPE</a></li>
                    <li><a href="/index.html#Preview">PREVIEW</a></li>
                    <li><a href="/index.html#skills">CHART</a></li>
                    <li><a href="/index.html#contact">CONTACT</a></li>
                    <li><a href="/pages/login.html">LOGIN</a></li>
                </ul>
            </nav>
        </div>
    `
};

function injectComponent(id, html) {
    const container = document.getElementById(id);
    if (container) {
        container.innerHTML = html;
        
        // After navbar is injected, initialize burger menu
        if (id === 'navbar-container') {
            const event = new CustomEvent('navbarLoaded');
            document.dispatchEvent(event);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Determine path prefix based on location
    const isSubPage = window.location.pathname.includes('/pages/');
    let navHtml = components.navbar;
    
    if (isSubPage) {
        navHtml = navHtml.replace(/\/assets\//g, '../assets/');
        navHtml = navHtml.replace(/\/index\.html/g, '../index.html');
        navHtml = navHtml.replace(/\/pages\//g, './');
    } else {
        navHtml = navHtml.replace(/\/assets\//g, './assets/');
        navHtml = navHtml.replace(/\/index\.html/g, './index.html');
        navHtml = navHtml.replace(/\/pages\//g, './pages/');
    }

    injectComponent('navbar-container', navHtml);
});
