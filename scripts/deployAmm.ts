import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { ethers } from 'hardhat';

/**
 * EDIT THESE to match your contract and constructor.
 * If your AMM has no constructor args, leave ARGS = [].
 */
const CONTRACT_NAME = 'AMM';     // e.g., 'AMM'
const TOKEN0 = process.env.TOKEN0_ADDRESS!;
const TOKEN1 = process.env.TOKEN1_ADDRESS!;
const ARGS: any[] = [TOKEN0, TOKEN1];

function updateEnvAddress(newAddress: string) {
  const envPath = path.resolve(process.cwd(), '.env');
  let env = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
  if (!/^AMM_ADDRESS=/m.test(env)) {
    env += (env.endsWith('\n') ? '' : '\n') + `AMM_ADDRESS=${newAddress}\n`;
  } else {
    env = env.replace(/^AMM_ADDRESS=.*/m, `AMM_ADDRESS=${newAddress}`);
  }
  fs.writeFileSync(envPath, env, 'utf8');
  console.log(`.env updated with AMM_ADDRESS=${newAddress}`);
}

async function main() {
  const net = await ethers.provider.getNetwork();
  console.log(`Network: ${net.name} (chainId=${net.chainId})`);
  console.log(`Deploying ${CONTRACT_NAME} with args:`, ARGS);

  const Factory = await ethers.getContractFactory(CONTRACT_NAME);
  const contract = await Factory.deploy(...ARGS);   // ethers v5 pattern
  await contract.deployed();

  const address = contract.address;
  console.log(`${CONTRACT_NAME} deployed to: ${address}`);

  updateEnvAddress(address);

  console.log('\nNext step:');
  console.log('  npm run pool:info');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
