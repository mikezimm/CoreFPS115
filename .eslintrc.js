require('@rushstack/eslint-config/patch/modern-module-resolution');
module.exports = {
  extends: ['@microsoft/eslint-config-spfx/lib/profiles/react'],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    "@microsoft/spfx/no-async-await": "off",
    "react/jsx-no-bind": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@rushstack/eslint-plugin/no-async-await": "off",
    "@jsx-eslint/eslint-plugin-react/jsx-no-bind": "off",


    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/explicit-function-return-type": "off",

    "react/jsx-no-target-blank": "off",  //only applies to old browsers - https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md#when-to-override-it
    // "no-useless-concat": "off",
    // "react/jsx-key": "off",


    //Keep these on except to clear for evalution

    // "react/self-closing-comp": "off",  // Generally keep on and just clean up the code
    "@typescript-eslint/no-unused-vars": "off", // Generally keep on and just clean up the code
    // "react/no-unescaped-entities": "off", // Generally keep on should just fix
    // "@typescript-eslint/explicit-function-return-type": "off", // Could help improve typing errors
    // "prefer-const": "off",  // Sometimes may apply
    "@typescript-eslint/member-ordering": "off",   // Preferance?

  }
};