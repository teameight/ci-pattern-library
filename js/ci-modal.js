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