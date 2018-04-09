import { ImgSelector02Page } from './app.po';

describe('img-selector02 App', () => {
  let page: ImgSelector02Page;

  beforeEach(() => {
    page = new ImgSelector02Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
