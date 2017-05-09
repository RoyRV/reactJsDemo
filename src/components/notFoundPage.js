"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
	render : function (){
		return (
			<div>
				<h1> NOT FOUND PAGE </h1>
				<p>Oops! Sorry nothing to see here BITCH!</p>
				<Link to="app" className="btn btn-primary btn-lg">Back Home</Link>
			</div>
		);
	}
});

module.exports = NotFoundPage;