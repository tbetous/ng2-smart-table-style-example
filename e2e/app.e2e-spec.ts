import { Ng2SmartTableStyleExamplePage } from './app.po';

describe('ng2-smart-table-style-example App', () => {
  let page: Ng2SmartTableStyleExamplePage;

  beforeEach(() => {
    page = new Ng2SmartTableStyleExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
