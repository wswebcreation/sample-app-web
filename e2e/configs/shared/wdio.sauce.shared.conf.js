const { config } = require('./wdio.shared.conf');

// =================
// Service Providers
// =================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY_EU;
config.region = 'eu';

// ========
// Services
// ========
config.services = [ 'sauce' ];

exports.config = config;





