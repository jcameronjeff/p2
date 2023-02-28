module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require("postcss-nested")({
      bubble: ["screen"],
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-extend-rule'),
    require('postcss-apply'),
    require('postcss-minify'),
    require('cssnano'),
  ],
};
