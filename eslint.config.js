// eslint.config.js
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    prettier,
    {
        env: {
            browser: true,
            es2021: true,
            node: true,
            jest: true
        },
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module'
        }
    }
];