"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render : function (){
		return (
			<div className = "jumbotron">
				<h1> Roy REACT </h1>
				<p> React demo paragraph</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
});

module.exports = Home;