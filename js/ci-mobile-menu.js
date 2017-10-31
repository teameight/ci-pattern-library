/************************************************/
/* Header. Drop-down menu
/************************************************/

function openMenu() {
  if(jQuery('#header .mobile-menu').hasClass('expanded')) {
   jQuery('#header .mobile-menu').slideUp();
   jQuery('#header .mobile-menu').removeClass('expanded');
   jQuery('a#open-menu').removeClass('expanded');
  }
  else{
    jQuery('#header .mobile-menu').slideDown().css('display', 'flex').addClass('expanded');
   	jQuery('a#open-menu').addClass('expanded');
  }
}

function goBack() {
	window.history.back();
}