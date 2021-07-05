module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputName: 'test-unit-front',
    } ]
  ]
};