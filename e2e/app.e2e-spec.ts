import { Cpslook1Page } from './app.po';

describe('cpslook1 App', () => {
  let page: Cpslook1Page;

  beforeEach(() => {
    page = new Cpslook1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
