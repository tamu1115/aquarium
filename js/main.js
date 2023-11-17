// window.loadで読み込みが終わった2秒後にclassAddクラス付与

window.onload = () => {
    setTimeout(lodingClear, 1000)
    // const snipper = document.getElementById('loading');
    // snipper.classList.add('loaded')
}
const lodingClear = () => {
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded')
}



// メニュー
$('#target').click(() => {
    $('.openbtn').toggleClass('menu_active');
    $('.mask').toggleClass('mask_active');  //mask追加
    $('.head_box').toggleClass('head_box_active');
});

// 領域外クリックでメニュー画面を閉じる
$('#mask').click(() => {
    $('.openbtn').toggleClass('menu_active');
    $('.mask').toggleClass('mask_active');
    $('.head_box').toggleClass('head_box_active');

});

// メニューのリンクをクリックするとで閉じる
$('#menu_list1').click(() => {
    $('.openbtn').toggleClass('menu_active');
    $('.mask').toggleClass('mask_active');
    $('.head_box').toggleClass('head_box_active');

});
// メニューのリンクをクリックするとで閉じる
$('#menu_list2').click(() => {
    $('.openbtn').toggleClass('menu_active');
    $('.mask').toggleClass('mask_active');
    $('.head_box').toggleClass('head_box_active');

});


// ヘッダー
var headerOffset = $('header').offset().top;

$(window).scroll(function () {
    if ($(this).scrollTop() > headerOffset) {
        $('header').addClass('is-sticky');
    } else {
        $('header').removeClass('is-sticky');
    }
});

const classAdd = () => {
    const snipper = document.getElementById('loading');
    snipper.classList.add('loaded')
}

$('#target').click(() => {
    $('#target').toggleClass('active');
    $('#nav_target').toggleClass('nav_active');
});


// スライドショー

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。 OK
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。 OK
    speed: 1500,//スライドのスピード。初期値は300。
    slidesToShow: 4, //スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    pauseOnHover: true,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
    responsive: [{

        breakpoint: 430,//モニターの横幅がpx以下の見せ方
        settings: {
            slidesToShow: 2,//スライドを画面に2枚見せる
            arrows: false, //左右の矢印はなし
        }
    }
    ]
});
