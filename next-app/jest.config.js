const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom", // Required for React Testing Library
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Global setup
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // Supports absolute imports
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  testMatch: ["**/__tests__/**/*.test.(js|jsx|ts|tsx)"], // Ensure tests are detected
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

module.exports = createJestConfig(customJestConfig);
