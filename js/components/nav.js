const nav = document.querySelector("nav");





function createNav() {
    nav.innerHTML = `
    <div class="nav-container">
            <a href="/index.html#header" class="logo"><span class="color-name">Marius</span> Sæteraas</a>

            <ul class="nav-menu">
                <li><a href="/index.html#about"><span><i class="fas fa-circle fa-xs"></i></span>About</a></li>
                <li><a href="/index.html#experience"><span><i class="fas fa-circle fa-xs"></i></span>Skills</a></li>
                <li><a href="/index.html#projects"><span><i class="fas fa-circle fa-xs"></i></span>Projects</a></li>
                <li><a href="/index.html#contact"><span><i class="fas fa-circle fa-xs"></i></span>Contact</a></li>
                <li><a href="" class="last-link"></i>CV</a></li>
            </ul>

            <div class="hamburger">
                <span class="bar bar1"></span>
                <span class="bar bar2"></span>
                <span class="bar bar3"></span>
            </div>
        </div>`;

    hamburger();
    navScroll()


};

function hamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
};

function navScroll() {
    window.onscroll = function () {
        if (this.scrollY > 0) {
            nav.style.boxShadow = "0 3px 10px #00000025";
        } else {
            nav.style.boxShadow = "none";
        }
    };
};

export { createNav };