require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

function pk() {
  const k = process.env.PRIVATE_KEY || "";
  if (!/^0x[0-9a-fA-F]{64}$/.test(k)) return [];
  return [k];
}

module.exports = {
  solidity: {
    compilers: [
      { version: "0.8.18" }, // for your existing AMM, if pinned
      { version: "0.8.20" }, // for OpenZeppelin ERC20 (TestToken)
      // you can also add { version: "0.8.24" } later if needed
    ],
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: pk(),
    },
  },
};
