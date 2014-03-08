$(document).ready(function () {

/*****************************************************************************
	CONTACT FORM - you can change your notification message here
*****************************************************************************/
   	
			$("#ajax-contact-form").submit(function() {
				var str = $(this).serialize();		
				$.ajax({
					type: "POST",
					url: "contact_form/contact_process.php",
					data: str,
					success: function(msg) {
						// Message Sent - Show the 'Thank You' message and hide the form
						if(msg == 'OK') {
							result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
							$("#fields").hide();
						} else {
							result = msg;
						}
						$('#note').html(result);
					}
				});
				return false;
			});

/*****************************************************************************
	PRELOADER
******************************************************************************/	
        $(window).load(function() { 
            $('#status').fadeOut(); 
            $('#preloader').delay(350).fadeOut('slow'); 
            $('body').delay(350).css({'overflow':'visible'});
        })
   
/*****************************************************************************
	SMOOTH SCROLL
******************************************************************************/	
   $(window).scroll(function () {
	var scaleBg = -$(window).scrollTop() / 4;
		if ($(window).scrollTop() > 1) {
            $('#header').addClass('show-header');
        } else {
            $('#header').removeClass('show-header');
        }
	});

    $('.scroll').smoothScroll({
        offset: 0,
        speed: 800
    });
 
// Mobile Menu Toggle
	$('#nav-toggle').click(function () {
		 if ($('#header').hasClass('responsive-menu')) {
            $('#header').removeClass('responsive-menu');
        } else {
            $('#header').addClass('responsive-menu');
        }
	 });
	$('#menu li a').click(function () {
        if ($('#header').hasClass('responsive-menu')) {
            $('#header').removeClass('responsive-menu');
        }
    });

/*****************************************************************************
	FIT TEXT
******************************************************************************/	
$(".clients-container h1").fitText(0.8, { minFontSize: '30px', maxFontSize: '65px' });
$("#about h1, #services h1, #work h1,  #contact h1,  #blog h1, #features h1").fitText(0.8, { minFontSize: '55px', maxFontSize: '150px' });
$(".lead").fitText(0.8, { minFontSize: '15px', maxFontSize: '34px' });
$(".like ").fitText(0.8, { minFontSize: '45px', maxFontSize: '80px' });

/*****************************************************************************
HOME SLIDER & WORK SLIDER - FLEXSLIDER
******************************************************************************/	
    $('#home-slider').flexslider({
	directionNav:false,
	animation:"fade",
	slideshowSpeed: 4000,
	animationSpeed: 600,
	initDelay: 3000,         
	useCSS: true 
	});
	$('#home-slider .slides li').css('height', $(window).height());
	$('#home-slider .slides li').each(function () {
	var imgSrc = $('.slider-bg').attr('src');
	$(this).children('.slider-bg').remove();
	$(this).css('background', 'url("' + imgSrc + '")');
	 });
	var centerContent = ($(window).height() / 2) - ($('.slider-text').height() / 2);
	$('.slider-text').show().css('padding-top', centerContent);
	
	$('#project_slider').flexslider({
    	animation: "slide",
		controlNav: false,              
    	directionNav: true
  	});


//tooltip & quotes carousel speed  
   $('[data-toggle="tooltip"]').tooltip({ 'placement': 'top' })
	jQuery('.carousel2').carousel({ interval: 4000})
	
/*****************************************************************************
	PARALLAX SECTIONS
*****************************************************************************/	
	jQuery('#about .well').parallax("50%", 0.3);
	jQuery('#services .well').parallax("50%", 0.3); 
	jQuery('#work .well').parallax("50%", 0.3);
	
	var iOS = false,
		p = navigator.platform;
	if (p === 'iPad' || p === 'iPhone' || p === 'iPod') { iOS = true; }

/*****************************************************************************
	CSS3 ANIMATIONS
*****************************************************************************/
	jQuery('.bounceindown').appear(function() {
		$(this).addClass("animated bounceInDown");
	});
	
	jQuery('.bouncein').appear(function() {
		$(this).addClass("animated  bounceIn");
	});
	
	jQuery('#logo, #menu, .fadeInDown').appear(function() {
		$(this).addClass("animated fadeInDown");
	});
	
	jQuery('.fadeInUp').appear(function() {
		$(this).addClass("animated fadeInUp");
	});
	
	jQuery('.team-item-wrapper, .fadeinleftbig , #carousel').appear(function() {
		$(this).addClass("animated fadeInLeftBig");
	});
	
	jQuery('.fadeinrightbig').appear(function() {
		$(this).addClass("animated fadeInRightBig");
	});
	
	jQuery('h1, .lead, p, .fadein, #grid, .category-navbar').appear(function() {
		$(this).addClass("animated fadeIn");
	});
	
	jQuery('.flip').appear(function() {
		$(this).addClass("animated flip");
	});
	
/*****************************************************************************
	MILESTONE COUNTERS - ADD YOUR PERCENTAGES HERE
******************************************************************************/
	jQuery('#counter-1').appear(function() {
		$('#counter-1').countTo({
			from: 0,
			to: 1440,
			speed: 4000,
			refreshInterval: 50,
			onComplete: function(value) { 
			//console.debug(this); 
			}
			});
		});
	jQuery('#counter-2').appear(function() {
		$('#counter-2').countTo({
			from: 0,
			to: 90,
			speed: 4000,
			refreshInterval: 50,
			onComplete: function(value) { 
			//console.debug(this); 
			}
			});
		});
	jQuery('#counter-3').appear(function() {
		 $('#counter-3').countTo({
			from: 0,
			to: 2001,
			speed: 4000,
			refreshInterval: 50,
			onComplete: function(value) { 
			//console.debug(this); 
			}
			});
		});	
	});
	
