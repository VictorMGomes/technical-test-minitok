const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./backend.tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src/backend',
  testRegex: '.*\\.spec\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: ['**/*.(ts|js)'],
  coverageDirectory: '../../coverage/backend',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', {
      tsconfig: 'backend.tsconfig.json'
    }],
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/../../',
  }),
};
