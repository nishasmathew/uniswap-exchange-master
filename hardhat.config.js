require("@nomiclabs/hardhat-waffle");

const ALCHEMY_MAINNET_FORK_API_KEY = "YOUR_API_KEY";
const MAINNET_FORK_PRIVATE_KEY = "YOUR_PRIVATE_KEY";

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_MAINNET_FORK_API_KEY}`,
        accounts: [`${MAINNET_FORK_PRIVATE_KEY}`],
        blockNumber: 13944712
      }
    },
  }
};
