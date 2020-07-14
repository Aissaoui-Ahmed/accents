#!/usr/bin/env -S node --experimental-json-modules --no-warnings

import yargs from 'yargs';
import { remove, check } from '../src/index.js';

const cli = yargs
  .usage('\nRemove or check accents on string any language\n\nUsage: --remove [String] || --check [String]')
  .option('h', {
    alias: 'help',
    describe: 'Show help',
  })
  .option('c', {
    alias: 'check',
    desc: 'Check accents on string',
    type: 'string',
  })
  .option('r', {
    alias: 'remove',
    desc: 'Remove accents on string',
    type: 'string',
  })
  .argv;

remove(cli.r);
check(cli.c);
