$( document ).ready(function() {
    $('.js-btn-1').click( function() {
    	$(this).addClass('btn-primary');
    });
    $('.js-btn-2').click( function() {
    	$(this).removeClass('btn-secondary');
    });
    $('.js-btn-3').click( function() {
    	$(this).toggleClass('btn-success');
    });
    $('.js-btn-4').click( function() {
    	console.log($(this).attr('class'));
    });
    $('.js-btn-5').click( function() {
    	$(this).attr('disabled', 'disabled');
    });
    $('.js-btn-6').click( function() {
    	alert("Hello World!");
    });
	$('.js-btn-7').bind('click', function(){
	  alert('Шла Саша по шоссе');
	});
	$('.js-btn-7').trigger('click');
	});