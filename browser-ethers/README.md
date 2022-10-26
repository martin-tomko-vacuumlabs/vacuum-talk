# A Simple Interactive Web App

A web app built using [Vite](https://vitejs.dev/) with [React.js](https://reactjs.org/) to interact with the deployed smart contract using the [`ethers.js`](https://docs.ethers.io/) library.

## Prerequisites

You will need [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) (or a different package manager) to run the application. To display it, you will need a web browser (at least Firefox and Chrome / Chromium should both work). Furthermore, if you want to connect your wallet and change the value inside the smart contract, you will need to install [MetaMask](https://metamask.io/) in your browser and configure it to connect to the correct network &ndash; see [the "Milkomeda C1 Testnet" section in the root README](/README.md#milkomeda-c1-testnet) for details.

## Installation

It is assumed you have already installed `node` and `npm`. If using a different package manager, adjust the instructions accordingly, at your own risk.

The required JavaScript packages are listed in [`package.json`](./package.json) and can simply be installed by running

```
npm i
```

## Running

To run the application, execute

```
npm run dev
```

You should see a link to localhost which you can connect to with your browser to use the application.

The application should build automatically (in fact, Vite updates it automatically whenever you make changes to the code).

## Creation note

Note that almost all the source files are taken over untouched from the initial Vite project created using `npm create vite@latest` (and some extra initial choices, like using TypeScript and React.js), with the only changes being:

 - The addition of [the artifact file](./src/artifacts/Number.ts) and [`chain.ts`](./src/chain.ts) &ndash; code for interacting with the contract,
 - Changes to [`App.tsx`](./src/App.tsx) to hook the contract interacting code into the project.

## Resources

Documentation for the various tools used in this project:

 - [`ethers.js` documentation](https://docs.ethers.io/) 
 - [The vite website](https://vitejs.dev/)
 - [React.js documentation](https://reactjs.org/docs/getting-started.html)
 - [TypeScript documentation](https://www.typescriptlang.org/docs/)