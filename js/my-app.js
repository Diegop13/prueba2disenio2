<p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p><p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p><p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p><p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p><p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p><p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p><p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p><p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p><p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p><p><b>Writer</b>  Diego Paredes <b>Screenplay</b> Gabriel Hernandez</p>// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
	
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		
		{
		path: '/info-producto/',
    	url: 'info-producto.html',
    	name: 'info-producto',
  		},
		
		{
		path: '/ejercicio/',
    	url: 'ejercicio.html',
    	name: 'ejercicio',	
		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

