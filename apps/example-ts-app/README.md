# Prism2 Typescript React

This folder contains a sample project configured to use Prism2 alongside Typescript and React. To bootstrap a project of your own with this template:

## Quickstart

### Step 0: Create a new app

Create a new Vite project using their React Typescript template.

```
pnpm create vite --template react-ts my-app && cd my-app
```

### Bootstrap PostCSS Tailwind and Prism2

> **IMPORTANT**: This guide assumes that you have access to the CIA Artifactory and that you have [configured your package manager](#artifactory-configuration) to use it as a registry. For assistance with setup, visit the [#artifactory Slack channel](). The latest version of all packages is `2.0.8-alpha.1` as of this writing.

```bash
pnpm add @prism2/tailwind-preset@alpha @prism2/react-components@alpha @prism2/icons@alpha tailwindcss postcss
echo "module.exports = require('@prism2/tailwind-preset/postcss.config')" >> postcss.config.cjs
```

You can ignore warnings about missing peer dependencies. This is a known issue - for now, things will still work as expected.

### Configure Tailwind

```
pnpm tailwindcss init
```

> *(You will likely have to rename the created file to `tailwind.config.~~js~~cjs` for compatibility reasons in TypeScript)*

Replace the contents of `tailwind.config.cjs` with the following:

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

Import our library stylesheets.

```css
/* App.css */
@import '@prism2/react-components';
```

We suggest importing the Tailwind libraries in a separate file. Live-reloading is drastically quicker as a result.

```css
/* index.css */
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
)
```

### Artifactory Configuration

In order to use Artifactory as your package registry, save a file named `.npmrc` to the root of your project. You will need to [log in to Artifactory](https://artifactory.coxautoinc.com/artifactory/) to acquire an authorization key.

Navigate to your profile by clicking on your email address on the top right off the Artifactory dashboard. Copy your API key and paste into your `.npmrc`.

```.npmrc
registry=https://artifactory.coxautoinc.com/artifactory/api/npm/man-npm
always-auth=true
email=your.name@coxautoinc.com
_auth=YOUR_ARTIFACTORY_KEY_HERE
```
