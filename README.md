# AMM — Full-Stack DEX Tutorial with Solidity, Hardhat & React

![Status](https://img.shields.io/badge/Status-Active-success)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Framework](https://img.shields.io/badge/Framework-Hardhat-yellow)
![Language](https://img.shields.io/badge/Language-Solidity-blue)
![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![State](https://img.shields.io/badge/State-Redux-purple?logo=redux)

🧩 **Project Overview**  
A complete educational DEX stack demonstrating core decentralized finance principles.  
This Automated Market Maker (AMM) implements the Uniswap v1 constant-product model (`x × y = k`)  
with ERC-20 token pairs, liquidity provisioning, and on-chain price discovery.  

It includes a full-stack workflow using **Solidity**, **Hardhat**, and **Ethers.js** on the backend —  
paired with a **React + Redux** frontend for live swap and liquidity management.  
Designed for clarity, modularity, and hands-on blockchain developer training.

A minimalist **Automated Market Maker (AMM)** implementation modeled after Uniswap v1 — built end-to-end with **Solidity**, **Hardhat**, **Ethers.js**, and a **React + Redux** frontend.  
This repository demonstrates how decentralized liquidity pools, swaps, and LP share mechanics work under the hood, complete with a deployable test environment and modular scripts for both backend and UI layers.

---

### ⚙️ Features at a Glance
- **Constant product AMM (`x × y = k`)** — live pricing & liquidity mechanics  
- **ERC-20 pair (DAPP + USD)** — full swap, deposit, and withdrawal flows  
- **Hardhat testing + deploy scripts** — local & Sepolia-ready  
- **React + Redux frontend** — wallet connection, balance tracking, live charts  
- **Read-only analytics script (`poolInfo.ts`)** — fetches reserves and fees without a wallet  

---

> 🧩 *Educational project designed for full-stack blockchain dev training. Built to be cloned, extended, or integrated into larger DeFi prototypes.*

---

## What You'll Learn

- How AMMs work using the constant product formula: `x * y = k`
- How to write and test smart contracts in Solidity
- How to deploy contracts using Hardhat
- How to connect a React frontend to smart contracts using Ethers.js
- How to manage blockchain state using Redux

---

### Smart Contracts
- ERC-20 token pair (DAPP + USD)
- Liquidity provision and LP share management
- Token swaps with price adjustment
- Share-based withdrawals
- Slippage protection

### React Frontend
- Connect wallet (MetaMask)
- Switch between networks (Sepolia or Localhost)
- Swap, Deposit, Withdraw, and Charts tabs
- Live account + balance tracking
- Identicon display with react-blockies

---

## File Structure

``` plaintext
amm-tutorial/
├── contracts/
│   ├── Token.sol
│   └── AMM.sol
├── test/
│   └── AMM.test.js
├── scripts/
│   ├── deploy.js
│   └── seed.js
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── config.json
│   │   ├── logo.png
│   │   ├── store/
│   │   │   ├── interactions.js
│   │   │   └── reducers/
│   │   │       ├── provider.js
│   │   │       ├── tokens.js
│   │   │       └── amm.js
│   │   ├── components/
│   │   │   ├── Navigation.jsx
│   │   │   ├── Tabs.jsx
│   │   │   ├── Swap.jsx
│   │   │   ├── Deposit.jsx
│   │   │   ├── Withdraw.jsx
│   │   │   └── Charts.jsx
├── hardhat.config.js
└── README.md
```
---

## Getting Started

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

## Redux State Management
- provider
  - connection, chainId, account
- tokens
  - contracts, symbols, balances
- amm
  - contract, shares, swaps (optional)

All state is synced through store/interactions.js.

## Smart Contract ABIs
Contracts are loaded dynamically using config.json per chain:
```json
{
  "31337": {
    "dapp": { "address": "0x..." },
    "usd":  { "address": "0x..." },
    "amm":  { "address": "0x..." }
  },
  "11155111": {
    "dapp": { "address": "0x..." },
    "usd":  { "address": "0x..." },
    "amm":  { "address": "0x..." }
  }
}
```

## AMM Smart Contract
The core logic for token swaps and LP share accounting.

### Key Functions

| Function                             | Description                                 |
|--------------------------------------|---------------------------------------------|
| `addLiquidity()`                     | Deposit both tokens to earn LP shares       |
| `removeLiquidity()`                  | Redeem LP shares for tokens                 |
| `swapToken1()` / `swapToken2()`      | Perform token swaps                         |
| `calculateToken1Swap()` / `...Swap()`| Estimate swap output                        |
| `calculateToken1Deposit()` / `...()` | Maintain deposit ratio                      |
| `shares(address)`                    | Returns LP shares for a user                |
| `totalShares()`                      | Total LP shares in existence                |

### Event

- **Swap** — Emitted after each token swap with full metadata.



## License
MIT — use freely, fork, or build on top.

---

🙏 Acknowledgments:
Based on tutorials from Dapp University, with added full-stack integration and improvements.

---

---

### 🔍 Technologies & Topics
`#solidity` `#hardhat` `#defi` `#amm` `#dex`  
`#ethereum` `#react` `#redux` `#vite` `#ethersjs`  
`#typescript` `#web3` `#fullstack` `#tutorial` `#education`

