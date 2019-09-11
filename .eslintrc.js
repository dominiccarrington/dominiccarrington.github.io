module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'vue'
  ],
  rules: {
     // Always require a line to end with a semi-colon
    "semi": [2, 'always'],

     // Disable duplicate rule (with @typescript-eslint/no-unused-vars)
    "no-unused-vars": 'off',

    //
    "space-before-function-paren": [2, 'never'],

    // Disable warning for v-html usage... I understand the risks!
    "vue/no-v-html": 'off',

    //
    "spaced-comment": [2, 'always'],

    //
    "multiline-comment-style": [2, 'starred-block'],

    //
    "lines-around-comment": [2, {
      'beforeBlockComment': false,
      'beforeLineComment': true
    }]
  }
}
