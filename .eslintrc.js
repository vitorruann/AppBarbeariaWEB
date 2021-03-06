module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};

// module.exports = {
//   "env": {
//       "browser": true,
//       "es6": true,
//       "jest": true
//   },
//   "extends": [
//       "plugin:react/recommended",
//       "airbnb",
//       "prettier",
//       "prettier/react"
//   ],
//   "globals": {
//       "Atomics": "readonly",
//       "SharedArrayBuffer": "readonly"
//   },
//   "parser": "babel-eslint",
//   "parserOptions": {
//       "ecmaFeatures": {
//           "jsx": true
//       },
//       "ecmaVersion": 2018,
//       "sourceType": "module"
//   },
//   "plugins": [
//       "react",
//       "prettier",
//       "jsx-a11y",
//       "import",
//       "react-hooks",
//       "prettier"
//   ],
//   "rules": {
//     "prettier/prettier": "error",
//     "react/jsx-filename-extension": [
//       "warn",
//       { extensions: [".jsx", ".js"] }
//     ],
//     "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
//     "react/jsx-one-expression-per-line": "off",
//     "import/prefer-default-export": "off",
//     "global-require": "off",
//     "react-native/no-raw-text": "off",
//     "no-param-reassign": "off",
//     "no-underscore-dangle": "off",
//     "import/prefer-default-export": "off",
//     "no-param-reassign": "off",
//     "no-console": ["error", { allow: ["tron"] }],
//     "camelcase": "off",
//     "react-hooks/rules-of-hooks": "error",
//     "react-hooks/exhaustive-deps": "warn"
//   },
//   "settings": {
//       "import/resolver": {
//           "babel-plugin-root-import": {
//             "rootPathSuffix": "src"
//           },
//       },
//   }
// };
