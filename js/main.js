$( document ).ready(function() {
    $('.js-btn-1').click(function() {
    	$(this).addClass('btn-primary');
    });
    $('.js-btn-2').click(function() {
    	$(this).removeClass('btn-secondary');
    });
    $('.js-btn-3').click(function() {
    	$(this).toggleClass('btn-success');
    });
    $('.js-btn-4').click(function() {
    	console.log($(this).attr('class'));
    });
    $('.js-btn-5').click(function() {
    	$(this).attr('disabled', 'disabled');
    });
    $('.js-btn-6').click(function() {
    	alert("Hello World!");
    });
	$('.js-btn-7').bind('click', function(){
	  alert('Hello World!2');
	});
	// $('.js-btn-7').trigger('click');
	$('.js-btn-8').click(function(){
		var text = $(this).text();
		var cloneButton = $(this).clone(true).text(text + ' ' + '(cloned)');
		$(this)
			.after(cloneButton);
	});
	$('.js-btn-9').click(function() {
    	var closestParent = $(this).parent();
    	console.log(closestParent);
    });
    $('.js-btn-10').click(function(){
    	var collectButtons = [];
    	$('.btn').each(function(){
    		var buttonText = $(this).text();
    		collectButtons.push(buttonText);
    	});
    	console.log(collectButtons);
    });
    $('.js-btn-11').click(function(){
    	var currentElement = $('body').find($(this));
    	console.log(currentElement);
    });
    $('.js-btn-12').click(function(){
    	$('.hidden-element').fadeIn();
    });
    $('.js-btn-13').click(function(){
    	$('.visible-element').fadeOut();
    });
    $('.js-btn-14').click(function(){
    	$('.visible-element-hide').hide();
    });
    $('.js-btn-15').click(function(){
    	$('.hidden-element-show').show();
    });
    $('.js-btn-16').click(function(){
    	var dataElement = [];
    	var dataAttributes = [];
    	$.each(this.attributes, function(){
    		var name = this.name;
    		var value = this.value;
    		var obj = {};
    		obj[name] = value;
    		dataAttributes.push(obj);
    	});
    	var dataObject = {
    		height: $(this).outerHeight(),
    		width: $(this).outerWidth(),
    		offset: $(this).offset(),
    		attr: dataAttributes,
    		parent: $(this).parent(),
    		siblings: $(this).siblings('button'),
    		text: $(this).text()
    	};
    	for(var property in dataObject){
    		dataElement.push(dataObject[property]);
    	}
    	console.log(dataElement);
    });
});