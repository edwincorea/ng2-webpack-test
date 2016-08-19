require('es6-shim');
require('reflect-metadata');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');

const browserTesting = require('@angular/platform-browser-dynamic/testing');
const coreTesting = require('@angular/core/testing');

coreTesting.setBaseTestProviders(
    browserTesting.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    browserTesting.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

const context = require.context('../src/', true, /\.spec\.ts$/);

context.keys.forEach(context);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;