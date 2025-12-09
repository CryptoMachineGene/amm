import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { ethers } from 'hardhat';

function upsertEnv(k: string, v: string) {
  const envPath = path.resolve(process.cwd(), '.env');
  let env = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
  const line = `${k}=${v}`;
  if (new RegExp(`^${k}=`, 'm').test(env)) env = env.replace(new RegExp(`^${k}=.*`, 'm'), line);
  else env += (env.endsWith('\n') ? '' : '\n') + line + '\n';
  fs.writeFileSync(envPath, env, 'utf8');
  console.log(`.env updated with ${k}=${v}`);
}

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deployer:', await deployer.getAddress());

  const Token = await ethers.getContractFactory('TestToken');

  const t0 = await Token.deploy('Token0', 'TK0', ethers.utils.parseEther('1000000'));
  await t0.deployed();
  const t0Addr = t0.address;
  console.log('Token0:', t0Addr);

  const t1 = await Token.deploy('Token1', 'TK1', ethers.utils.parseEther('1000000'));
  await t1.deployed();
  const t1Addr = t1.address;
  console.log('Token1:', t1Addr);

  upsertEnv('TOKEN0_ADDRESS', t0Addr);
  upsertEnv('TOKEN1_ADDRESS', t1Addr);

  console.log('\nNext: npm run deploy:sepolia:amm');
}

main().catch((e) => (console.error(e), process.exit(1)));
