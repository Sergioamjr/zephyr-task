const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/**/*.{html,js,jsx,ts,tsx}",
    // Include shared libraries
    // join(__dirname, "../../libs/**/*.{ts,tsx,js,jsx}"),
    // Include remote applications
    join(__dirname, "../app1/src/**/*.{ts,tsx,js,jsx}"),
    join(__dirname, "../app2/src/**/*.{ts,tsx,js,jsx}"),
  ],
  theme: { extend: {} },
  plugins: [],
};
