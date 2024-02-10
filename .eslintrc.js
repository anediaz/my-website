// @ts-check
const extensions = ['.json', '.ts', '.tsx', '.jsx', '.js'];

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
      generators: false,
      objectLiteralDuplicateProperties: false,
      jsx: true,
    },
    ecmaVersion: 12, // Match tsconfig.json
    sourceType: 'module',
  },
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  plugins: [
    'import',
    'prettier',
    'react',
    'react-hooks',
    'arca',
    'json',
    'jsx-a11y',
    'es',
    'unused-imports',
    'testing-library',
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  reportUnusedDisableDirectives: true, // mark unused ESLint suppressions (eslint-disable*)
  settings: {
    // React plugin, configured with the right version
    react: {
      pragma: 'React',
      version: '17.0.2',
    },
    'import/resolver': {
      node: {},
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.json',
      },
    },
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: ['@typescript-eslint'],
        rules: {
          'no-use-before-define': 'off',
          '@typescript-eslint/no-use-before-define': ['error'],
        },
      },
    ],
  },

  rules: {
    'import/no-unresolved': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.tsx', '.jsx'] },
    ],
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-shadow': 'off',
  },
};
