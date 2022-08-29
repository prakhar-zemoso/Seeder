/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.d.ts',
      '!src/**/*.stories.{js,jsx,ts,tsx}',
      '!src/Theme/theme.tsx',
      '!src/App.tsx',
      '!src/index.tsx',
      '!src/utils/constants.tsx',
      '!src/utils/messages.tsx',
      'src/components/templates/**',
      '!src/components/pages/**',
      '!src/api-service/**'
    ],
    transform: {
      '.+\\.(css|scss|png|jpg|svg|webp)$': 'jest-transform-stub'
    },
  };
  
  