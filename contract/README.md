# A Simple Smart Contract

The `Number` contract is a simple smart contract to demonstrate the basic syntax of Solidity.

## Prerequisites

The project is set up to use both [Truffle](https://trufflesuite.com/) (intended here for deploying) and [Foundry](https://getfoundry.sh/) (intended here for testing).

Installing Truffle requires [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (or possibly a different package manager, but this README only considers `npm`).

## Installation

It is assumed you have already installed `node` and `npm`. If using a different package manager, adjust the instructions accordingly, at your own risk.

The required JavaScript packages are listed in [`package.json`](./package.json) and can simply be installed by running

```
npm i
```

You can also install Truffle globally by running

```
npm i -g truffle
```

This will enable you to use Truffle outside of this directory without installing it again, as well as use simply `truffle` instead of `npx truffle` in all the following.

To install Foundry, start at <https://getfoundry.sh/> or follow [the installation instructions in the Foundry book](https://book.getfoundry.sh/getting-started/installation). You don't need to install Foundry if you are okay with not being able to run the tests.

## Compiling

To compile the smart contract, execute

```
npx truffle build
```

The `npx` prefix can be omitted if you've installed Truffle globally. This holds true in all the following sections as well.

## Running tests

If you have installed Foundry, you should be able to run the tests by simply calling

```
forge test
```

There are various command line options you can also use, for example, to display more detailed information on failed tests, you can use

```
forge test -vvv
```

For more information, consult [the Foundry book](https://book.getfoundry.sh/) or run `forge help`.

## Deploying

There are various thing to consider and check before attemtping to deploy this contract:

 - What network do you want to deploy the contract to? The only one configured in [truffle-config.js](./truffle-config.js) is the Milkomeda C1 testnet. Consult the [root README](/README.md) for more information on this network, or add a configuration for a network of your choosing;
 - You need a wallet on the target network with funds to pay for deployment gas fees (note that on test networks, you can usually get funds for free);
 - An environment variable named `PRIVATE_KEY` must be set to the hex string of your wallet's private key, without the `0x` prefix. This can be done e.g. in `bash` by running `export PRIVATE_KEY=c0e...df7`;
 - The contract configuration in [truffle-config.js](./truffle-config.js) (which is forwarded as arguments to the contract's constructor on deployment) needs to be up to date &ndash; specify the address of the contract's owner.

Note that some of these requirements are due to the specifics of how this project is implemented and can also be done in different ways (e.g. there are different ways to supply your private key, different ways to store the arguments to your contract's constructor, etc.).

Once everything is ready, you can deploy the contract using Truffle's `migrate` command. For example, to deploy to the network defined in [truffle-config.js](./truffle-config.js) as `testnet`, you can execute

```
npx truffle migrate --network testnet
```

Again, omit `npx` if you installed Truffle globally.

## Resources

Documentation for the various tools used in this project:

 - [Truffle documentation](https://trufflesuite.com/docs/truffle/)
 - [The Foundry book](https://book.getfoundry.sh/)
 - [Solidity documentation](https://docs.soliditylang.org/en/v0.8.17/)