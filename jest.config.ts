import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: false,
  // globalTeardown: "<rootDir>/src/__tests__/teardownGlobals.ts",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/src/__tests__/**/*.spec.ts', '**/src/__tests__/*.spec.ts'],
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src/$1',
    '^@controllers(.*)$': '<rootDir>/src/controllers/$1',
    '^@models(.*)$': '<rootDir>/src/models/$1',
    '^@views(.*)$': '<rootDir>/src/views/$1',
    '^@config(.*)$': '<rootDir>/src/config/$1',
    '^@db(.*)$': '<rootDir>/src/db/$1',
  },

  // setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupDbForTests.ts"],
}

export default config
