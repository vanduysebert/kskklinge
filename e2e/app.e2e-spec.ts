import { KskklingePage } from './app.po';

describe('kskklinge App', function() {
  let page: KskklingePage;

  beforeEach(() => {
    page = new KskklingePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
