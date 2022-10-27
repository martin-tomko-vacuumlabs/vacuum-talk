# Vacuumlabs Brno DApp Talk Resources

This repository contains simple example projects used for demonstration in a talk titled "Jumping Into Coding DApps: A Beginner's Perspective" planned for 2022-10-27. These projects are as follows:

 - [`contract`](/contract/) &ndash; a simple smart contract;
 - [`browser-ethers`](/browser-ethers/) &ndash; a simple web app to facilitate communication with the contract;
 - [`script-web3`](/script-web3/) &ndash; an even simpler node.js app which lists past events of the contract.

See each project's `README.md` for more details on them.

## Prerequisites

All three projects in this repository need [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (or another package manager) to run. Once you have these, running each project should be fairly straightforward.

For certain purposes (deploying the smart contract, sending transactions to it), you will also need a wallet with some funds on your target network. For this, see the [Milkomeda C1 Testnet](#milkomeda-c1-testnet) section.

## Learning Resources

It is good to have at least some knowledge of blockchain technology and Ethereum / EVM before attempting to develop DApps in this ecosystem. There are many resources available and which ones work the best for you will depend on your learning style. However, here are some of the resources that I found the most helpful:

 - <https://www.youtube.com/watch?v=bBC-nXj3Ng4> &ndash; "But how does bitcoin actually work?", a video by 3Blue1Brown, a helpful ~25 minute explanation of the basics of blockchain technology;
 - <https://github.com/bitcoinbook/bitcoinbook> &ndash; "Mastering Bitcoin", a book by Andreas Antonopoulos, I only read the first two chapters for a useful introduction to cryptocurrencies in general;
 - <https://github.com/ethereumbook/ethereumbook> &ndash; "Mastering Ethereum", a book by Andreas M. Antonopoulos and Gavin Wood, a great introduction to how Ethereum works, including a chapter on Solidity;
 - <https://solidity-by-example.org/> &ndash; a great resource to absorb the basics of Solidity through looking at examples (although you will want to complement this with other resources to understand details and discover all the relevant nuances).

The documentation of various tools and libraries you will use is also often very insightful. Such resources are included in each project's README.

If you want to try out smart contracts without installing anything on your computer, you can also try the [Remix IDE](https://remix-project.org/).

All three projects in this repository also require some knowledge of JavaScript / TypeScript. To grasp the basics of JavaScript, I recommend the interactive courses at <https://www.freecodecamp.org/> (which also contains courses related to some of the technologies used in the [`browser-ethers`](/browser-ethers/) project). TypeScript is a superset of JavaScript and many good resources about it can be found on [the official website](https://www.typescriptlang.org/). For a deeper understanding of JavaScript, I wish you good luck and lots of patience.

## Milkomeda C1 Testnet

If you don't want to pay real money for gas fees, you can deploy your smart contract on a test network. Ethereum has its own test networks, but in principle, you should be able to choose any EVM-compatible chain you want, if you configure everything accordingly. 

The projects in this repository are set up to use the Milkomeda C1 Testnet. You don't need to configure anything extra to run these projects themselves; however, you do need a wallet with funds to deploy the contract, and if you want to connect your wallet and send transactions to the contract in the [`browser-ethers`](/browser-ethers/) web app, you will need to install [MetaMask](https://metamask.io/) in your browser and configure it to connect to the correct network. To do all this, you can follow the tutorial at the following link (up to the "The Milkomeda Djed Web dApp" heading):

<https://medium.com/@milkomedafoundation/getting-started-with-milkomeda-djed-on-c1-testnet-d335ebf65305>

Note that the above tutorial also includes a link to a faucet where you can obtain some test currency.

Alternatively, you can follow [this tutorial](https://occamx.gitbook.io/occamx-faq/milkomeda-testnet-guide), which also requires interaction with Cardano and a second wallet.

## Paima Studios

I am currently working on a blockchain gaming project with Paima Studios. At the time of the talk, we haven't yet released any games to the public, but if you are interested, you can follow us out on Twitter or Discord:

 - <https://twitter.com/PaimaStudios>
 - <https://discord.com/invite/zTuFWn52Xx>