/**
 * ng-array-filter
 * an angularJS array filter, that supports deep document filtering
 * @author Pradeep K Haldiya <pradeep.haldiya@gmail.com>
 * @version v0.0.2
 * @license MIT
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
module.exports = /*@ngInject*/
function (items, predicate, caseSensitive) {
  if (!predicate)
    return items;
  var sensitive = caseSensitive || false;
  var filtered = [];
  try {
    var matchItem = function matchItem(item, predicate) {
      var result = false;
      if (Array.isArray(item)) {
        item.map(function (i) {
          if (!result) {
            result = matchItem(i, predicate);
          }
        });
      } else {
        Object.keys(predicate).forEach(function (key) {
          var value = predicate[key];
          var itemValues = item[key];

          if (!result) {
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

    items.forEach(function (item) {
      if (matchItem(item, predicate)) {
        this.push(item);
      }
    }, filtered);

  }catch(err) {
    throw err;
  }
  return filtered;
};

},{}],2:[function(require,module,exports){
'use strict';

var ngArrayFilter = angular.module('ng-array-filter', []);
ngArrayFilter.filter('ngArrayFilter', [function() {
  return require('./filter');
}]);

},{"./filter":1}]},{},[2]);
