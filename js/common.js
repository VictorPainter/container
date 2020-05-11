$(function() {

	const tabItems = document.querySelectorAll('.tab-item');
	const tabContentItems = document.querySelectorAll('.tab-content-item');

	function selectItem(e) {
	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
	}

	function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
	}

	function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
	}
	
	tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
	});

	$('.tab__content-item').click(function(){
		$(this).toggleClass('active');
		$(this).find('.tab__content-description').toggleClass('active');
	});

	var $document = $(document)
	$document.scroll(function()  {
		$('.header').addClass('active');
		if ($document.scrollTop() == 0) {
			$('.header').removeClass('active');
		  } 
   	});

	$('.humburger').click(function(){
		$('.humburger').toggleClass('active');
		$('.main__menu').slideToggle();
	});

	$( function() {
		$( "#datepicker" ).datepicker({ dateFormat: 'D, dd M' });
	});

	$('select').selectize({});

});
