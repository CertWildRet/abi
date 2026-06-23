/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/cwr_vault.json`.
 */
export type CwrVault = {
  "address": "CLDmHatW3uszqHqCYgMkAk9jFW1Zse5yPV6RWdTArx2E",
  "metadata": {
    "name": "cwrVault",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "CWR multi-tranche vault on Solana — operator-cranked ORE farming pools"
  },
  "instructions": [
    {
      "name": "acceptAdmin",
      "docs": [
        "V5 external-audit hardening — STEP 3 of admin handover.",
        "",
        "Signed by the pending admin. Commits the rotation. Requires:",
        "- a proposal is pending",
        "- the confirmer has confirmed",
        "- signer matches `pending_admin`",
        "- within ADMIN_TRANSFER_TIMEOUT_SECS of original proposal",
        "",
        "On success: clears pending state, sets `config.admin = pending_admin`."
      ],
      "discriminator": [
        112,
        42,
        45,
        90,
        116,
        181,
        13,
        170
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "newAdmin",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "cancelAdminTransfer",
      "docs": [
        "V5 external-audit hardening — escape hatch.",
        "",
        "Current admin can cancel a pending transfer at any time (e.g., they",
        "typoed the new_admin, or the proposal is no longer wanted). Clears",
        "pending_admin / pending_admin_proposed_at / pending_admin_confirmed.",
        "Safe to call when no proposal is pending — it's idempotent."
      ],
      "discriminator": [
        38,
        131,
        157,
        31,
        240,
        137,
        44,
        215
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "instructions",
          "docs": [
            "fee-holder cosign check in `set_fee_recipient`. The",
            "admin-transfer ixs (propose/cancel) share this context but do NOT cosign",
            "(they're gated by the separate ADMIN_TRANSFER_CONFIRMER flow); they",
            "simply pass this account unused."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "checkpoint",
      "docs": [
        "Permissionless. CPI ORE Checkpoint signed by mining_authority, then",
        "advance the stORE accrual accumulator from the miner's realized",
        "rewards. Gate: !paused && phase==BETTING (FIX #5: a mid-OPEN",
        "checkpoint can't re-open the accumulator sandwich).",
        "",
        "CREDITING-SITE CHOICE (claim-fee reconciliation): we do NOT advance the",
        "stORE accumulator here. Instead the accumulator is advanced in",
        "`settle_harvest` from the ACTUAL wrapped grams (post 10% claim fee), so",
        "accrual == realized stORE and last-out redeemers are never shorted.",
        "This handler only settles the ORE round on-chain and refreshes the",
        "`last_seen_rewards_ore` watermark for telemetry."
      ],
      "discriminator": [
        213,
        200,
        19,
        204,
        240,
        143,
        184,
        252
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "writable": true
        },
        {
          "name": "oreMiner",
          "writable": true
        },
        {
          "name": "oreBoard",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  97,
                  114,
                  100
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                12,
                0,
                218,
                56,
                205,
                148,
                79,
                95,
                157,
                57,
                234,
                175,
                167,
                180,
                108,
                229,
                43,
                215,
                237,
                195,
                185,
                162,
                118,
                164,
                114,
                44,
                46,
                42,
                174,
                52,
                137,
                67
              ]
            }
          }
        },
        {
          "name": "oreRound",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "roundId"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                12,
                0,
                218,
                56,
                205,
                148,
                79,
                95,
                157,
                57,
                234,
                175,
                167,
                180,
                108,
                229,
                43,
                215,
                237,
                195,
                185,
                162,
                118,
                164,
                114,
                44,
                46,
                42,
                174,
                52,
                137,
                67
              ]
            }
          }
        },
        {
          "name": "oreTreasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                12,
                0,
                218,
                56,
                205,
                148,
                79,
                95,
                157,
                57,
                234,
                175,
                167,
                180,
                108,
                229,
                43,
                215,
                237,
                195,
                185,
                162,
                118,
                164,
                114,
                44,
                46,
                42,
                174,
                52,
                137,
                67
              ]
            }
          }
        },
        {
          "name": "oreProgram",
          "address": "oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv"
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless caller (pays tx fee)."
          ],
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "roundId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeWindow",
      "docs": [
        "Permissionless Clock-driven phase transition OPEN -> BETTING.",
        "Allowed once (now - phase_started_ts) >= OPEN_SECS. Clears the frozen",
        "NAV snapshot (mining resumes; NAV becomes live-derived again)."
      ],
      "discriminator": [
        254,
        46,
        169,
        88,
        40,
        214,
        216,
        17
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless caller."
          ],
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "confirmAdminTransfer",
      "docs": [
        "V5 external-audit hardening — STEP 2 of admin handover.",
        "",
        "Signed by the hardcoded `ADMIN_TRANSFER_CONFIRMER` (off-the-books",
        "pubkey baked into the contract). Confirms a pending admin transfer",
        "by signing this tx AND transferring ADMIN_TRANSFER_CONFIRMATION_LAMPORTS",
        "(0.1 SOL) into the global fee_bucket PDA.",
        "",
        "The deposit acts as out-of-band \"skin in the game\" — the confirmer",
        "must hold a funded wallet, must be aware of the proposal, and must",
        "be willing to lose 0.1 SOL into the fee pool. The deposit ends up",
        "distributed via the next `distribute_fees`.",
        "",
        "Must be called within ADMIN_TRANSFER_TIMEOUT_SECS of `propose_admin`."
      ],
      "discriminator": [
        165,
        69,
        148,
        206,
        154,
        219,
        29,
        133
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "confirmer",
          "docs": [
            "The hardcoded confirmer. Pinned by `address = ADMIN_TRANSFER_CONFIRMER`",
            "so the ix can only be invoked by that key (additional belt-and-",
            "suspenders to the handler-side `require!` check)."
          ],
          "writable": true,
          "signer": true,
          "address": "9T6bE4qzmnSzLgH9LFuV5S5wLab5QTtMBcvREg5gWBUb"
        },
        {
          "name": "feeBucket",
          "docs": [
            "The global fee bucket PDA. Receives the confirmation deposit."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  98,
                  117,
                  99,
                  107,
                  101,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "feeSchedule",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  115,
                  99,
                  104,
                  101,
                  100,
                  117,
                  108,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "crankMine",
      "docs": [
        "REPLACES `pull`. Operator-signed crank that deploys `amount` SOL into",
        "the ORE board, uniformly across the 25 squares (amount/25 each).",
        "Gate: !paused && phase==BETTING && NOT in the final GUARD_BAND_SLOTS of",
        "the betting window && sol_in_vault >= amount. Skims the 1% pull volume",
        "fee treasury->fee_bucket; moves NET treasury->mining_authority; then",
        "CPIs ORE Deploy signed by mining_authority (which holds the SOL and is",
        "the Deploy signer, matching ORE's round.collect(signer))."
      ],
      "discriminator": [
        188,
        124,
        245,
        28,
        224,
        194,
        119,
        146
      ],
      "accounts": [
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "operator",
          "docs": [
            "Operator signs the OUTER crank (controls WHEN). Pinned to the bucket's",
            "operator_wallet via `has_one`."
          ],
          "signer": true
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "operatorWallet",
          "docs": [
            "signer identity (operator == operator_wallet)."
          ],
          "relations": [
            "bucket"
          ]
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "docs": [
            "The mining authority PDA (SOL source + Deploy signer)."
          ],
          "writable": true
        },
        {
          "name": "feeBucket",
          "docs": [
            "Global fee bucket PDA — 1% volume fee skim destination."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  98,
                  117,
                  99,
                  107,
                  101,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "feeSchedule",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  115,
                  99,
                  104,
                  101,
                  100,
                  117,
                  108,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "oreMiner",
          "docs": [
            "The ORE Miner PDA. CHECK: pinned to bucket.ore_miner; written by ORE."
          ],
          "writable": true
        },
        {
          "name": "oreAutomation",
          "writable": true
        },
        {
          "name": "oreBoard",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  97,
                  114,
                  100
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                12,
                0,
                218,
                56,
                205,
                148,
                79,
                95,
                157,
                57,
                234,
                175,
                167,
                180,
                108,
                229,
                43,
                215,
                237,
                195,
                185,
                162,
                118,
                164,
                114,
                44,
                46,
                42,
                174,
                52,
                137,
                67
              ]
            }
          }
        },
        {
          "name": "oreConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                12,
                0,
                218,
                56,
                205,
                148,
                79,
                95,
                157,
                57,
                234,
                175,
                167,
                180,
                108,
                229,
                43,
                215,
                237,
                195,
                185,
                162,
                118,
                164,
                114,
                44,
                46,
                42,
                174,
                52,
                137,
                67
              ]
            }
          }
        },
        {
          "name": "oreRound",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100
                ]
              },
              {
                "kind": "arg",
                "path": "roundId"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                12,
                0,
                218,
                56,
                205,
                148,
                79,
                95,
                157,
                57,
                234,
                175,
                167,
                180,
                108,
                229,
                43,
                215,
                237,
                195,
                185,
                162,
                118,
                164,
                114,
                44,
                46,
                42,
                174,
                52,
                137,
                67
              ]
            }
          }
        },
        {
          "name": "oreProgram",
          "address": "oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv"
        },
        {
          "name": "entropyVar",
          "writable": true
        },
        {
          "name": "entropyProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "roundId",
          "type": "u64"
        },
        {
          "name": "squares",
          "type": {
            "array": [
              "bool",
              25
            ]
          }
        }
      ]
    },
    {
      "name": "deposit",
      "docs": [
        "User deposits SOL into a bucket. V6 non-custodial:",
        "- !paused",
        "- phase == OPEN  (FIX #6: replaces deposits_open/!claims_open)",
        "- amount >= min_deposit",
        "Shares are priced at the DERIVED on-chain NAV (FIX #1) read from the",
        "ORE Miner. A per-user Position PDA tracks shares + the stORE",
        "reward-debt watermark (set to CURRENT acc, no backdating — FIX A)."
      ],
      "discriminator": [
        242,
        35,
        198,
        137,
        82,
        225,
        242,
        182
      ],
      "accounts": [
        {
          "name": "config",
          "docs": [
            "External-audit hardening: read-only access to Config so the ix handler",
            "can refuse deposits from privileged keys (admin / fee_recipient)."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "shareMint",
          "writable": true
        },
        {
          "name": "userShareAta",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "position",
          "docs": [
            "V6 — per-user Position PDA. Created lazily on first deposit. Tracks",
            "shares + the stORE reward-debt watermark."
          ],
          "writable": true
        },
        {
          "name": "oreMiner",
          "docs": [
            "V6 — the ORE Miner account, for the derived NAV read. UncheckedAccount",
            "because it's a non-Anchor steel Pod and may not exist before",
            "`init_mining_pda`. Validated in-handler via `read_miner` (owner / disc",
            "/ len) when mining is initialized; ignored otherwise."
          ]
        },
        {
          "name": "feeBucket",
          "docs": [
            "V5 — global fee bucket PDA. Entry fees flow here for later",
            "permissionless distribution via `distribute_fees`."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  98,
                  117,
                  99,
                  107,
                  101,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "feeSchedule",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  115,
                  99,
                  104,
                  101,
                  100,
                  117,
                  108,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "distributeFees",
      "docs": [
        "V5 — permissionless. Drains the fee bucket to the current",
        "schedule's recipients pro-rata. Caller must pass each non-empty",
        "recipient as a writable account via `remaining_accounts` (any",
        "order — matched by pubkey to a schedule slot).",
        "",
        "Snapshot semantics: whichever `recipients` array is in the",
        "FeeSchedule at call time governs THIS distribution. Admin updates",
        "to the schedule between accrual and distribution apply to the next",
        "distribute, not retroactively.",
        "",
        "Distribution math floors per-recipient (favoring the bucket); any",
        "residual dust stays in the bucket for the next call."
      ],
      "discriminator": [
        120,
        56,
        27,
        7,
        53,
        176,
        113,
        186
      ],
      "accounts": [
        {
          "name": "feeSchedule",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  115,
                  99,
                  104,
                  101,
                  100,
                  117,
                  108,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "feeBucket",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  98,
                  117,
                  99,
                  107,
                  101,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless. Any signer can pay the tx fee. Recipient accounts",
            "are passed via `remaining_accounts`."
          ],
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initBucket",
      "discriminator": [
        237,
        69,
        61,
        218,
        18,
        60,
        21,
        236
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "shareMint",
          "writable": true
        },
        {
          "name": "storeTreasury",
          "docs": [
            "V5 — per-bucket stORE token account. Mint = `cfg.store_mint`,",
            "authority = bucket PDA. Created at init even when store_mint is",
            "Pubkey::default() so the contract layout is stable across envs",
            "(in that case the account just holds 0 stORE forever)."
          ],
          "writable": true
        },
        {
          "name": "storeMint",
          "docs": [
            "Mint passed in by the caller. Must match `cfg.store_mint` for the",
            "init to succeed (token::mint constraint above)."
          ]
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs)."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "bucketId",
          "type": "u8"
        },
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "bucketParams"
            }
          }
        },
        {
          "name": "operatorWallet",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initFeeSchedule",
      "docs": [
        "V5 — initialise the global fee schedule. Admin-only, one-time.",
        "`recipients` is validated to sum to exactly 10000 bps over non-empty",
        "slots. Empty slots must have `recipient = Pubkey::default()` AND",
        "`bps_share = 0`.",
        "",
        "`genesis_ts` is recorded for telemetry only; it does NOT gate any",
        "time-based switchover (the prior genesis→year_one design has been",
        "removed). To change the split later, admin calls `set_fee_schedule`."
      ],
      "discriminator": [
        18,
        11,
        191,
        190,
        168,
        1,
        190,
        199
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "feeSchedule",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  115,
                  99,
                  104,
                  101,
                  100,
                  117,
                  108,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "feeBucket",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  98,
                  117,
                  99,
                  107,
                  101,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "recipients",
          "type": {
            "array": [
              {
                "defined": {
                  "name": "feeRecipient"
                }
              },
              4
            ]
          }
        }
      ]
    },
    {
      "name": "initMiningPda",
      "docs": [
        "Admin-signed, one-shot. Derives + stores the mining authority PDA",
        "(= PDA([MINING_SEED, bucket_id], cwr)) and the ORE Miner PDA",
        "(= PDA([b\"miner\", mining_authority], ORE)). Reverts if already set.",
        "Seeds the mining_authority PDA with rent so it can sign CPIs and hold",
        "SOL between crank and deploy."
      ],
      "discriminator": [
        24,
        36,
        132,
        144,
        157,
        28,
        239,
        113
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs)."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        },
        {
          "name": "miningAuthority",
          "docs": [
            "The per-bucket mining authority PDA. Pinned by seeds; the program",
            "stores its key + bump on the bucket. SystemAccount so it can hold and",
            "transfer SOL (it is the ORE Deploy SOL source/signer)."
          ],
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "programData",
          "docs": [
            "CRITICAL audit fix: bind initialize to the program's upgrade",
            "authority so it cannot be frontrun by a watcher after the program",
            "is deployed but before the legitimate team's initialize tx lands.",
            "The program data account is owned by BPFLoaderUpgradeable and stores",
            "the upgrade authority; we deserialize that and compare it to `admin`.",
            "SECURITY: the `program` account must equal the on-chain cwr_vault",
            "program data PDA — Anchor's `ProgramData<'info>` does this via the",
            "`executable_program_metas` constraint. The address constraint",
            "pins it to the well-known address derived from this program's id."
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "feeRecipient",
          "type": "pubkey"
        },
        {
          "name": "storeMint",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "openWindow",
      "docs": [
        "Permissionless Clock-driven phase transition BETTING -> OPEN.",
        "Allowed once (now - phase_started_ts) >= BETTING_SECS. FIX #4: requires",
        "the miner round to be settled (checkpoint_id == round_id) AND winnings",
        "claimed (rewards_sol == 0) before snapshotting the frozen NAV. Snapshot",
        "claims_window_nps = derived NAV-per-share."
      ],
      "discriminator": [
        51,
        40,
        53,
        181,
        170,
        43,
        128,
        168
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "oreMiner"
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless caller."
          ],
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "proposeAdmin",
      "docs": [
        "V5 external-audit hardening — STEP 1 of admin handover.",
        "",
        "Current admin proposes a new admin pubkey. Starts the 24h timer.",
        "The new admin does NOT become active here; it only enters the",
        "`pending_admin` slot. Two more steps are required:",
        "- `confirm_admin_transfer` — ADMIN_TRANSFER_CONFIRMER signs and",
        "deposits 0.1 SOL into the fee_bucket",
        "- `accept_admin` — the new admin signs to commit the rotation",
        "",
        "Rejects:",
        "- new_admin == Pubkey::default() (bricking)",
        "- new_admin == current admin (no-op)",
        "- new_admin == fee_recipient (role collapse)",
        "- a proposal is already pending (must `cancel_admin_transfer` first)"
      ],
      "discriminator": [
        121,
        214,
        199,
        212,
        87,
        39,
        117,
        234
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "instructions",
          "docs": [
            "fee-holder cosign check in `set_fee_recipient`. The",
            "admin-transfer ixs (propose/cancel) share this context but do NOT cosign",
            "(they're gated by the separate ADMIN_TRANSFER_CONFIRMER flow); they",
            "simply pass this account unused."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newAdmin",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "setBucketOperator",
      "docs": [
        "V5 — narrow admin setter for a single bucket's operator wallet.",
        "Per-bucket operators keep each bucket's ORE Miner PDA independent;",
        "`claim_ore` on one bucket no longer resets the others' refining",
        "accumulator. Blocked while `claims_open == true` (NAV is frozen",
        "during claim windows — rotating the operator mid-window would",
        "orphan in-flight pushes)."
      ],
      "discriminator": [
        190,
        182,
        224,
        68,
        242,
        193,
        118,
        87
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs) to verify the Ed25519 precompile signature."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newOperator",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "setBucketParams",
      "discriminator": [
        169,
        3,
        166,
        166,
        3,
        150,
        62,
        227
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs) to verify the Ed25519 precompile signature."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "bucketParams"
            }
          }
        }
      ]
    },
    {
      "name": "setBucketWindowTiming",
      "docs": [
        "Admin-tunable per-bucket window timing — change OPEN_SECS / BETTING_SECS /",
        "GUARD_BAND_SLOTS for a bucket WITHOUT a program upgrade.",
        "",
        "Validated so a misconfigured (or compromised) admin cannot brick the",
        "cycle:",
        "- each window duration is clamped to [MIN_WINDOW_SECS, MAX_WINDOW_SECS]",
        "(no 0-length or absurd windows);",
        "- the guard band must leave at least MIN_CRANKABLE_SLOTS of live",
        "crank window (so `crank_mine` can never be permanently refused).",
        "",
        "No phase gate: the admin already holds strictly-stronger levers",
        "(`set_pause` blocks every user op), so restricting WHEN timing can be",
        "tuned would add friction without adding security. The change takes",
        "effect immediately — subsequent open/close/crank gates read the new",
        "per-bucket values."
      ],
      "discriminator": [
        97,
        124,
        30,
        83,
        64,
        112,
        236,
        156
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs) to verify the Ed25519 precompile signature."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "openSecs",
          "type": "i64"
        },
        {
          "name": "bettingSecs",
          "type": "i64"
        },
        {
          "name": "guardBandSlots",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setClaimsOpen",
      "discriminator": [
        72,
        97,
        72,
        71,
        123,
        131,
        45,
        81
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs) to verify the Ed25519 precompile signature."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "open",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setDepositsOpen",
      "discriminator": [
        91,
        221,
        147,
        146,
        85,
        176,
        56,
        189
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs) to verify the Ed25519 precompile signature."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "open",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setFeeRecipient",
      "discriminator": [
        227,
        18,
        215,
        42,
        237,
        246,
        151,
        66
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "instructions",
          "docs": [
            "fee-holder cosign check in `set_fee_recipient`. The",
            "admin-transfer ixs (propose/cancel) share this context but do NOT cosign",
            "(they're gated by the separate ADMIN_TRANSFER_CONFIRMER flow); they",
            "simply pass this account unused."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newFeeRecipient",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "setFeeSchedule",
      "docs": [
        "V5 — admin update of an already-initialised fee schedule.",
        "",
        "Replaces the recipient array. Admin can call this at any time to",
        "rotate compromised recipient pubkeys, onboard new partners, or",
        "rebalance the split as project circumstances change. Validated to",
        "sum to exactly 10000 bps over non-empty slots.",
        "",
        "Side-effect free w.r.t. the fee_bucket balance: pre-existing fees",
        "will be distributed under the NEW split at the next",
        "`distribute_fees` call (snapshot-at-distribute semantics). If the",
        "off-chain governance wants the old split to apply to already-accrued",
        "fees, call `distribute_fees` BEFORE `set_fee_schedule`.",
        "",
        "`genesis_ts` is preserved unchanged — it remains a record of when",
        "the schedule was first initialized, not when it was last edited."
      ],
      "discriminator": [
        239,
        37,
        205,
        178,
        164,
        47,
        23,
        13
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "feeSchedule",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  115,
                  99,
                  104,
                  101,
                  100,
                  117,
                  108,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs)."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "recipients",
          "type": {
            "array": [
              {
                "defined": {
                  "name": "feeRecipient"
                }
              },
              4
            ]
          }
        }
      ]
    },
    {
      "name": "setFees",
      "docs": [
        "V5 — narrow admin setter for the flat entry/exit fees. Doesn't",
        "touch the rest of the bucket params, so it's safe to use without",
        "risking accidental NAV-bound or refining-rate changes."
      ],
      "discriminator": [
        137,
        178,
        49,
        58,
        0,
        245,
        242,
        190
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs) to verify the Ed25519 precompile signature."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "entryFeeBps",
          "type": "u16"
        },
        {
          "name": "entryFeeEnabled",
          "type": "bool"
        },
        {
          "name": "exitFeeBps",
          "type": "u16"
        },
        {
          "name": "exitFeeEnabled",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setPause",
      "discriminator": [
        63,
        32,
        154,
        2,
        56,
        103,
        79,
        45
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs) to verify the Ed25519 precompile signature."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "paused",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setPerfFee",
      "docs": [
        "V5 — narrow admin setter for the performance fee bps. Mirrors",
        "`set_fees` ergonomics: touches only `performance_fee_bps` so the",
        "admin can't accidentally change NAV-bound, deposit-cap, or other",
        "params while turning the perf fee on/off.",
        "",
        "Today's V5 product defaults `performance_fee_bps = 0` (flat",
        "entry+exit only). This ix exists so the perf-fee dormant capability",
        "can be activated per-bucket without a program redeploy if a future",
        "product variant calls for it.",
        "FIX #3 (admin money lever) — NEUTERED. The performance fee routed",
        "treasury SOL to an admin-controlled `fee_recipient`; in the",
        "non-custodial vault that lever is removed. The only value this ix can",
        "now set is 0 (MAX_PERFORMANCE_FEE_BPS == 0). Any non-zero value is",
        "rejected. Retained so existing callers/IDLs don't break and so the",
        "fee can be explicitly re-zeroed."
      ],
      "discriminator": [
        149,
        94,
        54,
        56,
        33,
        20,
        212,
        136
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs) to verify the Ed25519 precompile signature."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "performanceFeeBps",
          "type": "u16"
        }
      ]
    },
    {
      "name": "setPullFee",
      "docs": [
        "V5 — narrow admin setter for the per-pull VOLUME fee. This is",
        "the ONLY active monetisation in the V5 baseline product (entry /",
        "exit / perf all default to 0 bps). Bps capped at",
        "`MAX_PULL_FEE_BPS` (500). Bumps blocked while `claims_open == true`",
        "(raising is gated; lowering OK) — H1 parity."
      ],
      "discriminator": [
        99,
        148,
        254,
        226,
        20,
        41,
        61,
        113
      ],
      "accounts": [
        {
          "name": "config",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "instructions",
          "docs": [
            "cosign check (cosign.rs) to verify the Ed25519 precompile signature."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "pullFeeBps",
          "type": "u16"
        },
        {
          "name": "pullFeeEnabled",
          "type": "bool"
        }
      ]
    },
    {
      "name": "settleHarvest",
      "docs": [
        "Permissionless harvest. Vault-PDA-signed inner CPIs:",
        "1. ClaimSOL (miner -> mining_authority), then PDA-internal transfer",
        "mining_authority -> treasury, fold into sol_in_vault.",
        "2. ClaimORE (ORE -> ATA(mining_authority)).",
        "3. ore-lst Wrap (ORE -> stORE into ATA(mining_authority)).",
        "4. transfer stORE ATA(mining_authority) -> store_treasury PDA.",
        "FIX #2: credit store_in_vault from the store_treasury balance DELTA",
        "(authoritative custody). Also advance the accumulator from the ACTUAL",
        "wrapped grams (the single crediting site — see `checkpoint`)."
      ],
      "discriminator": [
        73,
        14,
        208,
        42,
        20,
        29,
        55,
        100
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "writable": true
        },
        {
          "name": "storeTreasury",
          "docs": [
            "Per-bucket stORE-holding token account (authority = bucket PDA)."
          ],
          "writable": true
        },
        {
          "name": "miningAuthorityOreAta",
          "docs": [
            "mining_authority's ORE ATA (ClaimORE destination, Wrap source). A",
            "non-custodial vault self-creates its own ATAs: init_if_needed so the",
            "first settle_harvest creates it (paid by caller) instead of reverting",
            "AccountNotInitialized. Idempotent — found pre-existing on later settles."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "miningAuthority"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "oreMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "miningAuthorityStoreAta",
          "docs": [
            "mining_authority's stORE ATA (Wrap destination). init_if_needed (paid by",
            "caller) so the first settle_harvest creates it; idempotent thereafter."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "miningAuthority"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "storeMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "oreMint",
          "writable": true,
          "address": "oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp"
        },
        {
          "name": "storeMint",
          "docs": [
            "stORE mint, pinned to config.store_mint AND the on-chain STORE_MINT.",
            "`mut` because the ore-lst Wrap CPI MINTS stORE (supply changes), so",
            "ix_wrap passes STORE_MINT writable — without mut here the inner CPI would",
            "escalate its privilege over the outer settle_harvest ix."
          ],
          "writable": true,
          "address": "sTorERYB6xAZ1SSbwpK3zoK2EEwbBrc7TZAzg1uCGiH"
        },
        {
          "name": "oreMiner",
          "writable": true
        },
        {
          "name": "oreBoard",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  111,
                  97,
                  114,
                  100
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                12,
                0,
                218,
                56,
                205,
                148,
                79,
                95,
                157,
                57,
                234,
                175,
                167,
                180,
                108,
                229,
                43,
                215,
                237,
                195,
                185,
                162,
                118,
                164,
                114,
                44,
                46,
                42,
                174,
                52,
                137,
                67
              ]
            }
          }
        },
        {
          "name": "oreTreasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                12,
                0,
                218,
                56,
                205,
                148,
                79,
                95,
                157,
                57,
                234,
                175,
                167,
                180,
                108,
                229,
                43,
                215,
                237,
                195,
                185,
                162,
                118,
                164,
                114,
                44,
                46,
                42,
                174,
                52,
                137,
                67
              ]
            }
          }
        },
        {
          "name": "oreTreasuryOreAta",
          "writable": true
        },
        {
          "name": "oreProgram",
          "address": "oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv"
        },
        {
          "name": "oreLstVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                4,
                251,
                80,
                194,
                234,
                15,
                72,
                106,
                104,
                80,
                91,
                93,
                174,
                212,
                106,
                243,
                71,
                70,
                149,
                89,
                215,
                70,
                161,
                100,
                153,
                213,
                221,
                81,
                78,
                163,
                190,
                130
              ]
            }
          }
        },
        {
          "name": "oreLstVaultOreAta",
          "writable": true
        },
        {
          "name": "oreLstStake",
          "writable": true
        },
        {
          "name": "oreLstStakeOreAta",
          "writable": true
        },
        {
          "name": "oreLstTreasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                6,
                133,
                194,
                223,
                210,
                129,
                79,
                202,
                69,
                159,
                227,
                210,
                86,
                178,
                85,
                73,
                103,
                66,
                7,
                177,
                177,
                163,
                250,
                233,
                206,
                220,
                177,
                218,
                50,
                19,
                243,
                181
              ]
            }
          }
        },
        {
          "name": "oreLstTreasuryOreAta",
          "writable": true
        },
        {
          "name": "oreLstVesting",
          "docs": [
            "re-added in the Jun-17-2026 ore-lst update; verified vs a live mainnet",
            "Wrap tx (2026-06-18). Omitting it reverts the wrap and bricks the bucket."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  101,
                  115,
                  116,
                  105,
                  110,
                  103
                ]
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                6,
                133,
                194,
                223,
                210,
                129,
                79,
                202,
                69,
                159,
                227,
                210,
                86,
                178,
                85,
                73,
                103,
                66,
                7,
                177,
                177,
                163,
                250,
                233,
                206,
                220,
                177,
                218,
                50,
                19,
                243,
                181
              ]
            }
          }
        },
        {
          "name": "oreStakeProgram",
          "address": "STkEAu2cEyQp5ktgUauRVq8es6mEP2w6ixw4NEd5tDJ"
        },
        {
          "name": "oreLstProgram",
          "docs": [
            "invoke_signed must receive the target program in its account list, else",
            "the runtime can't resolve it (\"Unknown program LStwN…\")."
          ],
          "address": "LStwN2E5Uw6MCtuxHRLhy8RY9hxqW2XRpLzettb696y"
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless caller (pays tx fee + the one-time ATA rent on first settle)."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "withdraw",
      "docs": [
        "User withdraws SOL by burning shares. Gated by:",
        "- !paused",
        "- claims_open (operator must explicitly open claims)",
        "",
        "Performance fee is computed against the bucket's high-water NPS and",
        "transferred to `cfg.fee_recipient`. User receives payout − fee.",
        "",
        "NAV is FROZEN while claims_open=true (pull/push/report_nav all blocked),",
        "so the NPS used here cannot be manipulated mid-withdraw. This is the",
        "central security invariant of the v2 design.",
        "User withdraws by burning shares. V6 non-custodial:",
        "- !paused",
        "- phase == OPEN  (FIX #7)",
        "SOL is paid pro-rata at the FROZEN `claims_window_nps` (snapshotted at",
        "open_window). stORE is paid via the per-user reward-debt accumulator",
        "from the Position PDA, capped by the store_treasury balance",
        "(fail-closed). Decrements both Position and the share mint."
      ],
      "discriminator": [
        183,
        18,
        70,
        156,
        148,
        109,
        161,
        34
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "shareMint",
          "writable": true
        },
        {
          "name": "userShareAta",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "position",
          "docs": [
            "V6 — per-user Position PDA. Pinned to (bucket_id, user). The handler",
            "also asserts `position.owner == user`."
          ],
          "writable": true
        },
        {
          "name": "feeBucket",
          "docs": [
            "V5 — global fee bucket PDA. Exit fees flow here for later",
            "permissionless distribution via `distribute_fees`."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  98,
                  117,
                  99,
                  107,
                  101,
                  116
                ]
              }
            ]
          }
        },
        {
          "name": "feeSchedule",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  115,
                  99,
                  104,
                  101,
                  100,
                  117,
                  108,
                  101
                ]
              }
            ]
          }
        },
        {
          "name": "config",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              }
            ]
          }
        },
        {
          "name": "storeTreasury",
          "docs": [
            "V5 — per-bucket stORE-holding token account. Source of pro-rata",
            "stORE paid out alongside the SOL payout. Authority = bucket PDA."
          ],
          "writable": true
        },
        {
          "name": "userStoreAta",
          "docs": [
            "User's stORE ATA. Must exist (caller should idempotently create it",
            "in a preInstruction). Mint must match `cfg.store_mint`."
          ],
          "writable": true
        },
        {
          "name": "storeMint",
          "docs": [
            "The configured stORE mint. Address-pinned to `cfg.store_mint`."
          ]
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "bucket",
      "discriminator": [
        27,
        203,
        100,
        76,
        218,
        12,
        58,
        168
      ]
    },
    {
      "name": "config",
      "discriminator": [
        155,
        12,
        170,
        224,
        30,
        250,
        204,
        130
      ]
    },
    {
      "name": "feeSchedule",
      "discriminator": [
        250,
        80,
        88,
        27,
        206,
        216,
        50,
        199
      ]
    },
    {
      "name": "position",
      "discriminator": [
        170,
        188,
        143,
        228,
        122,
        64,
        247,
        208
      ]
    }
  ],
  "events": [
    {
      "name": "adminCosignEvent",
      "discriminator": [
        104,
        29,
        148,
        107,
        156,
        103,
        87,
        203
      ]
    },
    {
      "name": "adminProposedEvent",
      "discriminator": [
        212,
        163,
        91,
        28,
        223,
        95,
        2,
        102
      ]
    },
    {
      "name": "adminTransferAcceptedEvent",
      "discriminator": [
        126,
        246,
        18,
        138,
        98,
        63,
        176,
        92
      ]
    },
    {
      "name": "adminTransferCancelledEvent",
      "discriminator": [
        175,
        140,
        104,
        221,
        194,
        183,
        79,
        71
      ]
    },
    {
      "name": "adminTransferConfirmedEvent",
      "discriminator": [
        218,
        245,
        99,
        218,
        37,
        174,
        221,
        93
      ]
    },
    {
      "name": "bucketInitializedEvent",
      "discriminator": [
        209,
        56,
        85,
        92,
        55,
        70,
        61,
        162
      ]
    },
    {
      "name": "checkpointEvent",
      "discriminator": [
        54,
        237,
        169,
        161,
        81,
        0,
        202,
        205
      ]
    },
    {
      "name": "crankMineEvent",
      "discriminator": [
        45,
        149,
        70,
        157,
        143,
        12,
        43,
        229
      ]
    },
    {
      "name": "depositEvent",
      "discriminator": [
        120,
        248,
        61,
        83,
        31,
        142,
        107,
        144
      ]
    },
    {
      "name": "feeScheduleInitializedEvent",
      "discriminator": [
        166,
        232,
        137,
        76,
        87,
        10,
        108,
        248
      ]
    },
    {
      "name": "feeScheduleUpdatedEvent",
      "discriminator": [
        78,
        178,
        72,
        73,
        251,
        14,
        72,
        110
      ]
    },
    {
      "name": "feesDistributedEvent",
      "discriminator": [
        95,
        72,
        218,
        211,
        175,
        186,
        41,
        255
      ]
    },
    {
      "name": "initializedEvent",
      "discriminator": [
        136,
        202,
        63,
        120,
        152,
        146,
        41,
        79
      ]
    },
    {
      "name": "miningPdaInitializedEvent",
      "discriminator": [
        229,
        237,
        86,
        208,
        21,
        47,
        75,
        2
      ]
    },
    {
      "name": "phaseChangedEvent",
      "discriminator": [
        138,
        7,
        103,
        90,
        112,
        56,
        41,
        4
      ]
    },
    {
      "name": "setBucketOperatorEvent",
      "discriminator": [
        14,
        190,
        181,
        246,
        212,
        172,
        21,
        46
      ]
    },
    {
      "name": "setBucketParamsEvent",
      "discriminator": [
        44,
        177,
        38,
        225,
        22,
        70,
        122,
        111
      ]
    },
    {
      "name": "setBucketWindowTimingEvent",
      "discriminator": [
        62,
        176,
        198,
        94,
        68,
        60,
        173,
        152
      ]
    },
    {
      "name": "setClaimsOpenEvent",
      "discriminator": [
        244,
        38,
        99,
        224,
        176,
        184,
        7,
        109
      ]
    },
    {
      "name": "setDepositsOpenEvent",
      "discriminator": [
        68,
        215,
        98,
        145,
        146,
        159,
        199,
        102
      ]
    },
    {
      "name": "setFeeRecipientEvent",
      "discriminator": [
        184,
        5,
        192,
        73,
        240,
        241,
        169,
        215
      ]
    },
    {
      "name": "setFeesEvent",
      "discriminator": [
        15,
        239,
        255,
        95,
        248,
        35,
        111,
        115
      ]
    },
    {
      "name": "setPauseEvent",
      "discriminator": [
        219,
        209,
        120,
        213,
        175,
        135,
        178,
        183
      ]
    },
    {
      "name": "setPerfFeeEvent",
      "discriminator": [
        134,
        203,
        93,
        75,
        163,
        250,
        153,
        172
      ]
    },
    {
      "name": "setPullFeeEvent",
      "discriminator": [
        117,
        211,
        244,
        53,
        128,
        67,
        189,
        211
      ]
    },
    {
      "name": "settleHarvestEvent",
      "discriminator": [
        50,
        16,
        139,
        46,
        104,
        162,
        4,
        41
      ]
    },
    {
      "name": "withdrawEvent",
      "discriminator": [
        22,
        9,
        133,
        26,
        160,
        44,
        71,
        192
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "notAdmin",
      "msg": "Caller is not the admin"
    },
    {
      "code": 6001,
      "name": "reservedRoleErr",
      "msg": "Reserved error code (unused)"
    },
    {
      "code": 6002,
      "name": "notOperator",
      "msg": "Wallet is not the registered operator"
    },
    {
      "code": 6003,
      "name": "bucketPaused",
      "msg": "Bucket is paused"
    },
    {
      "code": 6004,
      "name": "bucketAlreadyInitialized",
      "msg": "Bucket already initialized"
    },
    {
      "code": 6005,
      "name": "invalidBucketId",
      "msg": "Invalid bucket id"
    },
    {
      "code": 6006,
      "name": "depositsClosed",
      "msg": "Deposits are currently closed for this bucket"
    },
    {
      "code": 6007,
      "name": "claimsClosed",
      "msg": "Claims are currently closed for this bucket"
    },
    {
      "code": 6008,
      "name": "navFrozen",
      "msg": "Operation blocked while claims are open — NAV is frozen for fair withdrawals"
    },
    {
      "code": 6009,
      "name": "depositBelowMinimum",
      "msg": "Deposit amount below bucket minimum"
    },
    {
      "code": 6010,
      "name": "depositExceedsCap",
      "msg": "Deposit would exceed bucket cap"
    },
    {
      "code": 6011,
      "name": "zeroShares",
      "msg": "Withdraw shares must be greater than zero"
    },
    {
      "code": 6012,
      "name": "zeroAmount",
      "msg": "Amount must be greater than zero"
    },
    {
      "code": 6013,
      "name": "insufficientVaultSol",
      "msg": "Insufficient SOL in vault to fulfill withdraw — operator must top up"
    },
    {
      "code": 6014,
      "name": "insufficientPullable",
      "msg": "Insufficient SOL in vault to pull"
    },
    {
      "code": 6015,
      "name": "mathOverflow",
      "msg": "Math overflow"
    },
    {
      "code": 6016,
      "name": "mathUnderflow",
      "msg": "Math underflow"
    },
    {
      "code": 6017,
      "name": "badPerformanceFee",
      "msg": "Performance fee out of range"
    },
    {
      "code": 6018,
      "name": "navJumpExceeded",
      "msg": "NAV update would move share price beyond allowed jump bounds"
    },
    {
      "code": 6019,
      "name": "navRateLimited",
      "msg": "NAV update too soon after last update"
    },
    {
      "code": 6020,
      "name": "navIntervalTooShort",
      "msg": "min_nav_update_interval below contract safety floor"
    },
    {
      "code": 6021,
      "name": "emptyVault",
      "msg": "Cannot operate on empty vault"
    },
    {
      "code": 6022,
      "name": "bucketNotEmpty",
      "msg": "Bucket has outstanding shares — cannot reinitialize"
    },
    {
      "code": 6023,
      "name": "badDepositBounds",
      "msg": "Misconfigured params (min_deposit > deposit_cap)"
    },
    {
      "code": 6024,
      "name": "badEntryFee",
      "msg": "Entry fee bps out of range (must be ≤ MAX_ENTRY_FEE_BPS)"
    },
    {
      "code": 6025,
      "name": "badExitFee",
      "msg": "Exit fee bps out of range (must be ≤ MAX_EXIT_FEE_BPS)"
    },
    {
      "code": 6026,
      "name": "feeScheduleSplitInvalid",
      "msg": "Fee schedule recipient bps shares must sum to exactly 10000"
    },
    {
      "code": 6027,
      "name": "feeScheduleAlreadyInit",
      "msg": "Fee schedule already initialized"
    },
    {
      "code": 6028,
      "name": "feeBucketEmpty",
      "msg": "Fee bucket holds no SOL to distribute"
    },
    {
      "code": 6029,
      "name": "feeRecipientMismatch",
      "msg": "distribute_fees recipient account does not match schedule"
    },
    {
      "code": 6030,
      "name": "feeRecipientCountMismatch",
      "msg": "distribute_fees received wrong number of recipient accounts"
    },
    {
      "code": 6031,
      "name": "insufficientStoreInVault",
      "msg": "Insufficient stORE in vault to fulfill the requested transfer"
    },
    {
      "code": 6032,
      "name": "storeMintNotConfigured",
      "msg": "Operation requires Config.store_mint to be set (non-zero)"
    },
    {
      "code": 6033,
      "name": "storeMintMustBeSet",
      "msg": "Config.store_mint must be a real mint at initialize (Pubkey::default() not allowed)"
    },
    {
      "code": 6034,
      "name": "writeOffExceedsLossBound",
      "msg": "admin_write_off would exceed the per-call loss bound (MAX_WRITE_OFF_BPS)"
    },
    {
      "code": 6035,
      "name": "writeOffExceedsExternalValue",
      "msg": "write-off amount exceeds bucket.external_value"
    },
    {
      "code": 6036,
      "name": "feeBumpDuringClaims",
      "msg": "Fee parameter changes are blocked while claims_open=true (cannot bump fees mid-claim)"
    },
    {
      "code": 6037,
      "name": "perfFeeBumpDuringClaims",
      "msg": "Performance fee parameter cannot be raised while claims_open=true"
    },
    {
      "code": 6038,
      "name": "badPullFee",
      "msg": "Pull fee bps out of range (must be <= MAX_PULL_FEE_BPS)"
    },
    {
      "code": 6039,
      "name": "pullFeeBumpDuringClaims",
      "msg": "Pull fee parameter cannot be raised while claims_open=true"
    },
    {
      "code": 6040,
      "name": "notUpgradeAuthority",
      "msg": "Caller is not the program upgrade authority"
    },
    {
      "code": 6041,
      "name": "defaultPubkeyNotAllowed",
      "msg": "Pubkey::default() is not allowed for this role"
    },
    {
      "code": 6042,
      "name": "operatorRoleOverlap",
      "msg": "Operator wallet must not equal admin / fee_recipient (role separation)"
    },
    {
      "code": 6043,
      "name": "feeRecipientRoleOverlap",
      "msg": "Fee recipient must not equal admin / a bucket operator (role separation)"
    },
    {
      "code": 6044,
      "name": "operatorCannotBeUser",
      "msg": "Operator wallet is forbidden from acting as a vault depositor / withdrawer"
    },
    {
      "code": 6045,
      "name": "privilegedRoleCannotBeUser",
      "msg": "admin / fee_recipient are forbidden from acting as a vault depositor / withdrawer"
    },
    {
      "code": 6046,
      "name": "navReportFromZero",
      "msg": "Report_nav rejected: prev NPS is zero; admin must explicitly re-seed via a future ix"
    },
    {
      "code": 6047,
      "name": "claimsWindowNpsDrift",
      "msg": "New NAV per share would violate jump bounds vs the snapshot NPS at claims_open"
    },
    {
      "code": 6048,
      "name": "pullNpsDropExceeded",
      "msg": "Pull would push NAV per share below the per-call drop bound"
    },
    {
      "code": 6049,
      "name": "writeOffNpsDropExceeded",
      "msg": "admin_write_off would push NAV per share below the per-call drop bound"
    },
    {
      "code": 6050,
      "name": "noAdminProposalPending",
      "msg": "No admin transfer is currently pending"
    },
    {
      "code": 6051,
      "name": "adminProposalExpired",
      "msg": "Admin transfer proposal has expired (>24h since proposal)"
    },
    {
      "code": 6052,
      "name": "adminProposalNotConfirmed",
      "msg": "Admin transfer cannot be accepted until the off-chain confirmer signs and deposits"
    },
    {
      "code": 6053,
      "name": "adminProposalAlreadyConfirmed",
      "msg": "Admin transfer was already confirmed by the off-chain confirmer"
    },
    {
      "code": 6054,
      "name": "notAdminTransferConfirmer",
      "msg": "Caller is not the hardcoded admin_transfer_confirmer"
    },
    {
      "code": 6055,
      "name": "notPendingAdmin",
      "msg": "Caller is not the pending admin"
    },
    {
      "code": 6056,
      "name": "adminProposalAlreadyPending",
      "msg": "An admin transfer is already pending — call cancel_admin_transfer first"
    },
    {
      "code": 6057,
      "name": "wrongPhase",
      "msg": "Instruction not allowed in the current phase"
    },
    {
      "code": 6058,
      "name": "miningPdaNotInit",
      "msg": "Mining authority PDA not initialized for this bucket"
    },
    {
      "code": 6059,
      "name": "miningPdaAlreadyInit",
      "msg": "Mining authority PDA already initialized for this bucket"
    },
    {
      "code": 6060,
      "name": "inGuardBand",
      "msg": "Crank refused: inside the betting-window guard band"
    },
    {
      "code": 6061,
      "name": "insufficientVaultSolToDeploy",
      "msg": "Insufficient SOL in vault to deploy"
    },
    {
      "code": 6062,
      "name": "roundNotSettled",
      "msg": "ORE round has not been settled (checkpoint_id != round_id)"
    },
    {
      "code": 6063,
      "name": "rewardsNotClaimed",
      "msg": "ORE SOL rewards have not been claimed into the treasury"
    },
    {
      "code": 6064,
      "name": "invalidMinerAccount",
      "msg": "Provided ORE miner account is not a valid Miner (owner/disc/len mismatch)"
    },
    {
      "code": 6065,
      "name": "accountAddressMismatch",
      "msg": "Provided account does not match the expected pinned address"
    },
    {
      "code": 6066,
      "name": "wrapDestinationMismatch",
      "msg": "stORE did not land in the expected mining-authority ATA after wrap"
    },
    {
      "code": 6067,
      "name": "positionAccountingError",
      "msg": "Position reward debt accounting underflow/overflow"
    },
    {
      "code": 6068,
      "name": "storeTreasuryShortfall",
      "msg": "stORE owed exceeds store_treasury balance (fail-closed)"
    },
    {
      "code": 6069,
      "name": "badDeployAmount",
      "msg": "Deploy amount must be a positive multiple distributable across 25 squares"
    },
    {
      "code": 6070,
      "name": "noSquaresSelected",
      "msg": "Squares mask must select at least one square"
    },
    {
      "code": 6071,
      "name": "mustDeployAllSquares",
      "msg": "Simple pool must deploy across all 25 squares (selected != 25)"
    },
    {
      "code": 6072,
      "name": "perfFeeDisabled",
      "msg": "Performance fee is permanently disabled in the non-custodial vault"
    },
    {
      "code": 6073,
      "name": "windowNotSettled",
      "msg": "Claim window not settled — the first user action must run settle_harvest first"
    },
    {
      "code": 6074,
      "name": "badWindowTiming",
      "msg": "Window timing out of range, or guard band leaves no crankable window"
    },
    {
      "code": 6075,
      "name": "missingCosign",
      "msg": "Admin ix requires a fee-holder Ed25519 cosign, but none was found in the transaction"
    },
    {
      "code": 6076,
      "name": "badCosign",
      "msg": "Cosign message is malformed (wrong tag/length/program, or precompile data is not self-contained)"
    },
    {
      "code": 6077,
      "name": "staleCosign",
      "msg": "Cosign signature is stale or from the future (outside the freshness window)"
    },
    {
      "code": 6078,
      "name": "badCosignNonce",
      "msg": "Cosign nonce does not match Config.admin_auth_nonce (replay / out-of-order)"
    },
    {
      "code": 6079,
      "name": "cosignIxMismatch",
      "msg": "Cosign does not bind to this exact instruction + args (ix-data hash mismatch)"
    },
    {
      "code": 6080,
      "name": "notFeeCosigner",
      "msg": "Cosigner is not one of the current fee holders"
    },
    {
      "code": 6081,
      "name": "roundAlreadyCranked",
      "msg": "This ORE round was already cranked this cycle (no double-deploy)"
    }
  ],
  "types": [
    {
      "name": "adminCosignEvent",
      "docs": [
        "Emitted on EVERY successful fee-holder cosign of an admin ix — records WHICH",
        "fee holder authorized the action (`cosigner`), the consumed one-time nonce,",
        "the signing timestamp, and the sha256 of the authorized instruction's data."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cosigner",
            "type": "pubkey"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "signedTs",
            "type": "i64"
          },
          {
            "name": "ixHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "adminProposedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "currentAdmin",
            "type": "pubkey"
          },
          {
            "name": "pendingAdmin",
            "type": "pubkey"
          },
          {
            "name": "proposedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "adminTransferAcceptedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": "pubkey"
          },
          {
            "name": "new",
            "type": "pubkey"
          },
          {
            "name": "acceptedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "adminTransferCancelledEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "currentAdmin",
            "type": "pubkey"
          },
          {
            "name": "cancelledPendingAdmin",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "adminTransferConfirmedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "currentAdmin",
            "type": "pubkey"
          },
          {
            "name": "pendingAdmin",
            "type": "pubkey"
          },
          {
            "name": "confirmer",
            "type": "pubkey"
          },
          {
            "name": "confirmationLamports",
            "type": "u64"
          },
          {
            "name": "confirmedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "bucket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "paused",
            "docs": [
              "Master kill switch. When true, EVERY user + crank/operator instruction",
              "is blocked. Only `set_paused(false)` from admin can re-enable."
            ],
            "type": "bool"
          },
          {
            "name": "depositsOpen",
            "docs": [
              "Operator-controlled phase flag. When true, `deposit` is allowed",
              "(subject to !paused && !claims_open)."
            ],
            "type": "bool"
          },
          {
            "name": "claimsOpen",
            "docs": [
              "Operator-controlled claim-window flag. When true:",
              "- users may call `withdraw` to redeem shares at the FROZEN NPS",
              "- `deposit`, `pull`, `push`, `report_nav` are ALL disabled (NAV frozen)",
              "This is the central security invariant added in V2: no NAV manipulation",
              "is possible during a withdraw window."
            ],
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "treasuryBump",
            "type": "u8"
          },
          {
            "name": "mintBump",
            "type": "u8"
          },
          {
            "name": "shareMint",
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "type": "pubkey"
          },
          {
            "name": "operatorWallet",
            "docs": [
              "V5 — per-bucket operator wallet. PINNED destination for `pull`,",
              "source for `push`, and authority on the operator stORE ATA used",
              "by `push_store`. Set at `init_bucket` time, mutable only via",
              "`set_bucket_operator` (admin, claims-open lock for changes).",
              "Each bucket having its own operator gives it its own ORE Miner PDA,",
              "so claim_ore cadence + refining-yield accumulation are isolated",
              "per bucket (Simple's hourly claim does NOT reset Refined/Ultra)."
            ],
            "type": "pubkey"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "solInVault",
            "type": "u64"
          },
          {
            "name": "externalValue",
            "type": "u64"
          },
          {
            "name": "storeInVault",
            "docs": [
              "V5 — stORE atomic units currently held by the bucket's `store_treasury`",
              "token account (authority = bucket PDA). Grows on push_store, shrinks",
              "pro-rata on withdraw. Decoupled from SOL NAV: this is a parallel",
              "payout leg, not factored into nav_per_share."
            ],
            "type": "u64"
          },
          {
            "name": "storeTreasuryBump",
            "type": "u8"
          },
          {
            "name": "highWaterNavPerShare",
            "docs": [
              "Maximum NPS ever reported. Used to compute performance fee on `withdraw`."
            ],
            "type": "u128"
          },
          {
            "name": "lastNavUpdate",
            "type": "i64"
          },
          {
            "name": "lastNavPerShare",
            "type": "u128"
          },
          {
            "name": "claimsWindowNps",
            "docs": [
              "External-audit hardening (2026-06): NPS snapshot taken when",
              "`set_claims_open(true)` is called. Withdraw uses this frozen value",
              "so the crank cannot pre-pump NPS immediately before a",
              "claim window opens. Set back to 0 when claims_open=false.",
              "",
              "V6 non-custodial: now the FROZEN DERIVED NAV-per-share snapshotted at",
              "`open_window` (BETTING -> OPEN). Withdraw pays SOL at this NPS."
            ],
            "type": "u128"
          },
          {
            "name": "miningAuthority",
            "docs": [
              "Per-bucket mining authority PDA = PDA([MINING_SEED, bucket_id], cwr).",
              "ORE Miner authority + signer of all ORE/ore-lst CPIs + SOL source for",
              "Deploy. Pubkey::default() until `init_mining_pda`."
            ],
            "type": "pubkey"
          },
          {
            "name": "miningAuthorityBump",
            "type": "u8"
          },
          {
            "name": "oreMiner",
            "docs": [
              "The ORE Miner PDA = PDA([b\"miner\", mining_authority], ORE). Cached at",
              "init so callers/handlers can pin it."
            ],
            "type": "pubkey"
          },
          {
            "name": "phase",
            "docs": [
              "Phase: PHASE_BETTING (0) = mining live; PHASE_OPEN (1) = deposits +",
              "withdrawals. Driven by Clock vs `phase_started_slot` via",
              "open_window / close_window."
            ],
            "type": "u8"
          },
          {
            "name": "phaseStartedSlot",
            "docs": [
              "Slot at which the current phase began (used as the time anchor; we",
              "also store unix ts implicitly via clock checks in the handlers)."
            ],
            "type": "u64"
          },
          {
            "name": "phaseStartedTs",
            "docs": [
              "Unix timestamp at which the current phase began. Phase transitions are",
              "gated on (now - phase_started_ts) vs OPEN_SECS / BETTING_SECS."
            ],
            "type": "i64"
          },
          {
            "name": "bettingRoundId",
            "docs": [
              "The ORE round id of the most recent `crank_mine` Deploy."
            ],
            "type": "u64"
          },
          {
            "name": "windowSettled",
            "docs": [
              "Lazy-settle flag for the CLAIM (OPEN) window. The crank NEVER claims",
              "ORE — it accumulates unclaimed across betting (refining yield + dodges",
              "the 10% claim fee). `open_window` sets this FALSE; the first user action",
              "in OPEN must run `settle_harvest` (claim ALL accumulated SOL + ORE ->",
              "stORE, advance the accumulator over the PRIOR cycle's share base) which",
              "sets it TRUE — and `deposit`/`withdraw` are blocked until then. So the",
              "accumulator is always advanced BEFORE any share mutation in the window:",
              "no newcomer can backdate onto the prior cycle's ORE."
            ],
            "type": "bool"
          },
          {
            "name": "accStorePerShare",
            "docs": [
              "stORE-per-share accumulator (scaled by ACC_SCALE). Advanced when",
              "realized stORE is folded into `store_treasury`. Drives the per-user",
              "reward-debt payout in withdraw."
            ],
            "type": "u128"
          },
          {
            "name": "lastSeenRewardsOre",
            "docs": [
              "Last observed (rewards_ore + refined_ore) on the ORE Miner, used to",
              "compute the per-checkpoint delta. (Bookkeeping for the accrual site.)"
            ],
            "type": "u64"
          },
          {
            "name": "openSecs",
            "docs": [
              "OPEN-window duration (s) for THIS bucket. close_window is gated on",
              "(now - phase_started_ts) >= open_secs. Seeded from OPEN_SECS at",
              "init_bucket; changeable by admin via `set_bucket_window_timing`."
            ],
            "type": "i64"
          },
          {
            "name": "bettingSecs",
            "docs": [
              "BETTING-window duration (s). open_window is gated on",
              "(now - phase_started_ts) >= betting_secs; also drives the crank",
              "guard-band slot budget. Seeded from BETTING_SECS; admin-tunable."
            ],
            "type": "i64"
          },
          {
            "name": "guardBandSlots",
            "docs": [
              "Crank guard-band (slots) at the END of the betting window — crank_mine",
              "is refused inside it. Seeded from GUARD_BAND_SLOTS; admin-tunable.",
              "Validation guarantees it always leaves a positive crankable window."
            ],
            "type": "u64"
          },
          {
            "name": "params",
            "type": {
              "defined": {
                "name": "bucketParams"
              }
            }
          }
        ]
      }
    },
    {
      "name": "bucketInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "shareMint",
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "type": "pubkey"
          },
          {
            "name": "operatorWallet",
            "type": "pubkey"
          },
          {
            "name": "params",
            "type": {
              "defined": {
                "name": "bucketParams"
              }
            }
          }
        ]
      }
    },
    {
      "name": "bucketParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "performanceFeeBps",
            "docs": [
              "Performance fee charged on profit above the bucket's high-water NPS."
            ],
            "type": "u16"
          },
          {
            "name": "maxNavJumpUpBps",
            "docs": [
              "Maximum per-`report_nav` upward NPS jump (BPS of prev NPS)."
            ],
            "type": "u16"
          },
          {
            "name": "maxNavDropDownBps",
            "docs": [
              "Maximum per-`report_nav` downward NPS drop (BPS of prev NPS)."
            ],
            "type": "u16"
          },
          {
            "name": "minNavUpdateInterval",
            "docs": [
              "Minimum seconds between consecutive `report_nav` calls. Floored by",
              "`MIN_NAV_UPDATE_INTERVAL_SECS` (1 hour) at validation time."
            ],
            "type": "i64"
          },
          {
            "name": "minDeposit",
            "docs": [
              "Minimum SOL per deposit (lamports). 0 = no minimum."
            ],
            "type": "u64"
          },
          {
            "name": "depositCap",
            "docs": [
              "Maximum total SOL the bucket will accept across all depositors. 0 = uncapped."
            ],
            "type": "u64"
          },
          {
            "name": "entryFeeBps",
            "docs": [
              "Entry fee in basis points, skimmed from each deposit into the fee",
              "bucket PDA before shares are minted. Capped at `MAX_ENTRY_FEE_BPS`."
            ],
            "type": "u16"
          },
          {
            "name": "exitFeeBps",
            "docs": [
              "Exit fee in basis points, skimmed from each withdrawal's gross",
              "payout into the fee bucket PDA. Capped at `MAX_EXIT_FEE_BPS`."
            ],
            "type": "u16"
          },
          {
            "name": "entryFeeEnabled",
            "docs": [
              "When false, entry fee is skipped regardless of `entry_fee_bps`."
            ],
            "type": "bool"
          },
          {
            "name": "exitFeeEnabled",
            "docs": [
              "When false, exit fee is skipped regardless of `exit_fee_bps`."
            ],
            "type": "bool"
          },
          {
            "name": "pullFeeBps",
            "docs": [
              "V5 — per-`pull` volume fee in bps. Skimmed from the pull amount",
              "INSIDE the `pull` ix and routed to the global `fee_bucket` PDA.",
              "The remaining amount (NET) is what reaches the operator wallet",
              "for actual deployment. `external_value` is incremented by the NET,",
              "so the vault's total NAV drops by the fee on every pull — that is",
              "where the user pays this fee, transparently, via NPS reduction.",
              "Capped at `MAX_PULL_FEE_BPS`."
            ],
            "type": "u16"
          },
          {
            "name": "pullFeeEnabled",
            "docs": [
              "When false, pull fee is skipped regardless of `pull_fee_bps`."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "checkpointEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "roundId",
            "type": "u64"
          },
          {
            "name": "rewardsOre",
            "type": "u64"
          },
          {
            "name": "refinedOre",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "config",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "docs": [
              "Highest privilege key. Can rotate any role + change bucket params."
            ],
            "type": "pubkey"
          },
          {
            "name": "feeRecipient",
            "docs": [
              "Where performance fees flow."
            ],
            "type": "pubkey"
          },
          {
            "name": "storeMint",
            "docs": [
              "V5 — stORE mint. Pinned at `initialize`; cannot be changed after init",
              "(would break per-bucket `store_treasury` ATAs and the `address =",
              "config.store_mint` constraints on `Withdraw`).",
              "**Must be a real mint** — `Pubkey::default()` is rejected at init",
              "(`CwrError::StoreMintMustBeSet`). Localnet/devnet environments that",
              "don't have a deployed `ore-lst` should still mint a placeholder SPL",
              "mint and pass it here; `push_store` is permissionless to omit so the",
              "stORE leg simply stays at 0 for those envs."
            ],
            "type": "pubkey"
          },
          {
            "name": "bucketCount",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "pendingAdmin",
            "docs": [
              "Pending admin during a handover. `Pubkey::default()` = no proposal",
              "pending. Set by `propose_admin`, cleared by `accept_admin` /",
              "`cancel_admin_transfer` / expiry override."
            ],
            "type": "pubkey"
          },
          {
            "name": "pendingAdminProposedAt",
            "docs": [
              "Unix ts at which `propose_admin` was called. 0 when no pending."
            ],
            "type": "i64"
          },
          {
            "name": "pendingAdminConfirmed",
            "docs": [
              "True after `confirm_admin_transfer` has run for this proposal.",
              "Required to be true before `accept_admin` will commit the rotation."
            ],
            "type": "bool"
          },
          {
            "name": "adminAuthNonce",
            "docs": [
              "Monotonic one-time nonce. The signed cosign message must carry the",
              "CURRENT value; each successful admin ix bumps it, so a captured message",
              "cannot be replayed even within its freshness window."
            ],
            "type": "u64"
          },
          {
            "name": "feeCosigners",
            "docs": [
              "Denormalized mirror of `FeeSchedule.recipients[*].recipient` — the set of",
              "keys allowed to co-sign. Written by `init_fee_schedule` / `set_fee_schedule`",
              "so the cosign check needs only `Config` (already in every admin context),",
              "not the FeeSchedule account. Empty slots are `Pubkey::default()`."
            ],
            "type": {
              "array": [
                "pubkey",
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "crankMineEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "roundId",
            "type": "u64"
          },
          {
            "name": "amount",
            "docs": [
              "Gross SOL debited from sol_in_vault."
            ],
            "type": "u64"
          },
          {
            "name": "feeLamports",
            "docs": [
              "1% volume fee skimmed to the global fee_bucket."
            ],
            "type": "u64"
          },
          {
            "name": "netAmount",
            "docs": [
              "NET deployed into ORE (amount - fee)."
            ],
            "type": "u64"
          },
          {
            "name": "perSquare",
            "docs": [
              "Per-square deploy amount (per_square = amount / 25)."
            ],
            "type": "u64"
          },
          {
            "name": "squaresSelected",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "depositEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "amountLamports",
            "type": "u64"
          },
          {
            "name": "entryFeeLamports",
            "type": "u64"
          },
          {
            "name": "netDepositedLamports",
            "type": "u64"
          },
          {
            "name": "sharesMinted",
            "type": "u64"
          },
          {
            "name": "navPerShare",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "feeRecipient",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "recipient",
            "type": "pubkey"
          },
          {
            "name": "bpsShare",
            "docs": [
              "Share of distributed fees in bps. 0 = slot unused (recipient field",
              "will also be Pubkey::default() in that case)."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "feeSchedule",
      "docs": [
        "Fee distribution schedule. A single mutable `recipients` array, set at",
        "`init_fee_schedule` and updatable any time via `set_fee_schedule`",
        "(admin-only). Each non-empty slot must have `bps_share` > 0 and the",
        "non-empty slots must sum to exactly 10_000 bps.",
        "",
        "**Why this is just one array, not two with a hard-coded rollover:** the",
        "prior design baked a genesis → year_one switchover into the contract,",
        "which froze tokenomics decisions at deploy time. Admin authority can",
        "now update the split whenever circumstances change (new team members,",
        "partner equity rounds, KPI hits, etc.). The single array keeps the",
        "contract neutral about schedule and lets governance/multisig encode",
        "the policy off-chain.",
        "",
        "Distribution semantics: **snapshot-at-distribute**. Whatever the",
        "`recipients` array contains at `distribute_fees` call-time applies to",
        "the entire current fee-bucket balance, regardless of when those fees",
        "accrued. If admin updates the schedule between fee accrual and the",
        "next distribute call, the NEW split is what governs that distribution.",
        "",
        "`genesis_ts` is preserved for telemetry only — when the schedule was",
        "first initialized. It is NOT used to gate anything."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "genesisTs",
            "docs": [
              "Informational only: when `init_fee_schedule` was first called.",
              "Not used for any time-based logic."
            ],
            "type": "i64"
          },
          {
            "name": "recipients",
            "docs": [
              "Current recipient split. Empty slots have `recipient = Pubkey::default()`",
              "and `bps_share = 0`. Non-empty slots must sum to exactly 10_000 bps."
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "feeRecipient"
                  }
                },
                4
              ]
            }
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "feeBucketBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "feeScheduleInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "genesisTs",
            "type": "i64"
          },
          {
            "name": "recipients",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "feeRecipient"
                  }
                },
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "feeScheduleUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "genesisTs",
            "docs": [
              "Preserved from the original `init_fee_schedule`. Editing the",
              "recipient list does NOT reset this timestamp."
            ],
            "type": "i64"
          },
          {
            "name": "recipients",
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "feeRecipient"
                  }
                },
                4
              ]
            }
          }
        ]
      }
    },
    {
      "name": "feesDistributedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalPaidLamports",
            "type": "u64"
          },
          {
            "name": "distributedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "initializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "feeRecipient",
            "type": "pubkey"
          },
          {
            "name": "storeMint",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "miningPdaInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "miningAuthority",
            "type": "pubkey"
          },
          {
            "name": "oreMiner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "phaseChangedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "phase",
            "type": "u8"
          },
          {
            "name": "phaseStartedSlot",
            "type": "u64"
          },
          {
            "name": "phaseStartedTs",
            "type": "i64"
          },
          {
            "name": "claimsWindowNps",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "position",
      "docs": [
        "Per-user position in a bucket. Created (init_if_needed) in `deposit`.",
        "Tracks shares plus the stORE reward-debt accumulator checkpoint so each",
        "user is paid exactly their pro-rata stORE accrued WHILE they held shares",
        "(no backdating: `acc_store_per_share_paid` is set to the CURRENT acc on",
        "first deposit, FIX A)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "accStorePerSharePaid",
            "docs": [
              "Reward-debt watermark: the bucket's `acc_store_per_share` value as of",
              "the user's last settle (deposit/withdraw). Owed stORE since then =",
              "shares * (acc - paid) / ACC_SCALE."
            ],
            "type": "u128"
          },
          {
            "name": "storeCreditGrams",
            "docs": [
              "Carried (rounded-down) stORE grams owed but not yet paid out — lets a",
              "later withdraw collect dust that an earlier partial withdraw floored."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setBucketOperatorEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "old",
            "type": "pubkey"
          },
          {
            "name": "new",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "setBucketParamsEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "params",
            "type": {
              "defined": {
                "name": "bucketParams"
              }
            }
          }
        ]
      }
    },
    {
      "name": "setBucketWindowTimingEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "openSecs",
            "type": "i64"
          },
          {
            "name": "bettingSecs",
            "type": "i64"
          },
          {
            "name": "guardBandSlots",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setClaimsOpenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "open",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "setDepositsOpenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "open",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "setFeeRecipientEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": "pubkey"
          },
          {
            "name": "new",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "setFeesEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "entryFeeBps",
            "type": "u16"
          },
          {
            "name": "entryFeeEnabled",
            "type": "bool"
          },
          {
            "name": "exitFeeBps",
            "type": "u16"
          },
          {
            "name": "exitFeeEnabled",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "setPauseEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "paused",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "setPerfFeeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "performanceFeeBps",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "setPullFeeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "pullFeeBps",
            "type": "u16"
          },
          {
            "name": "pullFeeEnabled",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "settleHarvestEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "claimedSol",
            "type": "u64"
          },
          {
            "name": "wrappedGrams",
            "type": "u64"
          },
          {
            "name": "storeCredited",
            "type": "u64"
          },
          {
            "name": "accStorePerShare",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "withdrawEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "sharesBurned",
            "type": "u64"
          },
          {
            "name": "grossPayoutLamports",
            "type": "u64"
          },
          {
            "name": "feeLamports",
            "docs": [
              "Performance fee (legacy) routed to `cfg.fee_recipient`."
            ],
            "type": "u64"
          },
          {
            "name": "exitFeeLamports",
            "docs": [
              "V5 flat exit fee routed to the global fee bucket."
            ],
            "type": "u64"
          },
          {
            "name": "userPayoutLamports",
            "type": "u64"
          },
          {
            "name": "storePayoutAtomic",
            "docs": [
              "V5 — atomic stORE units paid pro-rata alongside SOL."
            ],
            "type": "u64"
          },
          {
            "name": "newHighWaterNps",
            "type": "u128"
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "bucketSeed",
      "type": "bytes",
      "value": "[98, 117, 99, 107, 101, 116]"
    },
    {
      "name": "configSeed",
      "type": "bytes",
      "value": "[99, 111, 110, 102, 105, 103]"
    },
    {
      "name": "feeBucketSeed",
      "type": "bytes",
      "value": "[102, 101, 101, 95, 98, 117, 99, 107, 101, 116]"
    },
    {
      "name": "feeScheduleSeed",
      "type": "bytes",
      "value": "[102, 101, 101, 95, 115, 99, 104, 101, 100, 117, 108, 101]"
    },
    {
      "name": "miningSeed",
      "docs": [
        "Seed for the per-bucket mining authority PDA. This PDA is the ORE Miner's",
        "`authority` (and signer of all Deploy/Checkpoint/Claim CPIs), and the SOL",
        "source for Deploy. Derived as PDA([MINING_SEED, bucket_id], cwr_vault)."
      ],
      "type": "bytes",
      "value": "[109, 105, 110, 105, 110, 103]"
    },
    {
      "name": "positionSeed",
      "docs": [
        "Seed for the per-user Position PDA: PDA([POSITION_SEED, bucket_id, user])."
      ],
      "type": "bytes",
      "value": "[112, 111, 115, 105, 116, 105, 111, 110]"
    },
    {
      "name": "shareMintSeed",
      "type": "bytes",
      "value": "[115, 104, 97, 114, 101, 95, 109, 105, 110, 116]"
    },
    {
      "name": "storeTreasurySeed",
      "docs": [
        "Seed for the per-bucket stORE-holding token account. PDA's mint is",
        "`Config.store_mint`; its authority is the bucket PDA. V5."
      ],
      "type": "bytes",
      "value": "[115, 116, 111, 114, 101, 95, 116, 114, 101, 97, 115, 117, 114, 121]"
    },
    {
      "name": "treasurySeed",
      "type": "bytes",
      "value": "[116, 114, 101, 97, 115, 117, 114, 121]"
    }
  ]
};
