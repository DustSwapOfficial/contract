const eth = require("ethereumjs-util");

const DustSwapPair = require("../build/contracts/DustSwapPair.json");

// Hash of the bytecode is fixed. Calculated with eth.keccak256():
var bytecodeHash = eth.keccak256(DustSwapPair.bytecode).toString("hex");

// var bytecodeHash = eth.keccak256(`${bytecode}`).toString("hex");

console.log(bytecodeHash);
