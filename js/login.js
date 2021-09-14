/* eslint-disable semi */
$(function () {
  $('#domain').selectric({
    arrowButtonMarkup: '<span class="arrow"></span>',
    maxHeight: 250
  });

  $('#loginhome').on('click', function() {
		window.location.href="todoView.html"
		
	});
});
