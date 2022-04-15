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
var buttonActionAll = document.querySelectorAll('.button__action');

buttonActionAll.forEach(buttonAction => {

  buttonAction.addEventListener("mouseover", function () {
    // buttonAction.querySelector("#button-prev").src = "img/general/ph_arrow-left-white.svg";
    // buttonAction.querySelector("#button-next").src = "img/general/ph_arrow-right-white.svg";
    buttonAction.querySelector("#button__image__action").src ="img/general/ph_arrow-right-white.svg";
  });

  buttonAction.addEventListener("mouseout", function () {
    //  buttonAction.querySelector("#button-prev").src = "img/general/ph_arrow-left.svg";
    //  buttonAction.querySelector("#button-next").src = "img/general/ph_arrow-right.svg";
     buttonAction.querySelector("#button__image__action").src ="img/general/ph_arrow-right.svg";
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