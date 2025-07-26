# 🧪 AMM Tutorial — Full-Stack DEX with Solidity, Hardhat, and React

This is a full-stack educational project that demonstrates how to build a basic **Automated Market Maker (AMM)** like Uniswap v1. You'll learn how to create a token swap DApp using Solidity, Hardhat, Ethers.js, React, Redux Toolkit, and MetaMask.

---

## 🎯 What You'll Learn

- How AMMs work using the constant product formula: `x * y = k`
- How to write and test smart contracts in Solidity
- How to deploy contracts using Hardhat
- How to connect a React frontend to smart contracts using Ethers.js
- How to manage blockchain state using Redux

---

## 🧱 Features

### ✅ Smart Contracts
- ERC-20 token pair (DAPP + USD)
- Liquidity provision and LP share management
- Token swaps with price adjustment
- Share-based withdrawals
- Slippage protection

### ✅ React Frontend
- Connect wallet (MetaMask)
- Switch between networks (Sepolia or Localhost)
- Swap, Deposit, Withdraw, and Charts tabs
- Live account + balance tracking
- Identicon display with react-blockies

---

amm-tutorial/
├── contracts/
│ ├── Token.sol
│ └── AMM.sol
├── test/
│ └── AMM.test.js
├── scripts/
│ ├── deploy.js
│ └── seed.js
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ ├── config.json
│ │ ├── logo.png
│ │ ├── store/
│ │ │ ├── interactions.js
│ │ │ └── reducers/
│ │ │ ├── provider.js
│ │ │ ├── tokens.js
│ │ │ └── amm.js
│ │ ├── components/
│ │ │ ├── Navigation.jsx
│ │ │ ├── Tabs.jsx
│ │ │ ├── Swap.jsx
│ │ │ ├── Deposit.jsx
│ │ │ ├── Withdraw.jsx
│ │ │ └── Charts.jsx
├── hardhat.config.js
└── README.md

## 🗂️ File Structure


---

## ⚙️ Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/amm-tutorial.git
cd amm-tutorial
```
### 2. Install Backend Dependencies
```bash
npm install
npx hardhat compile
```

### 3.  Run Unit Tests
```bash
npx hardhat test
```

### 4. Start Local Blockchain
```bash
npx hardhat node
```

### 5. Deploy Contracts
```bash
npx hardhat run scripts/deploy.js --network localhost
```

### 6. Seed the AMM Pool
This populates the pool and simulates some swaps.
```bash
npx hardhat run scripts/seed.js --network localhost
```
Investor accounts will receive DAPP and USD tokens and perform swaps automatically.

### 7. Launch the Frontend
```bash
cd frontend
npm install
npm start
```

Redux State Management
provider
connection, chainId, account

tokens
contracts, symbols, balances

amm
contract, shares, swaps (optional)

All state is synced through store/interactions.js.




