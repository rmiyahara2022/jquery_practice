$(document).ready(function () {
    const submit = $('.btn__submit');

    submit.on('click', function() {
        // 名字
        console.log('名字');
        console.log($('#family__name').val());

        // 名前
        console.log('名前');
        console.log($('#given__name').val());

        // 生年月日
        // 変数を3つ宣言し、年月日それぞれで選択された値を代入する
        const yearValue = $('[name="year"]').find(':selected').val(),
        monthValue = $('[name="month"]').find(':selected').val(),
        dayValue = $('[name="day"]').find(':selected').val();
        console.log('生年月日');
        // 年月日がそれぞれ入力されている場合はその値を、されていない場合はnullを表示する
        console.log(
            (yearValue ? yearValue : "null") + "年" +
            (monthValue ? monthValue : "null") + "月" +
            (dayValue ? dayValue : "null") + "日"
        );

        // 性別
        console.log('性別');
        console.log($('[name="gender"]:checked').val());

        // 職業
        console.log('職業');
        console.log($('[name="work"]').val());

        // アカウント名
        console.log('アカウント名');
        console.log($('#account__name').val());

        // メールアドレス
        console.log('メールアドレス');
        console.log($('#email').val());

        // パスワード
        console.log('パスワード');
        console.log($('#password').val());

        // 確認用パスワード
        console.log('確認用パスワード');
        console.log($('#duplication__password').val());

        // 住所
        console.log('住所');
        console.log($('#address').val());

        // 電話番号
        console.log('電話番号');
        console.log($('#tel').val());

        // 購読情報
        console.log('購読情報');
        // 購買情報の項目の中で選択されているものを表示する繰り返し処理
        $('[name="subscription"]:checked').each(function() {
            console.log($(this).val());
        });
    });
});
