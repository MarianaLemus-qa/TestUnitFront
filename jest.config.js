module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: '../hello-react',
      outputName: 'test-unit-front',
    } ]
  ]
};