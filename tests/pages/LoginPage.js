const { I } = inject();

module.exports = {
  fields: {
    email: 'Email',
    password: 'Password',
  },

  buttons: {
    login: '[data-testid="login-button"]',
  },

  messages: {
    welcome: '[data-testid="welcome-message"]',
  },

  open() {
    I.amOnPage('/index.html');
  },

  login(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.login);
  },

  seeWelcomeMessage() {
    // I.waitForElement(this.messages.welcome, 5);
    I.wait(5);
    I.see('Welcome!');
  },
};
