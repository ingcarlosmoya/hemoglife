import { HemoglifePage } from './app.po';

describe('hemoglife App', () => {
  let page: HemoglifePage;

  beforeEach(() => {
    page = new HemoglifePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
