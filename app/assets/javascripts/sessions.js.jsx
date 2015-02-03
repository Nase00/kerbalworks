$(document).ready(function () {
	var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

	var LoginLink = React.createClass({
  	getInitialState: function() {
      return { shownForm: false };
    },
		onClick: function() {
			console.log('Testing onclick')
			if (this.state.shownForm) {
				React.render(<span />, document.getElementById('login-anchor'));
				this.setState({ shownForm: false })
			} else {
				React.render(<LoginForm />, document.getElementById('login-anchor'));
			}
		},
		render: function() {
			return (<a href='#' onClick={this.onClick}>Login</a>)
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
		    data: $('.loginForm').serialize()
		  })
		  request.done(function(response) {
		  	console.log(response)
		  });
			return;  	
	  },
	  render: function() {
	  	LoginLink.setState({ shownForm: true })
	    return (
	    	<section className='session-form'>
					<form onSubmit={this.handleSubmit}>
						<div className='fields'>
							<input type='text' name='session[email]' placeholder='Email' />
							<input type='password' name='session[password]' placeholder='Password' />
						</div>
					  <div className='buttons'>
					  	<input className='affirm' type='submit' />
					  </div>
					</form>
				</section>
		  );
	  }
	});

	React.render(<LoginLink />, document.getElementById('login-link'))

	// document.getElementById('login-link').onclick=function showLogin(e) {
	// 	e.preventDefault()
	// 	React.render(<LoginForm />, document.getElementById('login-anchor'));
	// }
})
