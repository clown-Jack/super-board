module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  globals: {
    __dirname: false,
  },
  rules: {
    'no-undefined': 'warn',
    'no-debugger': 'off',
    complexity: ['error', { max: 99 }],
    indent: [
      1,
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
      },
    ],
    'react/jsx-indent': [1, 2],
    'react/jsx-indent-props': [1, 2],
    'react/no-string-refs': 1,
    'no-template-curly-in-string': 1,
    '@typescript-eslint/prefer-option-chain': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-duplicate-imports': 'off',
    'react/no-unsafe': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    'react/jsx-key': 0,
    'no-undef': 0,
    '@typescript-eslint/no-require-imports': 'off',
  },
};
