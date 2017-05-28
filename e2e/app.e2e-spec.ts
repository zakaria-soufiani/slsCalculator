import { SlsCalculatorPage } from './app.po';

describe('sls-calculator App', () => {
  let page: SlsCalculatorPage;

  beforeEach(() => {
    page = new SlsCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
