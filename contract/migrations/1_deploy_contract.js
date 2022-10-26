const Number = artifacts.require("Number");
const protocolConfig = require("../truffle-config.js").protocolConfig;

module.exports = function (deployer) {
  deployer.deploy(Number, protocolConfig.owner);
};
