module.exports = {
  "extends": ["prettier", "prettier/react", "airbnb"],
  "plugins": ["prettier", "import", "jsx-a11y"],
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
  },
  "rules": {
    "prefer-destructuring": 0,
    "react/prop-types": 0,
    "react/destructuring-assignment": 0,
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    },
  },
  "parser": "babel-eslint"
};