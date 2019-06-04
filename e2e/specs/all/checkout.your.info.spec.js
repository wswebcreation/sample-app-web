import LoginScreen from '../../page-objects/login'
import { ROUTES } from '../../../src/utils/Constants'

describe('Checkout: Your Information', () => {
  beforeEach(() => {
    // Load the url
    browser.url('');
  });

  it('should not be able to go directly to the "Checkout: Your Information" page', ()=>{
    browser.url(ROUTES.CHECKOUT_STEP_ONE);

    expect(LoginScreen.waitForIsDisplayed()).toEqual(true, 'Login page was not shown');
  });
});
