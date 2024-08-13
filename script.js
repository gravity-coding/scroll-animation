let lastScrollTop = 0;
const elements = document.querySelectorAll(".box");
let timeout;


window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    // console.log(window.scrollY)
    clearTimeout(timeout);

    if (scrollTop > lastScrollTop) {
        elements.forEach((box) => {
            box.style.scale = 0.7;
        })
        // console.log("scroll Down");
    }
    else if (scrollTop < lastScrollTop) {
        elements.forEach((box) => {
            box.style.scale = 0.7;
        })
        // console.log("Scroll Up");
    }

    lastScrollTop = scrollTop;

    timeout = setTimeout(function () {
        // console.clear();
        elements.forEach((box) => {
            box.style.scale = 1;
        })
    }, 150)

})

