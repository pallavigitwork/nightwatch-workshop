module.exports = {
  test_settings: {
    default: {},
    env1: {
      desiredCapabilities: {
        browserName: 'Chrome',
        'bstack:options': {
          browserVersion: '120.0',
          os: 'Windows',
          osVersion: '10',
          debug: true
        }
      }
    },
    env2: {
      desiredCapabilities: {
        browserName: 'Safari',
        'bstack:options': {
          browserVersion: '15.6',
          os: 'OS X',
          osVersion: 'Monterey',
          debug: true
        }
      }
    },
    env3: {
      desiredCapabilities: {
        browserName: 'Chromium',
        'bstack:options': {
          deviceOrientation: 'portrait',
          deviceName: 'iPhone 13',
          osVersion: '15',
          debug: true
        }
      }
    }
  }
};