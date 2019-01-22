$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$(".form__panel").validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
	}
); 
$(document.body).on('click', '.form__btn-pass', null, function(event){
	event.preventDefault();
	
	var btn = $(this);
	
	if(btn.hasClass('is--view')) {
		$(".form__btn-pass.is--view").removeClass("is--active");
		$(".form__btn-pass.is--hide").addClass("is--active");
		$(".form__control.is--pass").attr("type","text");
	}
	
	if(btn.hasClass('is--hide')) {
		$(".form__btn-pass.is--hide").removeClass("is--active");
		$(".form__btn-pass.is--view").addClass("is--active");
		$(".form__control.is--pass").attr("type","password");
	}
	
});