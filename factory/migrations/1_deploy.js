require("dotenv").config();
const DustSwapFactory = artifacts.require("DustSwapFactory");

module.exports = async function(deployer) {
  try {
    await deployer.deploy(DustSwapFactory, process.env.OPERATOR_ADDRESS, {
      gas: 3000000,
      from: process.env.OPERATOR_ADDRESS,
      chainId: +process.env.CHAIN_ID,
    });
  } catch (err) {
    console.log(err);
  }
};
