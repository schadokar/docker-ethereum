const fs = require("fs-extra");
const path = require("path");
const solc = require("solc");

const compile = () => {
    try {
        const buildPath = path.resolve(__dirname,"./build");
    fs.removeSync(buildPath);

    const contractPath = path.resolve(__dirname,"./contracts","Message.sol");
   
    const source = fs.readFileSync(contractPath, "utf8");
    const output = solc.compile(source, 1).contracts;

    fs.ensureDirSync(buildPath);

    for(let contract in output) {
        fs.outputJSONSync(
            path.resolve(buildPath, contract.replace(":","")+".json"),
            output[contract]
        );
    }

    return "Contract compiled successfully!"
    } catch (error) {
        console.error(error);
        return error;
    }
};

console.log(compile());

module.exports = compile;