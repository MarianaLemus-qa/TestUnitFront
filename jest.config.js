module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'report-group/Testunitfronend-jest_reports',
      outputName: 'reort',
    } ]
  ]
};