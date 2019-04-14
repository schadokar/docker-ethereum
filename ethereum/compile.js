const fs = require("fs-extra");
const path = require("path");
const solc = require("solc");

const compile = () => {
    try {
    // build path where compiled contract will save
    const buildPath = path.resolve(__dirname,"./build");

    // remove the build folder if it exist
    fs.removeSync(buildPath);

    // path of the Smart Contract
    const contractPath = path.resolve(__dirname,"./contracts","Message.sol");
    
    // Read the Smart Contract
    const source = fs.readFileSync(contractPath, "utf8");

    // Compile the smart contract
    const output = solc.compile(source, 1).contracts[":Message"];
    
    // Create the build folder if it not exist 
    fs.ensureDirSync(buildPath);
    
    // Save the output in json format
    fs.outputJSONSync(path.resolve(buildPath, "Message"+".json"), output);

    return "Contract compiled successfully!"
    } catch (error) {
        console.error(error);
        return error;
    }
};

// console.log(compile());

module.exports = compile;