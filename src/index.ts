import diamondPoolsIdlJson from "./idl/diamond_pools.json";
import type { DiamondPools } from "./types/diamond_pools";

// ─── diamond_pools v1.0.0 (55-instruction audited interface) ───────────────────
// Synced from contracts/target/{idl,types}/diamond_pools.* via scripts/sync.sh.
export { DiamondPools } from "./types/diamond_pools";
export type DiamondPoolsIdl = typeof diamondPoolsIdlJson;

export const DIAMOND_POOLS_IDL = diamondPoolsIdlJson as unknown as DiamondPools;

export const DIAMOND_POOLS_PROGRAM_IDS = {
  localnet: "FMecQfZ1qbt87GNGVU1xNDnsFnHH78Dwz74qaTumSRsB",
  devnet: "FMecQfZ1qbt87GNGVU1xNDnsFnHH78Dwz74qaTumSRsB",
  mainnet: "FMecQfZ1qbt87GNGVU1xNDnsFnHH78Dwz74qaTumSRsB",
} as const;

export type Cluster = keyof typeof DIAMOND_POOLS_PROGRAM_IDS;

export function getDiamondPoolsProgramId(cluster: Cluster): string {
  return DIAMOND_POOLS_PROGRAM_IDS[cluster];
}
