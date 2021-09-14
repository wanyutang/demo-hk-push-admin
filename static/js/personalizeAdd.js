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
  $('div.pushTime').hide();
  sendTimes();
});

function sendTimes () {
  if ($('input[name="radio-time"]')[0].checked === true) {
    $('div.pushTime').hide();
    $('div.pushDate').hide();
  } else if ($('input[name="radio-time"]')[1].checked === true) {
    $('div.pushTime').show();
    $('div.pushDate').hide();
  } else {
    $('div.pushTime').hide();
    $('div.pushDate').show();
  }
}
