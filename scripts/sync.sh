#!/usr/bin/env bash
# Copy fresh IDL + TS types from the cwr-solana build output into cwr-abi/src.
# Run this after every `anchor build` in cwr-solana.
#
# Usage: bash scripts/sync.sh [path/to/cwr-solana]
# Defaults to ../cwr-solana relative to this repo.

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ABI_ROOT="$(dirname "$HERE")"
CONTRACTS_ROOT="${1:-$ABI_ROOT/../cwr-solana}"

if [ ! -d "$CONTRACTS_ROOT/target/idl" ]; then
  echo "Error: no IDL output at $CONTRACTS_ROOT/target/idl"
  echo "Did you run 'anchor build' in $CONTRACTS_ROOT first?"
  exit 1
fi

PROGRAMS=(cwr_vault)

for p in "${PROGRAMS[@]}"; do
  src_idl="$CONTRACTS_ROOT/target/idl/$p.json"
  src_ty="$CONTRACTS_ROOT/target/types/$p.ts"
  dst_idl="$ABI_ROOT/src/idl/$p.json"
  dst_ty="$ABI_ROOT/src/types/$p.ts"

  if [ ! -f "$src_idl" ] || [ ! -f "$src_ty" ]; then
    echo "Skipping $p: missing $src_idl or $src_ty"
    continue
  fi

  cp "$src_idl" "$dst_idl"
  cp "$src_ty" "$dst_ty"
  echo "synced $p"
done

echo "done. Now run: npm run build  (in cwr-abi/)"
