// Home Slide Header
const slideshowImages = document.querySelectorAll(".slideshow__image .slideshow__item");

const nextImageDelay = 3000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
}


// Change icon button
var buttonHomeActionAll = document.querySelectorAll('.button__action');

buttonHomeActionAll.forEach(buttonHomeAction => {

  buttonHomeAction.addEventListener("mouseover", function () {
     buttonHomeAction.querySelector(".button__image__action").src ="img/general/ph_arrow-right-white.svg";
  });
  
  buttonHomeAction.addEventListener("mouseout", function () {
    buttonHomeAction.querySelector(".button__image__action").src ="img/general/ph_arrow-right.svg";
  });

  buttonHomeAction.addEventListener("mouseover", function () {
    buttonHomeAction.querySelector(".button-prev").src = "img/general/ph_arrow-left-white.svg";
  });

  buttonHomeAction.addEventListener("mouseout", function () {
    buttonHomeAction.querySelector(".button-prev").src = "img/general/ph_arrow-left.svg";
  });

  buttonHomeAction.addEventListener("mouseover", function () {
    buttonHomeAction.querySelector(".button-next").src = "img/general/ph_arrow-right-white.svg";
  });

  buttonHomeAction.addEventListener("mouseout", function () {
    buttonHomeAction.querySelector(".button-next").src = "img/general/ph_arrow-right.svg";
  });

  
});


// Home Slide Projects

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project__slideshow__item");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "flex";  
  // dots[slideIndex-1].className += " active";
}

