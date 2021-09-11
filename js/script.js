var image = document.querySelectorAll('.parallax');
new simpleParallax(image, {
    scale: 1.18  // default: 1.2(←やや拡大しすぎ)
});


// プライバシーポリシーのモーダル
$(function(){
    $('#js-modal-open').on('click',function(){
        $('#js-modal').fadeIn();
        return false;
    });
    $('#js-modal-close').on('click',function(){
        $('#js-modal').fadeOut();
        return false;
    });
    $('#js-modal-close-icon').on('click',function(){
        $('#js-modal').fadeOut();
        return false;
    });
});


  // form入力チェック
  let $submit = $('#js-form')
  $('#js-form input, #js-form textarea').on('change', function() {
    if (
      $('#js-form input[name="name').val() !== "" &&
      $('#js-form input[name="email').val() !== "" &&
      $('#js-form textarea[name="contact-content').val() !== "" &&
      $('#js-form input[name="privacypolicy').prop('checked') === true
  ) {
      $submit.prop('disabled', false)
      $submit.addClass('-active')
  } else {
      $submit.prop('disabled', true)
      $submit.removeClass('-active')
    }
  });


// ページ内スクロール
// #から始まるURLがクリックされた時
jQuery('a.scroll').click(function() {
    let speed = 300;
    let id = $(this).attr('href');
    // .headerクラスがついた要素の高さを取得
    let header = $('header').innerHeight();
    let target = $( "#" == id ? 'html' : id );
    // トップからの距離からヘッダー分の高さを引く
    let position = $(target).offset().top - header;
    $('html,body').animate(
    {
        scrollTop: position
    },
    speed,
    );
    return false;
});

// pagetopボタン ある程度スクロールしたら表示させる
jQuery(function(){
    $(window).on('load scroll',function(){
        if($(window).scrollTop() > 300){
            $('.floating').fadeIn(300);
        }
        else {
            $('.floating').fadeOut(300);
        }
    });
})