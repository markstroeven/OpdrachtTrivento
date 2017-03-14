import { TriventoAppPage } from './app.po';

describe('trivento-app App', () => {
  let page: TriventoAppPage;

  beforeEach(() => {
    page = new TriventoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
