/* eslint-disable */
export default {
  displayName: 'shared-data-access-ui-store',
  preset: '../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/libs/shared/data-access/ui-store',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
}
