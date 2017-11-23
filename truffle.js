require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = process.env.MNEMONIC;
var infuraAccessToken = process.env.INFURA_TOKEN;

console.log('mnemonic', mnemonic);
console.log('infuraAccessToken', infuraAccessToken);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
	networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infuraAccessToken)
      },
      gas: 4700000,
      network_id: 3
    } 
  }
};
