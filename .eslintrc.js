module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'node/no-path-concat': 'off',
    'node/handle-callback-err': 'off',
    'node/no-callback-literal': 'off',
    'node/no-exports-assign': 'off',
    'node/no-new-require': 'off',
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    'semi': 'off',
    'camelcase': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'no-useless-constructor': 'off',
    'no-console':  'off',
    'no-debugger': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'no-tabs': [
      'error',
      {
        allowIndentationTabs: true
      }
    ]
  },
  env: {
    browser: true,
    node: true,
    es6: true
  }
};
