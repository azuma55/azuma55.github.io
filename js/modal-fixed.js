$(function() {
	$('.modal-syncer').click(function() {
		$('body').addClass('fixed');//背景固定
		return false;//<a>を無効化
	});

	$('.button-link').on('click.close-model',function() {
		$('body').removeClass('fixed');//背景固定を解除
		return false;//<a>を無効化
	});
  });