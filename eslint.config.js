export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        env: {
            browser: true,
            es2021: true,
            node: true,
            jest: true,
        },
        rules: {
            // n/a rn
        },
        extends: [
            "eslint:recommended",
            "prettier"
        ],
    },
];
