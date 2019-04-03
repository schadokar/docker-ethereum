const fs = require("fs-extra");
const path = require("path");
const {web3, web3Network} = require("./web3");
const compiledContract = require("./build/Message.json");
const circularJSON = require('circular-json');

const deploy = async (mymessage) => {
    try {
        let receiptPath;
    if (web3Network == "ganache") {
        receiptPath = path.resolve("ethereum","receipt-"+web3Network+".json");
        console.log(`---------- receipt path -------- ${receiptPath}`);
    }
    else if (web3Network == "rinkeby") {
        receiptPath = path.resolve("ethereum","receipt-"+web3Network+".json");
        console.log(`---------- receipt path -------- ${receiptPath}`);
    }

    const accounts = await web3.eth.getAccounts();
    console.log(`Attempting to deploy from account , ${accounts[0]}`);

    if(fs.existsSync(receiptPath)){
        fs.removeSync(receiptPath);
        console.log("receipt file deleted");    
        fs.ensureFileSync(receiptPath);
        console.log("receipt file created");
    }
    else {
        fs.ensureFileSync(receiptPath);
        console.log("receipt file created");
    }
console.log(compiledContract.bytecode);
    const result = await new web3.eth.Contract(
        JSON.parse(compiledContract.interface)
    )
    .deploy({data: compiledContract.bytecode, arguments: [mymessage]})
    .send({gas: 3000000, from: accounts[0]});
console.log(result);
    console.log(`Contract deployed to , ${result.options.address}`);

    const serialised = circularJSON.stringify(result.options);
    fs.writeJsonSync(receiptPath,result.options);
   
    console.log("receipt saved successfully");
    return await serialised;
    } catch (error) {
        console.error(error);
        return error;
    }
}

// deploy("hello world");
module.exports = deploy;