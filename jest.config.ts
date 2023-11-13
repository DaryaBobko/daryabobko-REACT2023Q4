// export default {
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//     '^.+\\.svg$': 'jest-svg-transformer',
//     '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
//   },
//   setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
// };

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+.(ts|tsx)?$': 'ts-jest',
    '^.+.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  // setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
};
