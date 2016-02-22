var express = require('express');
var router = espress.Router();

module.exports = function(passport){
	router.get('/success', function(req, res){
		// sends successful login state back to angular
		res.send({state: 'success', user: req.user ? req.user : null});
		// TERNARY OPERATOR conditional ? if-true : if-false
	});
	router.get('/failure', function(req, res){
		res.send({state: 'failure', user: null, message: "invalid username or password"});
	});
	// log in
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));
	// sign up
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));
	// log out
	router.get('/signout', function(req, res){
		req.logout();
		res.redirect();
	});
	return router;
};