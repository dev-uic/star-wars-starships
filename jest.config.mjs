import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: '.',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@/app/(.*)$': '<rootDir>/app/$1',
        '^@/components/(.*)$': '<rootDir>/app/components/$1',
        '^@/constants/(.*)$': '<rootDir>/app/constants/$1',
        '^@/styles/(.*)$': '<rootDir>/app/styles/$1',
        '^@/ui/(.*)$': '<rootDir>/app/ui/$1',
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    reporters: ['default'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
