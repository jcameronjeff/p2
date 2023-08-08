const fs = require('fs');
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

// Get the full config, including defaults
const fullConfig = resolveConfig(tailwindConfig);

// Convert the config object to a string
const configString = JSON.stringify(fullConfig.theme, null, 2);

// Write the config to a file
fs.writeFile('themeTokens.json', configString, (err) => {
  if (err) {
    console.error('Error writing file', err);
  } else {
    console.log('Successfully wrote themeTokens.json');
  }
});