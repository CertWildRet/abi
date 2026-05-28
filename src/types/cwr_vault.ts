/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/cwr_vault.json`.
 */
export type CwrVault = {
  "address": "3FSH7MkXUb1AkNQFwj2ppNer657dCtxfWHSvhiyfqCRP",
  "metadata": {
    "name": "cwrVault",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "CWR multi-tranche vault on Solana — backend-managed ORE farming pools"
  },
  "instructions": [
    {
      "name": "deposit",
      "docs": [
        "User deposits SOL into a bucket. Gated by:",
        "- !paused",
        "- deposits_open (operator must explicitly open deposits)",
        "- !claims_open (no deposits while a claim window is active)"
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
        "V5 — permissionless. Drains the fee bucket to the active split's",
        "recipients pro-rata. Caller must pass each non-empty recipient as",
        "a writable account via `remaining_accounts` (any order — matched",
        "by pubkey to a schedule slot).",
        "",
        "Snapshot semantics: the active split is determined by `Clock::now()`",
        "at distribute time, not at fee-collection time. Recipients are",
        "expected to call this often to avoid accidental splits across the",
        "year-one boundary.",
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
        }
      ]
    },
    {
      "name": "initFeeSchedule",
      "docs": [
        "V5 — initialise the global fee schedule. Admin-only, one-time.",
        "Both splits are validated to sum to 10000 bps over non-empty slots.",
        "Empty slots must have Pubkey::default() recipient AND bps_share=0."
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
          "name": "genesis",
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
          "name": "yearOne",
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
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "backend",
          "type": "pubkey"
        },
        {
          "name": "operatorWallet",
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
    },
    {
      "name": "pull",
      "discriminator": [
        78,
        119,
        161,
        115,
        9,
        167,
        75,
        125
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
          "name": "backend",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "operatorWallet",
          "docs": [
            "PINNED to `cfg.operator_wallet`. Audit-fix #2: previously any pubkey was",
            "allowed as the pull destination, letting a compromised backend drain to",
            "any wallet they chose."
          ],
          "writable": true,
          "relations": [
            "config"
          ]
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
      "name": "push",
      "discriminator": [
        143,
        34,
        101,
        78,
        188,
        184,
        199,
        63
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
          "name": "backend",
          "docs": [
            "Audit-fix #1: previously no `Config` was loaded, allowing ANY signer to",
            "call `push` and corrupt `sol_in_vault` accounting + bypass the NAV-jump",
            "check. Now requires backend signature AND pinned operator_wallet."
          ],
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "operatorWallet",
          "writable": true,
          "signer": true,
          "relations": [
            "config"
          ]
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
      "name": "pushStore",
      "docs": [
        "V5 — operator (signing as backend's pinned operator_wallet) pushes",
        "wrapped stORE FROM the operator's stORE ATA INTO the per-bucket",
        "`store_treasury` token account. Mirrors `push` but in the stORE leg.",
        "Increments `bucket.store_in_vault`; does NOT touch SOL NAV."
      ],
      "discriminator": [
        35,
        108,
        163,
        36,
        12,
        198,
        15,
        101
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "storeTreasury",
          "docs": [
            "Per-bucket stORE-holding token account. Authority = bucket PDA."
          ],
          "writable": true
        },
        {
          "name": "operatorStoreAta",
          "docs": [
            "Operator's stORE source ATA. Mint pinned to `cfg.store_mint`,",
            "authority must be the pinned `operator_wallet`."
          ],
          "writable": true
        },
        {
          "name": "storeMint"
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
          "name": "backend",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "operatorWallet",
          "signer": true,
          "relations": [
            "config"
          ]
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
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
      "name": "reportNav",
      "discriminator": [
        130,
        91,
        101,
        209,
        75,
        233,
        10,
        41
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
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
          "name": "backend",
          "signer": true,
          "relations": [
            "config"
          ]
        }
      ],
      "args": [
        {
          "name": "externalValue",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setAdmin",
      "discriminator": [
        251,
        163,
        0,
        52,
        91,
        194,
        187,
        92
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
      "name": "setBackend",
      "discriminator": [
        150,
        129,
        11,
        115,
        232,
        141,
        179,
        55
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
        }
      ],
      "args": [
        {
          "name": "newBackend",
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
      "name": "setOperatorWallet",
      "discriminator": [
        208,
        102,
        230,
        208,
        118,
        66,
        212,
        24
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
        "central security invariant of the v2 design."
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
          "name": "feeRecipient",
          "docs": [
            "Pinned: must match `cfg.fee_recipient`. Receives the perf fee."
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
    }
  ],
  "events": [
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
      "name": "pullEvent",
      "discriminator": [
        124,
        242,
        49,
        173,
        61,
        32,
        20,
        192
      ]
    },
    {
      "name": "pushEvent",
      "discriminator": [
        249,
        202,
        18,
        193,
        129,
        127,
        43,
        94
      ]
    },
    {
      "name": "pushStoreEvent",
      "discriminator": [
        206,
        133,
        162,
        100,
        199,
        32,
        113,
        131
      ]
    },
    {
      "name": "reportNavEvent",
      "discriminator": [
        69,
        91,
        173,
        142,
        181,
        81,
        131,
        190
      ]
    },
    {
      "name": "setAdminEvent",
      "discriminator": [
        240,
        117,
        204,
        254,
        89,
        150,
        132,
        94
      ]
    },
    {
      "name": "setBackendEvent",
      "discriminator": [
        151,
        52,
        109,
        250,
        0,
        182,
        196,
        76
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
      "name": "setOperatorWalletEvent",
      "discriminator": [
        187,
        255,
        168,
        124,
        96,
        129,
        247,
        255
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
      "name": "notBackend",
      "msg": "Caller is not the backend operator"
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
      "msg": "Insufficient SOL in vault to fulfill withdraw — backend must top up"
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
    }
  ],
  "types": [
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
              "Master kill switch. When true, EVERY user + backend instruction is",
              "blocked. Only `set_paused(false)` from admin can re-enable."
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
            "name": "backend",
            "docs": [
              "Backend hot key. Can call pull/push/report_nav."
            ],
            "type": "pubkey"
          },
          {
            "name": "operatorWallet",
            "docs": [
              "PINNED destination for pull / source for push. The only wallet the",
              "backend is allowed to route SOL through. Audit-fix: previously",
              "unconstrained, allowing a compromised backend key to drain to any",
              "address."
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
              "V5 — stORE mint. Pinned at initialize; cannot be changed after init",
              "(would break per-bucket store_treasury ATAs). Set to Pubkey::default()",
              "in environments that don't use the stORE flow (e.g. localnet without",
              "ore-lst deployed); push_store + withdraw stORE will then no-op."
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
        "Hardcoded fee distribution schedule, set once at `init_fee_schedule`.",
        "",
        "The split auto-rolls from `genesis` → `year_one` exactly",
        "`YEAR_ONE_SWITCHOVER_SECS` after `genesis_ts`. The check is lazy: every",
        "`distribute_fees` call reads the on-chain clock and picks the active",
        "split, so no upkeep is required at the boundary.",
        "",
        "Distribution semantics: snapshot-at-distribute. Whatever the active",
        "split is at `distribute_fees` time applies to the *entire* current",
        "fee-bucket balance, regardless of when those fees accrued. Recipients",
        "motivated by a specific schedule are expected to call distribute often."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "genesisTs",
            "type": "i64"
          },
          {
            "name": "genesis",
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
            "name": "yearOne",
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
            "name": "genesis",
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
            "name": "yearOne",
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
            "name": "splitInUse",
            "docs": [
              "0 = genesis split, 1 = year_one split"
            ],
            "type": "u8"
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
            "name": "backend",
            "type": "pubkey"
          },
          {
            "name": "operatorWallet",
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
      "name": "pullEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "solInVault",
            "type": "u64"
          },
          {
            "name": "externalValue",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pushEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "solInVault",
            "type": "u64"
          },
          {
            "name": "externalValue",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pushStoreEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "storeInVault",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "reportNavEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "externalValue",
            "type": "u64"
          },
          {
            "name": "solInVault",
            "type": "u64"
          },
          {
            "name": "totalShares",
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
      "name": "setAdminEvent",
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
      "name": "setBackendEvent",
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
      "name": "setOperatorWalletEvent",
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
