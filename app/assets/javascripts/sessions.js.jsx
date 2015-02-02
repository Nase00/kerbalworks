domready(function () {
  var LoginBox = React.createClass({
	  render: function() {
	    return (
	    	<section id='login-box'>
					<h2>Login</h2>
					<form id='login-form' action='/login' method='POST'>
						<div className='fields'>
							<label for='login-form-email'>Email</label>
							<input id='login-form-email' type='text' name='session[email]' placeholder='Email' />
							<input type='password' name='session[password]' placeholder='Password' />
						</div>
					  <div className='buttons'>
					  	<input id='submit-login' className='affirm' type='submit' />
					  </div>
					</form>
				</section>
		  );
	  }
	});
	console.log('test1')
	document.getElementById('login-link').onclick=function showLogin(e) {
		e.preventDefault()
		console.log('test2')
		React.render(<LoginBox />, document.getElementById('login-anchor'));
	}
})
