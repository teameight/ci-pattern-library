
/************************************************/
/* Header. Drop-down menu
/************************************************/

/*
jQuery(window).resize(function(){
  if(jQuery(window).width() < 1190){
    jQuery('#header .mobile-menu').hide();
    jQuery('#header .mobile-menu').removeClass('expanded');
	jQuery('a#open-menu').removeClass('expanded');
  }
  else {
  	jQuery('#header .mobile-menu').show();
  }
});
*/

function openMenu(){
  if(jQuery('#header .mobile-menu').hasClass('expanded')){
   jQuery('#header .mobile-menu').slideUp();
   jQuery('#header .mobile-menu').removeClass('expanded');
   jQuery('a#open-menu').removeClass('expanded');
  }
  else{
    jQuery('#header .mobile-menu').slideDown();
    jQuery('#header .mobile-menu').addClass('expanded');
   	jQuery('a#open-menu').addClass('expanded');
  }
}
function goBack(){window.history.back()}


/************************************************/
/* Homepage slider
/************************************************/

jQuery(document).ready(function() {

// T8 Accordion shortcode
if(jQuery('.t8-accordion').length) {
	jQuery('.t8-accordion-content').hide();

	jQuery('.t8-accordion-handle').each(function(){
		jQuery(this).on('click', function(e){
			e.preventDefault();
			jQuery(this).parents('.t8-accordion').find('.t8-accordion-content').slideToggle('fast');
		});
	});
}

 if(jQuery('#homepage-slider').length) {
		jQuery('#homepage-slider').bjqs({
      'showcontrols' : false,
			'automatic' : true,
			'height' : 800,
      'width' : 1920,
			'animspeed' : 7000, 
      'responsive' : true,
			'hoverpause' : true
    });
	}

	jQuery('.bjqs-markers li').first().addClass('first');
	jQuery('.bjqs-markers li').last().addClass('last');

	jQuery('#homepage-slider .btn-play').on('click', function(){
			jQuery(this).parents('li').find('.caption').hide();
			jQuery(this).parents('li').find('.videoWrapper').show();
			jQuery(this).parents('li').find('iframe').show();
			jQuery(this).parents('li').addClass('nobg');
      jQuery(this).parents('li').find('iframe').attr('src','');
			src = '//player.vimeo.com/video/'+jQuery(this).parents('li').find('iframe').attr('id')+'?autoplay=1';
      var src =  jQuery(this).parents('li').find('iframe').attr('src')+src;
      jQuery(this).parents('li').find('iframe').attr('src',src);
  });

	jQuery('#homepage-slider ol.bjqs-markers li a').each(function(){
		jQuery(this).on('click', function(){
			jQuery(this).parents('#homepage-slider').find('li').removeClass('nobg');
			jQuery(this).parents('#homepage-slider').find('.videoWrapper').hide();
			jQuery(this).parents('#homepage-slider').find('.caption').show();
			jQuery(this).parents('#homepage-slider').find('iframe').attr('src','');
		});
	});


	// Change first slide title to h1
	 var firstH1 = jQuery('#homepage-slider .bjqs-slide:eq(0)').find('div.title');
	var firstH1text = firstH1.html();
	firstH1.after('<h1 class="title">'+firstH1text+'</h1>');
	firstH1.remove();

	// Change second slide title to h2
	var firstH2 = jQuery('#homepage-slider .bjqs-slide:eq(1)').find('div.title');
	var firstH2text = firstH2.html();
	firstH2.after('<h2 class="title">'+firstH2text+'</h2>');
	firstH2.remove();

	// Change third slide title to h3
	var firstH3 = jQuery('#homepage-slider .bjqs-slide:eq(2)').find('div.title');
	var firstH3text = firstH3.html();
	firstH3.after('<h3 class="title">'+firstH3text+'</h3>');
	firstH3.remove();


});

/************************************************/
/* Homepage circles
/************************************************/

