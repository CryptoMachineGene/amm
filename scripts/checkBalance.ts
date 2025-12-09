import 'dotenv/config';
import { ethers } from 'ethers';

async function main() {
  const rpc = process.env.RPC_URL!;
  const provider = new ethers.providers?.JsonRpcProvider?.(rpc) || new (ethers as any).JsonRpcProvider(rpc);
  const addr = process.env.DEPLOYER || '0x2B3D5041888fE8b0605FAdCF31a1cb9c3D89c09d';
  const bal = await provider.getBalance(addr);
  console.log('Deployer:', addr);
  console.log('Balance (ETH):', Number(ethers.utils.formatEther(bal)).toFixed(6));
}
main().catch(console.error);
