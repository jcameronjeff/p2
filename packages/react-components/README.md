# @prism2/react-components

This package provides an *unstyled* React component library with:

- Typescript declarations
- Intellisense / IDE Autocomplete support
- The full [HeadlessUI React library](https://headlessui.dev/)
- Code splitting, low-weight imports.

## Project Overview

### Configs

- TypeScript is configured to generate declarations on demand.
- Vite is configured in library mode by default, see `vite.config.js` for details.
- An alternate Vite config for SPA previewing is also available in `vite.web.config.js`
- TailwindCSS is configured with the `@prism2/tailwind-preset` to watch `/lib` and `/stories`.
- PostCSS is preconfigured, sett `postcss.config.js` for list of plugins.

### Folders

- `/lib` contains source for our published modules, including raw PostCSS.
- `/site` contains an example Vite SPA to be used as a dev scratchpad.
- `/stories` contains everything for Storybook.

### Local Development

- `pnpm storybook` will start an instance at localhost:6006 (default).
- `pnpm dev` will start a Vite SPA instance at localhost:3000 using the contents of `/site`
- `pnpm build` will prepare our package and output to `/dist`
- `pnpm preview` will use an alternate Vite config to run a local SPA (rather than compile our library).
- `pnpm build-css` will compile any CSS files in `lib/styles` to their dist target. (Debugging only)

### Importing stylesheets

PRISM ships standard CSS files to use in your project. There are several options for including PRISM styles in your project.

```js
// load ONLY global defaults and resets, excludes fonts and component styles.
import '@prism2/react-components/style/base.css'
import '@prism2/react-components/style/components.css'
import '@prism2/react-components/style/fonts.css'
// or load it all at once
import '@prism2/react-components/style.css'
```

### From PRISM

- Button
- TextInput

### From Headless UI

- [Menu (Dropdown)](https://headlessui.dev/react/menu)
- [Listbox (Select)](https://headlessui.dev/react/listbox)
- [Combobox (Autocomplete)](https://headlessui.dev/react/combobox)
- [Switch (Toggle)](https://headlessui.dev/react/switch)
- [Disclosure (Accordion)](https://headlessui.dev/react/disclosure)
- [Dialog (Modal)](https://headlessui.dev/react/dialog)
- [Popover (Tooltip)](https://headlessui.dev/react/popover)
- [Radio Group](https://headlessui.dev/react/radio-group)
- [Tabs](https://headlessui.dev/react/tabs)
- [Transition](https://headlessui.dev/react/transition)
