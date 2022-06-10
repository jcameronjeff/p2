# @prism

![Prism2 Package Map](./media/p2-package-map.png)

## Quickstart

This project uses npm and turborepo to manage dependencies.

```sh
git clone git@ghe.coxautoinc.com:Prism/prism2.git && cd prism2
pnpm install
pnpm storybook
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

### Note on Commit Messages

We have implemented a requirement that all commit messages follow our conventions as [specified by Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Commits are cancelled if your message has any issues - actionable feedback will be provided with an error message.

```sh
git commit -m "chore: README updates for Turborepo"
⧗   input: chore: README updates for Turborepo
✖   subject must not be sentence-case, start-case, pascal-case, upper-case [subject-case]

✖   found 1 problems, 0 warnings
ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
```

## Starting a new project

### Scaffolding

```sh
pnpm create vite@latest my-new-app && cd my-new-app
pnpm install -D tailwindcss @prism2/tailwind-preset
pnpx tailwindcss init
```

### Configure PostCSS

Finally, create a postcss config that uses our preset.

```sh
echo "module.exports = require('@prism2/tailwind-preset/postcss.config')" > postcss.config.js
```

## Editor Configs

Prism2 includes autocompletion support via Typescript type declarations as well as through Tailwind Intellisense.

- [Tailwind CSS IntelliSense for VSCode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

![React Intellisense](./media/react-intellisense.gif)
![Classname Intellisense](./media/class-intellisense.gif)
