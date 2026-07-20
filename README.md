# @diamond/abi

Canonical IDL + TypeScript type definitions for the **Diamond Pools** Solana program (a non-custodial three-pool ORE vault — Mining / Staking / Protocol). Single source of truth — every consumer (SDK, backend, frontend, dashboards, keeper) imports from this package.

## Layout

```
abi/
├── src/
│   ├── idl/diamond_pools.json    # Anchor IDL (program → byte schema)
│   ├── types/diamond_pools.ts    # TS types matching the IDL
│   └── index.ts                  # exports + program IDs per cluster
└── scripts/sync.sh               # pulls fresh artifacts from ../contracts
```

## Update flow

1. Modify program code in [../contracts/](../contracts/)
2. `cd ../contracts && anchor build`
3. `cd ../abi && npm run sync` — copies the fresh IDL + TS types
4. `npm run build` — compiles to `dist/`
5. Bump version in [package.json](package.json), commit, push

Consumers update by bumping their dependency on `@diamond/abi`.

## Usage

```ts
import { DIAMOND_POOLS_IDL, DiamondPools, getDiamondPoolsProgramId } from "@diamond/abi";
import { Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

const programId = new PublicKey(getDiamondPoolsProgramId("mainnet"));
const program = new Program<DiamondPools>(DIAMOND_POOLS_IDL, provider);
```

Most consumers should not use this package directly — use [@diamond/sdk](../sdk/) for ergonomic typed instruction builders, PDA derivation, account/event decoding, and error mapping.
