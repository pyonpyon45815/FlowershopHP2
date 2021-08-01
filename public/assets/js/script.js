//テスト
$('#page-link a[href*="#"]').click(function() {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top - 90; //idの上部の距離を取得 -90は基準となる移動先から-90pxずらして表示する意味
    $('body,html').animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
});
// ハンバーガーメニュー&モーダルセット
$(function() {
    $('.c-drawerToggle').click(function() {
        $(this).toggleClass('open'); // ハンバーガーメニュー→✖
        $('.modal').fadeToggle(1000); // モーダル表示⇔ 非表示
        $('body').toggleClass('fixed'); //背景固定
        return false;
    });
    $('.js-modal-close').click(function() {
        $('.modal').fadeOut(1000); // モーダル非表示
        $('.c-drawerToggle').removeClass('open'); //✖→ハンバーガーメニュー
        $('body').removeClass('fixed'); //背景固定解除
        return false;
    });
});





// contactModal
$(function() {
    var scrollPos; //topからのスクロール位置
    $('.js-contactModal-open').click(function() {
        $('.c-image__headerLogo').addClass('activeModal'); // モーダル時にヘッダーのロゴ隠す
        scrollPos = $(window).scrollTop(); //トップからのスクロール位置を格納
        $('.js-contactModal').fadeIn(); //モーダルフェードイン
        $('body').addClass('fixed').css({ top: -scrollPos }); //背景固定
        return false; //<a>を無効化
    });
    $('.js-contactModal-close').click(function() {
        $('.c-image__headerLogo').removeClass('activeModal'); // モーダル閉時にヘッダーのロゴ表示
        $('.js-contactModal').fadeOut(); //モーダルをフェードアウト
        $('body').removeClass('fixed').css({ top: 0 }); //背景固定を解除
        $(window).scrollTop(scrollPos); //元の位置までスクロール
        return false; //<a>を無効化
    });
});









// スクロールからのheader固定
$(function() {
    var blackHeader = $('.l-header');
    //スクロールが100に達したらヘッダ色変更
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            blackHeader.addClass('active');
        } else {
            blackHeader.removeClass('active');
        }
    });
});
// スクロールヘッダー表示↔非表示
var startPos = 0,
    winScrollTop = 0;
$(window).scroll(function() {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('.l-header').addClass('hide');
    } else {
        $('.l-header').removeClass('hide');
    }
    startPos = winScrollTop;
});


//トップペー戻るボタン
$(function() {
    $('.pagetop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});



// 横スライダー
function sliderSetting() {
    var width = $(window).width();
    if (width <= 1279) {
        $('.slider').not('.slick-initialized').slick();
    } else {
        $('.slider.slick-initialized').slick('unslick');
    }
}
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,

});
// 初期表示時の実行
sliderSetting();

// リサイズ時の実行
$(window).resize(function() {
    sliderSetting();
});