Fireblog.Blogpost = DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	publishedDate: DS.attr('date')
});

Fireblog.Blogpost.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Newest Blog post', body: 'This is the body of the Newest post', publishedDate: '2015-09-20T04:30:00.000Z' },
    { id: 2, title: 'Second Blog post', body: 'This is the body of the second post', publishedDate: '2012-10-01T19:01:00.000Z' },
    { id: 3, title: 'First Blog post', body: 'This is the body of the first post', publishedDate: '2011-10-01T19:01:00.000Z' },
    { id: 4, title: 'Third Blog post', body: 'This is the body of the third post', publishedDate: '2014-10-01T19:01:00.000Z' }
  ]
});