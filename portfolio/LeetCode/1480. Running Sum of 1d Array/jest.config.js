/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  clearMocks: true,
  automock: true,
  collectCoverage: true,
  coverageReporters: ['json',['text', {skipFull: true}]],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  verbose: true
};