let menu = document.querySelector("ul");

let bars = document.querySelector(".header .fa-bars");

bars.addEventListener("click", function () {
    menu.classList.toggle("show");
})

var typed=new Typed(".type-job",{
    strings: ["Frontend Developer", "Web Developer","UX Designer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})
