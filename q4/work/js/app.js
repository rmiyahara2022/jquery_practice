$(document).ready(function() {
  const nav = $(".nav-item")
  const des = $(".description li")

  // タブをクリックした時の処理
  nav.on('click', function() {
    // クリックされたタブの配列番号を取得
    const index = $(this).index();

    // すべてのコンテンツを非表示にする（display: noneを適用）
    des.addClass('dropdwn-menu');

    // クリックされたタブに対応するコンテンツを表示（display: noneの適用を除去）
    des.eq(index).removeClass('dropdwn-menu');
  });
});
