// ボタンと入力欄を取得
const btn = document.getElementById('openBtn');
const input = document.getElementById('countInput');

// クリック時の処理を登録
btn.addEventListener('click', () => {
  // 入力値を整数として取得
  const count = parseInt(input.value, 10);

  // 正の整数かどうかチェック
  if (isNaN(count) || count < 1) {
    alert('1以上の整数を入力してください');
    return;
  }

  // 指定回数だけ新しいタブを開く
  for (let i = 0; i < count; i++) {
    window.open('', '_blank');
  }
});
