#!/usr/bin/env bash
# Copy fresh IDL + TS types from the contracts build output into abi/src, plus the committed
# deploy manifests. Run this after every `anchor build` in the contracts repo.
#
# This script exists because `contracts` is PRIVATE while `abi` is public, and every downstream
# consumer (sdk, crank, frontend) pins its dependencies by git commit hash. Anything a consumer
# needs to talk to the deployed program therefore has to be republished HERE to be reachable at
# all — a consumer reaching sideways into ../contracts resolves only in a local sibling checkout
# and breaks the moment CI checks that repo out alone.
#
# Usage: bash scripts/sync.sh [path/to/contracts]
# Defaults to ../contracts relative to this repo.

set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ABI_ROOT="$(dirname "$HERE")"
CONTRACTS_ROOT="${1:-$ABI_ROOT/../contracts}"

if [ ! -d "$CONTRACTS_ROOT/target/idl" ]; then
  echo "Error: no IDL output at $CONTRACTS_ROOT/target/idl"
  echo "Did you run 'anchor build' in $CONTRACTS_ROOT first?"
  exit 1
fi

PROGRAMS=(diamond_pools)

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

# ── Deploy manifests ────────────────────────────────────────────────────────────────────────────
# Not build output: these are committed artifacts describing what is live on chain. They are
# published through abi for the same reason the IDL is — they describe the deployed program, and
# consumers cannot read the private contracts repo.
mkdir -p "$ABI_ROOT/src/deploy"
for m in address-lookup-table.json; do
  src_m="$CONTRACTS_ROOT/deploy/$m"
  if [ ! -f "$src_m" ]; then
    echo "Skipping $m: missing $src_m"
    continue
  fi
  cp "$src_m" "$ABI_ROOT/src/deploy/$m"
  echo "synced $m"
done

echo "done. Now run: npm run build  (in abi/)"
