$(function() {
	var scrollPos;//topからのスクロール位置
	$('.modal-syncer').click(function() {
	  scrollPos = $(window).scrollTop();//topからのスクロール位置を格納
	  $('body').addClass('fixed').css({ top: -scrollPos });//背景固定
	  return false;//<a>を無効化
	});
	$('.button-link').click(function() {
	  $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
	  $(window).scrollTop(scrollPos);//元の位置までスクロール
	  return false;//<a>を無効化
	});
  });