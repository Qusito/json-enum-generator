#!/usr/bin/env node
import yargs from 'yargs';
import fs from 'fs';
import * as ejs from 'ejs'

const args = yargs.options({
    'input': { type: 'string', demandOption: true, alias: 'i'},
    'output': { type: 'string', demandOption: true, alias: 'o'},
    'language': { type: 'string', demandOption: true, alias: 'l'}
}).argv;

const data = JSON.parse(fs.readFileSync(args.input, 'utf-8'));
const template = fs.readFileSync('template/enum.template.ejs', 'utf-8');

const temp = Object.keys(data);
let keys: string[] = []
temp.forEach(key => keys.push(key.toUpperCase()));

const options = {
    enumName: args.language + 'Translation',
    keys: keys,
    values: data
}

const result = ejs.render(template, options);

fs.writeFileSync(args.output + `/${options.enumName}.ts`, result, { encoding: 'utf-8'});

console.info(`TypeScript enum ${options.enumName}.ts written to ${args.output}`);