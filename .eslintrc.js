module.exports = {
  env: {
    amd: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'max-len': 0,
    'no-return-assign': 0,
    'no-await-in-loop': 0,
    indent: 0, // Allowing prettier to handle this
    'consistent-return': 0,
    'comma-dangle': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'object-curly-newline': 0,
    'newline-per-chained-call': 0,
    'no-param-reassign': 0,
    'no-new-func': 0,
    'class-methods-use-this': 0,
    'import/extensions': ['error', 'ignorePackages', { js: 'never', json: 'never' }],
  },
};
