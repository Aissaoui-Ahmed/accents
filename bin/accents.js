#!/usr/bin/env node --experimental-json-modules --no-warnings

import yargs from 'yargs';
import { remove, check, hasAccent } from '../src/index.js';

const cli = yargs
  .usage('\nRemove or check accents on string any language\n\nUsage: --remove [String] || --check [String] || --hasAccent [String]')
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
  .option('has', {
    alias: 'hasAccent',
    desc: 'if has string accents',
    type: 'string',
  })
  .argv;

if (typeof cli.r !== 'undefined') remove(cli.r);
if (typeof cli.c !== 'undefined') check(cli.c);
if (typeof cli.has !== 'undefined') hasAccent(cli.has);
