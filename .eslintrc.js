module.exports = {
  // This tells ESLint to load the config from the package `eslint-config-custom`
  // extends: ["@fitzzz/config/eslint-config-custom"],
  ...require("@fitzzz/config/eslint-config-custom"),
  root: true,
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
