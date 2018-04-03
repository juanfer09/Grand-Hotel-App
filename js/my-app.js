// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
   view: {
	   xhrCache: false,
	   pushState: true
   },
	dialog:{
	title:'Framework7'
},
	routes: [
		{
		path: '/acerca',
    	url: 'acerca.html',
    	name: 'acerca',
  		},
		{
		path: '/swipe',
    	url: 'swipe.html',
    	name: 'swipe',
  		},
		{
		path: '/index',
    	url: 'index.html',
    	name: 'index',
  		},
		{
		path: '/swiper',
    	url: 'swiper.html',
    	name: 'swiper',
  		},
		{
		path: '/accordion',
    	url: 'accordion.html',
    	name: 'accordion',
  		},
		{
		path: '/tabs/',
    	url: 'tabs.html',
    	name: 'tabs',
  		},
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;

$$('#btn-login').on('click',function(){
	var usuario = $$('#usuario').val();
	var password = $$('#password').val();

	if(usuario == "admin" && password == "admin"){
		myApp.popup.close("#popup-login");
	}else{
		myApp.dialog.alert("Los datos ingresados son incorrectos");
	}
});

$$('.close-registro').on('click',function(){
	myApp.popup.close('#popup-registro');
	
});
// Add another view, which is in right panel





 

