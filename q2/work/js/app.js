$(document).ready(function() {
    const open = $('.modal_open_button'),
    modal = $('.modal_win'),
    close = $('.c-modal_close');
  
    // 開くボタンをクリックしたらモーダルを表示する
    open.on('click',function(){ 
        modal.fadeIn();
    });
    // 閉じるボタンをクリックしたらモーダルを非表示にする
    close.on('click', function(){
        modal.fadeOut();
    })
});