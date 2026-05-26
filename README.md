# @cwr/abi

Canonical IDL + TypeScript type definitions for CWR Solana programs. Single source of truth — every consumer (SDK, backend, frontend, dashboards, third-party integrators) imports from this package.

## Layout

```
cwr-abi/
├── src/
│   ├── idl/cwr_vault.json    # Anchor IDL (program → byte schema)
│   ├── types/cwr_vault.ts    # TS types matching the IDL
│   └── index.ts              # exports + program IDs per cluster
└── scripts/sync.sh           # pulls fresh artifacts from cwr-solana
```

## Update flow

1. Modify program code in [../cwr-solana/](../cwr-solana/)
2. `cd ../cwr-solana && anchor build`
3. `cd ../cwr-abi && npm run sync` — copies the fresh IDL + TS types
4. `npm run build` — compiles to `dist/`
5. Bump version in [package.json](package.json), commit, publish

Consumers update by bumping their dependency on `@cwr/abi`.

## Usage

```ts
import { CWR_VAULT_IDL, CwrVault, getProgramId } from "@cwr/abi";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";

const programId = new PublicKey(getProgramId("mainnet"));
const program = new Program<CwrVault>(CWR_VAULT_IDL, provider);
```

Most consumers should not use this package directly — use [@cwr/sdk](../cwr-sdk/) for ergonomic typed methods, PDA derivation, and event subscriptions.
