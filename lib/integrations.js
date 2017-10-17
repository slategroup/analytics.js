/* eslint quote-props: 0 */
'use strict'

/*
 Add all integrations you want registered here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure the integrations added are also installed and saved in the package.json
 */
module.exports = {
  'amplitude': require('@segment/analytics.js-integration-amplitude'),
  'comscore': require('@segment/analytics.js-integration-comscore'),
  'facebook-pixel': require('@segment/analytics.js-integration-facebook-pixel'),
  // 'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  // 'optimizely': require('@segment/analytics.js-integration-optimizely'),
  'parsely': require('@segment/analytics.js-integration-parsely'),
  'quantcast': require('@segment/analytics.js-integration-quantcast')
};
