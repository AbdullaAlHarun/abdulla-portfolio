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

// tablink for about sections 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}