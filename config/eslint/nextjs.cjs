/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["plugin:@next/next/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/await-thenable": "off",
  },
};
module.exports = config;