import diamondPoolsIdlJson from "./idl/diamond_pools.json";
import addressLookupTableJson from "./deploy/address-lookup-table.json";
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

// ─── Address Lookup Table ──────────────────────────────────────────────────────
// `evacuate_claim_all` binds 21 accounts and takes 17 more as `remaining_accounts`, sharing ZERO
// addresses between the two sets — 38 distinct keys. Measured against the real derived addresses a
// LEGACY transaction is 1,367 bytes against the 1,232 limit, so the protocol's terminal drain hatch
// CANNOT be sent without this table. Over the table it compiles to ~318 bytes.
//
// This JSON existed here before anything exported it, so no consumer could reach it. Exported 27
// Aug 2026 along with the 48th entry (`sysvar:instructions`), which the evacuation binds and the
// list had never contained.
export const DIAMOND_POOLS_ALT = addressLookupTableJson;
export const DIAMOND_POOLS_ALT_ADDRESS = addressLookupTableJson.table;

/** Every address in the table, in index order. */
export function getLookupTableAddresses(): string[] {
  return addressLookupTableJson.entries.map((e) => e.address);
}

/** Look one up by its label, e.g. "dp:config" or "ore:miner(ours)". */
export function getLookupTableEntry(label: string): string | undefined {
  return addressLookupTableJson.entries.find((e) => e.label === label)?.address;
}
