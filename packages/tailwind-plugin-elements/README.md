# @prism2/tailwind-elements

> **Notice**: In most cases, you can use the `@prism2/tailwind-preset` which provides configuration for this plugin and our theme. This guide is intended for custom use cases where the preset is insufficient.


## Overview
Prism2 includes a CSS reset that provides out-of-the-box styling for most HTML5 elements. `@prism2/tailwind-elements` provides a flexible way to generate styles for your app or component. In some cases, you may want to apply design guidelines directly to HTML5 elements.

![](../../media/autocomplete-plugin.gif)

## Quickstart

> **Prerequisite**: This guide expects Tailwind to already be configured. Follow the [instructions to initialize Tailwind](https://tailwindcss.com/docs/installation) in your project if you haven't already.

1. Install as a dependency `npm install @prism2/tailwind-elements`

> **Maintainer Note**: This package is not yet published, you will need to link the dependency locally in order to install.
>
2. Add plugin to your Tailwind configuration file.

  ```js
  // tailwind.config.js
  plugins: [
    require("@prism2/tailwind-elements")
  ],
```

## Example Project

A template of our recommended project configuration can be [found in our example app](../example-vite-app/).

## Plugin Configuration

The plugin accepts configuration options as an object with three arguments.

- `strategy` - "class" | "base" - Customize which CSS selectors to apply our rules. By default CSS will be generated for various CSS classes. Setting strategy to "base" will instead create styles for base HTML elements.
- `parent` - string | undefined - Optionally scope CSS rules to children of the provided selector.
- `prefix` - string | undefined - Prefix to apply to generated CSS classes.

### Configuration Examples

**Apply styles as HTML reset**

  ```jsx
  // tailwind.config.js
  plugins: [ require('@prism2/tailwind-elements')({ strategy: 'base' }) ]
  // App.tsx
  const Component = () => <h1>I am styled</h1>
  ```

**Scope styles to a parent selector**

  ```jsx
  // tailwind.config.js
  plugins: [ require('@prism2/tailwind-elements')({
    parent: '.prism', // for children of .prism
    strategy: 'base', // style base HTML elements like <h1> etc.
  }) ]

  // App.tsx
  const Unstyled = () => <h1>I am unstyled</h1>
  const Styled = () => <div className='prism'><h1>I am styled</h1></div>
  ```

**Use styles with classes**

```jsx
// tailwind.config.js
plugins: [ require('@prism2/tailwind-elements')({
  strategy: 'class',  // style with classes like .prism-heading-01 etc.
}) ]

// App.tsx
const Unstyled = () => <h1>I am unstyled</h1>
const Styled = () => <span className='heading-1'>I am styled</span>
```

**Use class styles with parent scope**
```jsx
// tailwind.config.js
plugins: [ require('@prism2/tailwind-elements')({
  parent: '.prism', // for children of .prism
  strategy: 'class',  // style with classes like .prism-heading-01 etc.
}) ]

// App.tsx
const Unstyled = () => <span className='heading-1'>I am unstyled</span>
const Styled = () => (
  <div className='prism'>
    <span className='heading-1'>I am styled</span>
  </div>
```

**Use class styles with a prefix**
```jsx
// tailwind.config.js
plugins: [ require('@prism2/tailwind-elements')({
  prefix: 'prism', // prefix class names with 'prism-'
  strategy: 'class',  // style with classes like .prism-heading-01 etc.
}) ]
// App.tsx
const Unstyled = () => (
  <div className='prism'>
    <span className='heading-1'>I am not styled</span>
  </div>
)
const Styled = <span className='prism-heading-1'>I am styled</span>
```

**Complete Class Scoping Strategy**

```jsx
// tailwind.config.js
plugins: [ require('@prism2/tailwind-elements')({
  parent: '.prism', // for children of .prism
  prefix: 'prism', // prefix class names with 'prism-'
  strategy: 'class',  // style with classes like .prism-heading-01 etc.
}) ]

// App.tsx
const Styled = () => (
  <div className='prism'>
    <span className='prism-heading-1'>This is a styled heading</span>
    <h1>Unstyled</h1>
    <span className='heading-1'>Unstyled</span>
  </div>
)
```
