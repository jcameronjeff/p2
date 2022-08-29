# Adding P2 to Exisiting Tailwind Project

This folder contains a sample project configured to use Prism2 alongside Typescript and React. To bootstrap a project of your own with this template:



## Quickstart

### Step 1: Install Prism2

> This guide assumes that you have access to the CIA Artifactory and that you have configured your package manager to use it as a registry. For assistance with setup, visit the [#artifactory Slack channel]().

```bash
pnpm add @prism2/tailwind-preset @prism2/react-components @prism2/icons
```

### Step 2: Add us to your Tailwind config


```js
/* tailwind.config.cjs */
module.exports = {
  presets: [
    require('@prism2/tailwind-preset')
  ],
  // your additional configurations...
}
```

That's it!

:party

## Further Configuration

### Optional: Include component styles

```css
/* style.css */
@import '@prism2/react-components';
```


### Optional: Configure PostCSS

If you aren't already using PostCSS, configure it:

```bash
echo "module.exports = require('@prism2/tailwind-preset/postcss.config')" >> postcss.config.cjs
```
