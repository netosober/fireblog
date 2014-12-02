Fireblog.Router.map(function () {
	this.resource('blogposts', { path: '/' });
	this.resource('blogpost', { path: '/blogposts/:id' });
});
