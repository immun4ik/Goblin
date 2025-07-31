import globals from 'globals';
import pluginJs from '@eslint/js';
import babelParser from '@babel/eslint-parser'; // ����������� ������

export default [
    {
        // 1. ����� ����� � ��������� (����� "env" � "parserOptions")
        languageOptions: {
            // ���������� ���������� ����������, ��� � "env": "browser": true, "node": true
            globals: {
                ...globals.browser,
                ...globals.node,
                // "es2021": true ��� ����������� "ecmaVersion: 'latest'"
            },
            // ��������� ������� (����� "parserOptions")
            ecmaVersion: 'latest', // ������������� "ecmaVersion": "latest"
            sourceType: 'module',  // ������������� "sourceType": "module"
            // ��������� ��������� ������ (����� "parser")
            parser: babelParser,
            // �����, ����������� ��� ������� (����� "parserOptions" ��� �������)
            parserOptions: {
                requireConfigFile: false, // ������������� "requireConfigFile": false
                // ���� � ��� ���� ������ ��������� ��� babel-eslint-parser, �������� �� �����
            },
        },

        // 2. ���������� (����� "extends")
        // "extends": "eslint:recommended" ������ ������������� ��� pluginJs.configs.recommended
        // ���������� spread-��������, ����� �������� ��� ������� �� ���������������� ������
        ...pluginJs.configs.recommended,

        // 3. ��������� ������� (����� "rules")
        rules: {
            'indent': ['error', 4],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-console': 'off'
        },

        // 4. �����������: ������������ ����� (��� .eslintignore)
        // ���� � ��� ��� ���� .eslintignore, ���������� ��� ���������� ����
        // ��������:
        // ignores: [
        //   "node_modules/",
        //   "dist/",
        //   "build/"
        // ]
    },
    // ����� ����� �������� ������ ���������������� �������, ��������, ��� ������ ����� ������
];