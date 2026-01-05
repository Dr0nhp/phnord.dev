import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";

export default [
    // JavaScript-Dateien
    {
        files: ["**/*.{js,mjs}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            ...js.configs.recommended.rules
        }
    },
    // Vue-Dateien
    ...pluginVue.configs["flat/recommended"],
    {
        files: ["**/*.vue"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser
            }
        }
    },
    // Ignorieren
    {
        ignores: [
            "node_modules/**",
            "dist/**",
            "build/**",
            "**/*.min.js",
            "ffxivCraftingMatCalc/**"
        ]
    }
];