<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# @prism2

- [Developing Prism2](#developing-prism2)
- [Starting a new project using Prism2](#starting-a-new-project-using-prism2)
  - [Step 0: Create a new app](#step-0-create-a-new-app)
  - [Bootstrap PostCSS Tailwind and Prism2](#bootstrap-postcss-tailwind-and-prism2)
  - [Configure Tailwind](#configure-tailwind)
  - [Inject our styles](#inject-our-styles)
  - [Rock and roll](#rock-and-roll)
- [Toolchain](#toolchain)
  - [Stack](#stack)
    - [turborepo](#turborepo)
    - [pnpm](#pnpm)
    - [vite](#vite)
    - [esbuild](#esbuild)
    - [tailwindcss](#tailwindcss)
    - [postcss](#postcss)
    - [typescript](#typescript)
    - [docgen](#docgen)
    - [storybook](#storybook)
    - [husky](#husky)
    - [headlessui](#headlessui)
    - [github actions](#github-actions)
- [Editor Configs](#editor-configs)
- [Note on Commit Messages](#note-on-commit-messages)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

![Prism2 Package Map](./media/p2-package-map.png)

## Developing Prism2

This project uses npm and turborepo to manage dependencies.

```sh
git clone git@ghe.coxautoinc.com:Prism/prism2.git && cd prism2
pnpm install
pnpm storybook
```

## Starting a new project using Prism2

> **IMPORTANT**: This guide assumes that you have access to the CIA Artifactory and that you have [configured your package manager](#artifactory-configuration) to use it as a registry. For assistance with setup, visit the [#artifactory Slack channel](). The latest version of all packages is `2.0.8-alpha.1` as of this writing.

### Step 0: Create a new app

Create a new project -- Here we are using Vite with the React Typescript template. Prism2 should be compatible with any framework though your setup steps may differ.

```
pnpm create vite --template react-ts my-app && cd my-app
```

### Bootstrap PostCSS Tailwind and Prism2


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

## Toolchain

### Stack

#### [turborepo](https://turborepo.org/)

Turborepo provides a ton of improvements when working with monorepos including: script orchestration, build output caching, task pipelines, parallel execution, incremental builds and more.

#### [pnpm](https://pnpm.io/)

When using npm or Yarn, if you have 100 projects using a dependency, you will have 100 copies of that dependency saved on disk. With pnpm, the dependency will be stored in a content-addressable store. (No more dependency conflict hell.)

#### [vite](https://vitejs.dev/)

A build tool that aims to provide a faster and leaner development experience for modern web projects. It provides a lightning fast dev server and highly optimized build commands. (Hot-reloading is pretty much instant.)

#### [esbuild](https://esbuild.github.io/)

Javascript bundler 10-100x faster than Parcel, Rollup or Webpack.  (Build times are seconds rather than minutes.)

#### [tailwindcss](https://tailwindcss.com/)

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. (Clean and consistent APIs for building any type of interface in CSS.)

#### [postcss](https://postcss.org/)

PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more. (JS-powered stylesheet processing provides easier integration and better support for developing native mobile applications.)

#### [typescript](https://www.typescriptlang.org/)

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

#### [docgen](https://github.com/reactjs/react-docgen)

All exported modules include extensive Docgen comments. This allows for Intellisense, autocompletion, inline-documentation, linting and validation right in your editor (VSCode). We can also generate documentation to be injected into tools such as Storybook. This means documentation is always up to date and does not need to be maintained separately. ([Example commented code](https://ghe.coxautoinc.com/Prism/prism2/blob/a311f206fa4bef3f8cb92efb70a9d1c87c4a0601/packages/react-components/lib/Modal/Modal.tsx).)

#### [storybook](https://storybook.js.org/)

A tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

#### [husky](https://typicode.github.io/husky/#/)

Zero-dependency tool for managing Git hooks. Initially, we use [commitlint](https://commitlint.js.org/#/) to enforce the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages.

#### [headlessui](https://headlessui.dev/)

Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS. HeadlessUI will be our default for many common use-cases in React.

#### [github actions](https://github.com/features/actions)

GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.

## Editor Configs

Prism2 includes autocompletion support via Typescript type declarations as well as through Tailwind Intellisense.

- [Tailwind CSS IntelliSense for VSCode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

![React Intellisense](./media/react-intellisense.gif)
![Classname Intellisense](./media/class-intellisense.gif)


## Note on Commit Messages

We have implemented a requirement that all commit messages follow our conventions as [specified by Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Commits are cancelled if your message has any issues - actionable feedback will be provided with an error message.

```sh
git commit -m "chore: README updates for Turborepo"
⧗   input: chore: README updates for Turborepo
✖   subject must not be sentence-case, start-case, pascal-case, upper-case [subject-case]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```
