const { makeBadge } = require('badge-maker');
const fs = require('fs');

const format = {
  label: 'Achievement',
  message: 'Blue Square',
  color: 'blue',
  style: 'flat-square'
};

fs.writeFileSync('achievement-blue.svg', makeBadge(format));
