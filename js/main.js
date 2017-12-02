$( document ).ready(function() {
    $('.js-btn-1').click( function() {
    	$( this ).addClass('btn-primary');
    });
    $('.js-btn-2').click( function(){
    	$(this).removeClass('btn-secondary');
    });
});