function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}

 $$('.chart-pie').forEach(function(chartPie) {
	var p = parseFloat(chartPie.textContent);
	var NS = "http://www.w3.org/2000/svg";
	var svg = document.createElementNS(NS, "svg");
	var circle = document.createElementNS(NS, "circle");
	var title = document.createElementNS(NS, "title");

	circle.setAttribute("r", 16);
	circle.setAttribute("cx", 16);
	circle.setAttribute("cy", 16);
	circle.setAttribute("stroke-dasharray", p + " 100");

	svg.setAttribute("viewBox", "0 0 32 32");
	title.textContent = chartPie.textContent;
	chartPie.textContent = '';
	svg.appendChild(title);
	svg.appendChild(circle);
	chartPie.appendChild(svg);
});


  jQuery(document).ready(function () {
  	 jQuery('.knob-dyn').knob();
	});

	var count1 = 0,
	    timer1;

  function changeRadius() {
    timer1 = setInterval(function() {
      jQuery('.knob-dyn').val(count1++).trigger('change');
      if (count1 == 102) clearInterval(timer1);
    }, 10)
  }

	function changeNumber() {
		changeNumberInner(jQuery('.circle.circle-one .text p'));
		changeNumberInner(jQuery('.circle.circle-two .text p'));
		changeNumberInner(jQuery('.circle.circle-three .text p'));
		changeNumberInner(jQuery('.circle.circle-four .text p'));
	}

	function changeNumberInner(obj) {
		var count = 0,
		timer,
		maxNumber = parseInt( jQuery(obj).text().replace(/\,/g, '') ),
		increment = maxNumber/300,
		displaycount = 0;

		timer = setInterval(function() {

			count = count+increment;
			displaycount = Math.floor(count);


			jQuery(obj).text(displaycount).trigger('change');

			//console.log(count+" | "+maxNumber);
			//console.log(jQuery(obj).text());

		  	if (count >= maxNumber) {
				   clearInterval(timer);
						 //count = 23 ;
						 jQuery(obj).text(maxNumber);
				   }
		     }, 10)
   }
	if(jQuery("#homepage-impact").length) {

		var firstStart = true;

		if (firstStart == true) {
			jQuery(window).scroll(function () {

				//console.log("scrolltop:"+( jQuery(window).scrollTop()+jQuery(window).height() )+"impact:"+(jQuery('#homepage-impact').offset().top+450) );



				if (((jQuery(window).scrollTop() + jQuery(window).height() ) > (jQuery('#homepage-impact').offset().top+450)) && !jQuery('.circles').hasClass('played')) {


		       		changeRadius();
					 changeNumber();
					 jQuery('.circles').addClass('played');
					 firstStart = false;

					 //T8 additions

					 if (jQuery('.circle .chart-pie').length) {


					 	jQuery('.circle .chart-pie').addClass('animated');

					 }
		     }
			});
		}

	}

/************************************************/
/* Homepage. Testimonials slider
/************************************************/

  jQuery('.slider2').flexslider({
		/*smoothHeight: true, */
		directionNav: false,
		slideshow: true,
		//animation: "slide"
  });
	jQuery('.slider2 .flex-control-nav li').first().addClass('first');
	jQuery('.slider2 .flex-control-nav li').last().addClass('last');
	jQuery('.slider2 .flex-viewport').after('<div class="bottom-quote"></div> ');
	jQuery('.slider2 .flex-viewport').before('<div class="top-quote"></div> ');

/************************************************/
/* Homepage. Show iframe blocks (Twitter and Facebook)
/************************************************/

jQuery(document).ready(function () {
	 function showBlocks(){
	  jQuery('#homepage-social .columns').show();
	 }
	 setTimeout(showBlocks, 2000);
});

/************************************************/
/* Stories of hope
/************************************************/

