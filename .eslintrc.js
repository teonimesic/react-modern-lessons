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
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    },
  },
  "parser": "babel-eslint"
};