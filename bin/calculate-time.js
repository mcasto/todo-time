#!/usr/bin/env node

const defaultPath = require('path').join(process.cwd(), "TODO");

const argv = require('yargs')
	.default('path', defaultPath)
	.argv

// if _ isn't defined, use defaultPath
let path = (argv._.length > 0) ? argv._.join(' ') : argv.path;

// check for file existence
if (!require('fs').existsSync(path)) {
	throw new Error(`Defined path to file does not exist: ${path}`)
} else {
	// if it exists, pass it to ./lib/project-time
	require('../lib/parse-calc').parseCalc(path);
}
