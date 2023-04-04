# Prism2 Project Template (React/JS)

This folder provides an out-of-the-box configuration of the Prism2 styling engine with recommended defaults.

## Quickstart (from scratch)

- `npx create vite@2.9.5 my-prism2-app --template react`
- `cd my-prism-app && npm install`
- `npm install @prism2/tailwind-preset @prism2/react-components tailwindcss`
- `npm run dev`

## Quickstart (copy folder)

- Clone or copy the contents of this folder.
- `npm install`
- `npm run dev`

## What's included?

- ViteJS Framework for dev, build and preview.
- TailwindCSS
- Prism2 React Components
- Prism2 Preset for Tailwind
  - Prism2 Tailwind Plugin (via preset)
  - Prism2 Tailwind Theme (via preset)
  - PostCSS configuration

## Recommended Extensions

We strongly recommend using the [Tailwind Intellisense Extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for VSCode. It will provide autocompletion for all class names and lint for conflicting/redundant classes.

![Using Tailwind Intellisense Extension](../../media/class-intellisense.gif)

## Using Themed Tailwind classes

In order to generate styles for classnames in your code, you must import Tailwind into your CSS files.

```pcss
// App.css
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
@import 'tailwindcss/components';
```

## Using provided styles

Some of our React components ship with dedicated styles. You can import these into your project in a single file:

```pcss
@import '../node_modules/@prism2/react-components/dist/style.css';
```

Or each layer independently.

```pcss
@import '../node_modules/@prism2/react-components/dist/style/base.css';
@import '../node_modules/@prism2/react-components/dist/style/fonts.css';
```
