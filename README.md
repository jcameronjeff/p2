# prism2

![Prism2 Package Map](./media/p2-package-map.png)





This project uses lerna to manage monorepo dependencies.

```
// anywhere locally
npm install -g lerna
```

Use the built-in lerna commands to install dependencies across packages.

```
// from anywhere in the repo
lerna bootstrap
```

Start a Storybook dev session using the contents of `packages/react-components/stories`

```
// from anywhere in the repo
lerna run storybook --stream
```

## Starting a new project

```sh
// from ./packages directory
npm create vite@latest my-new-app --template react-ts
cd my-new-app
npm install
npm install -D tailwindcss @prism2/tailwind-preset @prism2/tailwind-theme @prism2/tailwind-elements postcss
npx tailwindcss init
```

Finally, create a `postcss.config.js` file in the root of your new project and add this:

```js
module.exports = require('@prism2/tailwind-preset/postcss.config')
```

Start your app and enjoy Prism2 flavored Tailwind3  :

```js
lerna run dev --scope=my-new-app
```


## Editor Configs

Prism2 includes autocompletion support via Typescript type declarations as well as through Tailwind Intellisense.

- [Tailwind CSS IntelliSense for VSCode](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

![React Intellisense](./media/react-intellisense.gif)
![Classname Intellisense](./media/class-intellisense.gif)
