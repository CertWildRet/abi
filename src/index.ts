import cwrVaultIdlJson from "./idl/cwr_vault.json";
import type { CwrVault } from "./types/cwr_vault";

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
