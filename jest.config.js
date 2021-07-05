module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'reports/results',
      outputName: 'test-results.xml',
    } ]

    
  ]
};