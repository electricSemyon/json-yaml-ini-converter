'use strict';
const converter = require('../lib/converter');
const fileManager = require('../lib/fileManager');

const args = process.argv;

function convert (fromFile, toFile) {
  const fromFileFormat = fileManager.getFormat(fromFile);
  const tempObject = converter.decode(fromFileFormat, fileManager.getFile(fromFile));
  const toFileFormat = fileManager.getFormat(toFile);

  fileManager.writeToFile(toFile, converter.encode(toFileFormat, tempObject));
}

function convertDir (fromDir, toDir, format) {
  const folder = fileManager.makeDirWithConvertedFiles(toDir);
  const filesToConvert = fileManager.getFilesFromDir(fromDir);

  for(let i in filesToConvert){
    if(fileManager.isFile(fromDir + '/' + filesToConvert[i])){
      convert(
        fromDir + '/' + filesToConvert[i], folder + '/' + filesToConvert[i].split('.')[0] + '.' + format);
      }
    }
}

if (args[2] === 'convert') { convert(args[3], args[4]); }
else if (args[2] === 'convertDir') { convertDir(args[3], args[4], args[5]); }

module.exports.convert = convert;
module.exports.convertDir = convertDir;
