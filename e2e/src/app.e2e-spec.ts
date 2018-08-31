import { AppPage } from './app.po';

import {element, by, browser} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Product App');
  });
 
  it('should add one and two', async () => {
    page.navigateToPath('http://localhost:4200/products/edit/58');
 
    element(by.model('product.name')).sendKeys(1);
    
    await browser.sleep(10000);
    //element(by.model('second')).sendKeys(2);

    //element(by.id('gobutton')).click();

    // expect(element(by.binding('product.name')).getText()).
    //     toEqual('5'); // This is wrong!
  });

});
