# AMM Upgrade Plan (Next Steps)

## Goal
Upgrade this AMM repo toward a portfolio-ready demo:
- TypeScript-first scripts/tests
- Minimal frontend (pool info + swap/add liquidity)
- Clean deploy flow + README instructions

## Immediate Tasks (Do these next)
1. Confirm contract set + ownership/roles
2. Add TypeScript deploy scripts (tokens + AMM)
3. Add basic PoolInfo UI wiring (read-only first)
4. Add one happy-path integration test (addLiquidity -> swap -> balances)
5. Document local run steps

## “Definition of Done” for v0.1
- `npm test` passes
- `npx hardhat run scripts/deployTokens.ts --network localhost` works
- frontend shows pool reserves + user balances
- README has start-to-finish steps
