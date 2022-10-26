import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers } from "ethers";

import numberBuild from "./artifacts/Number.js";

const CHAIN_URI = "https://rpc-devnet-cardano-evm.c1.milkomeda.com";
const CONTRACT_ADDRESS = "0x94E0f646D481578F87d2978eC2d84dfe24EB5c34";

interface Window {
    ethereum: MetaMaskInpageProvider;
}

function getNumberContract(provider: ethers.providers.BaseProvider, address: string): ethers.Contract {
    return new ethers.Contract(address, numberBuild.abi, provider);
}

export async function userWalletLogin(): Promise<string> {
    let accounts;
    try {
        accounts = (await (window as any as Window).ethereum.request({
            method: "eth_requestAccounts",
        })) as string[];
    } catch (e) {
        console.error(e);
    }
    if (!accounts) {
        throw new Error("Problem while retreiving accounts");
    } else {
        return accounts[0];
    }
}

export async function getValue(): Promise<string> {
    const provider = ethers.getDefaultProvider(CHAIN_URI);
    let cislo = getNumberContract(provider, CONTRACT_ADDRESS);
    return cislo.functions.get().then(res => res.toString(10));
}

export async function setValue(newValue: string, wallet: string) {
    const provider = ethers.getDefaultProvider(CHAIN_URI);
    let cislo = getNumberContract(provider, CONTRACT_ADDRESS);

    const unsigned = await cislo.populateTransaction.set(newValue);

    let tx = {
        ...unsigned,
        to: CONTRACT_ADDRESS,
        from: wallet,
    };

    return (window as any as Window).ethereum.request({
        method: "eth_sendTransaction",
        params: [tx],
    });
}