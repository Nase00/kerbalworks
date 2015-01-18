	// Form appearance control
	function clearForms() {
		$('#login-form-section').fadeOut();
		$('#registration-form-section').fadeOut()
	}
	function stopPropagation(form) {
		form.click(function(e) {
			e.stopPropagation();
		})
	}
	function eventListener(clickSelector, listenFor, formSection) {
		clickSelector.on('click', listenFor, function(e) {
			e.preventDefault();
			e.stopPropagation();
	    var opened = $(this).data('opened');
	    if (opened) {
	      formSection.fadeOut();
	    } else {
	    	clearForms();
	      formSection.fadeIn();
	    }
	    $(this).data('opened', !opened);
	  })
	}

$(document).ready(function (){
	var sessionTemplate = _.template($('#session-template').html());
	var sessionLoginTemplate = _.template($('#session-login-template').html());

	stopPropagation($('#login-form-section'))
	stopPropagation($('#registration-form-section'))
	eventListener($('#session'), '#login-link', $('#login-form-section'))
	eventListener($('#session'), '#register-link', $('#registration-form-section'))
	$('.disaffirm').click(function (e) { e.preventDefault(); clearForms(); })
	$('html').click(function(e) { clearForms(); })

	// Ajax session control
	$('#session-forms').on('submit', '#login-form', function(e) {
		e.preventDefault();
	  var request = $.ajax({
	    url: "/login",
	    method: "post",
	    dataType: "json",
	    data: $('#login-form').serialize()
	  })

	  request.done(function(response) {
	  	var sessionData = {
	  		loggedInUserId: response.id,
	  		loggedInUserName: response.name,
	  		loggedInUserEmail: response.email
	  	}

	  	$('welcomeAnchor').append(response.name)
			$('#login-form-section').fadeOut();
	  	$('#session').html(sessionTemplate(sessionData));
	  });
	});
	$('#session').on('click', '#do-logout', function(e) {
	  e.preventDefault();
	  var request = $.ajax({
	      url: '/logout',
	      type: 'post',
	      success: function(result) {
	        $('#session').html(sessionLoginTemplate);
	      }
	  });
	});
})
