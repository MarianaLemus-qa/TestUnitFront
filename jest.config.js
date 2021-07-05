module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'fronted/teste',
      outputName: 'test-unit-front',
    } ]
  ]
};