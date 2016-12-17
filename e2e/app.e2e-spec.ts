import { ScssProject2Page } from './app.po';

describe('scss-project-2 App', function() {
  let page: ScssProject2Page;

  beforeEach(() => {
    page = new ScssProject2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
