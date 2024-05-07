# Tailwind Notes

## installation

```sh

npm install -D tailwindcss

```

## initializing / creating the tailwind.config.js file

```sh

npx tailwindcss init

```

## include your html files in the tailwind config file

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## create an input.css file and include the tailwind directives

```css
/*input.css*/

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Start the Tailwind CLI build process

```sh
npx tailwindcss -i ./input.css -o ./dist/output.css --watch
```

## Editing the tailwind config file

```javascript

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        big: "40rem",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
```
