const { config } = require('./shared/wdio.sauce.shared.conf');

const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
  screenResolution,
  seleniumVersion: '3.141.59',
  ...(process.env.BUILD_ID ? { build: process.env.BUILD_ID } : {}),
  ...(process.env.TUNNEL_IDENTIFIER ? { tunnelIdentifier: process.env.TUNNEL_IDENTIFIER } : {})
};
const chromeOptions = {
  'goog:chromeOptions': {
    args: [ '--no-sandbox', 'disable-infobars' ],
    w3c: true,
  },
};

// ============
// Capabilities
// ============
config.capabilities = [
  {
    browserName: 'googlechrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
    ...chromeOptions,
  },
];

exports.config = config;





