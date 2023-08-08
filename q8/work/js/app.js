$(document).ready(function() {
  // 検索ボタン・リセットボタンの宣言
  const search = $('.search-btn');
  const reset = $('.reset-btn');
  // API呼び出しの際に使用するページカウントの宣言
  let pageCount = 1;
  // 直近の検索ワードを格納する変数の宣言
  let latestSearch = "";


  // API通信が成功したときの処理
  function displayResult(result) { 
    // 各リストを格納するための変数を宣言
    const listContainer = $('.lists');
    if (!result[0].items || result.length ===0 ) {
      // 検索結果がない場合のメッセージ
      $('.lists').before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索してください。</div>');
    } else {
      // 検索結果がある場合、配列の最初から情報を取得しリストアイテムを作成してリストに追加
      $.each(result[0].items, function(index, item) {
        // リスト内の項目を設定
        // liタグ内にcssで設定されたlists-itemクラスを追加
        // liタグ内のdivタグ内にcssで設定されたlist-innerクラスを追加
        // タイトル・著者・出版社情報について、値が取得できる場合はその値を表示し、できない場合は不明と表示する
        // 書籍情報を表示し、ciniiのページにリンクさせる
        const listItem = `
          <li class="lists-item">
            <div class="list-inner">
             <p>タイトル：${item.title ? item.title : "タイトル不明"}</p>
              <p>著者：${item["dc:creator"] ? item["dc:creator"] : "著者不明"}</p>
              <p>出版社：${item["dc:publisher"] ? item["dc:publisher"]: "出版社不明"}</p>
              <a href="${item.link["@id"]}" target="_blank">書籍情報</a>
            </div>
          </li>
        `;
        // listitemをulタグ内に追加していく、連続して同じ検索ワードを入力した場合は新しい結果が上にくる
        listContainer.prepend(listItem);
      })
    }
  }
  
  // API通信が失敗したときの処理
  function displayError(err){
    $(".lists").empty(); // 検索結果のリストをクリア
    $(".message").remove(); // 既存のエラーメッセージを削除
    // HTTPステータスコード 0 Server error: 通信エラー
    if (0 === err.status) {
        $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続を確認して再試行してください。</div>');
    } 
    // HTTPステータスコード 400 Bad request: 何らかのクライアント側のエラー
    else if (400 === err.status) {
        $(".lists").before('<div class="message">有効な検索キーワードではありません。<br>1文字以上で再検索してください。</div>');
    }
    // それ以外のステータスコード（予期せぬエラー）
    else {
        $(".lists").before('<div class="message">予期しないエラーが発生しました。<br>再読み込みを行ってください。</div>');
    }
  }

  // 検索ボタンを押したときの処理
  search.on('click', function() {
      // 前回のエラーメッセージが存在する場合はそれを削除
  $('.message').remove();
  // ボタンクリック時の検索ワードを格納する変数を宣言
  let searchWord = $('#search-input').val().trim();
  // 検索ワードが未入力の場合アラート表示
  if (searchWord === '') {
    alert('検索ワードを入力してください');
    return;
  }
  // ボタンクリック時の検索ワードが直近の検索ワードと異なる場合はページカウントを1に設定
  if (searchWord !== latestSearch) {
    pageCount = 1;
    $(".lists").empty();
    latestSearch = searchWord;
  } else {
      pageCount++;
  }
    // API呼び出し
    // ボタンクリック時の検索ワードと現時点のページカウントをもとに結果を取得
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    };
    // 結果が存在する場合はdisplayResult、存在しない場合はdisplayErrorを呼び出し
    $.ajax(settings).done(function (response) {
      const result = response['@graph'];
      console.log(result);
      displayResult(result);
    }).fail(function (err) {
      displayError(err);
    });
  });

  // リセットボタンを押したときの処理
  reset.on('click', function() {
    // 検索窓内の検索ワードをクリア
    $('#search-input').val('');
    // 検索結果のリストをクリア
    $('.lists').empty();
    // 前回のエラーメッセージが存在する場合はそれを削除
    $('.message').remove();
  });
});



// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });