'use strict';

var expect = require('chai').expect;
var Filter = require('../src/filter');

describe('ngArrayFilter', function () {
  var filter = new Filter();

  it('array filter exixts', function() {
    expect(!!filter).to.equal(true);
  });

  it('should be able to filter array document', function() {
    var items = [{name: 'fan', brands: ['Lasko', 'GE', 'Hamilton Beach', 'Sunbeam']},
      {name: 'microwave oven', brands: ['GE', 'Hamilton Beach', 'Sunbeam']}];
    var predicate = {brands: 'lasko'};
    var expectedResult = [{name: 'fan', brands: ['Lasko', 'GE', 'Hamilton Beach', 'Sunbeam']}];

    var results = new Filter(items, predicate);
    expect(results).to.deep.equal(expectedResult);
  });

  it('should be able to filter array document with case sensitive', function() {
    var items = [{name: 'fan', brands: ['Lasko', 'GE', 'Hamilton Beach', 'Sunbeam']},
      {name: 'microwave oven', brands: ['GE', 'Hamilton Beach', 'Sunbeam']}];
    var predicate = {brands: 'Lasko'};
    var expectedResult = [{name: 'fan', brands: ['Lasko', 'GE', 'Hamilton Beach', 'Sunbeam']}];

    var results = new Filter(items, predicate, true);
    expect(results).to.deep.equal(expectedResult);
  });

  it('should be able to filter array document with deep predicate', function() {
    var items = [{
      name: 'fan',
      "brands": [{"name": "Lasko", "price": 25}, {"name": "GE", "price": 22.25}, {"name": "Hamilton Beach", "price": 18}, {"name": "Sunbeam", "price": 19}]
    }, {
      name: 'microwave oven',
      "brands": [{"name": "GE", "price": 55.00}, {"name": "Hamilton Beach", "price": 49.99}, {"name": "Sunbeam", "price": 45}]
    }];
    var predicate = {brands: {name: 'Lasko'}};
    var expectedResult = [{
        "name": "fan",
        "brands": [{"name": "Lasko", "price": 25}, {"name": "GE", "price": 22.25}, {"name": "Hamilton Beach", "price": 18}, {"name": "Sunbeam", "price": 19}]
      }
    ];

    var results = new Filter(items, predicate);
    expect(results).to.deep.equal(expectedResult);
  });
});
