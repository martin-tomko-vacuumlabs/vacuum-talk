import Web3 from "web3";
import { AbiItem } from "web3-utils";
import numberBuild from "./artifacts/Number.js";

const CHAIN_URI = "https://rpc-devnet-cardano-evm.c1.milkomeda.com";
const CONTRACT_ADDRESS = "0x94E0f646D481578F87d2978eC2d84dfe24EB5c34";
const CONTRACT_CREATION_BLOCK_HEIGHT = 7616233;

async function main() {
    const web3 = new Web3(CHAIN_URI);
    const contract = new web3.eth.Contract(numberBuild.abi as AbiItem[], CONTRACT_ADDRESS);
    const events = await contract.getPastEvents("ValueSet", {
        fromBlock: CONTRACT_CREATION_BLOCK_HEIGHT
    });

    for (const e of events) {
        const blockNumber = e.blockNumber;
        const oldValue = e.returnValues.oldValue;
        const newValue = e.returnValues.newValue;
        console.log(`${blockNumber}: Changed ${oldValue} to ${newValue}`);
    }
}

main();