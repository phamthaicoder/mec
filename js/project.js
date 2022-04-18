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
