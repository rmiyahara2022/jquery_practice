$(document).ready(function() {
    //読み込み時に文字色を変える処理
    $("#q1").css("color","#00a960");
    // ボタンがクリックされたときの処理
    $("#q1").on("click", function() {});
});

$(document).ready(function() {
    // ボタンがクリックされたときの処理
    $("#q2").on("click", function() {
        // クリック時に色を変える処理
        $("#q2").css("background-color","#feeeed");
    });
});

$(document).ready(function() {
    // ボタンがクリックされたときの処理
    $("#q3").on("click", function() {
        // クリック時にフェードアウトする処理
        $("#q3").fadeOut(3000);
    });
});

$(document).ready(function() {
    // ボタンがクリックされたときの処理
    $("#q4").on("click", function() {
        // クリック時にサイズを拡張する処理
        $("#q4").css({transform: "scale(1.5)"});
    });
});

$(document).ready(function() {
    // ボタンがクリックされたときの処理
    $("#q5").on("click", function() {
        // クリック時に要素を前に追加する処理
        $("#q5").prepend("DOMの前");
        // クリック時に要素を後に追加する処理
        $("#q5").append("DOMの後");
    });
});

$(document).ready(function() {
    // ボタンがクリックされたときの処理
    $("#q6").on("click", function() {
        // クリック時に移動する処理
        $("#q6").animate({
            // 上及び右に余白を追加することで要素を左下に移動させる
            marginTop: 100,
            marginLeft: 100,
        },
        // アニメーションの開始から終了に2秒かける
        {duration: 2000});
    });
});

$(document).ready(function() {
    // ボタンがクリックされたときの処理
    $("#q7").on("click", function() {
        // 変数element_q7を宣言
        // q7の要素情報を取得・処理可能な状態にしたうえでget(0)（q7そのものを指定）で取得
        // 変数elementに取得したオブジェクトq7の情報を代入する
        let element_q7 = $(this).get(0);
        // コンソールに変数element_q7の情報を表示
        console.log(element_q7);
    });
});

$(document).ready(function() {
    // ホバー時の処理
    $("#q8").on({
        // ホバー時（マウスカーソルをボタン上に置いた際）に要素を大きくする
        mouseenter : function() {
          $("#q8").css({transform: "scale(1.5)"});
        },
        // ホバー時からマウスカーソルを外した際に要素の大きさを元に戻す
        mouseleave : function(){
          $("#q8").css({transform: "scale(1)"});
        }
    });
    // ボタンがクリックされたときの処理
    $("#q8").on("click", function() {});
});

$(document).ready(function() {
    // 変数element_q9を宣言し、#q9の配列を代入する
    let element_q9 = $("#q9 li");
    // element_q9（#q9の配列）がクリックされた時の処理
    element_q9.on("click", function() {
        // 変数index_q9を宣言しelement_q9がクリックされた際のクリックされた配列の要素番号を代入する
        let index_q9 = element_q9.index(this);
        // index_q9をアラート表示する
        alert(index_q9);
    });
});

$(document).ready(function() {
    // 変数element_q10を宣言し、#q10の配列を代入する
    let element_q10 = $("#q10 li");
    // element_q10（#q10の配列）がクリックされた時の処理
    element_q10.on("click", function() {
        // 変数index_q10を宣言しelement_q10がクリックされた際のクリックされた配列の要素番号を代入する
        let index_q10 = element_q10.index(this);
        // 変数element_q11を宣言しq11[index_q10]のオブジェクトを代入する
        let element_q11 = $("#q11 li").eq(index_q10);
        // element_q11のフォントサイズを1.5倍にする
        element_q11.css('font-size', '150%');
    });
});

