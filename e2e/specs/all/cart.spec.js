import LoginScreen from '../../page-objects/login'
import { ROUTES } from '../../../src/utils/Constants'

describe('Cart page', () => {
  beforeEach(() => {
    // Load the url
    browser.url('');
  });

  it('should not be able to go directly to the "Cart" page', ()=>{
    browser.url(ROUTES.CART);

    expect(LoginScreen.waitForIsDisplayed()).toEqual(true, 'Login page was not shown');
  });
});
