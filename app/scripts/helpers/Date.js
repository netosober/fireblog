/*global moment */

Ember.Handlebars.helper('format-date', function(date, dateFormat) {
  return moment(date).format(dateFormat); 
});
