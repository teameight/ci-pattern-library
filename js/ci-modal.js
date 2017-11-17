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

jQuery(document).ready(function () {
  var $page = jQuery('#smooth-state'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 250, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
          	jQuery('.ci-checkout-modal').delay(400).animate({ scrollTop: 0 }, 200);
          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');

});