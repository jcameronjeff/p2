# PRISM 2 Testbed

> This document is a work-in-progress regarding pre-release software. All content is subject to change and will change.
---

## Usage

```
yarn add @prism2/react-components @prism2/tailwind-preset
```

### Tailwind Only

If you only need the most basic utilities from PRISM, we recommend using our [Tailwind3 preset](../tailwind-preset/) to bootstrap your styles. This does not provide any CSS out-of-the-box. Instead, it expects you will use your own Tailwind3 workflow.

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('@prism2/tailwind-preset')
  ]
}
```

Now setup your CSS files to use everything:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
@import 'tailwindcss/components';
/* Warning: style.css contains all CSS including fonts. */
@import '../node_modules/@prism2/react-components/dist/style.css';
```

Or, you can only use the layers you need. For example:

```css
```css
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
@import 'tailwindcss/components';
/* Note - this does not include our reset or fonts. */
@import '../node_modules/@prism2/react-components/dist/style/components.css';
```



### Vite / Create React App

In most cases, you can import styles directly into your main App component using Vite or Create React App. Alternately, you may wish to import it into your CSS using PostCSS.

By default, only our CSS reset is applied globally. Only children of .prism will receive full styling treatment. (This can be customized when using the Tailwind preset.)

```tsx
// App.jsx/tsx
import '@prism2/react-components/dist/style.css';

function App() {
  <>
    <button type='button'>My Button</button> {/* Unstyled */}
    <div className='prism'>
      <button type='button'>My Button</button> {/* Styled! */}
    </div>
  </h1>
}
```

### Webpack / CSS Import

You can include PRISM directly into a CSS file like so. This includes our CSS reset as well as full access to CSS variables from Tailwind.


#### Import everything at once
```css
@import '../node_modules/@prism2/react-components/style.css';
```

#### Import everything as layers

```css
@import '../node_modules/@prism2/react-components/dist/style/base.css';
@import '../node_modules/@prism2/react-components/dist/style/components.css';
@import '../node_modules/@prism2/react-components/dist/style/fonts.css';
```


## Project Anatomy

### Package Scripts

- `dev` - Alias of "vite", starts a preview server at http://localhost:3000 .
- `test` - TODO - attempts to run build scripts succesfully.
- `build` - Compiles Typescript, creates bundles defined in `vite.config.js`, and compiles CSS files to our `dist/` directory. It then generate TS type definitions as part of a `postbuild` routine.
- `preview` - Preview the bundled demo app locally.

### Directories

- `/src` - Contents of our demo React application.
- `/lib` - Contents to be publishing in the library.

### Config Files
| Filename | Description |
| :- | :- |
| `tailwind.config.js` | Loads the PRISM Tailwind preset package |
| `vite.config.js` | Vite configuration for publishing our library package |
| `vite.web.config.js` | Vite configuration for building the demo app. |
| `postcss.config.js` | Applies a set of plugins to be used throughout the project |
| `index.html` | From Vite, this is used to serve our web module powered app locally |
| `.eslintrc.js` | Basic linting rules to support Typescript and React. |
| `.eslintignore.js` | Prevent warnings when working on non-typescript config files. |

### Style Assets
| Filename | Description |
| -------- | ----------- |
| `dist/style/base.css` | Normalize and reset with Tailwind variables |
| `dist/style/components.css` | Only component styles, scoped to children of `.prism` |
| `dist/style/fonts.css` | Prepackaged Roboto variants  |
| `dist/style.css` | Full stylesheets including all of the above. |

