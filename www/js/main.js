requirejs.config({
    baseUrl: 'js/vendor',
    paths: {
        app: '../app',
        routes: '../app/routes',
        jquery: 'jquery-1.11.2.min',
        //crossroads: 'crossroads',
        hasher: 'hasher.min',
        signals: 'js-signals',
        'handlebars.runtime': 'handlebars.runtime',
        products: '../app/products',
        finch: 'finch.min',
        home: '../app/home',
        handlebars: 'handlebars'
    },
    shim: {
    	handlebars : {
			exports : 'Handlebars'
		},
		finch: {
			exports:'Finch'
		}
    }
});

require(['jquery',
		'routes'
		],
		function($, routes){
			routes.start();
		}
);
