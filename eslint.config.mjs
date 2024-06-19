import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import vue from "eslint-plugin-vue";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs["flat/recommended"],
  ...astro.configs.recommended,
  ...prettier
);
