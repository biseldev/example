module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test/unitSetup.js'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '^@components(.*)$': '<rootDir>/src/js/components',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
