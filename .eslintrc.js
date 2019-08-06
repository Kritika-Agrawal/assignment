module.exports = {
    plugins: ['react'],
    parser: 'babel-eslint',
    env: { browser: true, commonjs: true, es6: true },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: { experimentalObjectRestSpread: true, jsx: true },
        sourceType: 'module'
    },
    settings: {
        "react": {
            "version": "16.4.2"
        }
    },
    rules: {
        'no-var': 'error',
        'block-spacing': 'error',
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'prefer-arrow-callback': 'error',
        'react/no-find-dom-node': 'warn',
        'linebreak-style': ['error', 'unix'],
        indent: ['error', 2, { SwitchCase: 1 }],
        'arrow-body-style': ['error', 'as-needed'],
        'object-curly-spacing': ['error', 'always'],
        'comma-dangle': ['error', 'only-multiline'],
        'array-bracket-spacing': ['error', 'always'],
        'prefer-destructuring': [
            'error', {
                'VariableDeclarator': { 'array': false, 'object': true },
                'AssignmentExpression': { 'array': true, 'object': false }
            }
        ],
        'no-confusing-arrow': ['error', { 'allowParens': true }],
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'comma-spacing': ['error', { before: false, after: true }],
        'no-unused-vars': [
            2, {
                args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: true
            }
        ],
    }
}
