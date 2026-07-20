import cwrVaultIdlJson from "./idl/cwr_vault.json";
import type { CwrVault } from "./types/cwr_vault";
import diamondPoolsIdlJson from "./idl/diamond_pools.json";
import type { DiamondPools } from "./types/diamond_pools";

// ─── cwr_vault (BLi7 predecessor — CLOSED on mainnet, frozen artifact) ───────────
// Kept so existing consumers (frontend/analytics/referral/keeper still on the old
// program) do not break. BLi7 can never redeploy; do not re-sync these.
export { CwrVault } from "./types/cwr_vault";
export type CwrVaultIdl = typeof cwrVaultIdlJson;

export const CWR_VAULT_IDL = cwrVaultIdlJson as unknown as CwrVault;

export const PROGRAM_IDS = {
  localnet: "BLi7NKqekZGh5zWNwmUK2bzs2tAR3sPC7A1VrgQdEaYL",
  devnet: "BLi7NKqekZGh5zWNwmUK2bzs2tAR3sPC7A1VrgQdEaYL",
  mainnet: "BLi7NKqekZGh5zWNwmUK2bzs2tAR3sPC7A1VrgQdEaYL",
} as const;

export type Cluster = keyof typeof PROGRAM_IDS;

export function getProgramId(cluster: Cluster): string {
  return PROGRAM_IDS[cluster];
}

// ─── diamond_pools v1.0.0 (the live 3-pool ORE vault — Mining/Staking/Protocol) ──
// Synced from contracts/target/{idl,types}/diamond_pools.* via scripts/sync.sh.
export { DiamondPools } from "./types/diamond_pools";
export type DiamondPoolsIdl = typeof diamondPoolsIdlJson;

export const DIAMOND_POOLS_IDL = diamondPoolsIdlJson as unknown as DiamondPools;

export const DIAMOND_POOLS_PROGRAM_IDS = {
  localnet: "FMecQfZ1qbt87GNGVU1xNDnsFnHH78Dwz74qaTumSRsB",
  devnet: "FMecQfZ1qbt87GNGVU1xNDnsFnHH78Dwz74qaTumSRsB",
  mainnet: "FMecQfZ1qbt87GNGVU1xNDnsFnHH78Dwz74qaTumSRsB",
} as const;

export function getDiamondPoolsProgramId(cluster: Cluster): string {
  return DIAMOND_POOLS_PROGRAM_IDS[cluster];
}
