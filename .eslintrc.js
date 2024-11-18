module.exports = {
    env: {
        "es6" : true
    },
    parserOptions: {
        "sourceType" : "module",
        "ecmaFeatures" : {
            jsx: true
        }
    },
    overrides: [
      {
        // Test files only
        files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
        extends: ['plugin:testing-library/react'],
      },
    ],
  };