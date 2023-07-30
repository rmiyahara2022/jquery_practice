$(document).ready(function() {
    // 変数dropdwnを宣言し.dropdwnの直下の子要素をオブジェクトとして代入
    const dropdwn = $('.dropdwn > li');

    dropdwn.on({
        mouseenter : function() {
            // ホバー時にドロップダウンメニューを表示
            // 選択されているドロップダウンメニューの子要素を取得
            // 取得したドロップダウンメニューをスライドダウンで表示
            $(this).find('.dropdwn_menu').slideDown();
        },
        mouseleave : function(){
            // ホバーが外れた時にドロップダウンメニューを非表示
            // ホバーが外れたドロップダウンメニューをスライドアップで非表示
            $(this).find('.dropdwn_menu').slideUp();
        }
    });
});