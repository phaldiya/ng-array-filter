'use strict';
module.exports = /*@ngInject*/
  function(items, predicate, caseSensitive) {
    if (!predicate) { return items; }

    var sensitive = caseSensitive || false;
    var filtered = [];

    try {
      var matchItem = function matchItem(item, predicate) {
        var result = false;
        if (Array.isArray(item)) {
          item.map(function(i) {
            if (!result) {
              result = matchItem(i, predicate);
            }
          });
        } else {
          Object.keys(predicate).forEach(function(key) {
            var value = predicate[key];
            var itemValues = item[key];

            if (!result && itemValues) {
              if (typeof value === 'object') {
                result = matchItem(itemValues, value);
              } else if (Array.isArray(itemValues)) {
                if (sensitive) {
                  result = itemValues.indexOf(value) > -1;
                } else {
                  result = itemValues.map(function(item) {return item.toLowerCase(); }).indexOf(value.toLowerCase()) > -1;
                }
              } else {
                result = sensitive ? (value === itemValues) : (value.toLowerCase() === itemValues.toLowerCase());
              }
            }
          });
        }
        return result;
      };

      items.forEach(function(item) {
        if (matchItem(item, predicate)) {
          this.push(item);
        }
      }, filtered);

    } catch (err) {
      throw err;
    }

    return filtered;
  };
