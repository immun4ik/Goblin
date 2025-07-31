import globals from 'globals';
import pluginJs from '@eslint/js';
import babelParser from '@babel/eslint-parser'; // ����������� ������

export default [
    {
        
        languageOptions: {
            
            globals: {
                ...globals.browser,
                ...globals.node,
                
            },
          
            ecmaVersion: 'latest', 
            sourceType: 'module',  
            
            parser: babelParser,
            
            parserOptions: {
                requireConfigFile: false, 
             
            },
        },

      
        ...pluginJs.configs.recommended,

        
        rules: {
            'indent': ['error', 4],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-console': 'off'
        },

        
    },
    {
        ignores: ['node_modules/', 'dist/', 'build/', 'webpack.config.cjs'],
    },

];