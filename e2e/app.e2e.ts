import { Angular2UserInputPage } from './app.po';

describe('angular2-user-input App', function() {
  let page: Angular2UserInputPage;

  beforeEach(() => {
    page = new Angular2UserInputPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-user-input Works!');
  });
});
