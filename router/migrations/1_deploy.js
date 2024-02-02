require("dotenv").config();
const DustSwapRouter = artifacts.require("DustSwapRouter");
const { WETH } = require("../constant");

module.exports = async function(deployer) {
  try {
    await deployer.deploy(
      DustSwapRouter,
      "" /* Replace your factory address at here */,
      WETH,
      {
        gas: 4000000,
        from: process.env.OPERATOR_ADDRESS,
        chainId: +process.env.CHAIN_ID,
      }
    );
  } catch (err) {
    console.log(err);
  }
};
