$(document).ready(function(){

	emergence.init();

	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top - $('.nav__fixed').height()
		}, speed);
		return false;
	}
	$('.anchor').click(function(e){
		e.preventDefault();
		var el = $(this).attr('href');
		scroll($(el), 1500);
	});
	
	// Develope
	const navigation = $('#js-navigation');
	function checkScrollY() {
		if (window.scrollY > 0) {
			navigation.addClass('nav_scrolled')
		} else {
			navigation.removeClass('nav_scrolled')
		}
	}
	checkScrollY();
	$(window).scroll(function () {
		checkScrollY();
	});

	$('#js-nav-hamburger').click(function () {
		$(this).toggleClass('active');
		$('#js-navigation-menu').toggleClass('nav__menu_active');
	});

	function showModal(modal) {
		$('.modal').removeClass('modal_showing_in');
		$(modal).addClass('modal_showing_in');
		$('body').addClass('modal-open');
	}

	function removeSrcFromModalVideo(modal) {
		if (modal.find('.modal__iframe')) {
			modal.find('.modal__iframe').removeAttr('src');
		}
	}

	function initScrollItems(items) {
		if ($(window).width() < 768 && items.length) {
			$(window).scroll(function () {
				var scrollTop = $(window).scrollTop();
				var windowHeight = $(window).height();

				items.each(function () {
					var offset = $(this).offset();
					if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight)) {
						$(this).addClass("scroll-active");
					}
				});
			});
		}
	}

	$('[data-action="modal"]').click(function (e) {
		e.preventDefault();
		var modal = $(this).attr('data-open');
		showModal(modal);
	});

	$('[data-close="modal"]').click(function (e) {
		e.preventDefault();
		var modal = $(this).closest('.modal');
		$(this).closest('.modal').removeClass('modal_showing_in');
		$('body').removeClass('modal-open');
		removeSrcFromModalVideo(modal);
	});

	$('[data-video]').on('click', function () {
		var video = $(this).attr('data-video');
		var modal = $(this).attr('data-open');
		$(modal).find('.modal__iframe').attr('src', video);
	});

	$('body').on('click', function(e) {
		if ($(e.target).hasClass('modal')) {
			var modalId = $(e.target).attr('id');
			var modal = $('#' + modalId);
			modal.removeClass('modal_showing_in');
			removeSrcFromModalVideo(modal);
			$('body').removeClass('modal-open');
		}
	});

	var stepIndex = $('[data-step-index]');

	stepIndex.hover(
		function () {
			$(this).addClass('active');
			$(this).prevAll().addClass('active');
		},
		function () {
			$('[data-step-index]').removeClass('active');
			$('[data-step-index="1"]').addClass('active');
		}
	);

	initScrollItems(stepIndex);

	var orderSlider = {
		1: {width: '25%'},
		2: {width: '60%'},
		3: {width: '105%'},

		4: {width: '25%'},
		5: {width: '60%'},
		6: {width: '105%'}
	};

	var slider1 = $('[data-slider-id="1"]')
	var slider2 = $('[data-slider-id="2"]');

	slider1.find('[data-slider-control]').css('width', orderSlider[1].width);

	$('[data-order-index]').hover(
		function () {
			var index = Number($(this).attr('data-order-index'));
			var sliderCurrent = index > 3 ? slider2 : slider1;

			$(this).addClass('active');
			$(this).prevAll().addClass('active');
			sliderCurrent.find('[data-slider-control]').css('width', orderSlider[index].width);

			// if second row
			if (index > 3) {
				slider1.find('[data-slider-control]').css('width', orderSlider[3].width)
				$('[data-area-grid="1"]').find('[data-order-index]').addClass('active');
			}
		},
		function () {
			var index = Number($(this).attr('data-order-index'));
			var sliderCurrent = index > 3 ? slider2 : slider1;

			$(this).removeClass('active');
			$(this).prevAll().removeClass('active');
			$('[data-order-index="1"]').addClass('active');

			if (index > 3) {
				$('[data-area-grid="1"]').find('[data-order-index]').removeClass('active');
				slider2.find('[data-slider-control]').css('width', '0');
				$('[data-order-index="1"]').addClass('active');
			}

			slider1.find('[data-slider-control]').css('width', orderSlider[1].width);
		}
	);

	initScrollItems($('[data-order-index]'));
});	