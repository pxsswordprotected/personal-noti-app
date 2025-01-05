import eslintRecommended from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
        },
        rules: {
            ...eslintRecommended.rules, // Include ESLint's recommended rules
            ...prettierConfig.rules,   // Include Prettier rules
        },
    },
];
