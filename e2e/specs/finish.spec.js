import LoginScreen from '../page-objects/login'
import { ROUTES } from '../../src/utils/Constants'

describe('Finish', () => {
  beforeEach(() => {
    // Load the url
    browser.url('');
  });

  it('should not be able to go directly to the "Finish" page', ()=>{
    browser.url(ROUTES.CHECKOUT_COMPLETE);

    expect(LoginScreen.waitForIsDisplayed()).toEqual(true, 'Login page was not shown');
  });
});
