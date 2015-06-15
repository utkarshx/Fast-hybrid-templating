define(['jquery', 'handlebars'], function($, Handlebars) {
	return {
		template :  $('#template1').html(),
		start: function() {
			console.log('hello')
			this.render()
		},
		render: function() {

			console.log(this.template)
			this.compiled = Handlebars.compile(this.template);
			console.log(this.compiled)
			$('.insertHere').html(this.compiled({}));
		}
	}
});