jQuery(document).ready(function () {

		// On the Road submenus
		jQuery('.otr-filter-mobile-menu').on('click', function(e) {
			e.preventDefault();
			jQuery(this).toggleClass('open');
			jQuery('.menu-on-the-road-menu-container').slideToggle();
		});

		// Add classes
		jQuery('#stories-of-hope .entry').last().prev().addClass('last');
		jQuery('#stories-of-hope .entry').first().addClass('first');

		var prelast = jQuery('#stories-of-hope .entry').last().prev().prev();
		prelast.addClass('prelast');

		if(prelast.hasClass('green') ){
			jQuery('.entry.pagination').addClass('blue');
			jQuery('.entry.pagination').removeClass('green');
		} else {
			jQuery('.entry.pagination').removeClass('blue');
			jQuery('.entry.pagination').addClass('green');
		}

		// Hidden buttons
		jQuery('#stories-of-hope .entry.first').next('.entry.black').find('a.prev-story').css('display','none');
		jQuery('#stories-of-hope .black').last('.entry.black').find('a.next-story').css('display','none');

		// View full story
		jQuery('#stories-of-hope .drop-down-block .btn.view-more').click(function(){
		  jQuery(this).hide();
      var jQuerythis = jQuery(this).parent().next();
			jQuery(this).parents('.short-story').hide().siblings('.full-story').slideDown('slow',function(){
        jQuerythis.find('#flexslider-video').flexslider({
          animation: "slide",
        	controlNav:false,
        	video: true,
        	slideshow:false,
          before: function(slider){
      			if (jQuery('.flex-active-slide').find('.videoWrapper.vimeo-video').length == 1) {
              var src = jQuery('.flex-active-slide').find('iframe').attr('src').replace('?autoplay=1', '');
              jQuery('.flex-active-slide').find('iframe').attr('src', src);
            }
      		}
        });
        var slidecontrols = $("a.flex-next, a.flex-prev");
        var slides = jQuery("ul.slides li");
        slidecontrols.on("click", function(){
          slides.find("*").not('iframe').show();
          slides.find(".videoWrapper").hide();
        });
      });
			jQuery(this).parents('.entry').next('.entry.black').show();

			elementClick3 = jQuery(this).parents('.entry').not('.last').find('.full-story');
		   destination3 = jQuery(elementClick3).offset().top;
			 jQuery("body").stop().animate({ scrollTop: destination3-140}, 1100 );
			 jQuery("html").stop().animate( { scrollTop: destination3-140}, 1100 );

			return false;
		});
		// Go to the next story
		jQuery('#stories-of-hope a.next-story').click(function(){
		   jQuery(this).parents('.entry').not('.last').hide();
			 jQuery(this).parents('.entry').not('.last').prev('.entry').find('.short-story').show();
			 jQuery(this).parents('.entry').not('.last').prev('.entry').find('.full-story').hide();
			 jQuery(this).parents('.entry').not('.last').prev('.entry').find('.btn.view-more').show();

			 jQuery(this).parents('.entry').not('.last').next('.entry').find('.full-story').show();
        jQuery(this).parents('.entry').not('.last').next('.entry').find('.full-story').find('#flexslider-video').flexslider({
          animation: "slide",
        	controlNav:false,
        	video: true,
        	slideshow:false,
          before: function(slider){
      			if (jQuery('.flex-active-slide').find('.videoWrapper.vimeo-video').length == 1) {
              var src = jQuery('.flex-active-slide').find('iframe').attr('src').replace('?autoplay=1', '');
              jQuery('.flex-active-slide').find('iframe').attr('src', src);
            }
      		}
        });
        var slidecontrols = $("a.flex-next, a.flex-prev");
        var slides = jQuery("ul.slides li");
        slidecontrols.on("click", function(){
          slides.find("*").not('iframe').show();
          slides.find(".videoWrapper").hide();
        });
			 jQuery(this).parents('.entry').not('.last').next('.entry').find('.short-story').hide();
			 jQuery(this).parents('.entry').not('.last').next('.entry').next('.entry.black').show();

			 elementClick = jQuery(this).parents('.entry').not('.last').next('.entry');
		   destination = jQuery(elementClick).offset().top;
			 jQuery("body").stop().animate({ scrollTop: destination }, 1100 );
			 jQuery("html").stop().animate( { scrollTop: destination }, 1100 );
		   return false;
		});
		// Go to the prev story
		jQuery('#stories-of-hope a.prev-story').click(function(){
		   jQuery(this).parents('.entry').hide();
			 jQuery(this).parents('.entry').prev('.entry').find('.short-story').show();
			 jQuery(this).parents('.entry').prev('.entry').find('.full-story').hide();
			 jQuery(this).parents('.entry').prev('.entry').find('.btn.view-more').show();

			 jQuery(this).parents('.entry').prev('.entry').prev('.entry').prev('.entry').find('.full-story').show();
       jQuery(this).parents('.entry').prev('.entry').prev('.entry').prev('.entry').find('.full-story').find('#flexslider-video').flexslider({
          animation: "slide",
        	controlNav:false,
        	video: true,
        	slideshow:false,
          before: function(slider){
      			if (jQuery('.flex-active-slide').find('.videoWrapper.vimeo-video').length == 1) {
              var src = jQuery('.flex-active-slide').find('iframe').attr('src').replace('?autoplay=1', '');
              jQuery('.flex-active-slide').find('iframe').attr('src', src);
            }
      		}
        });
        var slidecontrols = $("a.flex-next, a.flex-prev");
        var slides = jQuery("ul.slides li");
        slidecontrols.on("click", function(){
          slides.find("*").not('iframe').show();
          slides.find(".videoWrapper").hide();
        });
			 jQuery(this).parents('.entry').prev('.entry').prev('.entry').prev('.entry').find('.short-story').hide();
			 jQuery(this).parents('.entry').prev('.entry').prev('.entry').prev('.entry').next('.entry.black').show();

			 elementClick2 = jQuery(this).parents('.entry').prev('.entry').prev('.entry').prev('.entry');
		   destination2 = jQuery(elementClick2).offset().top;
			 jQuery("body").stop().animate({ scrollTop: destination2}, 1100 );
			 jQuery("html").stop().animate( { scrollTop: destination2}, 1100 );
		   return false;
		});
		// Close story
		jQuery('#stories-of-hope a.close-story').click(function(){

			 jQuery('#stories-of-hope .short-story').show();
			 jQuery('#stories-of-hope .drop-down-block .btn.view-more').show();
			 jQuery('#stories-of-hope .full-story').hide();
			 jQuery('#stories-of-hope .entry.black').hide();

			 elementClick3 = jQuery('#stories-of-hope .entry').first();
		   destination3 = jQuery(elementClick3).offset().top;
			 jQuery("body").stop().animate({ scrollTop: destination3}, 1100 );
			 jQuery("html").stop().animate( { scrollTop: destination3}, 1100 );
		   return false;
		});

});

