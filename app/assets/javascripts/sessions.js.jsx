domready(function () {
  var LoginBox = React.createClass({
	  render: function() {
	    return <div>Hello {this.props.name}</div>;
	  }
	});
	console.log('test1')
	document.getElementById('session').onclick=function whatevs() {
		console.log('test2')
		React.render(<LoginBox name="Sean" />, document.getElementById('session'));
	}
})
