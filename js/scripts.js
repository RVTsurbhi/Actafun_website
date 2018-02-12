$(document).ready(function(){

  $('.image-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
//navbar-fixed and color change on scroll
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 300) {
          $(".navbar-fixed-top").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".navbar-fixed-top").removeClass("active");
      }
  });

  //bottobar section fixed on scroll
    $(window).scroll(function(){
      if ($(window).scrollTop() > 310) {
          $(".bottom").addClass("fixed");
      } else {
          $(".bottom").removeClass("fixed");
      }
    });
//section about fixed on scroll
$(window).scroll(function(){
  if ($(window).scrollTop() > 310) {
      $(".stableBtn").addClass("stable");
  } else {
      $(".stableBtn").removeClass("stable");
  }
});
  //img_bottom section fixed on scroll
    $(window).scroll(function(){
      if ($(window).scrollTop() > 300) {
          $(".burner").addClass("fixed1");
      } else {
          $(".burner").removeClass("fixed1");
      }
    });

  //class change on click
      $(".heart_icon").on('click',function(){
      $(this).css({"color": "red"}).removeClass('fa-heart-o').addClass('fa-heart');
    });


});