/************************************************/
/* "About us" page
/************************************************/

function columnsFunction(){
  var winW = jQuery(window).width();
	if(winW > 768) {
		jQuery('#about-us .community-partners .clear').remove();
		jQuery('#about-us .community-partners .image-holder').removeClass('center-block').removeClass('left-block').removeClass('right-block');
		jQuery('#about-us .community-partners .image-holder:nth-child(3n+2)').addClass('center-block');
	  jQuery('#about-us .community-partners .image-holder:nth-child(3n+1)').addClass('left-block');
	  jQuery('#about-us .community-partners .image-holder:nth-child(3n+0)').addClass('right-block');
		jQuery('#about-us .community-partners .image-holder:nth-child(3n+3)').after('<div class="clear ln3"></div>');
		var lastRow = jQuery('#about-us .community-partners .clear').last();
		lastRow.next('div').addClass('last');
		if( lastRow.next('.image-holder').not('center-block')) {
			lastRow.next('.image-holder').removeClass('left-block').addClass('center-block');
		}
 } else {
		jQuery('#about-us .community-partners .image-holder').removeClass('center-block').removeClass('left-block').removeClass('right-block');
		jQuery('#about-us .community-partners .clear').remove();
		jQuery('#about-us .community-partners .image-holder:nth-child(2n+2)').addClass('right-block');
	  jQuery('#about-us .community-partners .image-holder:nth-child(2n+2)').prev('.image-holder').addClass('left-block');
		jQuery('#about-us .community-partners .image-holder:nth-child(2n+2)').after('<div class="clear ln2"></div>');
		var lastRow = jQuery('#about-us .community-partners .clear').last();
		lastRow.next('div').addClass('last');
	  if( lastRow.next('.image-holder').not('right-block')) {
			lastRow.next('.image-holder').addClass('left-block');
		}
  }
}
columnsFunction();

