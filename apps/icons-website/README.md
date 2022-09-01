# Prism2 Typescript React

This folder contains a sample project configured to use Prism2 alongside Typescript and React. To bootstrap a project of your own with this template:

## Quickstart

### Step 0: Create a new app

Create a new Vite project using their React Typescript template.

```
pnpm create vite --template react-ts my-app && cd my-app
```

### Bootstrap PostCSS Tailwind and Prism2

> This guide assumes that you have access to the CIA Artifactory and that you have configured your package manager to use it as a registry. For assistance with setup, visit the [#artifactory Slack channel]().

```bash
pnpm add @prism2/tailwind-preset @prism2/react-components @prism2/icons tailwindcss postcss
echo "module.exports = require('@prism2/tailwind-preset/postcss.config')" >> postcss.config.cjs
```

### Configure Tailwind

```
pnpm tailwindcss init
```

> *(You will likely have to rename the created file to `tailwind.config.~~js~~cjs` for compatibility reasons in TypeScript)*

```js
/* tailwind.config.cjs */
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  presets: [
    require('@prism2/tailwind-preset')
  ],
}
```

### Inject our styles

```css
/* index.css */
@import '@prism2/react-components';
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

### Rock and roll

```tsx
// App.tsx
import React from 'react'
import './App.css'

const App = () => (
  <div className='container p-4'>
    <div className='prism-heading-1'>Branded Heading One</div>
  </div>
```
