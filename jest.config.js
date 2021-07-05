module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: '.',
      outputName: 'rspect.xml',

    } ]


  ]
};