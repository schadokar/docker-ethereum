const fs = require("fs");
const Web3 = require("web3");


let web3;
let web3Network;

  
  // local ganache-cli setup
  const eventProvider = new Web3.providers.WebsocketProvider(
    "ws://ganache:8545"
  );

  if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://ganache:8545"));
  }

  web3Network = "ganache";
  web3.setProvider(eventProvider);

module.exports = {
  web3,
  web3Network
};