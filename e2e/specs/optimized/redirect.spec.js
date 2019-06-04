import LoginScreen from '../../page-objects/login';
import { ROUTES } from '../../../src/utils/Constants';

describe('Redirects', () => {
  beforeEach(() => {
    // Load the url
    browser.url('');
  });

  const route = randomRoute(ROUTES);

  it(`should not be able to go directly to '${route}'-page`, ()=>{
    browser.url(route);

    expect(LoginScreen.waitForIsDisplayed()).toEqual(true, 'Login page was not shown');
  });
});

function randomRoute(routes){
  delete routes.LOGIN;

  const keys = Object.keys(routes);

  return routes[keys[ Math.floor(Math.random()*keys.length)]];
}
