$(function(){
        // #で始まるリンクをクリックしたら実行されます
        $('a[href^="#"]').click(function() {
          // スクロールの速度
          var speed = 250; // ミリ秒で記述
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var headerHight = 80; //ヘッダの高さ
          var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
      });