#!/usr/bin/env node

const { execFile } = require('node:child_process');

if (process.argv.length < 3) {
  console.log('Usage: node cli.js <cmd> ...');
  process.exit(1);
}

let cmd = process.argv[2];
let args = process.argv.slice(3);

execFile(cmd, args, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  if (stdout)
    console.log(stdout);
  if (stderr)
    console.error(stderr);
});
