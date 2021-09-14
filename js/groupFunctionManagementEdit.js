$(function () {
    $('div[class^=tpi-selectric]').find('select').selectric({
        arrowButtonMarkup: '<span class="arrow"></span>',
        maxHeight: 250
    });
    $('.accessAssignment').load('accessAssignment.html');
})