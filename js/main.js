$(function() {
  console.log(2222)
  var $menu_popup = $('.menu-popup');

  $(".btn-menu, .btn-menu-close").click(function(){
    $menu_popup.slideToggle(300, function(){
      if ($menu_popup.is(':hidden')) {
        $('body').removeClass('body_pointer');
        $('.btn-menu').removeClass('close');
      } else {
        $('body').addClass('body_pointer');

        $('.btn-menu').addClass('close');
      }
    });
    return false;
  });

  $(document).on('click', function(e){
    if (!$(e.target).closest('.menu').length){
      $('body').removeClass('body_pointer');
      $menu_popup.slideUp(300);
    }
  });
});

var swiper = new Swiper('.swiper-container.top', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.swiper-container.bottom', {
  pagination: {
    el: '.swiper-pagination',
  },
});

jQuery(document).ready(function() {
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});
