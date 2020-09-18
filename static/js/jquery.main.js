$(document).ready(function(){

	emergence.init({
		offsetTop: 100
	});

	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top - $('.nav__fixed').height()
		}, speed);
		return false;
	}
	$('.anchor-next').click(function(e){
		e.preventDefault();
		var el = $(this).closest('section').next();
		scroll(el, 1500);
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
});	