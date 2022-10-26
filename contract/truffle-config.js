const PRIVATE_KEY = process.env.PRIVATE_KEY
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  contracts_directory: "./src",

  protocolConfig: {
    owner: "0x1867Cd64DE4F9aEcfbC14846bc736cd7008dca40"
  },

  networks: {
    testnet: {
      provider: () =>
        new HDWalletProvider({
          privateKeys: [PRIVATE_KEY],
          providerOrUrl: "https://rpc-devnet-cardano-evm.c1.milkomeda.com/",
        }),
      network_id: 200101,
    },
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache, geth, or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //   host: "127.0.0.1",     // Localhost (default: none)
    //   port: 7545,            // Standard Ethereum port (default: none)
    //   network_id: "5777",       // Any network (default: none)
    // },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.15",
    }
  },
};
