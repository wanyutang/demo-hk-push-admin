/* eslint-disable semi */
window.common = (function () {
  var checkIsClickOuter = function (container, target) {
    const containerDom = document.querySelector(container);
    if (containerDom) {
      return !containerDom.contains(target);
    } else {
      return true;
    }
  }
  var handleClickMenuOuter = function (e) {
    if (checkIsClickOuter('.menu', e.target)) {
      e.stopPropagation();
      closeSubMenu();
    }
  }
  var closeSubMenu = function () {
    var $subMenu = $('.menu__sub-container');
    $('.menu__item').removeClass('menu__item--active');
    $subMenu.removeClass('menu__sub-container--active');
    $(document).off('click', handleClickMenuOuter);
    closePageBlock();
  }
  var openSubMenuByCategory = function ($targetSubMenu) {
    var $menu = $('.menu');
    var $subMenu = $('.menu__sub-container');
    $menu.find('.menu__item--active').removeClass('menu__item--active');

    if ($targetSubMenu && $targetSubMenu.length > 0) {
      if ($targetSubMenu.hasClass('menu__sub-container--active')) {
        closeSubMenu();
      } else {
        if ($subMenu.hasClass('menu__sub-container--active')) {
          closeSubMenu();
        }

        openPageBlock();
        var $closeSubMenu = $subMenu.find('.menu__sub-container--active');
        $targetSubMenu.parent().find('.menu__item').addClass('menu__item--active');
        $closeSubMenu.removeClass('menu__sub-container--active');
        $targetSubMenu.addClass('menu__sub-container--active');
        $(document).on('click', handleClickMenuOuter);
      }
    }
  }
  var openPageBlock = function () {
    var $target = $('.page-container');
    $target.addClass('page-container--block');
  }
  var closePageBlock = function () {
    var $target = $('.page-container');
    $target.removeClass('page-container--block');
  }

  return {
    checkIsClickOuter: checkIsClickOuter,
    handleClickMenuOuter: handleClickMenuOuter,
    closeSubMenu: closeSubMenu,
    openSubMenuByCategory: openSubMenuByCategory,
    openPageBlock: openPageBlock,
    closePageBlock: closePageBlock
  }
})();

// document ready
$(function () {
  // 主選單選項 click 事件處理：開啟/關閉子選單
  $(document).on('click', '.menu__item', function (e) {
    e.preventDefault();
    var $subMenu = $(this).find('~ .menu__sub-container');
    if ($subMenu && $subMenu.length > 0) {
      // 開關子選單
      window.common.openSubMenuByCategory($subMenu);
    } else {
      // 關閉子選單
      window.common.closeSubMenu();

      // 沒有子選單的時候會取得 href 與 target 設定進行轉址或開啟視窗
      var attrHref = $(this).attr('href');
      var attrTarget = $(this).attr('target') || '_blank'
      if (attrHref.indexOf('#') !== 0 && attrHref.length > 1) {
        switch (attrTarget) {
          case '_blank':
            window.open(attrHref);
            break;
          case '_self':
            window.location.href = attrHref;
            break;
        }
      }
    }
  });
});
