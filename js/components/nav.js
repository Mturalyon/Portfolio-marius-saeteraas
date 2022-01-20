const nav = document.querySelector("nav");

function createNav() {
    nav.innerHTML = `
    <div class="nav-container">
            <a href="#" class="logo"><span class="color-name">Marius</span> Sæteraas</a>

            <ul class="nav-menu">
                <li><a href=""><span><i class="fas fa-circle fa-xs"></i></span>About</a></li>
                <li><a href=""><span><i class="fas fa-circle fa-xs"></i></span>Skills</a></li>
                <li><a href=""><span><i class="fas fa-circle fa-xs"></i></span>Projects</a></li>
                <li><a href=""><span><i class="fas fa-circle fa-xs"></i></span>Contact</a></li>
                <li><a href="" class="last-link"></i>CV</a></li>
            </ul>

            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>`;

    hamburger()
};

function hamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
};

export { createNav };