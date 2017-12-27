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