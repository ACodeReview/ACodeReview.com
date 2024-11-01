import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/components/**/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    transitionDuration: {
      DEFAULT: "500ms",
    },
    colors: {
      transparent: "transparent",
      "most-contrast": "rgb(var(--most-contrast) / <alpha-value>)",
      "least-contrast": "rgb(var(--least-contrast) / <alpha-value>)",
      primary: {
        DEFAULT: "rgb(var(--primary-500) / <alpha-value>)",
        50: "rgb(var(--primary-50) / <alpha-value>)",
        100: "rgb(var(--primary-100) / <alpha-value>)",
        200: "rgb(var(--primary-200) / <alpha-value>)",
        300: "rgb(var(--primary-300) / <alpha-value>)",
        400: "rgb(var(--primary-600) / <alpha-value>)",
        500: "rgb(var(--primary-500) / <alpha-value>)",
        600: "rgb(var(--primary-600) / <alpha-value>)",
        700: "rgb(var(--primary-700) / <alpha-value>)",
        800: "rgb(var(--primary-800) / <alpha-value>)",
        900: "rgb(var(--primary-900) / <alpha-value>)",
      },
      secondary: {
        DEFAULT: "rgb(var(--secondary-500) / <alpha-value>)",
        50: "rgb(var(--secondary-50) / <alpha-value>)",
        100: "rgb(var(--secondary-100) / <alpha-value>)",
        200: "rgb(var(--secondary-200) / <alpha-value>)",
        300: "rgb(var(--secondary-300) / <alpha-value>)",
        400: "rgb(var(--secondary-400) / <alpha-value>)",
        500: "rgb(var(--secondary-500) / <alpha-value>)",
        600: "rgb(var(--secondary-600) / <alpha-value>)",
        700: "rgb(var(--secondary-700) / <alpha-value>)",
        800: "rgb(var(--secondary-800) / <alpha-value>)",
        900: "rgb(var(--secondary-900) / <alpha-value>)",
      },
      neutral: {
        50: "rgb(var(--neutral-50) / <alpha-value>)",
        100: "rgb(var(--neutral-100) / <alpha-value>)",
        200: "rgb(var(--neutral-200) / <alpha-value>)",
        300: "rgb(var(--neutral-300) / <alpha-value>)",
        400: "rgb(var(--neutral-400) / <alpha-value>)",
        500: "rgb(var(--neutral-500) / <alpha-value>)",
        600: "rgb(var(--neutral-600) / <alpha-value>)",
        700: "rgb(var(--neutral-700) / <alpha-value>)",
        800: "rgb(var(--neutral-800) / <alpha-value>)",
        900: "rgb(var(--neutral-900) / <alpha-value>)",
      },
    },
    extend: {
      animation: {
        "spin-fast": "spin .8s linear infinite",
      },
    },
  },
};

export default config;
