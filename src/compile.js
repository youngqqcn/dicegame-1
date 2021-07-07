// 'use strict';

const path = require("path");
const fs = require("fs");
const solc = require("solc");

// const srcpath = path.resolve(__dirname, "contracts", "dice.sol");
const srcpath = path.resolve(__dirname, "contracts", "Create.sol");
// console.log(srcpath);


const source = fs.readFileSync(srcpath, 'utf-8');
// console.log(source);

const result =  solc.compile(source, 1);
console.log(result);

// module.exports = result.contracts[':Dice2Win'];   //导出编译结果, 部署合约时需要用到

// module.exports = result.contracts[':Parent'];   //导出编译结果, 部署合约时需要用到
module.exports = result.contracts[':Suicide'];   //导出编译结果, 部署合约时需要用到
