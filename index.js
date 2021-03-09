var _ = require('underscore');

//its either a core module, a file or folder or its under node_modules

var result = _.contains([1,2,3], 2);
console.log(result);
