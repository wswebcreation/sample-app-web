import LoginScreen from '../page-objects/login'
import { ROUTES } from '../../src/utils/Constants'

describe('Checkout: Overview', () => {
  beforeEach(() => {
    // Load the url
    browser.url('');
  });

  it('should not be able to go directly to the "Checkout: Overview" page', ()=>{
    browser.url(ROUTES.CHECKOUT_STEP_TWO);

    expect(LoginScreen.waitForIsDisplayed()).toEqual(true, 'Login page was not shown');
  });
});
