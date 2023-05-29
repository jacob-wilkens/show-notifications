const path = require('path');

const buildEslintCommand = (filenames) => `next lint --quiet --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => buildEslintCommand(filenames),
  '*.{js,jsx,ts,tsx, json}': 'prettier --write',
};
