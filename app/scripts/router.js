Fireblog.Router.map(function () {
	this.resource('blogposts', { path: '/' });
	this.resource('blogpost', { path: '/blogposts/:id' },  function() {
  	this.route('edit')
	});

	this.resource('about');
	this.resource('contact');
});
