// Home Slide Header

// var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 5000
// })

const slideshowImages = document.querySelectorAll(".slideshow__image .slideshow__item");

const nextImageDelay = 3000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}


// Change icon button
document.getElementById("button__action").addEventListener("mouseover", mouseOver);
document.getElementById("button__action").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("button__image__action").src = "img/general/ph_arrow-right-white.svg";
}

function mouseOut() {
  document.getElementById("button__image__action").src = "img/general/ph_arrow-right.svg";
}



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