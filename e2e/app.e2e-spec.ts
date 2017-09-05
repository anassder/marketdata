import { WebMarketDataPage } from './app.po';

describe('web-market-data App', () => {
  let page: WebMarketDataPage;

  beforeEach(() => {
    page = new WebMarketDataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
