'use strict';
const iniConverter = require('ini');
const yamlConverter = require('yamljs');

function decode(format, stringToDecode) {
  let decodedString;

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
      throw new Error('Wrong entry format!');
  }
  return decodedString;
}

function encode(format, objToEncode) {
  let encodedString;

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
      throw new Error('Wrong export format!');
  }
  return encodedString;
}

module.exports.decode = decode;
module.exports.encode = encode;
