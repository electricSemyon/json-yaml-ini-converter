const assert = require('assert');
const converter = require('../lib/converter');

describe('converter', function () {
  const objectToTest = {
    name: 'Egor',
    age: 18,
    sampleObject: {
      color: 'red',
    },
  };

  it('encode testing', function () {
    assert.equal('{"name":"Egor","age":18,"sampleObject":{"color":"red"}}', converter.encode('json', objectToTest)); // test json

    assert.equal(removeSpaces('name: Egor age: 18 sampleObject: color: red'), // test yaml
                     removeSpaces(converter.encode('yaml', objectToTest)));

    assert.equal(removeSpaces('name=Egor age=18 [sampleObject] color=red'), // test ini
                     removeSpaces(converter.encode('ini', objectToTest)));
  });

  it('decode testing', function () {
    assert.equal(JSON.stringify(objectToTest), // test json. I used JSON.stringify, because of javasrcipt doesn`t allow you to compare two objects :(
                     JSON.stringify(converter.decode('json', '{"name":"Egor","age":18,"sampleObject":{"color":"red"}}')));

    assert.equal(JSON.stringify(objectToTest),
                     JSON.stringify(converter.decode('ini', "name='Egor'\r\n" + // ini
                                                            "age='18'\r\n" +
                                                            '[sampleObject]\r\n' +
                                                            'color=red\r\n')));
    assert.equal(JSON.stringify(objectToTest),
                     JSON.stringify(converter.decode('yaml', 'name: Egor\r\n' + // yaml
                                                             'age: 18\r\n' +
                                                             'sampleObject:\r\n' +
                                                             '    color: red\r\n')));
  });
});

function removeSpaces(string) {
  return string.replace(/(\r\n|\n|\r|\s)/gm, '');
}
