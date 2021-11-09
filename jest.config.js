module.exports = {
  // setupFilesAfterEnv: ['./tests/setup.js'],
  testTimeout: 5000,
  verbose: true,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputName: 'test-results.xml',
      },
    ],
  ],
};
