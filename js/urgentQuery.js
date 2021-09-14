/* eslint-disable semi */
$(function () {
  $('div[class^=tpi-selectric]').find('select').selectric({
    arrowButtonMarkup: '<span class="arrow"></span>',
    maxHeight: 250
  });
  $('#pushDate').datepicker({
    language: 'zh-TW',
    format: 'yyyy/mm/dd',
    clearBtn: true,
    orientation: 'bottom auto',
    autoclose: true
  });

  $('[data-toggle="tooltip"]').tooltip();
});
