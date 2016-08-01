var fs = require('fs');

function getFile (path) {
  if (fs.existsSync(path)) {
    return fs.readFileSync(path, 'utf8');
  }else{
    throw new Error('Entry file + "%s" does not exist!', path);
  }
}

function writeToFile (path, content) {
  if(content==''){
    console.warn('Encoded file is empty!');
  }
  fs.writeFileSync(path, content);
}

module.exports.getFile = getFile;
module.exports.writeToFile = writeToFile;
