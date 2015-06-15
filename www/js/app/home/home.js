define(['jquery', 'handlebars'], function($, Handlebars) {
	return {
		template :  $('#home').html(),
		start: function() {
			console.log('hello')
			this.render()
		},
		render: function() {

			console.log(this.template)
			this.compiled = Handlebars.compile(this.template);
			console.log(this.compiled)
			$('#placeHere').html(this.compiled({}));
		}
	}
});