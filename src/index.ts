#!/usr/bin/env node
import clear from 'clear';

import { fileTransfer } from './lib/fileTransfer';
import { sass } from './sass-mixins/index';

function run(): void {
  clear();

  getUserArgs(process.argv).forEach((arg: string) => {
    if (arg.includes('sass')) {
      sass();
    }
  });
}

function getUserArgs(args: Array<string>): Array<string> {
  return args.splice(2);
}

run();