jQuery(document).ready(function(){
  columnsFunction();
});
jQuery(window).resize(function(){
  columnsFunction();
});

/************************************************/
/* F.A.Q page
/************************************************/

jQuery(document).ready(function () {

	// OLD FAQ CODE

	// Accordion
	jQuery('#faq .accordion .question').each(function(){
		jQuery(this).click(function(){
			if(jQuery(this).hasClass('active')) {
				jQuery(this).next().removeClass('collapsed').find('.in').slideUp();
				jQuery(this).removeClass('active');
			} else {
				jQuery('#faq-questions .in').slideUp();
				jQuery('#faq-questions .answer').removeClass('collapsed');
				jQuery(this).next().addClass('collapsed').find('.in').slideDown();
				jQuery('#faq-questions .question').removeClass('active');
				jQuery(this).addClass('active');
			}
		});
	});

	// Drop down blocks
  var selectedOption = jQuery('#faq .accordion').find('option:selected').attr('class');
	jQuery('#faq .accordion .row').each(function(){
		if ( jQuery(this).attr('id') == selectedOption) {
			jQuery(this).show();
		}else {
			jQuery(this).hide();
		}
	});

 jQuery('#faq .accordion .drop-down').change(function(){
		 var selectedOption = jQuery(this).find('option:selected').attr('class');
			jQuery('#faq .accordion .row').each(function(){
				if ( jQuery(this).attr('id') == selectedOption) {
					jQuery(this).parents('.accordion').find('.answer .in').slideUp().parents('.answer').removeClass('collapsed');
					jQuery(this).show();
				}else {
					jQuery(this).hide();
				}
			});

	});

 // NEW FAQ CODE
	var $jumpnav = jQuery('#jumpnav');
	$jumpnav.html("<h3>FAQ Topics</h3><ul></ul>");
	var $jumpnavul = jQuery('#jumpnav ul');

	// only proceed if jumpnav is present
	if($jumpnav.length > 0) {

		// create jumpnav links and add ids to section headings
		var sectionsArray = new Array();

		jQuery('.page h2').each(function(index) {

			var $thish2 = jQuery( this ),
					$h2text = $thish2.text(),
          $h2id = "section"+index,
          link = '<li><a href="#'+$h2id+'">'+$h2text+'</a></li>';

      $thish2.attr("id", "section"+index);
			$jumpnavul.append(link);
		});

    $jumpnav.show();

		// scroll to section when you click its jumpnav link
		jQuery('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = jQuery(this.hash);
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');

				if (target.length) {
					jQuery('html, body').animate({
						scrollTop: target.offset().top - 60
					}, 1000);
					return false;
				}
			}
		});

		var $sidebar   = $jumpnav,
        $window    = jQuery(window),
        offset     = $sidebar.offset(),
        topPadding = 60;
        $page = jQuery(".main-wrapper");

    $window.scroll(function() {
        var windowWidth = jQuery(window).width(),
            winScrolltop = $window.scrollTop(),
            pageheight = $page.height(),
            sbarstop = $sidebar.closest(".col").height(),
            sbarMargTop = parseInt($sidebar.css("margin-top")),
            newSbarMargTop = winScrolltop - offset.top + topPadding,
            checkNewheight = sbarstop - sbarMargTop + newSbarMargTop;

            if(checkNewheight > pageheight) {
              newSbarMargTop = pageheight - (sbarstop - sbarMargTop);
            }

        if(windowWidth > 767){
          if (winScrolltop > offset.top) {

              $sidebar.stop().animate({
                  marginTop: newSbarMargTop
              });

          } else {
              $sidebar.stop().animate({
                  marginTop: 0
              });
          }
        }else{
          $sidebar.stop().animate({
              marginTop: 0
          });
        }
    });

    $window.resize(function() {
        var windowWidth = $(window).width();

        if(windowWidth < 640){
          $sidebar.stop().animate({
              marginTop: 0
          });
        }
    });

  }

});

