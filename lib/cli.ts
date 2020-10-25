#!/usr/bin/env node
import yargs from 'yargs';
import fs from 'fs';
import * as ejs from 'ejs'

const args = yargs.options({
    'input': { type: 'string', demandOption: true, alias: 'i'},
    'output': { type: 'string', demandOption: true, alias: 'o'},
    'enumName': { type: 'string', demandOption: true, alias: 'n'},
    'fileName': { type: 'string', demandOption: false, alias: 'f'}
}).argv;

const data = JSON.parse(fs.readFileSync(args.input, 'utf-8'));
const template = fs.readFileSync('template/enum.template.ejs', 'utf-8');

const temp = Object.keys(data);
let keys: string[] = []
temp.forEach(key => keys.push(key.toUpperCase()));

const fileName = args.fileName || args.enumName;

const options = {
    enumName: args.enumName,
    keys: keys,
    values: data,
    fileName: fileName
};

const result = ejs.render(template, options);

fs.writeFileSync(args.output + `/${options.fileName}.ts`, result, { encoding: 'utf-8'});

console.info(`TypeScript enum ${options.enumName}.ts written to ${args.output}`);