フィーチャ('Login page');

シナリオ('ログイン画面を開いて表示を確認する',  ({ 私は }) => {
    私は.amOnPage('/index.html');
    私は.see('Login');
    私は.seeInTitle('CodeceptJS Practice');
});
