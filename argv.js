'use strict';

var env = process.env.NODE_ENV || 'development';

if (require.main === module) {
  main({ argv: process.argv })
}

function main(options) {
  var argv = options.argv;
  var name = argv[2];

  console.log('Hi, ' + name + ' : ' + env);
}
