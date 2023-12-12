const swiper = new Swiper(".swiper", {
   
    effect: "fade",
    loop: true,
    keyboard: {
        enabled: true,
      },
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },    
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },  
  });
  
var top__link = document.querySelector('.top__link');

top__link.addEventListener('mouseenter', function () {
    top__link.classList.add('color1');
});
top__link.addEventListener('mouseleave', function () {
     top__link.classList.remove('color1');
});

