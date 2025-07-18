import { nextJsConfig } from "@hashversion/eslint-config/next";

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,

  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.{js,cjs,mjs,ts}"],
          defaultProject: "./tsconfig.json",
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
