const fs = require("fs");
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

require("dotenv").config();

let web3;
let web3Network;
console.log("NODE_ENV", process.env.NODE_ENV);

if (process.env.NODE_ENV == "GANACHE" || process.env.NODE_ENV == undefined) {
  // web3 = new Web3(ganache.provider());

  // local ganache-cli setup
  const eventProvider = new Web3.providers.WebsocketProvider(
    "ws://0.0.0.0:8545"
  );

  if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://0.0.0.0:8545"));
  }

  web3Network = "ganache";
  web3.setProvider(eventProvider);

} else {
  
  // Rinkeby network setup
  const provider = new HDWalletProvider(
    process.env.TRUFFLE_HD_WALLET_KEY,
    process.env.INFURA_API
  );
  web3 = new Web3(provider);
  web3Network = "rinkeby";
}

module.exports = {
  web3,
  web3Network
};