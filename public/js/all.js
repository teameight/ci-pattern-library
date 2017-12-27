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
  var html = jQuery('html');

	if ( modal ) {
		modal.addClass('active');
    html.addClass('no-scroll');
	}
}

function closeModal() {
	var modal = jQuery('.ci-checkout-modal');
  var html = jQuery('html');

	if ( modal ) {
		modal.removeClass('active');
    html.removeClass('no-scroll');

    setTimeout(function () {
        // Reset iframe src to prevent weird flash on next load
        $('.ci-checkout-modal').find('iframe#ci-checkout-iframe').attr('src', 'about:blank');
        // Replace security tokens
      if ($(".sectoken").length) {
          $.ajax({ url: "/Common/Security/AntiForgeryToken" }).done(function(response) {
              $(".sectoken").replaceWith(response);
          });
      }

    }, 500);

	}
}

jQuery(document).ready(function () {
  /* Setup modal checkouts */
  jQuery("form input.ci-checkout-iframe").closest("form").attr("target", "ci-checkout-iframe");
  jQuery("form.child-select-form").attr("target", "ci-checkout-iframe");

  jQuery("form input.ci-checkout-iframe, form.child-select-form input[type=submit]").click(function () {
      openModal();
  });

  jQuery("a.ci-checkout-iframe").click(function (e) {
      openModal();
      jQuery("#ci-checkout-iframe").attr("src", $(this).attr("href"));
      e.preventDefault();
  });
});