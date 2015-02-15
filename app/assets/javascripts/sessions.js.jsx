
$(document).ready(function () {
	var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
	var shownForm = false
	function toggle() {
		if (shownForm) {
			React.render(<span />, document.getElementById('login-anchor'));
			shownForm = false
		} else {
			React.render(<LoginForm />, document.getElementById('login-anchor'));
			shownForm = true
		}
	}

	var LoginLink = React.createClass({
  	getInitialState: function() {
      return { shownForm: false };
    },
		onClick: function() {
			toggle();
		},
		render: function() {
			return (<a href='#' className='session-link' onClick={this.onClick}>Login</a>)
		}
	})

  var LoginForm = React.createClass({
	  handleSubmit: function(e) {
			e.preventDefault();
			React.render(<span />, document.getElementById('login-anchor'));
			var request = $.ajax({
		    url: "/login",
		    method: "post",
		    dataType: "json",
		    data: $('#login-form').serialize()
		  })
		  request.done(function(response) {
		  	console.log(response)
		  });
			return;  	
	  },
	  render: function() {
	    return (
	    	<section className='session-form'>
					<form id="login-form" onSubmit={this.handleSubmit}>
						<div className='fields'>
							<input type='text' name='session[email]' placeholder='Email' />
							<input type='password' name='session[password]' placeholder='Password' />
						</div>
					  <div className='buttons'>
					  	<input className='affirm' type='submit' />
					  	<input id='close-form' className='disaffirm' type='button' value='Cancel' />
					  </div>
					</form>
				</section>
		  );
	  }
	});

	React.render(<LoginLink />, document.getElementById('login-link'))
	
	$('html').on('click', '#close-form', function() {
		shownForm = false
		React.render(<span />, document.getElementById('login-anchor'));
	})

	// document.getElementById('login-link').onclick=function showLogin(e) {
	// 	e.preventDefault()
	// 	React.render(<LoginForm />, document.getElementById('login-anchor'));
	// }
})
