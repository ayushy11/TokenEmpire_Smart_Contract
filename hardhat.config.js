require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/Bna3noQim9wwBzknpruPuqPSVjoewU77',
      accounts: ['741f97e532c745b57557d9ef35a700f7c9b47e6b6bf5995634089d1e59f4298e']
    }
  }
}