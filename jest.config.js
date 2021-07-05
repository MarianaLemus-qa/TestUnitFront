module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 's3://fronted/teste',
      outputName: 'test-unit-front',
    } ]
  ]
};