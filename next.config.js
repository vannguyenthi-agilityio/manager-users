/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const path = require('path');

// Load env into browser
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad()

module.exports = withPlugins([[nextEnv()], [withImages]], {
  async rewrites() {
    return [
      // These rewrites are checked after both pages/public files
      // and dynamic routes are checked
      {
        source: '/',
        destination: '/',
      }
    ]
  },
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});
