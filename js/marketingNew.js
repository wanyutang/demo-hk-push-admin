/* eslint-disable semi */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();

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

  $('div.externalURL').hide();
  $('div.textContent').show();
  $('div.imgURL').hide();
  $('div.msgConTypeCode').hide();
  sendConTypes();
  $('div.pushDate').show();
  $('.tempQuery').load('tempQuery.html');

  // 發送對象
  var paramB = ['#marketingFile'];
  var paramC = ['#subscriptionCategory', '#age', '#area', '#gender'];
  $('#radio-push-1').on('click', function () {
    disSendTo(paramB, false);
    disSendTo(paramC, false);
    $('#memberDesc').addClass('tpi-text-blue__hidden').removeClass('tpi-text-blue');
  });
  $('#radio-push-2').on('click', function () {
    disSendTo(paramB, true);
    disSendTo(paramC, false);
    $('#memberDesc').addClass('tpi-text-blue__hidden').removeClass('tpi-text-blue');
  });
  $('#radio-push-3').on('click', function () {
    disSendTo(paramB, false);
    disSendTo(paramC, true);
    $('#memberDesc').addClass('tpi-text-blue').removeClass('tpi-text-blue__hidden');
  });

  $('div.pushTime').hide();
  sendTimes();
  $('div.reason').hide();
  reasonTip();

  muteModeDisable();

});

function disSendTo (param, className) {
  if (className) {
    for (var i = 0; i < param.length; i++) {
      $(param[i]).css('display', 'flex');
      $(param[i]).addClass('tpi-form__row').removeClass('tpi-form__row--hidden');
    }
  } else {
    for (var j = 0; j < param.length; j++) {
      $(param[j]).hide();
    }
  }
}

function sendConTypes () {
  if ($('input[name="msgConType"]')[1].checked === true) {
    $('div.msgConTypeCode').show();
  } else {
    $('div.msgConTypeCode').hide();
  }
}
// eslint-disable-next-line no-unused-vars
function displayModal (displayModal) {
  $('#dialog-message').modal(displayModal);
}

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

function reasonTip () {
  if ($('input[name="reasonSend"]')[1].checked === true) {
    $('div.reason').show();
  } else {
    $('div.reason').hide();
  }
}

function muteModeDisable() {

	if($('#push-2')[0].checked){
		$('#radio-mute1').removeAttr('onclick');
		$('#radio-mute2').removeAttr('onclick');
	}else{
		$('#radio-mute1').attr('onclick','return false');
		$('#radio-mute2').attr('onclick','return false');
		$('#radio-mute2')[0].checked = true;
  }
  
  $('#push-2').on('click', function () {
    $('#radio-mute1').removeAttr('onclick');
		$('#radio-mute2').removeAttr('onclick');
  })

  $('#push-1').on('click', function () {
    $('#radio-mute1').attr('onclick','return false');
		$('#radio-mute2').attr('onclick','return false');
		$('#radio-mute2')[0].checked = true;
  })
	
}

function tempClick() {
    $('#title').attr('value','版本更新通知');
    $('#pushText').val('版本已更新，請記得更新系統。');
    $('#dialog-message').modal('hide');
}

