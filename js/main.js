$(function(){
    $('.slider').slick({
        asNavFor: '.thumbs',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.png" alt=""></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.png" alt=""></button>',
    
    });
    $('.thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        asNavFor: '.slider',
        focusOnSelect: true,
       
    });
    $('.header__menu-btn').on('click', function(){
        $('.header__menu > ul').slideToggle();
    });
  });           