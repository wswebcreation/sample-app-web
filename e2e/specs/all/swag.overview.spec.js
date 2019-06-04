import LoginScreen from '../../page-objects/login';
import { ROUTES } from '../../../src/utils/Constants';

describe('Swag overview', () => {
  beforeEach(() => {
    // Load the url
    browser.url('');
  });

  it('should not be able to go directly to the swag items overview', ()=>{
    browser.url(ROUTES.INVENTORY);

    expect(LoginScreen.waitForIsDisplayed()).toEqual(true, 'Login page was not shown');
  });
});
