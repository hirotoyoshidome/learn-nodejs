'use strict';

const crypto = require('crypto');
const ripemd160 = require('ripemd160')

var planeText = "helloWorld";

// sha256
var sha256 = crypto.createHash('sha256');
sha256.update(planeText);

// ripemd160
var ripemd = new ripemd160();
ripemd.update(planeText);

var hashSha256 = sha256.digest('hex');
var hashRipemd160 = ripemd.digest('hex');


console.log("SHA256 : " + hashSha256);
console.log("RIPEMD160 : " + hashRipemd160);


