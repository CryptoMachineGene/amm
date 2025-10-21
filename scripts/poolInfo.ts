// scripts/poolInfo.ts
import 'dotenv/config';
import { ethers } from 'ethers';

/**
 * Create a provider that works for both ethers v5 and v6.
 */
function createProvider(rpcUrl: string) {
  // v5: ethers.providers?.JsonRpcProvider
  // v6: ethers.JsonRpcProvider
  const anyEthers = ethers as any;
  if (anyEthers.providers?.JsonRpcProvider) {
    return new anyEthers.providers.JsonRpcProvider(rpcUrl); // v5
  }
  return new (anyEthers.JsonRpcProvider)(rpcUrl); // v6
}

// Minimal read-only ABI (inline to avoid path issues tonight)
const ammAbi = [
  { "inputs": [], "name": "reserve0", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "reserve1", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "feeBps",  "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
];

async function main() {
  const rpc = process.env.RPC_URL;
  const address = process.env.AMM_ADDRESS;

  if (/^0x0{40}$/i.test(address)) {
    console.log("Note: AMM_ADDRESS is zero. Deploy your AMM and set AMM_ADDRESS in .env to see live reserves.");
  }

  if (!rpc) throw new Error('Missing RPC_URL in .env');
  if (!address) throw new Error('Missing AMM_ADDRESS in .env');

  const provider = createProvider(rpc);

  // Contract constructor signature is the same in v5/v6
  const amm = new ethers.Contract(address, ammAbi, provider as any);

  // Safe call helper
  async function safe(label: string, fn: () => Promise<any>) {
    try {
      const v = await fn();
      console.log(label, typeof v?.toString === 'function' ? v.toString() : v);
      return v;
    } catch {
      console.log(label, '— (not exposed)');
      return null;
    }
  }

  const r0 = await safe('Token0 reserve:', () => amm.reserve0());
  const r1 = await safe('Token1 reserve:', () => amm.reserve1());
  await safe('Fee (bps):', () => amm.feeBps?.() ?? Promise.reject());

  // Naive derived price (for quick visibility only)
  if (r0 && r1) {
    try {
      const n0 = Number(r0.toString());
      const n1 = Number(r1.toString());
      if (n0 > 0 && n1 > 0) {
        console.log('Approx price token0→token1:', n1 / n0);
        console.log('Approx price token1→token0:', n0 / n1);
      }
    } catch { /* ignore */ }
  }
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
