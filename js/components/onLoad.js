const header = document.querySelector("#header");
const bullet1 = document.querySelector(".bullet1");
const bullet2 = document.querySelector(".bullet2");
const bullet3 = document.querySelector(".bullet3");

function onLoad() {
    window.onload = function () {
        bullet1.style.left = "90%";
        bullet1.style.width = "2%";
        bullet1.style.opacity = "1";

        bullet2.style.left = "90%";
        bullet2.style.width = "2%";
        bullet2.style.opacity = "1";

        bullet3.style.left = "90%";
        bullet3.style.width = "2%";
        bullet3.style.opacity = "1";

        header.style.opacity = "1"
        header.style.top = "0px"
    };
};

export { onLoad };
