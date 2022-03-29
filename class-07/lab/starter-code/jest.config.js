/**
 * Configuration for jest tests
 */

module.exports = {
  testEnvironment: 'node',
  setupFiles: ['./__tests__/config/setup.js'],
  roots: ['./__tests__/src/'],
  globalTeardown: './__tests__/config/teardown.js'
};
