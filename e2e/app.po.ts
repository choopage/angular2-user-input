export class Angular2UserInputPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-user-input-app p')).getText();
  }
}
