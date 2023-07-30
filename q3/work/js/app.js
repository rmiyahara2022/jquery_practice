$(document).ready(function() {
  // 変数hamを宣言し.drawer_buttonをオブジェクトとして代入
  const ham = $('.drawer_button');
  // 変数navを宣言し.drawer_nav_wrapperをオブジェクトとして代入
  const nav = $('.drawer_nav_wrapper');
  // 変数bgを宣言し.drawer_bgをオブジェクトとして代入
  const bg = $('.drawer_bg');

  // ハンバーガーメニューがクリックされた際の処理
  ham.on('click', function () {
    // hamが選択されている状態の切り替え
    ham.toggleClass('active');
    // navの表示・非表示の切り替え
    nav.toggleClass('open');
    // navの表示・非表示に連動しbgの表示・非表示を切り替え
    bg.fadeToggle();
  });
});