const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, "../app1/src/**/*.{ts,tsx,js,jsx}"),
    join(__dirname, "../app2/src/**/*.{ts,tsx,js,jsx}"),
    join(__dirname, "../app3/src/**/*.{ts,tsx,js,jsx}"),
  ],
  theme: { extend: {} },
  plugins: [],
};
