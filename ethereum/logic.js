const fs = require("fs-extra");
const {web3} = require("./web3");
const compileContract = require("./build/Message.json");

// Contract object deployed on network (ganache-cli or testnet or mainnet)
// network can be selected in web3 file

const getContractObject = () => {
    let contractReceipt;
    contractReceipt = require("./receipt-ganache.json");

    const contractObject = new web3.eth.Contract(
        JSON.parse(compileContract.interface),
        contractReceipt.address
    );

    return contractObject;
};

const setMessage = async (newMessage) => {
    const accounts = await web3.eth.getAccounts();
    const contractObject = getContractObject();
    const receipt = await contractObject.methods
                    .setMessage(newMessage)
                    .send({from : accounts[0], gas:1000000});
    console.info(receipt);
    console.info("Message successfully saved!");
    return receipt;
};

const getMessage = async () => {
    const contractObject = getContractObject();
    const accounts = await web3.eth.getAccounts();
    const result = await contractObject.methods
                   .getMessage()
                   .call({from:accounts[0]});
    console.log(result);
    return result;
};


module.exports = {
    setMessage,
    getMessage
};