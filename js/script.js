$(document).ready(function () {
	$('.header-content__item').hover(function(){
		$('ul', this).slideDown(400);
	},function(){
		$('ul', this).slideUp(400);			   
	});

	if ($(window).width() < 767) {
		$('.header-content__list').append(`<li class="header-content__item">
		<a href="#" class="link header-content__link">Вход</a>
	</li>`);
	}
	
	$('.header-burger').click(function(event) {
		$('.header-burger,.header-content').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


function scrollToTop() {
	const offset = 100;
	const scrollTop = document.createElement('div');
	scrollTop.classList.add('scroll');
	document.body.prepend(scrollTop);

	window.addEventListener('scroll', function() {
		if (window.pageYOffset > offset) {
			scrollTop.classList.add('scroll--active');
		}
		else {
			scrollTop.classList.remove('scroll--active');
		}
	})

	scrollTop.addEventListener('click', function() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	});
}

scrollToTop();