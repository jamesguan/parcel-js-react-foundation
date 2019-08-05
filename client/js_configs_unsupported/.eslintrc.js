const path = require('path');

module.exports = {
  extends: [
    "eslint:all",
    "plugin:react/all"
  ],
  plugins: [
    "babel-eslint",
    "import",
    "jest",
    "jsx",
    "react",
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true,
      "modules": true
    }
  },
}