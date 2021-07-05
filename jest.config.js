module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'coverage',
      outputName: 'test-unit-front',
    } ]
  ]
};