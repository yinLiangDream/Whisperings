import { WhisperingsPage } from './app.po';

describe('whisperings App', () => {
  let page: WhisperingsPage;

  beforeEach(() => {
    page = new WhisperingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
