import { defineConfig } from "eslint/config";

const browserGlobals = {
  document: true,
  window: true,
  navigator: true,
  localStorage: true,
  sessionStorage: true,
  location: true,
  console: true,
  performance: true,
  fetch: true,
  URL: true,
  FormData: true,
  FileReader: true,
  AbortController: true,
  atob: true,
  btoa: true,
  setTimeout: true,
  clearTimeout: true,
  setInterval: true,
  clearInterval: true,
  Event: true,
  CustomEvent: true,
  requestAnimationFrame: true,
  cancelAnimationFrame: true
};

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
      globals: browserGlobals
    }
  }
]);
