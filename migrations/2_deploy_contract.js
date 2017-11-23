var KairosToken = artifacts.require("KairosToken");

module.exports = function(deployer) {
  deployer.deploy(KairosToken, {gas: 100000000});
};