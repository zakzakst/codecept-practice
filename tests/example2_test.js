// NOTE: CLIで指定したファイルのみ実行されることの確認用（※このファイルは「test:example」だと実行されない）
フィーチャ('Login page2');

シナリオ('ログイン画面を開いて表示を確認する2',  ({ 私は }) => {
    私は.amOnPage('/index.html');
    私は.see('Login');
    私は.seeInTitle('CodeceptJS Practice');
});
