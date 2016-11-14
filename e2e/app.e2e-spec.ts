import { PresentationPage } from './app.po';

describe('presentation App', function() {
  let page: PresentationPage;

  beforeEach(() => {
    page = new PresentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
