module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'test-unit-vecindario',
      outputName: 'test-unit-front',
    } ]
  ]
};