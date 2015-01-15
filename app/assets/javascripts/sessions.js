$(document).ready(function (){
	var sessionTemplate = _.template($('#sessionTemplate').html());
	var sessionLoginTemplate = _.template($('#sessionLoginTemplate').html());

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

	$('#session').on('click', '#login-link', function(e) {
			e.preventDefault();
			// e.stopPropagation();
	    var opened = $(this).data('opened');

	    if (opened) {
	      $('#login-form-section').slideUp();
	    } else {
	    	clearForms();
	      $('#login-form-section').slideDown();
	    }

	    $(this).data('opened', !opened);
		})

	// slideForm($('#login-link'), $('#login-form-section'))
	slideForm($('#register-link'), $('#register-form'))
	stopPropagation($('#login-form-section'))
	stopPropagation($('#register-form'))

	// $('html').click(function(e) { clearForms(); })

	$('.disaffirm').click(function (e) {
		e.preventDefault();
		$('#login-form-section').slideUp();
		$('#register-form').slideUp();
	})

	// function logOut(e) {
	//   e.preventDefault();
	//   var request = $.ajax({
	//       url: '/logout',
	//       type: 'post',
	//       success: function(result) {
	//         $('#session').html(sessionLoginTemplate);
	//       }
	//   });
	// }

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
	  		loggedInUserName: response.name
	  	}

	  	$('welcomeAnchor').append(response.name)
			$('#login-form-section').slideUp();
	  	$('#session').html(sessionTemplate(sessionData));
  		// $('#do-logout').bind('click', logOut(e))
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

	// $('#do-logout').click(function(e) {
 //  e.preventDefault();
 //  var request = $.ajax({
 //      url: '/logout',
 //      type: 'post',
 //      success: function(result) {
 //        $('#session').html(sessionLoginTemplate);
 //      }
 //  });
})
