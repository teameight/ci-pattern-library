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
/************************************************/
/* Alert Box + Cookie
/************************************************/

function createCookie(name, value, days) {
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

	var $alert = jQuery( '.ci-alert' );

	if ( $alert ) {

		$alert.each( function() {

			var $thisAlert = jQuery(this);
			var $name = $thisAlert.attr( 'id' );
			var $closeAlert = jQuery( '.ci-alert-close' );
			var alertWasClosed = getCookie( $name );

			if ( !$name ) {
				$name = 'blank';
			}

			if ( alertWasClosed != 'seen' ) {
				$thisAlert.addClass( 'show-alert' );
			} else {
				$thisAlert.removeClass( 'show-alert' );
			}

			$closeAlert.on( 'click', function() {
				var $thisClosedAlert = jQuery(this).parent('.ci-alert');
				$thisClosedAlert.fadeOut( 'slow', function() {
					$thisClosedAlert.removeClass( 'show-alert' );
				});
				createCookie( $thisClosedAlert.attr('id'), 'seen', 365 );
			});

		});

	}

});
/************************************************/
/* DMS Modal behavior
/************************************************/

function openModal() {
	var modal = jQuery('.ci-checkout-modal');

	if ( modal ) {
		modal.addClass('active');
	}
}

function closeModal() {
	var modal = jQuery('.ci-checkout-modal');

	if ( modal ) {
		modal.removeClass('active');
	}
}