/************************************************/
/* Events page
/************************************************/

jQuery(document).ready(function () {

	jQuery('.event-link').click(function(){

	 var blockId = jQuery(this).attr('id');

	 jQuery(this).parents('#the-problem').siblings('#events').find('.green-block2').each(function(){
	   if(jQuery(this).hasClass(blockId)) {
			 jQuery(this).show();
		 } else {
		 	 jQuery(this).hide();
		 }
	 });

	 jQuery('#events .close-btn').click(function(){
	   jQuery(this).parents('#events').find('.green-block2').each(function(){
	     jQuery(this).hide();
	   });
	 });



	});

	//grayscale('#team .item img');

});

/************************/
/*  Team and Solution pages
/************************/

jQuery(window).resize(function(){
  if (jQuery('.item.expanded').length == 1) {
    var posLeft = jQuery('.item.expanded').offset().left;
    jQuery('.item.expanded').find('.hide-part').css('marginLeft', '-' + posLeft + 'px').css('width', jQuery(window).width() + 'px');
  }
});
jQuery(window).scroll(function(){
  if (jQuery('#solution-sponsor .icons').length == 1) {
    if ((jQuery(window).scrollTop() + jQuery(window).height() - 130) > jQuery('#solution-sponsor .icons').offset().top) {
      //jQuery('#solution-sponsor .icons').addClass('animated');

			jQuery('#solution-sponsor .icons div:eq(0)').find('img').addClass('animated');
			setTimeout(function() { jQuery('#solution-sponsor .icons div:eq(1)').find('img').addClass('animated') }, 300);
			setTimeout(function() { jQuery('#solution-sponsor .icons div:eq(2)').find('img').addClass('animated') }, 600);
      setTimeout(function() { jQuery('#solution-sponsor .icons div:eq(3)').find('img').addClass('animated') }, 900);
    }
  }
});

/************************/
/*  OTR Subscription Popup
/************************/

var createCookie = function(name, value, days) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}

jQuery(document).ready(function () {

	var $popup = jQuery('.ci-subscription-popup');
	var $closePopup = jQuery($popup).find('.close-text');
	var $submitInput = jQuery($popup).find('input[type=email]');
	var $submitPopup = jQuery($popup).find('input[type=submit]');
	var subscriberSet = getCookie( 'ci-subscriber' );

	if ( subscriberSet ) {
		if ( subscriberSet === 'target' ) {
			if ( $popup ) {
				$popup.addClass( 'will-open' );
			}
		}
	}
	else {
		createCookie( 'ci-subscriber', 'target', 30 );
	}

	jQuery(window).scroll(function() {

		var scroll = jQuery(window).scrollTop();
		var docHeight = jQuery(document).height();
		var windowHeight = jQuery(window).height();

		if ( scroll >= ( docHeight - windowHeight )*0.5 ) {

			if ( $popup.hasClass( 'will-open' ) ) {
				$popup.addClass( 'open' );
			}
		}
	});

	$closePopup.on( 'click', function() {
		$popup.removeClass('open will-open');
		currCookie = getCookie( 'ci-subscriber' );
		if ( currCookie !== 'subscribed' ) {
			createCookie( 'ci-subscriber', 'closed', 30 );
		}
	});

	$submitPopup.on( 'click', function() {
		createCookie( 'ci-subscriber', 'subscribed', 365 );
		$submitPopup.addClass( 'ajax-hide' );
		$submitInput.addClass( 'ajax-hide' );
	});

});

/* Map */

