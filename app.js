//on smaller screen size make the navbar turn sideways
const navToggler = document.querySelector(".closebtn");
const menu = document.querySelector(".nav");
let count = 0;

navToggler.addEventListener("click", () => {
  count++;
  if (count % 2 != 0) {
    navToggler.innerHTML = '<i style="font-size: 1.8em;" class="fas fa-times"></i>';
    menu.style.width = "60%";
    menu.style.position = "fixed";
    menu.style.right = "0px";
  } else if (count % 2 === 0) {
    navToggler.innerHTML = `<i style="font-size: 1.8em;" class="fas fa-bars"></i>`;
    menu.style.width = "0%";
    menu.style.position = "absolute";
    menu.style.right = "-200px";
  }
});

//submit button
let subbtn = document.getElementById("subbtn");

subbtn.addEventListener("click", active);

function active() {
  subbtn.classList.toggle("is_active");
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//start the slideshow with all the the things that I can be contacted by

var swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  grabCursor: true,
  speed: 5000,
  slidesPerView: 3,
  cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
  },
  pagination: {
      el: '.swiper-pagination',
  },
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  }
});

anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 5000,
  delay: function (el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});

