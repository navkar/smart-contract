const assert = require('assert');
const ganache = require('ganache-cli');
// construction function
const Web3 = require('web3');
// web3 = instance
const web3 = new Web3(ganache.provider());