jQuery(window).load(function(){

	 jQuery('#Map area').click(function(){
	   return false;
	 });

	//jQuery('.map-img').maphilight();
  jQuery('#mexiko').hover(
	function(){
	  jQuery('#mexico-info').stop(true, false).delay(100).fadeIn('slow');
	}, function(){
    jQuery('#mexico-info').fadeOut(10);
	});
  jQuery('#lamerica').hover(
	function(){
	  jQuery('#lamerica-info').stop(true, false).delay(100).fadeIn('slow');
	}, function(){
	  jQuery('#lamerica-info').fadeOut(10);
	});
  jQuery('#namerica').hover(
	function(){
	  jQuery('#namerica-info').stop(true, false).delay(100).fadeIn('slow');
	}, function(){
	  jQuery('#namerica-info').fadeOut(10);
	});
  jQuery('#africa').hover(
	function(){
	  jQuery('#africa-info').stop(true, false).delay(100).fadeIn('slow');
	}, function(){
	  jQuery('#africa-info').fadeOut(10);
	});
  jQuery('#europe').hover(
	function(){
	  jQuery('#europe-info').stop(true, false).delay(100).fadeIn('slow');
	}, function(){
	  jQuery('#europe-info').fadeOut(10);
	});
  jQuery('.map-hover').hover(
	function(){
	  jQuery(this).addClass('active');
	}, function(){
    jQuery(this).removeClass('active');
	});
})

/************************************************/
/* Additional
/************************************************/

// Sign up form
jQuery(window).load(function () {
	jQuery('.nsu-form').attr('action', '#footer');
  if (document.location == 'http://children.etlspace.com/#footer') {
		setTimeout(function(){jQuery.scrollTo('#footer')},2200);
	} else if (document.location == 'http://ecbiz126.inmotionhosting.com/~childr43/#footer') {
		setTimeout(function(){jQuery.scrollTo('#footer')},2200);
	} else if (document.location == 'http://childrenincorporated.org/#footer') {
		setTimeout(function(){jQuery.scrollTo('#footer')},2200);
	} else if (document.location == 'https://childrenincorporated.org/#footer') {
		setTimeout(function(){jQuery.scrollTo('#footer')},2200);
	}
});

// Background-size
jQuery(document).ready(function () {
  jQuery('#homepage-impact').css({backgroundSize: "cover"});
	jQuery('#homepage-stories').css({backgroundSize: "cover"});
	jQuery('#homepage-social').css({backgroundSize: "cover"});
	jQuery('#stories-of-hope .photo').css({backgroundSize: "cover"});
	jQuery('#the-problem').css({backgroundSize: "cover"});
	jQuery('#about-us .photo').css({backgroundSize: "cover"});
	jQuery('#solution-intro').css({backgroundSize: "cover"});
	jQuery('#solution-sponsor').css({backgroundSize: "cover"});
	jQuery('#solution-coverage').css({backgroundSize: "cover"});
	jQuery('.slider1 .slides > li').css({backgroundSize: "cover"});
	jQuery('#homepage-slider li.bjqs-slide').css({backgroundSize: "cover"});
});

// Classes
jQuery(document).ready(function () {
	jQuery('.one_half p:last-child').css('padding','0');
	jQuery('.one_half').siblings('br').remove();
	jQuery('.one_half').siblings('p:empty').remove();
});

// Custom select
jQuery(document).ready(function(){
	if(jQuery(".drop-down").length) {
	  jQuery('.drop-down').customSelect();
	}
});

jQuery('select.drop-down').wrapAll('<div class="drop-down-container" />');

// Custom radio
jQuery(function(){
	jQuery.fn.fancyRadio = function(){
		return jQuery(this).each(function(){
			var p = jQuery(this),
				container = jQuery('<span class="radio-container"/>'),
				radio = jQuery('<span class="radio"/>');
			p.find('input[type="radio"]').wrap(container);
			p.find('span.radio-container').append(radio);
			p.find('input:checked').parent().find('span.radio').addClass('selected');
			p.find('input[type="radio"]').on('click',function(){
				p.find('span.selected').removeClass('selected');
				jQuery(this).parent().find('span.radio').addClass('selected');
			});
		});
	};

	jQuery('#shiptobilling').addClass('radio');
	jQuery('div.radio').not('.woocommerce #payment.radio').fancyRadio();

});



// Content height on the "FAQ", "Events" and "Problem" page

