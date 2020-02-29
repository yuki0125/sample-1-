
$(function() {
  // 「#hide-text」要素に対するclickイベントを作成してください
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
