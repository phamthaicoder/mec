const aboutHeaderHeight = document.querySelector('#about__header').offsetHeight; 
document.querySelector('.about__content').style.marginTop =( aboutHeaderHeight + 20 + 'px');
window.onscroll = function() {
    document.querySelector('.about__banner').style.display = 'none' 
    if (window.scrollY == 0) {
        document.querySelector('.about__banner').style.display = 'block'
    }
    
}