jQuery(document).ready(function(){
	windowH = jQuery(window).height();
	headerH = jQuery('#header').height();
	footerH = jQuery('#footer').height();
	blockH = windowH - headerH - footerH + 20;
	if (blockH > 570) {
		jQuery('#the-problem').css('height', blockH);
	}
	if (blockH > 800) {
		jQuery('#faq').css('height', blockH + 10);
	}
});
jQuery(window).resize(function(){
	windowH = jQuery(window).height();
	headerH = jQuery('#header').height();
	footerH = jQuery('#footer').height();
	blockH = windowH - headerH - footerH + 20 ;
	if (blockH > 570) {
		jQuery('#the-problem').css('height', blockH);
	}
	if (blockH > 800) {
		jQuery('#faq').css('height', blockH + 10);
	}
});






/************************************************/
/* ACF google map 
/************************************************/

(function($) {

/*
*  new_map
*
*  This function will render a Google Map onto the selected jQuery element
*
*  @type	function
*  @date	8/11/2013
*  @since	4.3.0
*
*  @param	$el (jQuery element)
*  @return	n/a
*/

function new_map( $el ) {
	
	// var
	var $markers = $el.find('.marker');
	
	
	// vars
	var args = {
		zoom		: 16,
		center		: new google.maps.LatLng(0, 0),
		mapTypeId	: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
	    panControl: false,
	    scrollwheel: true,
	    zoomControlOptions: {
	        style: google.maps.ZoomControlStyle.SMALL,
	        position: google.maps.ControlPosition.RIGHT_CENTER
	    },
	    styles: [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#74b638"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -31
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.8
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": "7"
            },
            {
                "saturation": "18"
            },
            {
                "color": "#74b638"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7aa356"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": 30
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            },
            {
                "color": "#6894c4"
            }
        ]
    }
]
	};
	
	
	// create map	        	
	var map = new google.maps.Map( $el[0], args);
	
	
	// add a markers reference
	map.markers = [];
	
	
	// add markers
	$markers.each(function(){
		
    	add_marker( $(this), map );
		
	});
	
	
	// center map
	center_map( map );
	
	
	// return
	return map;
	
}

/*
*  add_marker
*
*  This function will add a marker to the selected Google Map
*
*  @type	function
*  @date	8/11/2013
*  @since	4.3.0
*
*  @param	$marker (jQuery element)
*  @param	map (Google Map object)
*  @return	n/a
*/

function add_marker( $marker, map ) {

	// var
	var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

	// create marker
	var marker = new google.maps.Marker({
		position	: latlng,
		map			: map
	});

	// add to array
	map.markers.push( marker );

	// if marker contains HTML, add it to an infoWindow
	if( $marker.html() )
	{
		// create info window
		var infowindow = new google.maps.InfoWindow({
			content		: $marker.html()
		});

		// show info window when marker is clicked
		google.maps.event.addListener(marker, 'click', function() {

			if($('.gm-style-iw').length) {
				$('.gm-style-iw').parent().hide();
    		}
			infowindow.open( map, marker );

		});
	}

}

/*
*  center_map
*
*  This function will center the map, showing all markers attached to this map
*
*  @type	function
*  @date	8/11/2013
*  @since	4.3.0
*
*  @param	map (Google Map object)
*  @return	n/a
*/

function center_map( map ) {

	// vars
	var bounds = new google.maps.LatLngBounds();

	// loop through all markers and create bounds
	$.each( map.markers, function( i, marker ){

		var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

		bounds.extend( latlng );

	});

	// only 1 marker?
	if( map.markers.length == 1 )
	{
		// set center of map
	    map.setCenter( bounds.getCenter() );
	    map.setZoom( 16 );
	}
	else
	{
		// fit to bounds
		map.fitBounds( bounds );
	}

}

/*
*  document ready
*
*  This function will render each map when the document is ready (page has loaded)
*
*  @type	function
*  @date	8/11/2013
*  @since	5.0.0
*
*  @param	n/a
*  @return	n/a
*/
// global var
var map = null;

$(document).ready(function(){

	$('.acf-map').each(function(){

		// create map
		map = new_map( $(this) );

	});

	$('.map-over').click(function(){
		$(this).toggleClass('hiddentray');
	});

});

})(jQuery);





