/* eslint-disable semi */
$(function () {
  $('div[class^=tpi-selectric]').find('select').selectric({
    arrowButtonMarkup: '<span class="arrow"></span>',
    maxHeight: 250
  });
  $('#startDate').datepicker({
    language: 'zh-TW',
    format: 'yyyy/mm/dd',
    clearBtn: true,
    orientation: 'bottom auto',
    autoclose: true
  });
  $('#endDate').datepicker({
    language: 'zh-TW',
    format: 'yyyy/mm/dd',
    clearBtn: true,
    orientation: 'bottom auto',
    autoclose: true
  });
});
