define(['jquery', 'finch', 'hasher'], function($, finch, hasher) {
	return {
		start: function() {
			this.registerRoute();
			console.log(finch)
	        //start listening for history change
			finch.listen();
		},
		parseHash:function(newHash, oldHash){
	        //crossroads.parse(newHash);
	        finch.call(newHash);
	    },
	    goToProduct: function(id) {
	    	console.log(id)
	    },
	    allProducts: function() {
	    	console.log('at product')
	    	require(['products/allProducts'], function(products) {
	    		products.start();
	    	})
	    },
	    showHome: function(bindings) {
	    	console.log("show home")
    		require(['home/home'], function(home) {
    			home.start();
    		})
	    },
	    showLi: function(bindings) {
	    	console.log("show Li")
    		require(['home/li'], function(home) {
    			home.start();
    		})
	    },
	    home: function(bindings){
	    	console.log("home")
	    },
	    registerRoute: function(){
	    	finch.route('/', this.home);
	    	finch.route('/home', this.showHome);
	    	finch.route('[/home]/ul', this.showLi);

	    	finch.route('/allProducts', this.allProducts)

	    	/*this.routes = {
	    		productRoute: crossroads.addRoute('product/{id}', this.goToProduct),
	    		allProducts: crossroads.addRoute('product', this.allProducts),
	    		home: crossroads.addRoute('home', this.showHome)
	    	}*/
	    }
	}
})