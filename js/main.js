// Burger Menu Js
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

// Contact Form js
const scriptURL = 'https://script.google.com/macros/s/AKfycbxXzQOUggOolE6pHh8sj4hgVLksFLFp77Wa-3CyeKupmP4CEx2prP6mP72d9o630zV-/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
              msg.innerHTML = ""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })