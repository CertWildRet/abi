import cwrVaultIdlJson from "./idl/cwr_vault.json";
import type { CwrVault } from "./types/cwr_vault";

export { CwrVault } from "./types/cwr_vault";
export type CwrVaultIdl = typeof cwrVaultIdlJson;

export const CWR_VAULT_IDL = cwrVaultIdlJson as unknown as CwrVault;

export const PROGRAM_IDS = {
  localnet: "CLDmHatW3uszqHqCYgMkAk9jFW1Zse5yPV6RWdTArx2E",
  devnet: "CLDmHatW3uszqHqCYgMkAk9jFW1Zse5yPV6RWdTArx2E",
  mainnet: "CLDmHatW3uszqHqCYgMkAk9jFW1Zse5yPV6RWdTArx2E",
} as const;

export type Cluster = keyof typeof PROGRAM_IDS;

export function getProgramId(cluster: Cluster): string {
  return PROGRAM_IDS[cluster];
}
