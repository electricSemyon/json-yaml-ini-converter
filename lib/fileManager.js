const fs = require('fs');

function getFile(path) {
  if (fs.existsSync(path)) {
    return fs.readFileSync(path, 'utf8');
  } else {
    throw new Error(path);
  }
}

function writeToFile(path, content) {
  if (content === '') {
    console.warn('Encoded file is empty!');
  }

  fs.writeFileSync(path, content);
}

function getFilesFromDir(path) {
  const files = fs.readdirSync(path);
  return files;
}

function makeDirWithConvertedFiles(path) {
  const dirName = path + '/converted-' + new Date().getTime().toString();
  fs.mkdirSync(dirName);
  return dirName;
}

function getFormat(path) {
  return path.split('.')[path.split('.').length - 1];
}

function isFile(path) {
  if (!fs.lstatSync(path).isDirectory()) {
    return true;
  } else {
    return false;
  }
}

module.exports.getFile = getFile;
module.exports.writeToFile = writeToFile;
module.exports.getFilesFromDir = getFilesFromDir;
module.exports.makeDirWithConvertedFiles = makeDirWithConvertedFiles;
module.exports.getFormat = getFormat;
module.exports.isFile = isFile;
