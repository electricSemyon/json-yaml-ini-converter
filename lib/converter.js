'use strict';
const iniConverter = require('ini');
const yamlConverter = require('yamljs');

function decode(path, stringToDecode) {
  let decodedString;
  const format = path.split('.')[path.split('.').length - 1];

  if (format !== 'yaml' && format !== 'json' && format !== 'ini') {
    throw new Error('Wrong entry format!');
  }

  switch (format) {
    case 'yaml':
      decodedString = yamlConverter.parse(stringToDecode);
      break;
    case 'ini':
      decodedString = iniConverter.parse(stringToDecode);
      break;
    case 'json':
      decodedString = JSON.parse(stringToDecode);
      break;
    default:
      return null;
  }
  console.log('Decoded successfully from: %s', path);
  return decodedString;
}

function encode(path, objToEncode) {
  let encodedString;
  const format = path.split('.')[path.split('.').length - 1];

  if (format !== 'yaml' && format !== 'json' && format !== 'ini') {
    throw new Error('Wrong export format!');
  }

  switch (format) {
    case 'yaml':
      encodedString = yamlConverter.stringify(objToEncode);
      break;
    case 'ini':
      encodedString = iniConverter.encode(objToEncode);
      break;
    case 'json':
      encodedString = JSON.stringify(objToEncode);
      break;
    default:
      return null;
  }
  console.log('Encoded successfully to %s', path);
  return encodedString;
}

module.exports.decode = decode;
module.exports.encode = encode;
