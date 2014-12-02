var Fireblog = window.Fireblog = Ember.Application.create({
	LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true
});

/* Order and include as you please. */
require('scripts/helpers/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
