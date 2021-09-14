var hostCount = 1;
$(function () {
    $('.APPQuery').load('channelAPP.html');
    $('.ApiQuery').load('channelApi.html');

    $('[data-toggle="tooltip"]').tooltip();

    $('#select-demo-1').selectric({
        arrowButtonMarkup: '<span class="arrow"></span>',
        maxHeight: 250
    });

});

//綁定APP
function displayModalAPP(displayModal) {
    $('#dialog-app').modal(displayModal);
}
//APP選擇
function appClick() {
    if ($("#appchoose").children() !== '') {
        $("#appchoose").children().remove();
    }
    
    applist = $("input:checkbox[name='appCheckbox']:checked").map(function () {
        return $(this).val()
    }).get().join('<br>');
    node = '<div id="showAPP">' + applist + '</div>'
    $("#appchoose").append(node);
    $('#dialog-app').modal('hide');
}
//app全選
function allAppCheck() {
    var el = document.getElementsByName('appCheckbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
      $("input[name='appCheckbox']").prop("checked", true);
    }
}
//app取消全選
function falseAppCheck() {
    var el = document.getElementsByName('appCheckbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
      $("input[name='appCheckbox']").prop("checked", false);
    }
}

//綁定API
function displayModalApi(displayModal) {
    $('#dialog-api').modal(displayModal);
}
//API選擇
function apiClick() {
    if ($("#apichoose").children() !== '') {
        $("#apichoose").children().remove();
    }
    
    applist = $("input:checkbox[name='apiCheckbox']:checked").map(function () {
        return $(this).val()
    }).get().join('<br>');
    node = '<div id="showAPI">' + applist + '</div>'
    $("#apichoose").append(node);
    $('#dialog-api').modal('hide');
}
//api全選
function allApiCheck() {
    var el = document.getElementsByName('apiCheckbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
      $("input[name='apiCheckbox']").prop("checked", true);
    }
}
//api取消全選
function falseApiCheck() {
    var el = document.getElementsByName('apiCheckbox');
    var len = el.length;
    for (var i = 0; i < len; i++) {
      $("input[name='apiCheckbox']").prop("checked", false);
    }
}

//刪除 host ip
function removeIP() {
    $('form').on('click', '.removeip', function () {
      $(this).parent().parent().remove();
    });
}

//新增ip host
function addHost() {
    hostCount++;
    $node =
      '<div class="tpi-input tpi-radio" style="display: flex;margin-bottom: 10px;">'+
      '<div class="tpi-input__inner-flex"><input type="text" class="tpi-input__other-input" '+
      'name="host'+ hostCount +'" id="host'+ hostCount +'" placeholder="請填入host" autocomplete="off" value="" />'+
       '<input type="text" class="tpi-input__other-input" name="ip' + hostCount + '" id="ip' + hostCount + '" placeholder="請填入IP" '+
       'autocomplete="off" value="" /></div><div class="tpi-radio__inner"><div class="tpi-radio__item">'+
       '<input type="radio" name="hostIP'+ hostCount + '" id="radio-ip-1" value="停用" checked />'+
       '<div class="tpi-radio__mark"></div><label for="ipUseStatus-1">停用</label></div>'+
       '<div class="tpi-radio__item"><input type="radio" name="hostIP'+ hostCount + '" id="radio-ip-2" value="啟用"/>'+
       '<div class="tpi-radio__mark"></div><label for="ipUseStatus-2">啟用</label></div></div>'+
       '<div class="tpi-form__button-container"><button type="button" class="tpi-button '+
       'tpi-button--delete removeip" onclick="removeIP()">刪除</button></div></div>'

    $("#showBlock").append($node);
}

//修改密碼
function changeChannel() {
    $('#pwchange').attr('hidden','true');
    $('#pwwrite').removeAttr('hidden');
}

//取消密碼
function cancelChannel() {
    $('#pwwrite').attr('hidden','true');
    $('#pwchange').removeAttr('hidden');
}