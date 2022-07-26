$(function () {
  $('.ham_btn').on('click', function () {
    $('.ham_btn').toggleClass('close');
    $('.header_nav_wrapper').toggleClass('fade');
    $('body').toggleClass('noscroll');
  });
});




$(function () {
  // ローダー終了
  function end_loader() {
    $('.loader').fadeOut(800);
  }
  // テキスト表示
  function show_txt() {
    $('.loader .txt').fadeIn(400);
  }
  // テキスト非表示
  function hide_txt() {
    $('.loader .txt').fadeOut(400);
  }
 
  // タイマー処理
  $(window).on('load', function () {
    // 処理
    setTimeout(function () {
      show_txt();
    }, 1000)
    // 処理
    setTimeout(function () {
      hide_txt();
    }, 3500)
    // 処理
    setTimeout(function () {
      end_loader();
    }, 4500)
  })
})


$('.top_visual_slide').slick({
  autoplaySpeed: 2700, 
  speed: 1500, 
  autoplay: true, 
  infinite: true, 
  slideToShow: 1, 
  slideToScroll: 1, 
  arrows: true, 
  prevArrow: '<div class="slick_prev"></div>', 
  nextArrow: '<div class="slick_next"></div>', 
  dots: true, 
  pauseOnFocus: false, 
  pauseOnHover: false, 
  pauseOnDotsHover: false, 

  responsive: [{
    breakpoint: 769, 
    settings: {
      slidesToShow: 2,
      speed: 600,
    },
    },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '0%',
    },
  },
  ]
});



function fadeAnime(){

  // ふわっ
  $('.fadeUp_item').each(function(){ //クラス名がついた複数の要素に
    var elemPos = $(this).offset().top-50;//要素より50px上までの?距離を取得
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpを追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpを外す
    }
    });
}

// 画面をスクロールをしたら動かす
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合

// 画面が読み込まれたらすぐに動かしたい場合の記述
  // $(window).on('load', function(){
    // fadeAnime();/* アニメーション用の関数を呼ぶ*/
  // });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述





