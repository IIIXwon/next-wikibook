const nextJest = require('next/jest')
const createJestConfig = nextJest({dir: './'})
const customJestConfig = {
  testPathIgnorePattern: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFileAfterEnv: ['<rootDir>/jest.config.js/'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom'
}

module.exports = createJestConfig(customJestConfig)