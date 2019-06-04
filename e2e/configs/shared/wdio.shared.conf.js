exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',

  // ============
  // Capabilities
  // ============
  maxInstances: 100,
  // For the rest see the specific configs

  // ===================
  // Test Configurations
  // ===================
  logLevel: 'silent',
  baseUrl: 'http://localhost:5000/',
  waitforTimeout: 15000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'jasmine',
  reporters: [ 'spec' ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },

  // ==================
  // Specify Test Files
  // ==================
  specs: [
    './e2e/specs/**/*.spec.js',
  ],

  // ==================
  // Specify Suites
  // ==================
  suites:{
    all:[
      './e2e/specs/all/*.spec.js',
    ],
    optimized:[
      './e2e/specs/optimized/login.spec.js',
      './e2e/specs/optimized/redirect.spec.js',
    ],
  },

  // =====
  // Hooks
  // =====
  beforeSession: () => {
    require('@babel/register');
  },
  before: () => {
    // Set the default screensize
    if (!browser.isMobile) {
      browser.setWindowSize(1366, 768);
    }
  },
};
