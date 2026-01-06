フィーチャ('Login page');

シナリオ('ログイン画面を開いて表示を確認する',  ({ 私は }) => {
    私は.amOnPage('/index.html');
    私は.see('Login');
    私は.seeInTitle('CodeceptJS Practice');
});

シナリオ('ログイン操作を行う',  ({ 私は }) => {
    私は.ページを移動する('/index.html');
    私は.フィールドに入力する('Email', 'test@example.com');
    私は.フィールドに入力する('Password', 'password123');
    私は.クリックする('Login');
    // TODO: waitForElement上手く動かない
    // 私は.要素を待つ('#message', 4);
    私は.待つ(5);
    私は.テキストがあることを確認する('Welcome!');
}).tag('@form').tag('important');

Scenario('ログイン成功', ({ ログインページ }) => {
  ログインページ.open();
  ログインページ.login('test@example.com', 'password123');
  // pause();
  ログインページ.seeWelcomeMessage();
}).tag('@form').tag('important');
