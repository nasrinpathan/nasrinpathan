const { makeBadge } = require('badge-maker');
const fs = require('fs');

const format = {
  label: 'Achievement',
  message: 'Blue Square',
  color: 'blue',
  style: 'flat-square'
};

const svg = makeBadge(format);
fs.writeFileSync('achievement-blue.svg', svg);
