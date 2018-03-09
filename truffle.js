// Allows us to use ES6 in our migrations and tests.
var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "WqDFeWbMMM5qFzon2C7O";
var mnemonic = "lemon waste spend three remove render name fiber yard issue minute embark";

/*
require('babel-register')
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gas: 470000
    }
  }
}
*/

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      gas: 450000,
      network_id: 3
    }
  }
};