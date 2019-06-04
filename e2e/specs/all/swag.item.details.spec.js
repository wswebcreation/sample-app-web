import LoginScreen from '../../page-objects/login'
import { ROUTES } from '../../../src/utils/Constants'

describe('Swag item details', () => {
  beforeEach(() => {
    // Load the url
    browser.url('');
  });

  it('should not be able to go directly to the swag item details', ()=>{
    browser.url(ROUTES.INVENTORY_LIST);

    expect(LoginScreen.waitForIsDisplayed()).toEqual(true, 'Login page was not shown');
  });
});
