$(document).ready(function() {
	const sliderSettings = {
		slidesToShow: 3,
		dots: true,
		appendDots: $('.blog-slider__dots'),
		arrows: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1.4,
				}
			}
		],
	};

	$('.blog-slider').slick(sliderSettings);


	$('.js-blog-switch').on('click', function() {
		$('.js-blog-switch').removeClass('active');
		$(this).toggleClass('active');

		const currentCategoryId = $(this).data('id').toString();
		$('.blog-slider__item').each(function () {
			const categoriesPost = $(this).data('categories').toString().split(',');

			if (categoriesPost.includes(currentCategoryId)) {
				$(this).show();
			} else {
				$(this).hide();
			}
		})
	});
});
