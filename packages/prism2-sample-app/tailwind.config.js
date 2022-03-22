/**
 * @remark Our TailwindCSS preset is intended to quickstart app development at Mannheim
 * by applying our basic branding guidelines to Tailwind out of the box.
 *
 * @abstract Provide a set of presets that include our base theme for PRISM.
 */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./lib/**/*.{vue,js,ts,jsx,tsx}",
  ],
  presets: [
    require('@prism2/tailwind-preset')
  ]
}
