const Number = artifacts.require("Number");
const contractConfig = require("../truffle-config.js").contractConfig;

module.exports = function (deployer) {
  deployer.deploy(Number, contractConfig.owner);
};
