$(function(){
  $('header-about-button').click(function(){
    $(''#TAB2').slideUp(slow);
  });

});


// 押して離すまでアイコンが反転する
$(function() {
  $('qa').click(function() {
    $('i')transform: rotate(180deg);
  });

});


$(function(){
  $('.single-item').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    fade: true,
  });
});
