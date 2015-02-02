// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery.min
//= require underscore.min
//= require react
//= require react_ujs
//= require components
//= require_tree .

$(document).ready(function () {
	var Timer = React.createClass({
	  getInitialState: function() {
	    return {secondsElapsed: 0};
	  },
	  tick: function() {
	    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
	  },
	  componentDidMount: function() {
	    this.interval = setInterval(this.tick, 1000);
	  },
	  componentWillUnmount: function() {
	    clearInterval(this.interval);
	  },
	  render: function() {
	    return (
	      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
	    );
	  }
	});

	React.render(<Timer />, document.getElementById('react-timer'));
})
