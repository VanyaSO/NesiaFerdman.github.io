$(document).ready(function() {
	let dataBlog = {
		"posts": [
			{
				"id": 1,
				"image": "./src/images/blog-image1.png",
				"title": "«Успішність людини визначається...",
				"categories": [1, 2]
			},
			{
				"id": 2,
				"image": "./src/images/blog-image2.png",
				"title": "Несія Фердман: Між вами та коучем має бути...",
				"categories": [1,2]
			},
			{
				"id": 3,
				"image": "./src/images/blog-image3.png",
				"title": "Чому хаос у житті – ознака особистісного розвитку?",
				"categories": [1]
			}
		]
	};

	const sliderSettings = {
		slidesToShow: 3,
		dots: true,
		appendDots: $('.blog-slider__dots'),
		arrows: false,
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
					slidesToShow: 1,
				}
			}
		]
	};

	renderBlogPostsInSlider(getAllPostsByCategory(1));

	function getAllPostsByCategory(categoryId) {
		return dataBlog.posts.filter(post => post.categories.includes(categoryId))
	}

	function renderBlogPostsInSlider(posts) {
		if ($('.blog-slider').hasClass('slick-initialized')) {
			$('.blog-slider').slick('unslick');
		}
		$('.blog-slider').empty();

		posts.forEach(post => {
			$('.blog-slider').append(`
        <div class="blog-slider__item slider-item">
            <img src="${post.image}" alt="" class="slider-item__image">
            <div class="slider-item__content">
                <p class="slider-item__title">${post.title}</p>
                <div class="slider-item__link-wrapper">
                    <a href="#" class="slider-item__link">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.16675 19.8332L19.8334 8.1665" stroke="#F3F5F6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.16675 8.1665H19.8334V19.8332" stroke="#F3F5F6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
			`)
		})

		$('.blog-slider').slick(sliderSettings);
	}

	$('.js-blog-switch').on('click', function() {
		$('.js-blog-switch').removeClass('active');
		$(this).toggleClass('active');

		const currentCategoryId = $(this).data('id');

		const allPostsCurrentCategories = getAllPostsByCategory(currentCategoryId);

		renderBlogPostsInSlider(allPostsCurrentCategories);
	});
});
