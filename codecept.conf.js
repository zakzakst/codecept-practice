const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      // url: 'http://localhost',
      // url: 'http://127.0.0.1:5500',
      url: 'file://' + process.cwd(),
      show: true
    }
  },
  include: {
    '私は': './steps_file.js'
  },
  plugins: {
    htmlReporter: {
      enabled: true
    }
  },
  name: 'codecept-practice',
  translation: 'ja-JP'
}