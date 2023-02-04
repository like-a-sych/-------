// подключение boostrap
import 'bootstrap';

// // подключение swiper
// import Swiper, { Navigation, Thumbs, FreeMode } from 'swiper';
// Swiper.use([Navigation, Thumbs, FreeMode]);

//slick slider
import "../../js/modules/slick.min.js";

$(document).ready(function () {
	$('.for-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.nav-slider',
		adaptiveHeight: true,
	});
	$('.nav-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.for-slider',
		vertical: true,
		focusOnSelect: true,
		arrows: false,
		centerMode: false,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					vertical: false,
					arrows: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					vertical: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});

$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
	$('.for-slider').slick('setPosition').slick('slickGoTo', 0);
	$('.nav-slider').slick('setPosition').slick('slickGoTo', 0);
});




$('#file').on('change', function (e) {
	$('#file-name').html(e.target.files[0].name);
});
$('#file2').on('change', function (e) {
	$('#file-name2').html(e.target.files[0].name);
});

$(".wrapper").on("click", "._main-btn", function () {
	var e = String('Заказать: ' + $(this).data("name"));
	$('#callback-item').find('#fr').val(e);
	$('#callback-item').find('#token-rand').val(Math.trunc((Math.random() * 10000)));
});



$(".wrapper").on("click", ".true_loadmore", function () {
	$(this).closest('.wrapper').find('.section-5').addClass('load-more');
});
$(".wrapper").on("click", ".nav-slider .slick-slide", function () {
	$(this).closest('.wrapper').find('.section-5').removeClass('load-more');
});

