const aboutHeaderHeight = document.querySelector('#common__header').offsetHeight; 
// document.querySelector('.about__content').style.marginTop =( aboutHeaderHeight + 20 + 'px');
window.onscroll = function() {
        document.querySelector('.common__banner').style.display = 'none' 
    if (window.scrollY <= 200) {
        document.querySelector('.common__banner').style.display = 'block'
    }
}