# Analytics.js

Analytics.js makes it easy to collect customer data and send it to many different tools using a single, unified API.

Analytics.js is open source and is one of the libraries that powers [Segment], the managed, hassle-free way to collect customer data in the browser and beyond.

For our mobile and server-side data collection libraries, check out our [libraries] page.

## Development

1. `npm install -g yarn`
2. The project uses a lot of github URLs - which uses github API _a lot_, so follow [these instructions for adding your github token to your ~/.netrc file](https://github.com/duojs/duo#authenticate-with-github)
3. `make distclean` - deletes many things
4. `make build` - This will remove and then update the analytics.js and analytics.min.js file in the root of this repository.

This will create a new copy of analytics.js and analytics.min.js


### Adding a new integration

1. Look at the package.json file. This should list almost all of the integrations available, you can
find more at [https://github.com/segment-integrations/](https://github.com/segment-integrations/)
2. Add the new integration to lib/integrations.js
3. Update your code wherever you actually run your `analytics.initialize` to include the new integration and its options (see the lib/index.js of the integration on github)


## Documentation

First, read the [Analytics.js QuickStart], which contains installation instructions and a brief overview of what Analytics.js does and how it works.

For more detail on the Analytics.js API, check out the [Analytics.js Library Reference].


## Analytics.js for Platforms

Analytics.js for Platforms is a version of analytics.js built specifically for website creation and e-commerce platforms to give their customers one-click enablement of Google Analytics, Facebook Pixel, Google Adwords, and Segment. For more information, you can check out the [docs for Analytics.js for Platforms](https://segment.com/docs/guides/partners/analyticsjs-for-platforms/). Segment hosts this version of the library for free use on its CDN.

## Contributing

This repository houses a pre-built, open-source version of analytics.js. The core logic of analytics.js is broken out into individual repositories:

- To report an issue with analytics.js itself, head over to [analytics.js-core][], where the core analytics.js logic is maintained.
- To report an issue with an integration. head over to the [analytics.js-integrations][] organization, where we keep each integration in its own repository.

If you're not sure where to open an issue, feel free to open an issue against this repository or [contact us](https://segment.com/contact) and we'll help point you in the right direction.

## License

Released under the [MIT license].


-------

[Segment]: https://segment.com
[MIT license]: License.md
[Analytics.js Library Reference]: https://segment.com/docs/libraries/analytics.js
[Analytics.js Quickstart]: https://segment.com/docs/tutorials/quickstart-analytics.js
[analytics.js-core]: https://github.com/segmentio/analytics.js-core
[analytics.js-integrations]: https://github.com/segment-integrations?q=analytics.js-integration
[ci-badge]: https://travis-ci.org/segmentio/analytics.js.png?branch=master
[ci-link]: https://travis-ci.org/segmentio/analytics.js
[integrations]: https://segment.com/integrations
[libraries]: https://segment.com/libraries
[nodejs.org]: https://nodejs.org/
[spec]: https://segment.com/docs/spec/
