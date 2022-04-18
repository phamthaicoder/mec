// Change icon button about
var buttonAboutActionAll = document.querySelectorAll('.button__action');

buttonAboutActionAll.forEach(buttonAboutAction => {
  if(buttonAboutAction.querySelector(".button__image__action") != null) {
    buttonAboutAction.addEventListener("mouseover", function () {
      buttonAboutAction.querySelector(".button__image__action").src ="img/general/ph_cloud-arrow-down-red.svg";
    });
    
    buttonAboutAction.addEventListener("mouseout", function () {
      buttonAboutAction.querySelector(".button__image__action").src ="img/general/ph_cloud-arrow-down-white.svg";
    });
  }
});
