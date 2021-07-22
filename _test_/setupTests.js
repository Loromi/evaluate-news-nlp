/* test configuration from https://stackoverflow.com/a/57439821 */

import 'regenerator-runtime/runtime';

jest.setTimeout(10000);

global.fetch = require('jest-fetch-mock')
