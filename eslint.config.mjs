import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  // Base JavaScript/TypeScript configuration
  ...tseslint.configs.recommended,
  
  // Astro recommended configuration
  ...eslintPluginAstro.configs.recommended,
  
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // General best practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off', // Turned off in favor of TypeScript's version
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // Code style
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'prefer-template': 'warn',
    },
  },
  
  // Astro-specific rules
  {
    files: ['**/*.astro'],
    rules: {
      // Customize Astro-specific rules here
      'astro/no-set-html-directive': 'error',
      'astro/no-unused-css-selector': 'warn',
    },
  },
  
  // Accessibility plugin for JSX/TSX components
  {
    files: ['**/*.{jsx,tsx,astro}'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
    },
  },
  
  // Ignore patterns
  {
    ignores: [
      'dist/',
      '.astro/',
      'node_modules/',
      '*.config.{js,mjs,cjs}',
      'public/',
    ],
  },
];