$(document).ready(function() {
  const select = $('.select-box');
  const list_item = $('.food-list li');

// セレクトボックスの内容が変更された場合の処理
  select.on('change', function() {
    // 変数selectedCategoryを宣言し、選択されたselectのvalueを代入する
    const selectedCategory = select.val();
    
    // food-listの配列の要素数だけループする
    for (let i = 0; i < list_item.length; ++i) {
      // 変数categoryTypeを宣言し、配列番号が入れ子iの時のlist_itemのdata-category-typeを代入する
      const categoryType = $(list_item[i]).data('category-type');
      
      // selectedCategoryが全てになっている、あるいは現在位置のcategoryTypeがselectedCategoryと一致している場合の処理
      if (selectedCategory === 'all' || selectedCategory === categoryType) {
        // 要素を表示
        $(list_item[i]).show();
      // 選択されたものがすべてではなく、カテゴリも一致しない場合
      } else {
         // 要素を非表示
        $(list_item[i]).hide();
      }
    }
  });
});

/* $(document).ready(function() {
  const select = $('.select-box');
  const list_item = $('.food-list li');

  select.on('change', function() {
    // 変数selectedCategoryを宣言し、選択されたselectのvalueを代入する
    const selectedCategory = select.val();
    
    // eachを使用した場合、配列形式のセットを用いるため配列番号を指定する必要がない
    list_item.each(function() {
      // 変数categoryTypeを宣言し、list_itemのdata-category-typeを代入する
      const categoryType = $(this).data('category-type');

      // selectedCategoryが全てになっている、あるいは現在位置のcategoryTypeがselectedCategoryと一致している場合の処理
      if (selectedCategory === 'all' || selectedCategory === categoryType) {
        // 要素を表示
        $(this).show();
      // 選択されたものがすべてではなく、カテゴリも一致しない場合
      } else {
        // 要素を非表示
        $(this).hide();
      }
    });
  });
}); */