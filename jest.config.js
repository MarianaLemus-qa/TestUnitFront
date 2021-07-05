module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'rspect.xml',
      outputName: 'rspect.xml',
    } ]
  ]
};