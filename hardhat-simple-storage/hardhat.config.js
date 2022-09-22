
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
// self-define function
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/AVxEMt4rDkma74tCl1PjXvyN1oMoBjh2"
const PRIVATE_KEY = process.env.PRIVATE_KEY 
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli.g.alchemy.com/v2/j-Tj3X8RXIaMOb3eDpMi3--kfk8MTkO7"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },

  },
  solidity: "0.8.17",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC",
  },
}

