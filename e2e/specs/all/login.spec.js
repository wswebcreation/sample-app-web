import InventoryListScreen from '../../page-objects/inventoryList';
import LoginScreen from '../../page-objects/login';
import { LOGIN_USERS } from '../../configs/e2eConstants';

describe('Login', () => {
  beforeEach(() => {
    // Load the url
    browser.url('');
  });

  it('should be able to test loading of login page', () => {
    expect(LoginScreen.waitForIsDisplayed()).toEqual(true, 'Login page was not shown');
  });

  it('should be able to login with a standard user', () => {
    LoginScreen.signIn(LOGIN_USERS.STANDARD);

    // Wait for the inventory screen and check it
    LoginScreen.waitForIsDisplayed(false);
    expect(InventoryListScreen.title.getText()).toEqual('Inventory', 'Inventory List screen was not shown',);
  });

  it('should not be able to login with a locked user', () => {
    // First check there is no error message
    expect(LoginScreen.isErrorMessageDisplayed()).toEqual(false, 'Error message is shown');

    // Login
    LoginScreen.signIn(LOGIN_USERS.LOCKED);

    expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
    expect(LoginScreen.getErrorMessage()).toContain(
      'Sorry, this user has been locked out.',
      'The error message is not as expected',
    );
  });

  it('should not be able to login with an empty username', () => {
    // First check there is no error message
    expect(LoginScreen.isErrorMessageDisplayed()).toEqual(false, 'Error message is shown');

    // Login
    LoginScreen.signIn(LOGIN_USERS.NO_USER_DETAILS);

    expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
    expect(LoginScreen.getErrorMessage()).toContain(
      'Username is required',
      'The error message is not as expected',
    );
  });

  it('should not be able to login with no password', () => {
    // First check there is no error message
    expect(LoginScreen.isErrorMessageDisplayed()).toEqual(false, 'Error message is shown');

    // Login
    LoginScreen.signIn(LOGIN_USERS.NO_PASSWORD);

    expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
    expect(LoginScreen.getErrorMessage()).toContain(
      'Password is required',
      'The error message is not as expected',
    );
  });

  it('should not be able to login when incorrect credentials are used', () => {
    // First check there is no error message
    expect(LoginScreen.isErrorMessageDisplayed()).toEqual(false, 'Error message is shown');

    // Login
    LoginScreen.signIn(LOGIN_USERS.NO_MATCH);

    expect(LoginScreen.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
    expect(LoginScreen.getErrorMessage()).toContain(
      'Username and password do not match any user in this service',
      'The error message is not as expected',
    );
  });
});
