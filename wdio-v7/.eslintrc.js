 

module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "webextensions": true,
        "jest": true,
        "mocha": true
       // "amd": true
    },
    "plugins": [
        "mocha"
    ],
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
   "rules": {
    "no-console": "off",
    "mocha/no-identical-title": 2
    
    
   
    }
};
