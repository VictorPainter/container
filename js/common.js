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

	

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
	
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	});

	$('select').selectize({});

	$('#select').change(function() {
		var $optionValue = $(this).children("option:selected").val();
		if($optionValue == 'Door to Door(D2D)'){
			$('#origin_port').html('Origin city, state, country');
			$('#destination_port').html('Destination city, state, country');
		}else if($optionValue == 'Port to Door(P2D)'){
			$('#origin_port').html('Origin port');
			$('#destination_port').html('Destination city, state, country');
		}else if($optionValue == 'Door to Port(D2P)'){
			$('#origin_port').html('Origin city, state, country');
			$('#destination_port').html('Destination port');
		}
	});
	 


});
