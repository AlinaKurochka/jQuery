$( document ).ready(function() {
	$('select,input, button').on('change',function(){
		console.log($(this).val());
	})
	$('#form').submit(function(event){
		event.preventDefault();
		console.log($(this).serialize());
	});
	$('#username1').on('keyup', function(){
		var value = $(this).val();
		$('#username2').val(value);
	})
});