$(document).ready(function (){
	function slideForm(button, form) {
		button.click(function(e) {
			e.preventDefault();
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

	slideForm($('#login-link'), $('#login-form'))
	slideForm($('#register-link'), $('#register-form'))

	$('.disaffirm').click(function (e) {
		e.preventDefault();
		$('#login-form').slideUp();
		$('#register-form').slideUp();
	})
})