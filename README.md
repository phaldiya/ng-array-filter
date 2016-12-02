ngArrayFilter
=====================

> an angularJS array filter, that supports deep document filtering

## Getting started ##

### Prerequisites
If you do not have nodejs installed on your machine, download and install [NodeJS](http://nodejs.org/).<br/>


### Installation
Install ng-array-filter npm package [ng-array-filter](https://www.npmjs.org/package/ng-array-filter)</a>:<br/>

**With Bower:**

```
$ cd <project path>
bower install --save ng-array-filter
```

**With NPM:**

```
$ cd <project path>
npm install --save ng-array-filter
```


##  How to use


1. Import the ```dist/ng-array-filter.min.js``` script and include the module ```ng-array-filter``` into app.js

2. **OR** ```require('ng-array-filter')``` into app.js.

3. Use it as an angular filter:

```javascript
var ctrl.items = [
    {
      name: 'fan', 
      brands: ['Lasko', 'GE', 'Hamilton Beach', 'Sunbeam']
    },
    {
      name: 'microwave oven', 
      brands: ['GE', 'Hamilton Beach', 'Sunbeam']
    }
  ];
```

```html
<!--
to get the all items that have brand **Lasko**
-->
<div ng-repeat="item in ctrl.items | ngArrayFilter: {brands: 'lasko'}">
...
</div>

<!--
Want case sensitive filtering?
pass boolean parameter caseSensitive
-->
<div ng-repeat="item in ctrl.items | ngArrayFilter: {brands: 'Lasko'}: true">
...
</div>

```
**deep query**

```javascript
var ctrl.items = [
    {
     name: 'fan',
     "brands": [
        {"name": "Lasko", "price": 25}, 
        {"name": "GE", "price": 22.25}, 
        {"name": "Hamilton Beach", "price": 18}, 
        {"name": "Sunbeam", "price": 19}
      ]
    }, 
    {
     name: 'microwave oven',
     "brands": [
        {"name": "GE", "price": 55.00}, 
        {"name": "Hamilton Beach", "price": 49.99}, 
        {"name": "Sunbeam", "price": 45}
      ]
    }
  ];
```

```html
<!--
to get the all items that have brand name **Lasko**
-->

<div ng-repeat="item in ctrl.items | ngArrayFilter: {brands: {name: 'Lasko'}}">
...
</div>
```


## Contributing
* If you planning add some feature please **create issue before**.
* Don't forget about tests.

Clone the project: <br/>
```bash
$ git clone
$ npm install
$ bower install
```
Run the tests:
```bash
$ mocha
```
**Deploy:**<br/>
Run the build task, update version before(bower,package)
```bash
$ gulp build
$ git tag v*.*.*
$ git push origin master --tags
```

## Issues
If you do find an issue or have a question consider posting it on the [Issues](https://github.com/phaldiya/ng-array-filter/issues).
