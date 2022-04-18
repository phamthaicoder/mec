const aboutHeaderHeight = document.querySelector('#about__header').offsetHeight; 
// document.querySelector('.about__content').style.marginTop =( aboutHeaderHeight + 20 + 'px');
window.onscroll = function() {
    document.querySelector('.about__banner').style.display = 'none' 
    if (window.scrollY == 0) {
        document.querySelector('.about__banner').style.display = 'block'
    }
    
}

// Change icon button
var buttonActionAll = document.querySelectorAll('.button__action');

buttonActionAll.forEach(buttonAction => {

    buttonAction.addEventListener("mouseover", function () {
        buttonAction.querySelector(".button__image__action").src ="img/general/ph_cloud-arrow-down-red.svg";
  });
  
  buttonAction.addEventListener("mouseout", function () {
    buttonAction.querySelector(".button__image__action").src ="img/general/ph_cloud-arrow-down-white.svg";
  });
});
