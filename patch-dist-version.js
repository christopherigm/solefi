const fs = require('fs');
const filename = './version.js';

if ( !fs.existsSync(filename) ) {
  fs.writeFileSync(filename,
    'module.exports = "0.0.0";',
    {
      mode: (0o777 & ~process.umask()).toString(8)
    }
  );
}

const dist_version = require(filename);

const a = dist_version.split('.');

if ( Number(a[2]) === 9 ) {
  if ( Number(a[1]) === 9 ) {
    a[0] = Number(a[0]) + 1;
    a[1] = 0;
  } else {
    a[1] = Number(a[1]) + 1;
  }
  a[2] = 0;
} else {
  a[2] = Number(a[2]) + 1;
}

fs.writeFileSync(filename,
  `module.exports = "${a[0]}.${a[1]}.${a[2]}";`
);

return;
