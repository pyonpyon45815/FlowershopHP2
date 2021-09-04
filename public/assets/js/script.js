// ハンバーガーメニュー&モーダルセット
$(function() {
    var scrollPos; //topからのスクロール位置 
    $('.c-drawerToggle').click(function() {
        scrollPos = $(window).scrollTop(); //トップからのスクロール位置を格納
        $(this).toggleClass('open'); // ハンバーガーメニュー→✖
        $('.modal').fadeToggle(1000); // モーダル表示⇔ 非表示    
        $('body').toggleClass('fixed').css({ top: -scrollPos }); //背景固定 
        $(window).scrollTop(scrollPos); //元の位置までスクロール
        return false; //<a>を無効化
    });
    $('.js-modal-close').click(function() {
        $('.modal').fadeOut(1000); // モーダル非表示
        $('.c-drawerToggle').removeClass('open'); //✖→ハンバーガーメニュー
        $('body').removeClass('fixed').css({ top: 0 }); //背景固定解除
        $(window).scrollTop(scrollPos); //元の位置までスクロール
        return false; //<a>を無効化
    });
});


// contactModal
$(function() {
    var scrollPos; //topからのスクロール位置
    $('.js-contactModal-open').click(function() {
        $('.c-image__headerLogo').addClass('activeModal'); // モーダル時にヘッダーのロゴ隠す
        scrollPos = $(window).scrollTop(); //トップからのスクロール位置を格納
        $('.js-contactModal').fadeIn(); //モーダルフェードイン
        $('.l-header').fadeOut(-100); //ヘッダーメニュー消す
        $('.pagetop').fadeOut(-100); //トップへボタン消す
        $('body').addClass('fixed').css({ top: -scrollPos }); //背景固定
        return false; //<a>を無効化
    });
    $('.js-contactModal-close').click(function() {
        $('.c-image__headerLogo').removeClass('activeModal'); // モーダル閉時にヘッダーのロゴ表示
        $('.js-contactModal').fadeOut(); //モーダルをフェードアウト
        $('.l-header').fadeIn(); //ヘッダーメニュー表示
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
    var blacktop = $('.pagetop'); //ボタン途中からフワッと表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            blacktop.fadeIn(1000); //トップへ戻るとボタン消える
        } else {
            blacktop.fadeOut(1000); //下へスクロールするとボタン表示
        }
    });
});





function sliderSetting() {
    var width = $(window).width();
    if (width <= 1279) {
        $('.slider').not('.slick-initialized').slick();
    } else {
        $('.slider.slick-initialized').slick('unslick');
    }
}


$(".slider").slick({
    speed: 1000,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '10%',

});






// 初期表示時の実行
sliderSetting();

// リサイズ時の実行
$(window).resize(function() {
    sliderSetting();
});