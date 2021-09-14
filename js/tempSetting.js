/* eslint-disable semi */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('div[class^=tpi-selectric]').find('select').selectric({
    arrowButtonMarkup: '<span class="arrow"></span>',
    maxHeight: 250
  });
});
