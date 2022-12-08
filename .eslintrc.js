const isBeforeCommit = !!process.env.TIMING;

module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint-config-airbnb-base',
        'plugin:vue/vue3-recommended',
        // 'plugin:prettier/recommended',
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
        es6: true,
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        withDefaults: 'readonly',
        printLn: 'readonly',
        defineOptions: 'writable',
    },
    plugins: ['vue', '@typescript-eslint', 'simple-import-sort'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaFeatures: { jsx: true },
    },
    settings: { 'import/extensions': ['.js', '.jsx', '.ts', '.tsx'] },

    rules: {
        indent: 'off',
        'no-undef': 'off',
        'no-console': 'off',
        'no-continue': 'off',
        'no-restricted-syntax': 'off',
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'no-shadow': 'off',
        'guard-for-in': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'vue/first-attribute-linebreak': 0,
        quotes: ['error', 'single'],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/no-relative-packages': 'off',
        'no-unused-vars': 'off',
        // 非常耗时，commit时不使用
        '@typescript-eslint/indent': isBeforeCommit ? 0 : ['error'],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'prefer-template': 0,
        '@typescript-eslint/no-non-null-assertion': 'warn',
        'object-curly-newline': [
            'error',
            {
                ImportDeclaration: 'always',
            },
        ],
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        'max-len': ['error', 120],
        'consistent-return': 'off',
        'no-unused-expressions': ['error', {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
        }],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'vue/component-name-in-template-casing': [2, 'kebab-case'],
                'vue/require-default-prop': 0,
                'vue/multi-word-component-names': 0,
                'vue/no-reserved-props': 0,
                'vue/no-v-html': 0,
                'vue/attribute-hyphenation': 0,
                'vue/html-indent': ['error', 4],
                'vue/html-self-closing': 0,
                'vue/max-attributes-per-line': [
                    'error',
                    {
                        singleline: { max: 1 },
                        multiline: { max: 1 },
                    },
                ],
                'vue/first-attribute-linebreak': [
                    'error',
                    {
                        singleline: 'ignore',
                        multiline: 'below',
                    },
                ],
                'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
            },
        },
    ],
};
