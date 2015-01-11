$(document).ready(function (){
	function slideForm(button, form) {
		button.click(function(e) {
			e.preventDefault();
			e.stopPropagation();
	    var opened = $(this).data('opened');

	    if (opened) {
	      form.slideUp();
	    } else {
	    	clearForms();
	      form.slideDown();
	    }

	    $(this).data('opened', !opened);
		})
	}
	function clearForms() {
		$('#login-form').hide();
		$('#register-form').hide()
	}
	function stopPropagation(form) {
		form.click(function(e) {
			e.stopPropagation();
		})
	}

	slideForm($('#login-link'), $('#login-form'))
	slideForm($('#register-link'), $('#register-form'))
	// slideForm()
	stopPropagation($('#login-form'))
	stopPropagation($('#register-form'))

	$('html').click(function(e) {
		clearForms();
	})

	$('.disaffirm').click(function (e) {
		e.preventDefault();
		$('#login-form').slideUp();
		$('#register-form').slideUp();
	})
})