import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToPath(path) {
    return browser.get(path);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
