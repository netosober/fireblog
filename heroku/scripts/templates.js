Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div class="container">\n    <div class="header">\n        <nav>\n            <ul class="nav navbar-nav navbar-right">\n                  <li role="presentation" class="active"><a href="#">Home</a></li>\n                  <li role="presentation"><a href="#">About</a></li>\n                  <li role="presentation"><a href="#">Contact</a></li>\n                </ul>\n            <h3 class="text-muted">Fire Blog</h3 >\n            </nav>\n    </div>\n\n  '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n\n  <hr>\n\n  <footer>\n    <p>&copy; Company 2014</p>\n  </footer>\n</div>\n"),h}),Ember.TEMPLATES.blogpost=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=this.escapeExpression,l=c.helperMissing;return e.buffer.push('<div class="row blog-post">\r\n	<div class="col-md-12">\r\n  	<h2>'),g={},h={},e.buffer.push(k(c._triageMustache.call(b,"model.title",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push('</h2>\r\n 	</div>\r\n	<div class="col-md-12">\r\n  	<h4><em>Published on '),g={},h={},i={hash:{},contexts:[b,b],types:["ID","STRING"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(k((f=c["format-date"]||b["format-date"],f?f.call(b,"model.publishedDate","LL",i):l.call(b,"format-date","model.publishedDate","LL",i)))),e.buffer.push("</em></h4>\r\n  	<p>"),g={},h={},e.buffer.push(k(c._triageMustache.call(b,"model.body",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</p>\r\n	</div>\r\n</div>\r\n"),j}),Ember.TEMPLATES.blogposts=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push('\r\n	<div class="row blog-post">\r\n		<div class="col-md-12">\r\n    	<h2>'),f={},h={},i={hash:{},inverse:m.noop,fn:m.program(2,g,b),contexts:[a,a],types:["STRING","ID"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"blogpost","blogpost",i):n.call(a,"link-to","blogpost","blogpost",i),(e||0===e)&&b.buffer.push(e),b.buffer.push('</h2>\r\n   	</div>\r\n		<div class="col-md-12">\r\n    	<h4><em>Published on '),f={},h={},i={hash:{},contexts:[a,a],types:["ID","STRING"],hashContexts:h,hashTypes:f,data:b},b.buffer.push(l((d=c["format-date"]||a["format-date"],d?d.call(a,"blogpost.publishedDate","LL",i):n.call(a,"format-date","blogpost.publishedDate","LL",i)))),b.buffer.push("</em></h4>\r\n    	<p>"),f={},h={},b.buffer.push(l(c._triageMustache.call(a,"blogpost.body",{hash:{},contexts:[a],types:["ID"],hashContexts:h,hashTypes:f,data:b}))),b.buffer.push("</p>\r\n  	</div>\r\n	</div>\r\n"),j}function g(a,b){var d,e;d={},e={},b.buffer.push(l(c._triageMustache.call(a,"blogpost.title",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b})))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<div class="blog-list">\r\n'),i={},j={},h=c.each.call(b,"blogpost","in","controller",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\r\n</div>"),k}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n  <div class="col-md-4">\n    <h2>'),d={},e={},b.buffer.push(k(c._triageMustache.call(a,"item",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('</h2>\n    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n    <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>\n  </div>\n  '),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this;return e.buffer.push('<div class="row">\n	'),h={},i={},g=c.each.call(b,"item","in","model",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n</div>"),j});