"use strict";

var Dispatcher= require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
	createAuthor : function(author){
		var newAuthor = AuthorApi.saveAuthor(author);
		//hey dispatcher, go tell all the stores that an author was just created
		Dispatcher.dispatch({
			actionType : ActionTypes.CREATE_AUTHOR,
			author : newAuthor
		});
	},
	updateAuthor : function(author){
		var updateAuthor = AuthorApi.saveAuthor(author);
		//hey dispatcher, go tell all the stores that an author was just updated
		Dispatcher.dispatch({
			actionType : ActionTypes.UPDATE_AUTHOR,
			author : updateAuthor
		});
	},
	deleteAuthor : function(id){
		AuthorApi.deleteAuthor(id);
		Dispatcher.dispatch({
			actionType : ActionTypes.DELETE_AUTHOR,
			id : id
		});
	}
};

module.exports = AuthorActions;