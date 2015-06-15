/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.registerRouter();
        this.bindEvents();
        this.startApplication();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.

    registerRouter: function() {
        this.productRoute = crossroads.addRoute("product/{id}",this.goToProduct);// The function that you would like to call when somebody hits a url like yoursite.com/product/123
        this.allProduct = crossroads.addRoute("product", this.allProducts);
        this.home = crossroads.addRoute("home", this.showHome);
    },
    goToProduct: function(id){
        var template = $('#template1').html(),
            compiled = Handlebars.compile(template),
            html = compiled({'id': id});

        $('#placeHere').html(html);
    },
    parseHash:function(newHash, oldHash){
        crossroads.parse(newHash);
    },

    startApplication: function(){
        crossroads.routed.add(console.log, console); //log all routes
         //setup hasher

        hasher.initialized.add(this.parseHash); //parse initial hash
        hasher.changed.add(this.parseHash); //parse hash changes
        hasher.init(); //start listening for history change
         
        //update URL fragment generating new history record
        //hasher.setHash('product/3');
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    allProducts: function() {
        $.getJSON( "product.json", function( data ) {
            var template = $('#products').html(),
                compiled = Handlebars.compile(template),
                html = compiled(data);
            $('#placeHere').html(html);
        
         });
    },
    showHome: function() {
        var template = $('#home').html(),
            compiled = Handlebars.compile(template),
            html = compiled();

        $('#placeHere').html(html);
    }
};

app.initialize();