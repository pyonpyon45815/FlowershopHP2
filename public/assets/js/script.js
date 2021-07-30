// ハンバーガーメニュー
$('.c-drawerToggle').click(function() {
    $(this).toggleClass('open');
});


// modal
$(function() {
    var scrollPos; //topからのスクロール位置
    $('.js-modal-open').click(function() {
        scrollPos = $(window).scrollTop(); //トップからのスクロール位置を格納
        $('.js-modal').fadeIn(); //モーダルフェードイン
        $('body').addClass('fixed').css({ top: -scrollPos }); //背景固定
        return false; //<a>を無効化
    });
    $('.js-modal-close').click(function() {
        $('.js-modal').fadeOut(); //モーダルをフェードアウト
        $('body').removeClass('fixed').css({ top: 0 }); //背景固定を解除
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

// スムーススクロール
$(function() {
    // #で始まるa要素をクリックした場合に処理
    $('a[href^="#"]').click(function() {
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = -140;
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

// トップページ戻るボタン
/*$(window).scroll(function() {
    var now = $(window).scrollTop();
    if (now > 200) {
        $('.pagetop').fadeIn("slow");
    } else {
        $('.pagetop').fadeOut('slow');
    }
});
*/

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