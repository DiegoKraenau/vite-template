module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': ['error', 'ignorePackages', { tsx: 'never', ts: 'never' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'no-console': 'warn',
  },
};
