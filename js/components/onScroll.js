const aboutSection = document.querySelector(".about");
const experienceSection = document.querySelector(".experience");
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact");


function onScroll() {
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        if (scrolled >= 250) {
            aboutSection.style.opacity = "1";
            aboutSection.style.top = "0px";
        }
        if (scrolled >= 1000) {
            experienceSection.style.opacity = "1";
            experienceSection.style.right = "0px";
        }
        if (scrolled >= 2100) {
            projectsSection.style.opacity = "1";
            projectsSection.style.left = "0px";
        }
        if (scrolled >= 3000) {
            contactSection.style.opacity = "1";
            contactSection.style.bottom = "0px";
        }
    });
};

export { onScroll };