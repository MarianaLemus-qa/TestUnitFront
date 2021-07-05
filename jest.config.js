module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'testfronunit',
      outputName: 'rspect.xml',
    } ]
  ]
};