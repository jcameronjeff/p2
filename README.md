# prism2

![Prism2 Package Map](./media/p2-package-map.png)

This project uses lerna to manage monorepo dependencies.

```
npm install -g lerna
```

Use the built-in lerna commands to install dependencies across packages.

```
lerna bootstrap
```

Start a Storybook dev session using the contents of `packages/react-components/stories`

```
lerna run storybook --stream
```

