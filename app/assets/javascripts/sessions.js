$(document).ready(function (){
	// Style control
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
		$('#login-form-section').hide();
		$('#register-form').hide()
	}
	function stopPropagation(form) {
		form.click(function(e) {
			e.stopPropagation();
		})
	}

	slideForm($('#login-link'), $('#login-form-section'))
	slideForm($('#register-link'), $('#register-form'))
	stopPropagation($('#login-form-section'))
	stopPropagation($('#register-form'))

	$('html').click(function(e) { clearForms(); })

	$('.disaffirm').click(function (e) {
		e.preventDefault();
		$('#login-form-section').slideUp();
		$('#register-form').slideUp();
	})

	// Ajax session control
	$('#do-login').click(function(e) {
		e.preventDefault();
	  var request = $.ajax({
	    url: "/login",
	    method: "post",
	    dataType: "json",
	    data: $('#login-form').serialize()
	  })

	  request.done(function(response) {
	  	
	  })
	})
})
