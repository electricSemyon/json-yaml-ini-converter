'use strict';
const converter = require('./converter');
const fileManager = require('./fileManager');

const args = process.argv;

function convert(fromFile, toFile) {
  const tempObject = converter.decode(fromFile, fileManager.getFile(fromFile));
  fileManager.writeToFile(toFile, converter.encode(toFile, tempObject));
}

convert(args[2], args[3]);

module.exports.convert = convert;
