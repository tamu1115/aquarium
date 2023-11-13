// window.loadで読み込みが終わった2秒後にclassAddクラス付与

window.onload = () => {
    setTimeout(lodingClear,2000)
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
$('#menu_list').click(() => {
    $('.openbtn').toggleClass('menu_active');
    $('.mask').toggleClass('mask_active');
    $('.head_box').toggleClass('head_box_active');

});



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
    arrows: true,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
    speed: 3000,//スライドのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    pauseOnHover: true,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
    pauseOnFocus: true,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
    cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    centerMode: true, // centerModeを有効にする
    responsive: [
        // {
        //     breakpoint: 769,//モニターの横幅が769px以下の見せ方
        //     settings: {
        //         slidesToShow: 2,//スライドを画面に2枚見せる
        //     }
        // }
        // ,
        {
            breakpoint: 430,//モニターの横幅が430px以下の見せ方
            settings: {
                slidesToShow: 2,//スライドを画面に1.5枚見せる
            }
        }
    ]
});

