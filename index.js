#! /usr/bin/env node

const program = require('commander');
const rimraf = require('rimraf');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const pak = require('./package.json');
const ROOT = './';

program
  .option('-p, --path <value>', 'delete the entered directory (relative path)')
  .version(pak.version)
  .parse(process.argv);

if (program.path) {
  rmrf([program.path]);
} else {
  main();
}

function rmrf (dirs) {
  inquirer
    .prompt([
      {
        name: 'confirm',
        type: 'confirm',
        message: 'whether to delete the directory: ' + dirs,
        choices: dirs,
        default: true
      }
    ])
    .then(answers => {
      if (answers.confirm) {
        dirs.forEach(dir => {
          const _dir = path.join(ROOT, dir);
          console.log(`delete: ${_dir}`);
          rimraf.sync(_dir);
        });
        console.log('done');
      } else {
        throw new Error('cancel');
      }
    })
    .catch(err => {
      console.log(err.message);
    });
}

function main () {
  let rmrfDir;
  const dirs = fs.readdirSync(ROOT).filter(file => fs.statSync(path.join(ROOT, file)).isDirectory());
  inquirer
    .prompt([
      {
        name: 'dir',
        type: 'checkbox',
        message: 'select directory and delete:',
        choices: dirs
      }
    ])
    .then(answers => {
      rmrfDir = answers.dir;
      if (rmrfDir.length === 0) {
        throw new Error('cancel');
      }
      rmrf(rmrfDir);
    })
    .catch(err => {
      console.log(err.message);
    });
}
