# @prism2/tailwind-preset

This package provides a [preset for TailwindCSS](https://tailwindcss.com/docs/presets) that applies PRISM design standards to your Tailwind projects. See an [example app in prism2-proto](../prism2-proto)


### Installation

```cli
yarn add @prism2/tailwind-preset
```

Simply add the preset to you `tailwind.config.js` file.

```js
module.exports = {
  presets: [
    require('@prism2/tailwind-preset')
  ],
}
```

### What's included?

This preset will apply the PRISM design standards for:

| Theme | Values | TW Class examples |
| ---------- | ------------ | ---- |
| **Fonts** | --- | -- |
| `sans` | Roboto, etc. | `.font-sans` |
| `alt` | Roboto Condensed, etc | `.font-alt` |
| **Color Utility** | --- | -- |
| accent | '#ff5ba8' | `.bg-accent` |
| 'navy' | '#003468' | `.bg-navy` |
| 'navy-dark' | '#001b35' | `.bg-navy-dark` |
| 'primary' | '#005ba8' | `.bg-primary` |
| 'primary-dark' | '#004986' | `.bg-primary-dark` |
| 'cerulean-light' | '#c1dff2' | `.bg-cerulean-light` |
| 'cerulean' | '#2c90cc' | `.bg-cerulean` |
| 'cerulean-dark' | '#2372a2' | `.bg-cerulean-dark` |
| 'gold-light' | '#fff0c3' | `.bg-gold-light` |
| 'gold' | '#ffc20e' | `.bg-gold` |
| 'gold-dark' | '#ebb000' | `.bg-gold-dark` |
| 'meadow-light' | '#e3fad1' | `.bg-meadow-light` |
| 'scarlet-light' | '#fcccc0' | `.bg-scarlet-light` |
| **Font Sizes** | --- | -- |
| 3xl | '26px' | `.text-3xl` |
| 2xl | "22px" | `.text-2xl` |
| xl | "20px" | `.text-xl` |
| lg | "18px" | `.text-lg` |
| base | "16px" | `.text-base` |
| sm | "14px" | `.text-sm` |
| xs | "12px | `.text-xs` |
| **Radius** | --- | -- |
| 'lg' | 7px | `.rounded-lg` |
| 'md' | 4px | `.rounded-md` |
| 'sm' | 7px | `.rounded-sm` |

## Plugins

- @tailwindcss/typography
- @tailwindcss/forms