/*****************************************************************************
	GOOGLE MAP - ADD YOUR ADDRESS HERE
******************************************************************************/	
$(window).load(function(){
	$(".google-maps").gmap3({
    marker:{     
	address:"23, Mornington Crescent, London",  options:{icon: "img/marker.png"}},
    map:{
      options:{
styles: [ {
stylers: [ { "saturation":0 }, { "lightness": 100 },  { "hue": "#ffffff" } ]
},
{ featureType: "road" ,"elementType": "geometry",
stylers: [ { "weight": 5.2 }, { "color": "#ffffff" }, { "visibility": "simplified" } ] } ,
{ featureType: "road.local" }, { "elementType": "labels.text", "stylers": [  { "visibility": "on" }, { "color": "#777777" }, { "weight": 0.2 } ] } ,
{ featureType: "transit", "elementType": "all", stylers: [ { "visibility": "off" } ] } ,
{ featureType: 'landscape', elementType: 'all', stylers: [ { "color": "#eeeeee" }, { visibility: 'on' } ] },
{ featureType: "water", elementType: "all", stylers: [ { visibility: "off" } ] },
{ featureType: "poi", elementType: "all", stylers: [  { "color": "#dcdbdb" },{ visibility: "on" } ] },
{ featureType: "poi" }, { "elementType": "labels.text", "stylers": [  { "visibility": "on" }, { "color": "#777777" }, { "weight": 0.2 } ] } ,
],
	zoom: 16,
	scrollwheel:false,
	mapTypeControl: false,
    scaleControl: false,
    zoomControl: false,
	disableDefaultUI: true,
	draggable: false}
	}
	});	
}); 

//ticker
(function(a){a.fn.airport=function(g,n){var b=a.extend({transition_speed:1000,loop:true,fill_space:false,colors:null},n),m=a(this),j=["a","b","c","d","e","f","g"," ","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-","1","2","3","4","5","6","7","8","9","0"],h,c,d=0,i=g.length,f=g.length;function e(p,o){return p+new Array(o-p.length+1).join(" ")}m.empty();while(i--){if(g[i].length>d){d=g[i].length}}while(f--){g[f]=e(g[f],d)}h=d;while(h--){var k=document.createElement("span");k.className="c"+h;m.prepend(k)}if(b.colors){c=b.colors.replace(/\s+/g,"").split(",")}function l(x,w,v,u){var q=m.find(".c"+x),r=g[v]?g[v].substring(u,u+1):null,p,s,o=g[v]?a.trim(g[v]).length:null,t=g[v-1]?a.trim(g[v-1]).length:a.trim(g[0]).length;if(v>=g.length){if(!b.loop){clearTimeout(p);return}p=setTimeout(function(){l(0,0,0,0)},10)}else{if(u>=d){p=setTimeout(function(){if(b.colors){s=c[~~(Math.random()*c.length)];m.css("color",s.substring(0,1)==="#"?s:"#"+s)}l(0,0,v+1,0)},b.transition_speed)}else{q.html((j[w]===" ")?"&nbsp;":j[w]);p=setTimeout(function(){if(w>j.length){l(x+1,0,v,u+1)}else{if(j[w]!==r.toLowerCase()){l(x,w+1,v,u)}else{q.html((r===" "&&b.fill_space)?"&nbsp;":r);if(o<t){if(x>o){for(x;x<t;x++){m.find(".c"+x).html("")}u=d}}l(x+1,0,v,u+1)}}},10)}}}l(0,0,0,0)}})(jQuery);
