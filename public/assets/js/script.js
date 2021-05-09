// ハンバーガーメニュー
$(function() {
    $('#js-buttonHamburger').click(function() {
        $('body').toggleClass('is-drawerActive');

        if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', true);
        } else {
            $(this).attr('aria-expanded', false);
        }
    });
});

// modal
$(function() {
    var scrollPos; //topからのスクロール位置
    $('.js-modal-open').on('click', function() {
        scrollPos = $(window).scrollTop(); //トップからのスクロール位置を格納
        $('.js-modal').fadeIn(); //モーダルフェードイン
        $('body').addClass('fixed').css({ top: -scrollPos }); //背景固定
        return false; //<a>を無効化
    });
    $('.js-modal-close').on('click', function() {
        $('.js-modal').fadeOut(); //モーダルをフェードアウト
        $('body').removeClass('fixed').css({ top: 0 }); //背景固定を解除
        $(window).scrollTop(scrollPos); //元の位置までスクロール
        return false; //<a>を無効化
    });
});
// スムーススクロール
$(function() {
    // #で始まるa要素をクリックした場合に処理
    $('a[href^="#"]').click(function() {
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = 0;
        // スクロールの速度（ミリ秒）
        var speed = 400;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href = $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});
$(window).on('scroll', function() {
    if (400 < $(this).scrollTop()) {
        $('.header').addClass('change-color');
         } else {
            $('.header').removeClass('change-color');
             }
});