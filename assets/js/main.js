jQuery(document).ready(function($) {
	$('.sliders').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      
  prevArrow:"<button type='button' class='btn-slick-prev btn btn-slider'><img src='assets/img/ico/arrow_left.svg' alt='prev'></button>",
  nextArrow:"<button type='button' class='btn-slick-next btn btn-slider'><img src='assets/img/ico/arrow_right.svg' alt='prev' alt='next'></button>"
	});
});