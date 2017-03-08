import { MplsCaucusAppPage } from './app.po';

describe('mpls-caucus-app App', () => {
  let page: MplsCaucusAppPage;

  beforeEach(() => {
    page = new MplsCaucusAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
