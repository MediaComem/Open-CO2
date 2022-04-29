export default {
  collectCoverage: true,
  verbose: true,
  moduleFileExtensions: ["js", "mjs", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest"
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  // testMatch: [
  //   "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
  //   "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))"
  // ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testRegex: "((\\.|/*.)(spec))\\.js?$"
};
