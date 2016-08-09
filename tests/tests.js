'use strict'
const assert = require('assert');
const converter = require('../lib/converter');
const fm = require('../lib/fileManager');
const expect = require('chai').expect;

let fixtures = [];

fixtures[0] = fm.getFile('./tests/fixtures/1.ini'); //ini fixture
fixtures[1] = fm.getFile('./tests/fixtures/1.json'); //json fixture
fixtures[2] = fm.getFile('./tests/fixtures/1.yaml'); //yaml fixture

describe('converter', function () {
  const objectToTest = {
    name: 'Egor',
    age: '18',
    sampleObject: {
      color: 'red',
    },
  };

  it('encode testing', function () {
    expect(fixtures[2] === converter.encode('yaml', objectToTest)).to.be.true;
    expect(fixtures[0] === converter.encode('ini', objectToTest)).to.be.true;
    //expect(fixtures[1] === converter.encode('json', objectToTest)).to.be.true;
  });

  it('decode testing', function () {
    expect(objectToTest).to.deep.equal(converter.decode('json', fixtures[1]));
    expect(objectToTest).to.deep.equal(converter.decode('ini',  fixtures[0]));
    expect(objectToTest).to.deep.equal(converter.decode('yaml', fixtures[2]));
  });
});

function removeSpaces(string) {
  return string.replace(/(\r\n|\n|\r|\s)/gm, '');
}
