'use strict';

var ngArrayFilter = angular.module('ng-array-filter', []);
ngArrayFilter.filter('ngArrayFilter', [function() {
  return require('./filter');
}]);
