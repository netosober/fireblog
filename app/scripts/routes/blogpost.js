Fireblog.BlogpostRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('blogpost', params.id);
  }
});