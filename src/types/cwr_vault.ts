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
      "name": "adminWriteOff",
      "docs": [
        "V5 (audit C3) — bounded admin write-off of `bucket.external_value`.",
        "",
        "Recognises a realised loss in the off-chain strategy (Engine D",
        "liquidation, partner-protocol exploit, etc.) by reducing",
        "`external_value` directly. Bounded per-call by `MAX_WRITE_OFF_BPS`",
        "(5%) of CURRENT external_value AND rate-limited by the bucket's",
        "`min_nav_update_interval` so a compromised admin cannot wipe NAV in",
        "one shot. The same drop bound that report_nav applies to NPS jumps",
        "applies here, in lamport terms.",
        "",
        "Blocked while `claims_open == true` (NAV is frozen during claims).",
        "Updates `last_nav_update` so subsequent `report_nav` calls respect",
        "the rate-limit window from this call."
      ],
      "discriminator": [
        190,
        141,
        187,
        206,
        97,
        248,
        80,
        35
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
          "name": "amount",
          "type": "u64"
        }
      ]
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
          "name": "config",
          "docs": [
            "External-audit hardening: read-only access to Config so the ix handler",
            "can refuse deposits from privileged keys (admin / backend / fee_recipient)."
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
          "name": "backend",
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
        "- new_admin == backend or fee_recipient (role collapse)",
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
            "PINNED to this bucket's `operator_wallet`. Audit-fix #2: previously",
            "any pubkey was allowed as the pull destination. Now per-bucket so",
            "Simple's operator cannot pull from Refined's treasury."
          ],
          "writable": true,
          "relations": [
            "bucket"
          ]
        },
        {
          "name": "feeBucket",
          "docs": [
            "V5 — global fee bucket PDA. Pull-fee skim flows here for later",
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
            "check. Now requires backend signature AND this bucket's pinned",
            "operator_wallet (V5: per-bucket)."
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
            "bucket"
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
            "authority must be this bucket's pinned `operator_wallet`."
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
            "bucket"
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
        "product variant calls for it."
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
      "name": "adminWriteOffEvent",
      "discriminator": [
        51,
        124,
        2,
        126,
        57,
        69,
        136,
        217
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
      "msg": "Operator wallet must not equal admin / backend / fee_recipient (role separation)"
    },
    {
      "code": 6043,
      "name": "feeRecipientRoleOverlap",
      "msg": "Fee recipient must not equal admin / backend / a bucket operator (role separation)"
    },
    {
      "code": 6044,
      "name": "operatorCannotBeUser",
      "msg": "Operator wallet is forbidden from acting as a vault depositor / withdrawer"
    },
    {
      "code": 6045,
      "name": "privilegedRoleCannotBeUser",
      "msg": "admin / backend / fee_recipient are forbidden from acting as a vault depositor / withdrawer"
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
    }
  ],
  "types": [
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
      "name": "adminWriteOffEvent",
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
            "name": "newExternalValue",
            "type": "u64"
          },
          {
            "name": "newNavPerShare",
            "type": "u128"
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
              "so backend cannot pre-pump NPS via report_nav immediately before a",
              "claim window opens. Set back to 0 when claims_open=false."
            ],
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
              "config.store_mint` constraints on `Withdraw` / `BackendPushStore`).",
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
            "name": "backend",
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
            "docs": [
              "Gross amount debited from treasury (sol_in_vault -= amount)."
            ],
            "type": "u64"
          },
          {
            "name": "feeLamports",
            "docs": [
              "V5 volume fee skimmed and routed to the global fee_bucket."
            ],
            "type": "u64"
          },
          {
            "name": "netAmount",
            "docs": [
              "What actually reached the operator wallet for deployment.",
              "`external_value` increments by exactly this value."
            ],
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
