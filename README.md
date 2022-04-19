# prism2


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

