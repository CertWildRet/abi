/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/cwr_vault.json`.
 */
export type CwrVault = {
  "address": "BLi7NKqekZGh5zWNwmUK2bzs2tAR3sPC7A1VrgQdEaYL",
  "metadata": {
    "name": "cwrVault",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Diamond Pools: non-custodial multi-pool vault on Solana. dORE = exposure to ORE, dZINC = exposure to ZINC; operator-cranked"
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
      "name": "batchReplenish",
      "docs": [
        "dORE Stage 2: operator-gated reserve top-up. The ONLY site that claims +",
        "wraps the miner's ORE. Claims the whole (all-or-nothing) unclaimed pile,",
        "wraps it to stORE, and folds the MEASURED stORE (numerator) plus the",
        "matching NET ore (refined + 0.9 * rewards; denominator) into the reserve.",
        "It advances NO accumulator and pays NO holder: it only swaps miner-ORE",
        "backing for stORE backing so exits can be paid from the reserve without",
        "touching the miner on a normal exit. Operator-gated + NoBatchNeeded so it",
        "cannot be spammed to burn the 10% fee or reset everyone's refining."
      ],
      "discriminator": [
        61,
        207,
        193,
        83,
        73,
        47,
        214,
        6
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
            "Per-bucket stORE-holding token account (authority = bucket PDA).",
            "Post stORE migration: pinned to the v2 (NEW-mint) reserve."
          ],
          "writable": true
        },
        {
          "name": "miningAuthorityOreAta",
          "docs": [
            "mining_authority's ORE ATA (ClaimORE destination, Wrap source). A",
            "non-custodial vault self-creates its own ATAs: init_if_needed so the",
            "first batch creates it (paid by operator) instead of reverting",
            "AccountNotInitialized. Idempotent — found pre-existing on later batches."
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
            "operator) so the first batch creates it; idempotent thereafter."
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
          "address": "storenSbvkfzircixnaosc5CbzNZVrHJ6S3EKrS1yqR"
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
                13,
                9,
                158,
                170,
                108,
                180,
                41,
                193,
                172,
                46,
                159,
                173,
                128,
                178,
                198,
                144,
                207,
                75,
                247,
                214,
                204,
                160,
                44,
                67,
                24,
                19,
                94,
                21,
                67,
                6,
                102,
                187
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
                13,
                9,
                93,
                69,
                99,
                44,
                92,
                91,
                216,
                77,
                13,
                163,
                99,
                98,
                141,
                110,
                224,
                89,
                157,
                62,
                245,
                37,
                244,
                189,
                201,
                155,
                172,
                6,
                43,
                93,
                112,
                190
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
                13,
                9,
                93,
                69,
                99,
                44,
                92,
                91,
                216,
                77,
                13,
                163,
                99,
                98,
                141,
                110,
                224,
                89,
                157,
                62,
                245,
                37,
                244,
                189,
                201,
                155,
                172,
                6,
                43,
                93,
                112,
                190
              ]
            }
          }
        },
        {
          "name": "oreStakeProgram",
          "address": "stakecNP3FpiExZPCgZfqRgumVzi6dNqnfrjwXyTgeH"
        },
        {
          "name": "oreLstProgram",
          "docs": [
            "invoke_signed must receive the target program in its account list, else",
            "the runtime can't resolve it (\"Unknown program LStwN…\")."
          ],
          "address": "storeD7bEkywTTMrje19WRoyrkEhbhrvyjVnLxWih6a"
        },
        {
          "name": "operator",
          "docs": [
            "Operator-gated: only the bucket's crank operator may trigger a batch",
            "claim+wrap (prevents griefing the 10% fee / resetting refining). Pays the",
            "tx fee + the one-time ATA rent on the first batch."
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
      "name": "cancelPending",
      "docs": [
        "Owner pulls their parked escrow back out before it is finalized. Allowed",
        "in ANY phase and EVEN WHEN PAUSED — this only returns the owner's own",
        "un-shared SOL, so a pause or a stuck window can never trap it. No shares",
        "were ever minted, so there is nothing to unwind on the share side."
      ],
      "discriminator": [
        74,
        87,
        109,
        242,
        64,
        192,
        151,
        71
      ],
      "accounts": [
        {
          "name": "bucket"
        },
        {
          "name": "pendingState",
          "writable": true
        },
        {
          "name": "pendingTreasury",
          "writable": true
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "pendingDeposit",
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
          "docs": [
            "`authority` account passed to the v3.8.13 checkpoint)."
          ],
          "writable": true
        },
        {
          "name": "oreAutomation",
          "docs": [
            "v3.8.13 checkpoint (it auto-handles autominer reloads). Pinned to",
            "PDA([b\"automation\", mining_authority], ORE); created/closed by ORE."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  111,
                  109,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
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
      "name": "claimReferral",
      "docs": [
        "Claim accrued referral rewards. PULL-based and permissionless: the",
        "referrer signs and supplies (via a preceding Ed25519 ix) a settlement-",
        "authority attestation of their CUMULATIVE owed. Pays `cumulative -",
        "claimed` from the bounded `referral_treasury` and advances the watermark.",
        "Idempotent: a replayed/stale attestation pays 0; a lower cumulative than",
        "already claimed is rejected."
      ],
      "discriminator": [
        219,
        247,
        18,
        148,
        63,
        247,
        112,
        198
      ],
      "accounts": [
        {
          "name": "referrer",
          "docs": [
            "The referrer claims and receives the payout, and pays for first-claim",
            "watermark init."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "referrerState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "referrer"
              }
            ]
          }
        },
        {
          "name": "referralConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
          "name": "referralTreasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "instructions",
          "docs": [
            "attestation (referral.rs)."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": []
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
      "name": "closeWindowZinc",
      "docs": [
        "Permissionless Clock-driven dZINC phase transition OPEN -> BETTING.",
        "Miner-FREE version of `close_window`. Allowed once",
        "(now - phase_started_ts) >= open_secs. Clears the frozen NAV snapshot; the",
        "new phase_started_slot becomes the ZINC inflight window epoch, so",
        "window_inflight effectively resets for the new betting window."
      ],
      "discriminator": [
        65,
        242,
        13,
        61,
        173,
        122,
        143,
        116
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "zincPool"
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
      "name": "closeZincMiner",
      "docs": [
        "Reclaim a SETTLED dZINC per-round miner's rent back to the bucket's",
        "`mining_authority` (the ZINC \"player\"). This is the RECYCLE leg of the rent",
        "model: `crank_mine_zinc` funds the player only with the net stake, and the",
        "ZINC `deploy_round` CPI bills it ~0.034 SOL of per-round miner rent on top;",
        "this returns that rent once the round is terminal, so the working-capital",
        "buffer never drains. Self-closes via the ZINC `close_miner` CPI signed by",
        "`mining_authority` (signer == player), so the reclaimed rent lands back on",
        "our own PDA.",
        "",
        "OPERATOR-gated (same operator as `crank_mine_zinc`): only our keeper triggers",
        "it, AFTER `settle_harvest_zinc` has claimed the round's rewards — so a miner",
        "can never be closed before its winnings are credited. Standalone ix: it never",
        "touches `sol_in_vault`, deposits, or the settle barrier, so it cannot brick",
        "the pool. Reverts (caller retries) if the round is not yet closeable or the",
        "miner is already gone."
      ],
      "discriminator": [
        182,
        79,
        250,
        136,
        189,
        251,
        64,
        68
      ],
      "accounts": [
        {
          "name": "operator",
          "docs": [
            "Operator signs (controls WHEN, after settle has claimed the round). Pinned",
            "DIRECTLY to bucket.operator_wallet (Pattern A) so the gate binds the SIGNER,",
            "not merely a passed-in operator_wallet account."
          ],
          "signer": true
        },
        {
          "name": "bucket"
        },
        {
          "name": "miningAuthority",
          "docs": [
            "The ZINC player PDA: signs close_miner via invoke_signed + RECEIVES the",
            "reclaimed rent (mut). CHECK: pinned to bucket.mining_authority + seeds."
          ],
          "writable": true
        },
        {
          "name": "zincProgram",
          "address": "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV"
        },
        {
          "name": "zincConfig",
          "address": "48W7ZVgfdqmpVfTxdoRKuVg7gqGk5GHF3QpmxhHCUieG"
        },
        {
          "name": "zincRound",
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
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincMiner",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "roundId"
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincRoundBonus",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  111,
                  117,
                  110,
                  100,
                  45,
                  98,
                  111,
                  110,
                  117,
                  115
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
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
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
      "name": "crankClaimZincSolYield",
      "docs": [
        "Permissionless: capture the stZINC SOL-yield leg (SEPARATE from the ZINC",
        "buyback leg claimed by `crank_claim_zinc_yield`; independent checkpoints,",
        "so no ordering between the two is required). The SOL reward lands as RAW",
        "lamports on the mining_authority PDA; we measure the lamport DELTA and",
        "sweep it into `bucket.sol_in_vault` (the SOL-leg NAV), exactly like the",
        "settle round-SOL sweep. Brick-safe by construction: a separate ix (cannot",
        "abort settle/withdraw), a SOFT-FAIL claim CPI (a disc/account drift or a",
        "ZINC revert yields claimed==0, never a mis-credit), pause-exempt +",
        "empty-stake early return, and it writes ONLY sol_in_vault (never the ZINC",
        "leg `zinc_in_vault` / `acc_zinc_per_share`), so it can only raise NAV."
      ],
      "discriminator": [
        133,
        229,
        234,
        94,
        166,
        172,
        174,
        183
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "zincPool"
        },
        {
          "name": "miningAuthority",
          "writable": true
        },
        {
          "name": "treasury",
          "docs": [
            "The bucket's SOL treasury (sweep destination = SOL-leg NAV backing). Pinned."
          ],
          "writable": true
        },
        {
          "name": "zincStakePosition",
          "docs": [
            "deserialized (on-chain 120 bytes vs 82 in codama); we lamport-measure the",
            "authority instead."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  45,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincConfig",
          "address": "48W7ZVgfdqmpVfTxdoRKuVg7gqGk5GHF3QpmxhHCUieG"
        },
        {
          "name": "zincTreasury",
          "writable": true,
          "address": "4Ucw8BNkLWBu6gxkQsw3BRG2qRtw5WrG1UxiKpQjScH5"
        },
        {
          "name": "zincStakingSolRewardVault",
          "docs": [
            "spoofed vault is rejected at resolve)."
          ],
          "writable": true,
          "address": "4xzryReuJRamP4zKEdJagsWQaCYQQvN7aT64LFmu2b4A"
        },
        {
          "name": "zincProgram",
          "address": "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV"
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless caller (pays tx fee)."
          ],
          "writable": true,
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
      "name": "crankClaimZincYield",
      "docs": [
        "Permissionless per-cycle staking-yield compound. Claims the vested staking",
        "yield ZINC into custody (also minting Stockpile Bricks to the profile),",
        "restakes the MEASURED yield delta (compound), and credits it to holders via",
        "the accumulator. Gated on PHASE_BETTING (NOT PHASE_OPEN): in BETTING both",
        "deposit_zinc and withdraw_zinc are blocked, so total_shares is FROZEN while",
        "this crank runs. That eliminates the yield-backdating interleave a mid-OPEN",
        "depositor could exploit to share in yield that accrued before they joined.",
        "A paused/halted or never-staked pool EARLY-RETURNS Ok (no error, no CPI) so",
        "a ZINC incident cannot brick it. Crediting is driven ONLY by the measured",
        "custody delta."
      ],
      "discriminator": [
        3,
        242,
        201,
        18,
        193,
        214,
        80,
        67
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "zincPool",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "writable": true
        },
        {
          "name": "zincCustodyAta",
          "docs": [
            "The custody ZINC ATA (yield dest + restake source). Pinned to the cached",
            "pool field. init_if_needed for robustness (matches settle)."
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
                "path": "zincMint"
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
          "name": "zincMint",
          "docs": [
            "ZINC mint, pinned."
          ],
          "address": "zinc155BS4mSPk8GXQj4R5hkVDQXcW253pTYq5SGyfi"
        },
        {
          "name": "zincStakePosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  45,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincConfig",
          "address": "48W7ZVgfdqmpVfTxdoRKuVg7gqGk5GHF3QpmxhHCUieG"
        },
        {
          "name": "zincPlayerProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincStakingRewardTokenAccount",
          "writable": true,
          "address": "HnLFJtSxc3435T4BmJbaTUHJQErePpyV3phXXcDxPfHj"
        },
        {
          "name": "zincStakingTokenAccount",
          "writable": true,
          "address": "4Ym9uvwrwdpiTKq874T8wSqzaFkh8AVazf255FKLt9MR"
        },
        {
          "name": "zincTreasury",
          "writable": true,
          "address": "4Ucw8BNkLWBu6gxkQsw3BRG2qRtw5WrG1UxiKpQjScH5"
        },
        {
          "name": "zincProgram",
          "address": "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV"
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless caller (pays tx + one-time ATA rent)."
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
      "name": "crankJoinZincStockpile",
      "docs": [
        "Operator-gated Stockpile JOIN, funded from the war chest. Commits all",
        "available Bricks into the currently-Open Stockpile cycle, paying the ZINC",
        "entry fee out of the war chest (house money, NOT part of zinc_in_vault, so",
        "this never affects holder solvency). Gates: pool init + stockpile_enabled +",
        "operator signer + PHASE_BETTING + not paused/dd_halt. All ZINC reads are",
        "SOFT-RETURN (log via a zero event + Ok) on any unmet precondition so a",
        "keeper loop is never bricked. `stockpile_id` address-pins the stockpile PDA;",
        "it MUST equal board.active_stockpile_id after the on-chain decode."
      ],
      "discriminator": [
        235,
        98,
        131,
        109,
        210,
        95,
        35,
        186
      ],
      "accounts": [
        {
          "name": "operator",
          "docs": [
            "Operator signs (controls WHEN). Pinned to bucket.operator_wallet."
          ],
          "signer": true
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "zincPool",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "writable": true
        },
        {
          "name": "zincCustodyAta",
          "docs": [
            "The custody ZINC ATA (entry-fee source; unstake dest / restake source)."
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
                "path": "zincMint"
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
          "name": "zincMint",
          "docs": [
            "ZINC mint, pinned. WRITABLE: ix_join_stockpile takes zinc_mint as",
            "AccountMeta::new (join burns/mints against the mint), so a non-mut here",
            "soft-bricks the join CPI."
          ],
          "writable": true,
          "address": "zinc155BS4mSPk8GXQj4R5hkVDQXcW253pTYq5SGyfi"
        },
        {
          "name": "zincStakePosition",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  45,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincStakingTokenAccount",
          "writable": true,
          "address": "4Ym9uvwrwdpiTKq874T8wSqzaFkh8AVazf255FKLt9MR"
        },
        {
          "name": "zincConfig",
          "address": "48W7ZVgfdqmpVfTxdoRKuVg7gqGk5GHF3QpmxhHCUieG"
        },
        {
          "name": "zincBoard",
          "writable": true,
          "address": "DnryjThdeJbK4qfrVooTPRgWcjgAnQ5cVm2pF5mbeCeF"
        },
        {
          "name": "zincPlayerProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincTreasury",
          "writable": true,
          "address": "4Ucw8BNkLWBu6gxkQsw3BRG2qRtw5WrG1UxiKpQjScH5"
        },
        {
          "name": "zincStockpile",
          "writable": true
        },
        {
          "name": "zincStockpileTokenAccount",
          "writable": true,
          "address": "F9534iDWh4aJpZavSyq34Vdf8rL44eRwMMb2mUnZNBmr"
        },
        {
          "name": "zincStakingRewardTokenAccount",
          "writable": true,
          "address": "HnLFJtSxc3435T4BmJbaTUHJQErePpyV3phXXcDxPfHj"
        },
        {
          "name": "zincProgram",
          "address": "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV"
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
      "args": [
        {
          "name": "stockpileId",
          "type": "u64"
        }
      ]
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
          "name": "referralTreasury",
          "docs": [
            "Segregated referral pool PDA — receives the REFERRAL_BPS carve of each",
            "deploy. Physically separate from `treasury` (user funds) and `fee_bucket`",
            "(protocol fees); its balance bounds total referrer payouts. Derived by the",
            "canonical seed (no referral_config read needed in the hot crank path). A",
            "transfer in is valid even before init_referral has rent-seeded it."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
      "name": "crankMineZinc",
      "docs": [
        "Operator-signed crank that deploys `amount` SOL into the ZINC board for",
        "`round_id`. Mirrors `crank_mine` (same operator, same rake) minus the",
        "25-square ORE split: ZINC deploys a single net total_amount via an",
        "encrypted mask supplied by the keeper. The mining_authority PDA signs the",
        "ZINC Deploy via invoke_signed.",
        "Gate: !paused && phase==BETTING && pool init && !pool paused && !dd_halt &&",
        "amount >= min_round_lamports && per-window inflight cap && not double-crank",
        "&& guard band && sol_in_vault >= amount."
      ],
      "discriminator": [
        226,
        233,
        94,
        58,
        72,
        111,
        247,
        98
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
            "operator_wallet via `has_one` (the SAME operator as the dORE pool)."
          ],
          "signer": true
        },
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "operatorWallet",
          "relations": [
            "bucket"
          ]
        },
        {
          "name": "zincPool",
          "writable": true
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "docs": [
            "The bucket's mining authority PDA (SOL source + ZINC Deploy signer)."
          ],
          "writable": true
        },
        {
          "name": "feeBucket",
          "docs": [
            "Global fee bucket PDA — volume fee skim destination."
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
          "name": "referralTreasury",
          "docs": [
            "Segregated referral pool PDA — receives the REFERRAL_BPS carve."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
            ]
          }
        },
        {
          "name": "zincProgram",
          "address": "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV"
        },
        {
          "name": "zincRound",
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
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincConfig",
          "address": "48W7ZVgfdqmpVfTxdoRKuVg7gqGk5GHF3QpmxhHCUieG"
        },
        {
          "name": "zincMiner",
          "docs": [
            "by deploy_round). PINNED for defense-in-depth (the CPI also validates it)."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  101,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "roundId"
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincPlayerProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincBoard",
          "writable": true,
          "address": "DnryjThdeJbK4qfrVooTPRgWcjgAnQ5cVm2pF5mbeCeF"
        },
        {
          "name": "zincTreasury",
          "writable": true,
          "address": "4Ucw8BNkLWBu6gxkQsw3BRG2qRtw5WrG1UxiKpQjScH5"
        },
        {
          "name": "zincStockpileSolVault",
          "writable": true
        },
        {
          "name": "zincBonanzaSolVault",
          "writable": true
        },
        {
          "name": "zincBuybackSolVault",
          "writable": true
        },
        {
          "name": "zincStockpile",
          "docs": [
            "sentinel; keeper-supplied (cannot be PDA-pinned; ZINC validates internally)."
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
        },
        {
          "name": "roundId",
          "type": "u64"
        },
        {
          "name": "maskEncryptionKey",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "maskNonce",
          "type": "u128"
        },
        {
          "name": "maskCiphertext",
          "type": {
            "array": [
              "u8",
              64
            ]
          }
        }
      ]
    },
    {
      "name": "crankPayoutZincStockpile",
      "docs": [
        "Permissionless Stockpile PAYOUT. When our mining_authority is an unpaid",
        "winner at some rank, claims the base SOL+ZINC for that rank. The won SOL",
        "lands on mining_authority and is swept into the treasury (bumping",
        "sol_in_vault, exactly like settle's SOL claim); the won ZINC accrues on our",
        "profile as claimable_round_zinc_rewards and is smelted+staked+credited by",
        "the NEXT settle_harvest_zinc (NO action here; do NOT double-count). Gates:",
        "pool init + stockpile_enabled + not paused. SOFT-FAIL the payout CPI.",
        "`stockpile_id` address-pins the stockpile + winners PDAs."
      ],
      "discriminator": [
        124,
        58,
        201,
        36,
        240,
        64,
        61,
        231
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "zincPool",
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
          "name": "zincMint",
          "docs": [
            "ZINC mint, pinned."
          ],
          "address": "zinc155BS4mSPk8GXQj4R5hkVDQXcW253pTYq5SGyfi"
        },
        {
          "name": "zincConfig",
          "address": "48W7ZVgfdqmpVfTxdoRKuVg7gqGk5GHF3QpmxhHCUieG"
        },
        {
          "name": "zincStockpile",
          "writable": true
        },
        {
          "name": "zincStockpileWinners",
          "writable": true
        },
        {
          "name": "zincStockpileExtras",
          "address": "rHy8WWBrefdyFM8mmFAsvJpmEoACRUjE5rxCb7vdEYz"
        },
        {
          "name": "zincBoard",
          "writable": true,
          "address": "DnryjThdeJbK4qfrVooTPRgWcjgAnQ5cVm2pF5mbeCeF"
        },
        {
          "name": "zincTreasury",
          "writable": true,
          "address": "4Ucw8BNkLWBu6gxkQsw3BRG2qRtw5WrG1UxiKpQjScH5"
        },
        {
          "name": "zincStockpileSolVault",
          "writable": true,
          "address": "8RxMJD7BtdzxuZkmDqcxhR6gWvegLJ1GNf9NFrPkCmwf"
        },
        {
          "name": "zincStockpileTokenAccount",
          "writable": true,
          "address": "F9534iDWh4aJpZavSyq34Vdf8rL44eRwMMb2mUnZNBmr"
        },
        {
          "name": "zincPlayerProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincRoundZincRewardTokenAccount",
          "writable": true,
          "address": "FAfNcJe2wXC38EqL5KrL3PpHtZMDb4czFXYMyoHUDZ6g"
        },
        {
          "name": "zincProgram",
          "address": "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV"
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless caller."
          ],
          "writable": true,
          "signer": true
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
          "name": "stockpileId",
          "type": "u64"
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
      "name": "depositZinc",
      "docs": [
        "User deposits SOL into a dZINC pool. Mirrors `deposit` but SIMPLER: the",
        "NAV is the SOL leg only (`bucket.sol_in_vault`; no miner read — settle",
        "already claimed back any won SOL and there is no in-flight at OPEN). A",
        "per-user ZincPosition tracks shares + the ZINC reward-debt watermark (set",
        "to the CURRENT acc on first deposit, no backdating).",
        "Gate: !paused && phase==OPEN && window_settled && amount >= min_deposit &&",
        "caller not operator/admin/fee_recipient."
      ],
      "discriminator": [
        179,
        138,
        37,
        112,
        169,
        46,
        58,
        91
      ],
      "accounts": [
        {
          "name": "config",
          "docs": [
            "Read-only Config — refuses privileged depositors."
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
          "name": "zincPool"
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
          "name": "zincPosition",
          "docs": [
            "Per-user dZINC position PDA. Created lazily on first deposit."
          ],
          "writable": true
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
      "name": "distributeReferrals",
      "docs": [
        "PUSH variant of `claim_referral`: pay a referrer their accrued rewards",
        "WITHOUT the referrer signing. A `relayer` (e.g. the keeper) signs and",
        "fee-pays; the funds go to the `referrer` account. Uses the SAME",
        "settlement-authority attestation (binds the referrer pubkey) and the SAME",
        "per-referrer `claimed` watermark as `claim_referral`, so a referrer can",
        "NEVER double-collect across pull-claim and push-distribute, and a stale",
        "attestation pays 0. The relayer can't redirect: the payout goes only to",
        "the attested referrer. The \"selective\" vs \"all opted-in\" mode is an",
        "off-chain decision of WHICH referrers the relayer distributes to."
      ],
      "discriminator": [
        155,
        48,
        4,
        171,
        220,
        85,
        213,
        29
      ],
      "accounts": [
        {
          "name": "relayer",
          "docs": [
            "Relayer signs + fee-pays (and pays first-time referrer_state rent). NOT",
            "the recipient."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "referrer",
          "docs": [
            "The referrer who RECEIVES the payout — just an account, NOT a signer. The",
            "settlement attestation binds the payout to this exact pubkey, so the",
            "relayer cannot redirect it."
          ],
          "writable": true
        },
        {
          "name": "referrerState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "referrer"
              }
            ]
          }
        },
        {
          "name": "referralConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
          "name": "referralTreasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "finalizePending",
      "docs": [
        "Convert a parked ticket into a real position. Permissionless (the keeper",
        "runs this for users right after `settle_harvest`). Gated identically to",
        "`deposit` (phase==OPEN && window_settled), so the stORE accumulator has",
        "already advanced over the prior cycle and the price is the settled one:",
        "the parker mints exactly as if they had deposited the instant the window",
        "opened — they neither win nor lose the round they did not fund, and they",
        "do not backdate onto the prior cycle's ORE (watermark = current acc)."
      ],
      "discriminator": [
        161,
        202,
        177,
        180,
        230,
        183,
        40,
        171
      ],
      "accounts": [
        {
          "name": "config",
          "docs": [
            "Read-only Config so finalize can enforce the same privileged-role",
            "exclusion as deposit/withdraw (AUDIT L1)."
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
          "name": "pendingState",
          "writable": true
        },
        {
          "name": "pendingTreasury",
          "writable": true
        },
        {
          "name": "shareMint",
          "writable": true
        },
        {
          "name": "ownerShareAta",
          "docs": [
            "The parked owner's share ATA. The finalizer idempotently creates it in a",
            "preInstruction. Pins `owner` via token::authority."
          ],
          "writable": true
        },
        {
          "name": "owner",
          "docs": [
            "The parked depositor. NOT a signer (finalize is permissionless). Receives",
            "the PendingDeposit rent on close. System-owned (a normal wallet)."
          ],
          "writable": true
        },
        {
          "name": "finalizer",
          "docs": [
            "Whoever runs the conversion (typically the keeper). Pays tx fee + the",
            "owner's Position rent. Gains nothing (no custody, no fund destination)."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "pendingDeposit",
          "writable": true
        },
        {
          "name": "oreMiner"
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
      "args": []
    },
    {
      "name": "finalizePendingZinc",
      "docs": [
        "Convert a parked dZINC ticket into real dZINC shares — the dZINC twin of",
        "`finalize_pending`. Permissionless (the keeper runs it right after",
        "`settle_harvest_zinc`). Gated identically to `deposit_zinc`",
        "(phase==OPEN && window_settled), so the ZINC accumulator has already",
        "advanced and the watermark anchors to the CURRENT acc — the parker mints",
        "exactly as if they had deposited the instant the window opened, with no",
        "backdating onto ZINC they did not fund."
      ],
      "discriminator": [
        161,
        70,
        243,
        70,
        184,
        194,
        18,
        9
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
          "name": "bucket",
          "writable": true
        },
        {
          "name": "zincPool"
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "pendingState",
          "writable": true
        },
        {
          "name": "pendingTreasury",
          "writable": true
        },
        {
          "name": "shareMint",
          "writable": true
        },
        {
          "name": "ownerShareAta",
          "docs": [
            "The parked owner's share ATA. The finalizer idempotently creates it in a",
            "preInstruction. Pins `owner` via token::authority."
          ],
          "writable": true
        },
        {
          "name": "owner",
          "docs": [
            "The parked depositor. NOT a signer (finalize is permissionless). Receives",
            "the PendingDeposit rent on close. System-owned (a normal wallet)."
          ],
          "writable": true
        },
        {
          "name": "finalizer",
          "docs": [
            "Whoever runs the conversion (typically the keeper). Pays tx fee + the",
            "owner's ZincPosition rent. Gains nothing."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "zincPosition",
          "writable": true
        },
        {
          "name": "pendingDeposit",
          "writable": true
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
      "args": []
    },
    {
      "name": "fundMiningAuthority",
      "docs": [
        "Top up a bucket's `mining_authority` PDA with external SOL — the rent",
        "working capital the ZINC player needs (one-time profile rent + in-flight",
        "per-round miner rent). PERMISSIONLESS: anyone may sponsor it; the funder",
        "signs the transfer.",
        "",
        "This SOL is NOT added to `sol_in_vault`, so it is never counted as TVL,",
        "never inflates the share price, and is never depositor-withdrawable. It is",
        "pure operator working capital; `sweep_and_close` recovers any residue to the",
        "beneficiary in wind-down. Funds the exact account the contract already",
        "rent-seeds at init, just past the bare-rent amount."
      ],
      "discriminator": [
        225,
        111,
        17,
        178,
        9,
        9,
        50,
        198
      ],
      "accounts": [
        {
          "name": "funder",
          "docs": [
            "Anyone sponsoring the rent buffer; pays `amount`."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "bucket"
        },
        {
          "name": "miningAuthority",
          "docs": [
            "The bucket's mining_authority PDA (rent working-capital sink)."
          ],
          "writable": true
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
            "(in that case the account just holds 0 stORE forever).",
            "Post stORE migration: born on the v2 seed so new buckets match the",
            "withdraw/batch_replenish reserve (the OLD seed survives only as the",
            "`migrate_ore_reserve` drain source for the pre-existing bucket 0)."
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
          "name": "metadata",
          "docs": [
            "token metadata program via CPI in `init_bucket`. Its seeds",
            "([\"metadata\", token_metadata_program, share_mint]) are validated by that",
            "program, so we only need it writable here."
          ],
          "writable": true
        },
        {
          "name": "tokenMetadataProgram",
          "address": "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
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
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
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
      "name": "initPending",
      "docs": [
        "One-time (per bucket) bootstrap of the parked-capital buffer. Cosigned",
        "admin op. Creates the `pending_state` counter account and rent-seeds the",
        "`pending_treasury` escrow from admin's own pocket (the seed is locked and",
        "is NEVER part of `pending_total`, so finalize/cancel can never drain the",
        "escrow below rent-exempt)."
      ],
      "discriminator": [
        34,
        165,
        58,
        159,
        84,
        97,
        180,
        31
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
          "name": "bucket"
        },
        {
          "name": "pendingState",
          "writable": true
        },
        {
          "name": "pendingTreasury",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
        }
      ]
    },
    {
      "name": "initReferral",
      "docs": [
        "One-time global setup for the referral program. Creates `referral_config`",
        "(settlement authority + treasury bump) and rent-seeds the segregated",
        "`referral_treasury`. Admin-cosigned. After this, the REFERRAL_BPS carve in",
        "`crank_mine` accumulates here and referrers can `claim_referral`."
      ],
      "discriminator": [
        227,
        98,
        142,
        124,
        254,
        233,
        166,
        118
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
          "name": "referralConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
          "name": "referralTreasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
          "name": "settlementAuthority",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initZincPool",
      "docs": [
        "One-time (per ZINC bucket) bootstrap. Cosigned admin op. Repurposes the",
        "bucket's `mining_authority` PDA as the ZINC player / CPI signer + SOL",
        "escrow (this is the ZINC analogue of init_mining_pda; DO NOT call",
        "init_mining_pda for a ZINC bucket — that would pin an ORE Miner). Creates",
        "the ZincPool sidecar, rent-seeds mining_authority, and creates/caches the",
        "custody ZINC ATA. Leaves `bucket.ore_miner` = default (ZINC, not ORE)."
      ],
      "discriminator": [
        175,
        253,
        59,
        157,
        33,
        146,
        174,
        95
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
          "name": "zincPool",
          "docs": [
            "The dZINC pool sidecar — `init` fails if it already exists."
          ],
          "writable": true
        },
        {
          "name": "miningAuthority",
          "docs": [
            "The bucket's mining authority PDA — repurposed as the ZINC player / CPI",
            "signer + SOL escrow. Seeded rent-exempt here."
          ],
          "writable": true
        },
        {
          "name": "zincMint",
          "docs": [
            "ZINC mint, pinned."
          ],
          "address": "zinc155BS4mSPk8GXQj4R5hkVDQXcW253pTYq5SGyfi"
        },
        {
          "name": "zincCustodyAta",
          "docs": [
            "The custody ZINC ATA = ATA(mining_authority, ZINC_MINT). Created here so",
            "the smelt destination + in-kind exit source exists before the first crank."
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
                "path": "zincMint"
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
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
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
      "args": [
        {
          "name": "bucketId",
          "type": "u8"
        },
        {
          "name": "minRoundLamports",
          "type": "u64"
        },
        {
          "name": "maxInflightLamports",
          "type": "u64"
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
      "name": "migrateOreReserve",
      "docs": [
        "ONE-TIME dORE stORE reserve migration (2026-06-15 ore-stake hack). Moves",
        "the reserve out of the FROZEN, yield-halted OLD stORE into the NEW stORE in",
        "ONE atomic tx, then repoints `config.store_mint` + the store_treasury bump",
        "to the v2 reserve. Cosign-gated + `require!(paused)` so no user op",
        "(withdraw/deposit/batch/open_window) can race a half-migrated reserve.",
        "Idempotent: refuses to re-run once `config.store_mint == STORE_MINT` (NEW),",
        "and `init` on store_treasury_v2 hard-fails a second run regardless. Atomic:",
        "any leg reverting rolls back the whole tx, leaving the fully-OLD reserve",
        "intact (still redeemable via the live OLD unwrap). Chain: drain OLD reserve",
        "-> ATA(MA, OLD mint) -> ix_unwrap(OLD) -> ORE -> ix_wrap(NEW) -> NEW stORE",
        "-> store_treasury_v2, then SET (overwrite, NOT add) store_in_vault to the",
        "measured v2 balance and leave reserve_backed_net_ore UNCHANGED",
        "(ORE-denominated + mint-agnostic; ORE value is conserved across the",
        "1.0747 -> 1.0063 rate-basis change, only the gram count re-prices).",
        "Needs a raised compute budget (~1.4M CU) + simulate-first: unwrap alone is",
        "~240k CU. See ore-stake-hack migration notes."
      ],
      "discriminator": [
        166,
        117,
        65,
        173,
        41,
        44,
        227,
        185
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
          "name": "miningAuthority",
          "writable": true
        },
        {
          "name": "storeTreasuryOld",
          "docs": [
            "The OLD-mint reserve (the current live reserve; drained to zero). Pinned via",
            "the OLD seed + the still-current stored bump (overwritten to v2 at the end)."
          ],
          "writable": true
        },
        {
          "name": "storeTreasuryV2",
          "docs": [
            "The NEW-mint reserve (created here; the live reserve thereafter). Distinct",
            "PDA because a token account's mint is immutable."
          ],
          "writable": true
        },
        {
          "name": "miningAuthorityOldStoreAta",
          "docs": [
            "ATA(MA, OLD mint) — drain dest + unwrap source."
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
                "path": "oldStoreMint"
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
          "name": "miningAuthorityOreAta",
          "docs": [
            "ATA(MA, ORE) — unwrap dest + wrap source."
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
          "name": "miningAuthorityNewStoreAta",
          "docs": [
            "ATA(MA, NEW mint) — wrap dest + v2 transfer source."
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
          "name": "oldStoreMint",
          "docs": [
            "OLD stORE mint (unwrap burns against it). Pinned to the migration const."
          ],
          "writable": true,
          "address": "sTorERYB6xAZ1SSbwpK3zoK2EEwbBrc7TZAzg1uCGiH"
        },
        {
          "name": "storeMint",
          "docs": [
            "NEW stORE mint (wrap mints against it; the v2 + NEW-ATA mint). Pinned."
          ],
          "writable": true,
          "address": "storenSbvkfzircixnaosc5CbzNZVrHJ6S3EKrS1yqR"
        },
        {
          "name": "oldOreLstVault",
          "writable": true
        },
        {
          "name": "oldOreLstVaultOreAta",
          "writable": true
        },
        {
          "name": "oldOreLstStake",
          "writable": true
        },
        {
          "name": "oldOreLstStakeOreAta",
          "writable": true
        },
        {
          "name": "oldOreLstTreasury",
          "writable": true
        },
        {
          "name": "oldOreLstTreasuryOreAta",
          "writable": true
        },
        {
          "name": "oldOreLstVesting",
          "writable": true
        },
        {
          "name": "oldOreStakeProgram",
          "address": "STkEAu2cEyQp5ktgUauRVq8es6mEP2w6ixw4NEd5tDJ"
        },
        {
          "name": "oldOreLstProgram",
          "address": "LStwN2E5Uw6MCtuxHRLhy8RY9hxqW2XRpLzettb696y"
        },
        {
          "name": "newOreLstVault",
          "writable": true
        },
        {
          "name": "newOreLstVaultOreAta",
          "writable": true
        },
        {
          "name": "newOreLstStake",
          "writable": true
        },
        {
          "name": "newOreLstStakeOreAta",
          "writable": true
        },
        {
          "name": "newOreLstTreasury",
          "writable": true
        },
        {
          "name": "newOreLstTreasuryOreAta",
          "writable": true
        },
        {
          "name": "newOreLstVesting",
          "writable": true
        },
        {
          "name": "newOreStakeProgram",
          "address": "stakecNP3FpiExZPCgZfqRgumVzi6dNqnfrjwXyTgeH"
        },
        {
          "name": "newOreLstProgram",
          "address": "storeD7bEkywTTMrje19WRoyrkEhbhrvyjVnLxWih6a"
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
        },
        {
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "migrateZincPoolStaking",
      "docs": [
        "Admin+cosign: grow the LIVE (pre-v1.2.0, 157-byte) ZincPool account to fit",
        "the appended staking + Stockpile fields and seed them. The account is taken",
        "RAW (UncheckedAccount) and grown via a MANUAL realloc BEFORE any deserialize,",
        "because `Account<ZincPool>` would fail to load the new (larger) struct from",
        "the old (smaller) account and brick the pool. realloc(_, true) zeroes the",
        "appended bytes so they deserialize as valid defaults, then every new field is",
        "set EXPLICITLY. One-time: guarded on account size (data.len() < new_len).",
        "A fresh pool is born correct via init_zinc_pool; this is only for bucket 1."
      ],
      "discriminator": [
        148,
        149,
        229,
        251,
        154,
        181,
        60,
        197
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
          "name": "bucket"
        },
        {
          "name": "zincPool",
          "docs": [
            "(smaller) size, so `Account<ZincPool>` would fail to deserialize the NEW,",
            "larger struct from it BEFORE any realloc could run (which would brick dZINC).",
            "This ix therefore takes the account RAW and grows + seeds it manually. The",
            "PDA is pinned by seeds; owner + size + initialized are verified in the handler."
          ],
          "writable": true
        },
        {
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
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
      "name": "openWindowZinc",
      "docs": [
        "Permissionless Clock-driven dZINC phase transition BETTING -> OPEN.",
        "Miner-FREE version of `open_window` (a ZINC bucket has ore_miner = default).",
        "Allowed once (now - phase_started_ts) >= betting_secs. Snapshots the frozen",
        "SOL-leg NPS over `sol_in_vault / total_shares`, and sets window_settled =",
        "false (forces settle_harvest_zinc as the first OPEN action)."
      ],
      "discriminator": [
        252,
        249,
        206,
        227,
        84,
        252,
        190,
        216
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "zincPool"
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
      "name": "parkDeposit",
      "docs": [
        "Park SOL during the cranking window. Escrows `amount` into",
        "`pending_treasury` with NO shares minted and NO NAV impact. Only allowed",
        "in BETTING (in OPEN, the normal `deposit` path applies). Repeated parks",
        "by the same owner accumulate into one ticket. Always reversible via",
        "`cancel_pending`."
      ],
      "discriminator": [
        78,
        114,
        71,
        170,
        175,
        185,
        137,
        182
      ],
      "accounts": [
        {
          "name": "config",
          "docs": [
            "Read-only Config so the handler can refuse privileged depositors."
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
          "docs": [
            "Read-only: park never mutates the bucket (no shares, no NAV)."
          ]
        },
        {
          "name": "pendingState",
          "writable": true
        },
        {
          "name": "pendingTreasury",
          "writable": true
        },
        {
          "name": "oreMiner",
          "docs": [
            "V6 — ORE Miner for the derived-NAV cap read. Validated in-handler against",
            "`bucket.ore_miner`. CHECK: see handler."
          ]
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "pendingDeposit",
          "writable": true
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
      "name": "parkDepositZinc",
      "docs": [
        "Park SOL into the dZINC pool during its cranking window — the dZINC twin of",
        "`park_deposit`. dZINC NAV is the SOL leg only (no ORE miner), so this is the",
        "simpler form: escrow `amount` into the bucket's pending_treasury with NO",
        "shares minted and NO NAV impact, convertible later via",
        "`finalize_pending_zinc` (or reversible any time via the generic",
        "`cancel_pending`). Lets a user commit while the keeper is mid-cycle",
        "(BETTING, or OPEN-but-unsettled) instead of bouncing off `deposit_zinc`'s",
        "window_settled gate. Repeated parks by the same owner accumulate into one",
        "ticket. `init_pending(bucket_id=1)` must have set up the buffer first",
        "(same generic instruction the ORE pool uses)."
      ],
      "discriminator": [
        85,
        40,
        66,
        41,
        237,
        245,
        227,
        35
      ],
      "accounts": [
        {
          "name": "config",
          "docs": [
            "Read-only Config — refuses privileged depositors."
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
          "docs": [
            "Read-only: park never mutates the bucket (no shares, no NAV)."
          ]
        },
        {
          "name": "zincPool",
          "docs": [
            "Asserts this is the dZINC bucket + the pool is live (read-only)."
          ]
        },
        {
          "name": "pendingState",
          "writable": true
        },
        {
          "name": "pendingTreasury",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "pendingDeposit",
          "writable": true
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
      "name": "reseedPool",
      "docs": [
        "Admin+cosign: inject external SOL into a pool's treasury, raising",
        "`sol_in_vault` 1:1 with NO share mint and NO `total_shares` change. The",
        "added SOL is socialized across ALL existing shares (NPS rises), making",
        "holders of a shortfalling/drained pool whole at the price they were",
        "promised. The funder gains nothing they do not share pro-rata with every",
        "other holder. BETTING-only and NPS-bounded so it can never be used to",
        "manufacture a frozen withdraw price or pump beyond par."
      ],
      "discriminator": [
        212,
        189,
        244,
        98,
        74,
        163,
        15,
        49
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
          "name": "zincPool"
        },
        {
          "name": "treasury",
          "writable": true
        },
        {
          "name": "funder",
          "docs": [
            "External SOL source. May be the admin or a separate sponsor; gains nothing",
            "(the SOL is socialized across all shares)."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
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
      "name": "resolvePool",
      "docs": [
        "Admin+cosign: reconcile a pool's `sol_in_vault` DOWN to the treasury PDA's",
        "real balance, realizing a shortfall. Moves NO SOL, mints/burns nothing, and",
        "NEVER changes `total_shares` (so no SPL share tokens are orphaned): NPS",
        "simply falls uniformly across ALL shares and holders exit at the corrected",
        "price via the normal withdraw path. Requires the bucket be paused first",
        "(separate cosigned set_pause) and runs in BETTING so it never rewrites a",
        "live frozen claims window. A move within the per-call drop bound needs no",
        "extra ack; a larger / full write-down requires `acknowledge_full_write_down`."
      ],
      "discriminator": [
        191,
        164,
        190,
        142,
        178,
        198,
        162,
        249
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
          "name": "zincPool"
        },
        {
          "name": "treasury"
        },
        {
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "targetSolInVault",
          "type": "u64"
        },
        {
          "name": "acknowledgeFullWriteDown",
          "type": "bool"
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
      "name": "setSettlementAuthority",
      "docs": [
        "Rotate the off-chain settlement authority (e.g. on key compromise).",
        "Admin-cosigned. Moves NO funds; only future attestations must be signed by",
        "the new key. Outstanding claims are unaffected (the watermark is",
        "per-referrer and independent of the authority key)."
      ],
      "discriminator": [
        102,
        3,
        152,
        158,
        128,
        19,
        49,
        61
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
          "name": "referralConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newAuthority",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "setZincPoolCaps",
      "docs": [
        "Admin+cosign: tune the dZINC pool's per-round + per-window SOL caps.",
        "Mirrors set_adapter_caps. A 0 min_round falls back to the pool default."
      ],
      "discriminator": [
        215,
        43,
        50,
        39,
        124,
        44,
        250,
        233
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
          "name": "bucket"
        },
        {
          "name": "zincPool",
          "writable": true
        },
        {
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "minRoundLamports",
          "type": "u64"
        },
        {
          "name": "maxInflightLamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setZincPoolDdHalt",
      "docs": [
        "Admin+cosign: flip the dZINC pool drawdown halt (refuses the ZINC crank)."
      ],
      "discriminator": [
        134,
        52,
        190,
        114,
        105,
        97,
        87,
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
        },
        {
          "name": "bucket"
        },
        {
          "name": "zincPool",
          "writable": true
        },
        {
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "ddHalt",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setZincPoolPause",
      "docs": [
        "Admin+cosign: flip the dZINC pool pause (independent of bucket pause)."
      ],
      "discriminator": [
        52,
        46,
        106,
        43,
        1,
        252,
        226,
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
          "name": "bucket"
        },
        {
          "name": "zincPool",
          "writable": true
        },
        {
          "name": "instructions",
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
      "name": "setZincPoolStockpileCfg",
      "docs": [
        "Admin+cosign: configure the dZINC staking + Stockpile knobs. Mirrors",
        "set_zinc_pool_caps' cosign pattern. `skim_bps` is capped at",
        "`MAX_ZINC_STOCKPILE_SKIM_BPS` (2000 = 20%): a cosigned admin cannot divert",
        "more than that of each settle's smelted ZINC from holders to the war chest."
      ],
      "discriminator": [
        237,
        79,
        11,
        230,
        186,
        62,
        243,
        229
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
          "name": "bucket"
        },
        {
          "name": "zincPool",
          "writable": true
        },
        {
          "name": "instructions",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "enabled",
          "type": "bool"
        },
        {
          "name": "skimBps",
          "type": "u16"
        },
        {
          "name": "entryZincBudget",
          "type": "u64"
        },
        {
          "name": "minJoinBricksX10k",
          "type": "u64"
        },
        {
          "name": "maxStakedGrams",
          "type": "u64"
        },
        {
          "name": "minCustodyFloat",
          "type": "u64"
        }
      ]
    },
    {
      "name": "settleHarvestZinc",
      "docs": [
        "Permissionless per-cycle ZINC harvest. The FIRST OPEN action: it claims the",
        "round's won SOL into the treasury, smelts the mined ZINC (-10% inside the",
        "ZINC protocol) into the custody ATA (HELD, never staked), advances the",
        "pool accumulator from the realized smelted grams over the prior cycle's",
        "share base, and sets `bucket.window_settled = true` (deposit_zinc /",
        "withdraw_zinc require it, exactly like settle_uore for dORE).",
        "PAUSE-EXEMPT / bootstrap-robust: a paused/halted pool, or a never-cranked",
        "pool (no player profile), still marks settled (skipping all CPIs) so a ZINC",
        "incident cannot brick the window. The claim/smelt CPIs are SOFT-FAIL +",
        "gated on the decoded profile accruals, so a losing/zero round never reverts."
      ],
      "discriminator": [
        211,
        249,
        200,
        197,
        207,
        178,
        62,
        255
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "zincPool",
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
          "name": "zincCustodyAta",
          "docs": [
            "The custody ZINC ATA (smelt dest + held balance). init_if_needed so a",
            "permissionless caller can run the first settle if init somehow lagged."
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
                "path": "zincMint"
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
          "name": "zincMint",
          "docs": [
            "ZINC mint, pinned."
          ],
          "address": "zinc155BS4mSPk8GXQj4R5hkVDQXcW253pTYq5SGyfi"
        },
        {
          "name": "zincPlayerProfile",
          "docs": [
            "pre-CPI accrual decode (which GATES claim/smelt) reads the genuine account.",
            "Unpinned, a permissionless caller could pass a substitute that decodes",
            "(0,0) to skip the harvest yet still mark settled."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  108,
                  97,
                  121,
                  101,
                  114,
                  45,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincConfig",
          "address": "48W7ZVgfdqmpVfTxdoRKuVg7gqGk5GHF3QpmxhHCUieG"
        },
        {
          "name": "zincTreasury",
          "writable": true,
          "address": "4Ucw8BNkLWBu6gxkQsw3BRG2qRtw5WrG1UxiKpQjScH5"
        },
        {
          "name": "zincRoundZincRewardTokenAccount",
          "writable": true
        },
        {
          "name": "zincStakePosition",
          "docs": [
            "balance watermark source). Pinned to (stake-position, mining_authority)",
            "under the ZINC program; created lazily by the first ix_stake."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  45,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincStakingTokenAccount",
          "writable": true,
          "address": "4Ym9uvwrwdpiTKq874T8wSqzaFkh8AVazf255FKLt9MR"
        },
        {
          "name": "zincProgram",
          "address": "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV"
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless caller (pays tx + one-time ATA rent on first settle)."
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
      "name": "settleUore",
      "docs": [
        "Permissionless harvest. Vault-PDA-signed inner CPIs:",
        "1. ClaimSOL (miner -> mining_authority), then PDA-internal transfer",
        "mining_authority -> treasury, fold into sol_in_vault.",
        "2. ClaimORE (ORE -> ATA(mining_authority)).",
        "3. ore-lst Wrap (ORE -> stORE into ATA(mining_authority)).",
        "4. transfer stORE ATA(mining_authority) -> store_treasury PDA.",
        "FIX #2: credit store_in_vault from the store_treasury balance DELTA",
        "(authoritative custody). Also advance the accumulator from the ACTUAL",
        "wrapped grams (the single crediting site — see `checkpoint`).",
        "dORE Stage 2: permissionless per-cycle settle. Claims ONLY the won SOL",
        "(working capital) and advances the two uORE accumulators from the GROWTH",
        "of the miner's still-unclaimed rewards_ore / refined_ore. It deliberately",
        "does NOT claim or wrap ORE: the miner is left unclaimed so refined_ore",
        "keeps compounding for everyone. The expensive all-or-nothing claim+wrap",
        "happens only in `batch_replenish` (operator-gated). Runs first in the OPEN",
        "window (deposit/withdraw blocked until window_settled), so the accumulators",
        "advance over the PRIOR cycle's share base: no newcomer can backdate onto",
        "refining that grew before they held shares."
      ],
      "discriminator": [
        71,
        239,
        75,
        46,
        232,
        116,
        160,
        229
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
          "name": "oreProgram",
          "address": "oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv"
        },
        {
          "name": "caller",
          "docs": [
            "Permissionless caller (pays the tx fee)."
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
      "name": "sweepReferralSurplus",
      "docs": [
        "Reclaim the protocol's surplus from `referral_treasury` back to the",
        "`fee_bucket` (then distributed via `distribute_fees`). Surplus = the carve",
        "taken on NON-referred (organic) volume plus rounding dust, i.e. lamports",
        "the off-chain attribution did NOT allocate to any referrer. The settlement",
        "authority attests `max_sweepable = balance - rent - outstanding referrer",
        "liability`, so the sweep can NEVER move what referrers are owed. The",
        "contract additionally clamps to (balance - rent), so even a too-high",
        "attestation cannot break rent-exemption. Permissionless (the destination",
        "is the fixed protocol fee_bucket); the relayer just fee-pays."
      ],
      "discriminator": [
        39,
        131,
        187,
        84,
        180,
        10,
        134,
        21
      ],
      "accounts": [
        {
          "name": "referralConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
          "name": "referralTreasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  102,
                  101,
                  114,
                  114,
                  97,
                  108,
                  95,
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
            ]
          }
        },
        {
          "name": "feeBucket",
          "docs": [
            "Destination: the protocol fee_bucket (then flows via distribute_fees to",
            "the configured recipients). Pinned by seeds + the fee_schedule bump."
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
        },
        {
          "name": "instructions",
          "docs": [
            "attestation (referral.rs)."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
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
            "stORE paid out alongside the SOL payout. Authority = bucket PDA.",
            "Post stORE migration: pinned to the v2 (NEW-mint) reserve; the stored",
            "`store_treasury_bump` holds the v2 bump after `migrate_ore_reserve`."
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
    },
    {
      "name": "withdrawZinc",
      "docs": [
        "User withdraws SOL from a dZINC pool by burning shares, plus the held ZINC",
        "owed in-kind. Mirrors `withdraw` but pays ZINC from custody (the",
        "mining_authority's ZINC ATA) via the acc_zinc_per_share accumulator instead",
        "of stORE from a reserve. SOL is paid at the FROZEN `claims_window_nps`",
        "snapshotted at open_window_zinc. Fail-closed if custody can't cover the exit.",
        "Gate: !paused && phase==OPEN && window_settled && shares>0 &&",
        "position.owner==user && position.shares>=shares."
      ],
      "discriminator": [
        60,
        244,
        222,
        164,
        86,
        191,
        200,
        38
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "zincPool",
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
          "name": "zincPosition",
          "docs": [
            "Per-user dZINC position PDA. Pinned to (bucket_id, user); the handler also",
            "asserts `position.owner == user`."
          ],
          "writable": true
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
          "name": "miningAuthority",
          "docs": [
            "in-kind transfer). Pinned to bucket.mining_authority + seeds."
          ],
          "writable": true
        },
        {
          "name": "zincCustodyAta",
          "docs": [
            "The custody ZINC ATA (held smelted ZINC; authority = mining_authority).",
            "Pinned to ATA(mining_authority, ZINC_MINT) via the cached pool field."
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
                "path": "zincMint"
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
          "name": "userZincAta",
          "docs": [
            "User's ZINC ATA (in-kind payout destination). Mint must be ZINC_MINT."
          ],
          "writable": true
        },
        {
          "name": "zincMint",
          "docs": [
            "ZINC mint, pinned."
          ],
          "address": "zinc155BS4mSPk8GXQj4R5hkVDQXcW253pTYq5SGyfi"
        },
        {
          "name": "zincStakePosition",
          "docs": [
            "Pinned to (stake-position, mining_authority) under the ZINC program."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  101,
                  45,
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "miningAuthority"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                14,
                201,
                90,
                170,
                12,
                35,
                248,
                117,
                75,
                27,
                51,
                129,
                50,
                125,
                182,
                249,
                187,
                202,
                222,
                199,
                195,
                175,
                101,
                73,
                72,
                81,
                174,
                107,
                92,
                165,
                201,
                248
              ]
            }
          }
        },
        {
          "name": "zincStakingTokenAccount",
          "writable": true,
          "address": "4Ym9uvwrwdpiTKq874T8wSqzaFkh8AVazf255FKLt9MR"
        },
        {
          "name": "zincTreasury",
          "writable": true,
          "address": "4Ucw8BNkLWBu6gxkQsw3BRG2qRtw5WrG1UxiKpQjScH5"
        },
        {
          "name": "zincProgram",
          "address": "zincUFpnqYwdYMc1KfH6rKcBvbcdVtHKckKhvrHLDsV"
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
      "name": "pendingDeposit",
      "discriminator": [
        103,
        40,
        193,
        187,
        176,
        121,
        76,
        40
      ]
    },
    {
      "name": "pendingState",
      "discriminator": [
        240,
        47,
        79,
        212,
        168,
        191,
        86,
        183
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
    },
    {
      "name": "referralConfig",
      "discriminator": [
        102,
        148,
        171,
        235,
        148,
        83,
        250,
        140
      ]
    },
    {
      "name": "referrerState",
      "discriminator": [
        194,
        81,
        217,
        103,
        12,
        19,
        12,
        66
      ]
    },
    {
      "name": "zincPool",
      "discriminator": [
        24,
        221,
        20,
        32,
        94,
        138,
        118,
        56
      ]
    },
    {
      "name": "zincPosition",
      "discriminator": [
        204,
        81,
        114,
        42,
        206,
        140,
        251,
        211
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
      "name": "batchReplenishEvent",
      "discriminator": [
        8,
        97,
        37,
        123,
        14,
        239,
        77,
        200
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
      "name": "claimZincSolYieldEvent",
      "discriminator": [
        65,
        27,
        102,
        217,
        127,
        158,
        155,
        82
      ]
    },
    {
      "name": "claimZincYieldEvent",
      "discriminator": [
        108,
        176,
        67,
        58,
        100,
        179,
        232,
        94
      ]
    },
    {
      "name": "closeZincMinerEvent",
      "discriminator": [
        152,
        243,
        129,
        118,
        91,
        119,
        89,
        141
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
      "name": "crankMineZincEvent",
      "discriminator": [
        145,
        147,
        255,
        166,
        252,
        79,
        2,
        173
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
      "name": "depositParkedEvent",
      "discriminator": [
        6,
        116,
        169,
        48,
        122,
        11,
        136,
        158
      ]
    },
    {
      "name": "depositZincEvent",
      "discriminator": [
        61,
        0,
        128,
        196,
        233,
        55,
        140,
        251
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
      "name": "fundMiningAuthorityEvent",
      "discriminator": [
        61,
        132,
        117,
        245,
        219,
        202,
        151,
        40
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
      "name": "joinZincStockpileEvent",
      "discriminator": [
        203,
        60,
        203,
        240,
        183,
        214,
        233,
        78
      ]
    },
    {
      "name": "migrateOreReserveEvent",
      "discriminator": [
        108,
        200,
        79,
        140,
        158,
        72,
        251,
        53
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
      "name": "payoutZincStockpileEvent",
      "discriminator": [
        213,
        128,
        75,
        89,
        56,
        101,
        150,
        104
      ]
    },
    {
      "name": "pendingCancelledEvent",
      "discriminator": [
        215,
        137,
        149,
        33,
        24,
        242,
        12,
        140
      ]
    },
    {
      "name": "pendingFinalizedEvent",
      "discriminator": [
        25,
        207,
        129,
        54,
        123,
        219,
        255,
        104
      ]
    },
    {
      "name": "pendingStateInitializedEvent",
      "discriminator": [
        128,
        156,
        28,
        150,
        158,
        92,
        208,
        198
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
      "name": "referralClaimedEvent",
      "discriminator": [
        127,
        153,
        255,
        239,
        24,
        20,
        29,
        106
      ]
    },
    {
      "name": "referralDistributedEvent",
      "discriminator": [
        159,
        58,
        88,
        184,
        236,
        106,
        134,
        165
      ]
    },
    {
      "name": "referralInitializedEvent",
      "discriminator": [
        170,
        2,
        201,
        193,
        12,
        219,
        166,
        194
      ]
    },
    {
      "name": "referralSurplusSweptEvent",
      "discriminator": [
        136,
        212,
        200,
        193,
        161,
        225,
        190,
        221
      ]
    },
    {
      "name": "reseedPoolEvent",
      "discriminator": [
        8,
        0,
        66,
        220,
        147,
        155,
        184,
        174
      ]
    },
    {
      "name": "resolvePoolEvent",
      "discriminator": [
        205,
        201,
        65,
        86,
        178,
        213,
        16,
        82
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
      "name": "settleHarvestZincEvent",
      "discriminator": [
        141,
        18,
        135,
        47,
        61,
        46,
        54,
        17
      ]
    },
    {
      "name": "settleUoreEvent",
      "discriminator": [
        161,
        97,
        200,
        99,
        241,
        219,
        128,
        128
      ]
    },
    {
      "name": "settlementAuthoritySetEvent",
      "discriminator": [
        23,
        170,
        233,
        21,
        29,
        95,
        167,
        124
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
    },
    {
      "name": "withdrawZincEvent",
      "discriminator": [
        29,
        6,
        62,
        180,
        17,
        112,
        157,
        234
      ]
    },
    {
      "name": "zincPoolConfigEvent",
      "discriminator": [
        222,
        55,
        113,
        80,
        94,
        191,
        242,
        168
      ]
    },
    {
      "name": "zincPoolInitializedEvent",
      "discriminator": [
        245,
        238,
        242,
        145,
        122,
        132,
        244,
        194
      ]
    },
    {
      "name": "zincPoolMigratedEvent",
      "discriminator": [
        118,
        218,
        30,
        252,
        3,
        227,
        58,
        240
      ]
    },
    {
      "name": "zincPoolStockpileCfgEvent",
      "discriminator": [
        65,
        2,
        124,
        49,
        118,
        244,
        97,
        68
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
      "msg": "Claim window not settled: the first user action must run settle_uore first"
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
    },
    {
      "code": 6082,
      "name": "pendingStateNotInit",
      "msg": "Parked-capital buffer not initialized for this bucket — call init_pending first"
    },
    {
      "code": 6083,
      "name": "notBettingPhase",
      "msg": "park_deposit is only allowed during BETTING, or during an OPEN-but-unsettled window"
    },
    {
      "code": 6084,
      "name": "noPendingDeposit",
      "msg": "No parked deposit found for this owner (amount is zero / already settled)"
    },
    {
      "code": 6085,
      "name": "pendingAccountingError",
      "msg": "Pending-buffer accounting error (total/count would underflow or mismatch)"
    },
    {
      "code": 6086,
      "name": "missingReferralAttest",
      "msg": "claim_referral requires a settlement-authority Ed25519 attestation, but none was found"
    },
    {
      "code": 6087,
      "name": "badReferralAttest",
      "msg": "Referral attestation is malformed (wrong tag / length / program / referrer)"
    },
    {
      "code": 6088,
      "name": "notSettlementAuthority",
      "msg": "Referral attestation signer is not the configured settlement authority"
    },
    {
      "code": 6089,
      "name": "staleReferralAttest",
      "msg": "Referral attestation has expired (now > expiry_ts)"
    },
    {
      "code": 6090,
      "name": "referralCumulativeRegression",
      "msg": "Attested cumulative is below the already-claimed watermark (regression)"
    },
    {
      "code": 6091,
      "name": "referralTreasuryInsufficient",
      "msg": "referral_treasury has insufficient balance above rent for this payout"
    },
    {
      "code": 6092,
      "name": "metadataFieldTooLong",
      "msg": "Token metadata field too long (name <= 32, symbol <= 10, uri <= 200 bytes)"
    },
    {
      "code": 6093,
      "name": "uoreAccountingError",
      "msg": "uORE ledger accounting error (overflow/underflow in the per-leg accumulators)"
    },
    {
      "code": 6094,
      "name": "reserveShortfall",
      "msg": "Reserve cannot cover this exit's stORE; run batch_replenish first, then retry"
    },
    {
      "code": 6095,
      "name": "noBatchNeeded",
      "msg": "batch_replenish is not needed (reserve already adequate or miner empty)"
    },
    {
      "code": 6096,
      "name": "zincPoolNotInitialized",
      "msg": "dZINC pool not initialized for this bucket — call init_zinc_pool first"
    },
    {
      "code": 6097,
      "name": "zincPoolAlreadyInitialized",
      "msg": "dZINC pool already initialized for this bucket"
    },
    {
      "code": 6098,
      "name": "zincDeployBelowMin",
      "msg": "Deploy below the dZINC pool's min_round_lamports (e.g. the 1.5 SOL floor)"
    },
    {
      "code": 6099,
      "name": "zincInflightCapExceeded",
      "msg": "Deploy would exceed the dZINC pool's max_inflight_lamports per-window cap"
    },
    {
      "code": 6100,
      "name": "zincRoundAlreadyCranked",
      "msg": "This ZINC round was already cranked this window (no double-deploy)"
    },
    {
      "code": 6101,
      "name": "zincPoolPaused",
      "msg": "dZINC pool is paused (ZincPool.paused) — independent of bucket pause"
    },
    {
      "code": 6102,
      "name": "zincNotZincBucket",
      "msg": "Bucket is not a dZINC pool (ZincPool not initialized / wrong bucket)"
    },
    {
      "code": 6103,
      "name": "notOreBucket",
      "msg": "Bucket is not an ORE pool (no ORE miner) — use the dZINC park/finalize path"
    },
    {
      "code": 6104,
      "name": "zincCustodyShortfall",
      "msg": "ZINC custody cannot cover this exit's in-kind ZINC (fail-closed)"
    },
    {
      "code": 6105,
      "name": "zincAccountingError",
      "msg": "dZINC reward-debt accounting underflow/overflow"
    },
    {
      "code": 6106,
      "name": "zincInflightCeilExceeded",
      "msg": "max_inflight_lamports exceeds the contract ceiling (MAX_ZINC_INFLIGHT_CEIL)"
    },
    {
      "code": 6107,
      "name": "bucketNotPaused",
      "msg": "resolve_pool requires the bucket be paused first (set_pause) so no user op races the reconcile"
    },
    {
      "code": 6108,
      "name": "fullWriteDownNotAcknowledged",
      "msg": "resolve_pool full write-down requires acknowledge_full_write_down = true (explicit operator ack)"
    },
    {
      "code": 6109,
      "name": "reseedEmptyPool",
      "msg": "reseed_pool requires an existing holder base (total_shares > 0); an empty pool has nothing to make whole"
    },
    {
      "code": 6110,
      "name": "zincUnstakeFailed",
      "msg": "withdraw_zinc could not unstake the exiter's pro-rata ZINC from the staking vault (fail-closed; user retries)"
    },
    {
      "code": 6111,
      "name": "zincStakeCapExceeded",
      "msg": "staking would exceed ZincPool.max_staked_grams (circuit breaker)"
    },
    {
      "code": 6112,
      "name": "zincStockpileDisabled",
      "msg": "dZINC Stockpile harvesting is disabled (ZincPool.stockpile_enabled = false)"
    },
    {
      "code": 6113,
      "name": "zincStockpileNoCycle",
      "msg": "no open dZINC Stockpile cycle to join / no unresolved cycle to pay out"
    },
    {
      "code": 6114,
      "name": "zincStockpileNotReady",
      "msg": "dZINC Stockpile join/payout preconditions not met (bricks below floor, already joined, budget, or not a winner)"
    },
    {
      "code": 6115,
      "name": "storeAlreadyMigrated",
      "msg": "stORE reserve already migrated (config.store_mint is already the NEW mint) — migrate_ore_reserve is one-time"
    },
    {
      "code": 6116,
      "name": "storeMigrationLegFailed",
      "msg": "stORE reserve migration leg produced zero output (unwrap/wrap/transfer) — atomic revert, reserve stays fully OLD"
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
      "name": "batchReplenishEvent",
      "docs": [
        "dORE Stage 2: operator-gated batch reserve top-up (claim+wrap -> reserve)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "rewardsBefore",
            "type": "u64"
          },
          {
            "name": "refinedBefore",
            "type": "u64"
          },
          {
            "name": "wrapped",
            "type": "u64"
          },
          {
            "name": "netBefore",
            "type": "u64"
          },
          {
            "name": "storeInVault",
            "type": "u64"
          },
          {
            "name": "reserveBackedNetOre",
            "type": "u64"
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
              "stORE-per-share accumulator (scaled by ACC_SCALE). FROZEN at 0 for dORE",
              "pools (Stage 2 leaves the miner unclaimed and pays exits from the reserve",
              "via the two uORE accumulators below). Kept for layout continuity; a",
              "future claim-every-cycle pool could un-freeze it."
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
            "name": "accRewardsUorePerShare",
            "docs": [
              "uORE-per-share accumulator for the mined (rewards_ore) leg, ACC_SCALE-scaled."
            ],
            "type": "u128"
          },
          {
            "name": "accRefinedUorePerShare",
            "docs": [
              "uORE-per-share accumulator for the refining (refined_ore) leg, ACC_SCALE-scaled."
            ],
            "type": "u128"
          },
          {
            "name": "lastRewardsOreWatermark",
            "docs": [
              "Last observed miner.rewards_ore at the last settle_uore advance; reset to",
              "0 by batch_replenish post-claim. Growth = saturating_sub(now, watermark)."
            ],
            "type": "u64"
          },
          {
            "name": "lastRefinedOreWatermark",
            "docs": [
              "Last observed miner.refined_ore at the last settle_uore advance."
            ],
            "type": "u64"
          },
          {
            "name": "uoreRewardsOutstanding",
            "docs": [
              "Running total of GROSS rewards-leg uORE grams owed to current holders",
              "(sum of per-holder entitlements; += growth at settle, -= at exit)."
            ],
            "type": "u64"
          },
          {
            "name": "uoreRefinedOutstanding",
            "docs": [
              "Running total of GROSS refined-leg uORE grams owed to current holders."
            ],
            "type": "u64"
          },
          {
            "name": "reserveBackedNetOre",
            "docs": [
              "Sum of NET ore (refined + 0.9 * rewards) folded into the reserve at",
              "batches, minus what exiters have drawn. The denominator of the exit",
              "payout: store_due = exit_net_ore * store_in_vault / reserve_backed_net_ore",
              "(exact blended pro-rata of the reserve's physical stORE). store_in_vault",
              "is the matching numerator (reserve stORE grams; INV-CUSTODY-MIRROR)."
            ],
            "type": "u64"
          },
          {
            "name": "lastBatchRoundId",
            "docs": [
              "betting_round_id at the last batch_replenish (cadence telemetry + guard)."
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
      "name": "claimZincSolYieldEvent",
      "docs": [
        "Emitted by `crank_claim_zinc_sol_yield` (stZINC SOL-yield leg capture). A",
        "zero `sol_claimed` means a soft-return (paused / empty position / nothing",
        "vested / claim CPI drifted) with no state change."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "solClaimed",
            "docs": [
              "Measured lamport delta swept from mining_authority into the SOL-leg NAV."
            ],
            "type": "u64"
          },
          {
            "name": "solInVault",
            "type": "u64"
          },
          {
            "name": "totalShares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "claimZincYieldEvent",
      "docs": [
        "Emitted by `crank_claim_zinc_yield` (staking-yield compound)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "yieldClaimed",
            "docs": [
              "Measured yield ZINC delta claimed into custody this crank."
            ],
            "type": "u64"
          },
          {
            "name": "yieldRestaked",
            "docs": [
              "Portion of that yield restaked (compounded) this crank."
            ],
            "type": "u64"
          },
          {
            "name": "credited",
            "docs": [
              "Grams credited to holders via the accumulator (== yield_claimed)."
            ],
            "type": "u64"
          },
          {
            "name": "accZincPerShare",
            "type": "u128"
          },
          {
            "name": "stakeBalance",
            "docs": [
              "Post-crank StakePosition.balance watermark (telemetry)."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "closeZincMinerEvent",
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
            "name": "reclaimedLamports",
            "docs": [
              "Rent (lamports) refunded back onto mining_authority by the close."
            ],
            "type": "u64"
          },
          {
            "name": "miningAuthorityBalance",
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
      "name": "crankMineZincEvent",
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
              "Gross SOL for the deploy stake (amount - fee = net_amount deployed)."
            ],
            "type": "u64"
          },
          {
            "name": "feeLamports",
            "docs": [
              "Volume fee skimmed to the global fee_bucket (incl. referral carve)."
            ],
            "type": "u64"
          },
          {
            "name": "netAmount",
            "docs": [
              "NET deployed into ZINC (amount - fee) = the ZINC deploy total_amount."
            ],
            "type": "u64"
          },
          {
            "name": "zincFee",
            "docs": [
              "ZINC on-top-fee budget funded to the escrow (margin + miner/profile rent)."
            ],
            "type": "u64"
          },
          {
            "name": "shortfall",
            "docs": [
              "Fresh treasury -> escrow top-up this round (drain-first shortfall). NAV cost",
              "this deploy = fee_lamports + shortfall."
            ],
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
      "name": "depositParkedEvent",
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
            "name": "amountLamports",
            "type": "u64"
          },
          {
            "name": "ticketTotalLamports",
            "type": "u64"
          },
          {
            "name": "pendingTotalLamports",
            "type": "u64"
          },
          {
            "name": "parkedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "depositZincEvent",
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
      "name": "fundMiningAuthorityEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "funder",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "miningAuthorityBalance",
            "type": "u64"
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
      "name": "joinZincStockpileEvent",
      "docs": [
        "Emitted by `crank_join_zinc_stockpile` (Stockpile entry). A zero-`zinc_spent`",
        "event means a SOFT-RETURN (precondition unmet) with no join performed."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "stockpileId",
            "type": "u64"
          },
          {
            "name": "bricksCommitted",
            "docs": [
              "Available Bricks (x10k) committed to the cycle."
            ],
            "type": "u64"
          },
          {
            "name": "zincSpent",
            "docs": [
              "War-chest ZINC grams consumed by the entry fee."
            ],
            "type": "u64"
          },
          {
            "name": "warChestGrams",
            "docs": [
              "War-chest balance after the spend."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "migrateOreReserveEvent",
      "docs": [
        "Emitted by `migrate_ore_reserve` (one-time stORE reserve OLD -> NEW migration)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "oldStoreDrained",
            "docs": [
              "OLD stORE grams drained from the reserve (== unwrap input)."
            ],
            "type": "u64"
          },
          {
            "name": "redeemedOre",
            "docs": [
              "ORE redeemed by the unwrap (== wrap input)."
            ],
            "type": "u64"
          },
          {
            "name": "newStoreMinted",
            "docs": [
              "NEW stORE grams minted by the wrap + moved into the v2 reserve."
            ],
            "type": "u64"
          },
          {
            "name": "storeInVault",
            "docs": [
              "store_in_vault AFTER the migration (SET to the measured v2 balance)."
            ],
            "type": "u64"
          },
          {
            "name": "reserveBackedNetOre",
            "docs": [
              "reserve_backed_net_ore (UNCHANGED; conserved across the rate-basis change)."
            ],
            "type": "u64"
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
      "name": "payoutZincStockpileEvent",
      "docs": [
        "Emitted by `crank_payout_zinc_stockpile` (Stockpile winnings). A zero event",
        "means a SOFT-RETURN (not an unpaid winner) with no payout performed."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "stockpileId",
            "type": "u64"
          },
          {
            "name": "rank",
            "type": "u8"
          },
          {
            "name": "solWon",
            "docs": [
              "SOL swept from mining_authority into the treasury (real TVL)."
            ],
            "type": "u64"
          },
          {
            "name": "zincWon",
            "docs": [
              "Reported rank ZINC (accrues on the profile; harvested by the next settle)."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pendingCancelledEvent",
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
            "name": "refundedLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pendingDeposit",
      "docs": [
        "Per-user parked-deposit ticket. Created on `park_deposit` (escrows SOL with",
        "NO shares minted and NO NAV impact), closed on `finalize_pending` (converted",
        "to a real deposit at the next settled OPEN price) or `cancel_pending`",
        "(escrow returned to the owner). Multiple parks by the same owner in one",
        "cycle accumulate into `amount`."
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
            "name": "amount",
            "docs": [
              "Escrowed lamports (gross; the entry fee is skimmed at finalize, matching",
              "`deposit`). Equal to this owner's share of `pending_treasury`."
            ],
            "type": "u64"
          },
          {
            "name": "parkedAt",
            "docs": [
              "Unix ts of the FIRST park into this ticket (telemetry)."
            ],
            "type": "i64"
          },
          {
            "name": "entryFeeBpsSnapshot",
            "docs": [
              "AUDIT L3 — entry-fee terms SNAPSHOTTED at the first park. Finalize uses",
              "these, NOT the live params, so a parker is charged exactly the rate they",
              "agreed to at park time even if admin changes fees during the cranking",
              "window. (No-stuck-capital is unaffected either way; this is fairness.)"
            ],
            "type": "u16"
          },
          {
            "name": "entryFeeEnabledSnapshot",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "pendingFinalizedEvent",
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
            "name": "grossLamports",
            "type": "u64"
          },
          {
            "name": "entryFeeLamports",
            "type": "u64"
          },
          {
            "name": "netLamports",
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
      "name": "pendingState",
      "docs": [
        "Per-bucket state for the parked-capital buffer (deposit-while-cranking).",
        "Lives in its OWN account, NOT on `Bucket`, so enabling the buffer on an",
        "already-deployed bucket needs no account realloc. Created once by",
        "`init_pending`."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "pendingTreasuryBump",
            "docs": [
              "Canonical bump of the `pending_treasury` escrow PDA (cached so the",
              "escrow can sign PDA transfers without recompute)."
            ],
            "type": "u8"
          },
          {
            "name": "pendingTotal",
            "docs": [
              "Sum of all escrowed lamports across open `PendingDeposit` records.",
              "EXCLUDES the escrow's rent-exempt seed. Invariant:",
              "`pending_treasury.lamports == rent_seed + pending_total`."
            ],
            "type": "u64"
          },
          {
            "name": "pendingCount",
            "docs": [
              "Number of currently-open `PendingDeposit` records."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pendingStateInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "pendingState",
            "type": "pubkey"
          },
          {
            "name": "pendingTreasury",
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
          },
          {
            "name": "accRewardsUorePerSharePaid",
            "docs": [
              "Reward-debt watermark for the mined (rewards_ore) leg: the bucket's",
              "`acc_rewards_uore_per_share` as of this position's last settle. Owed gross",
              "rewards-leg uORE since = shares * (acc - paid) / ACC_SCALE. Set to the",
              "CURRENT acc on first deposit (no backdating, FIX A)."
            ],
            "type": "u128"
          },
          {
            "name": "accRefinedUorePerSharePaid",
            "docs": [
              "Reward-debt watermark for the refining (refined_ore) leg."
            ],
            "type": "u128"
          },
          {
            "name": "uoreRewardsCreditGrams",
            "docs": [
              "Carried (rounded-down) GROSS rewards-leg uORE grams owed but not yet paid."
            ],
            "type": "u64"
          },
          {
            "name": "uoreRefinedCreditGrams",
            "docs": [
              "Carried (rounded-down) GROSS refined-leg uORE grams owed but not yet paid."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "referralClaimedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "pubkey"
          },
          {
            "name": "payoutLamports",
            "type": "u64"
          },
          {
            "name": "cumulativeLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "referralConfig",
      "docs": [
        "Global referral-program config. Holds the off-chain settlement authority",
        "(whose Ed25519 attestations authorize claim payouts) and the canonical bump",
        "of the `referral_treasury` escrow. Created once by `init_referral`; the",
        "authority is rotatable via `set_settlement_authority` (cosigned) for key",
        "recovery. Lives in its OWN account (strictly additive — no live layout",
        "touched)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "settlementAuthority",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "referralTreasuryBump",
            "type": "u8"
          },
          {
            "name": "swept",
            "docs": [
              "Cumulative lamports already swept to fee_bucket via sweep_referral_surplus.",
              "The sweep anti-replay watermark (mirrors ReferrerState.claimed): a sweep",
              "pays only `attested_cumulative - swept`, so replaying an attestation moves",
              "0 and a refilling pool can never be over-swept into referrer liability."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "referralDistributedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "pubkey"
          },
          {
            "name": "relayer",
            "type": "pubkey"
          },
          {
            "name": "payoutLamports",
            "type": "u64"
          },
          {
            "name": "cumulativeLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "referralInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "settlementAuthority",
            "type": "pubkey"
          },
          {
            "name": "referralTreasury",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "referralSurplusSweptEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountLamports",
            "type": "u64"
          },
          {
            "name": "cumulativeSwept",
            "type": "u64"
          },
          {
            "name": "to",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "referrerState",
      "docs": [
        "Per-referrer claim watermark. `claimed` is the cumulative lamports this",
        "referrer has already withdrawn from `referral_treasury`. A claim pays",
        "`attested_cumulative - claimed` and advances the watermark, so re-submitting",
        "a stale/replayed attestation pays 0 (idempotent, replay-safe). Created on the",
        "referrer's first claim (init_if_needed, payer = referrer)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "reseedPoolEvent",
      "docs": [
        "Emitted by `reseed_pool`. Every privileged NPS move is logged with the",
        "before/after price + amount for off-chain monitoring."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "funder",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "prevNps",
            "type": "u128"
          },
          {
            "name": "newNps",
            "type": "u128"
          },
          {
            "name": "solInVaultAfter",
            "type": "u64"
          },
          {
            "name": "totalShares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "resolvePoolEvent",
      "docs": [
        "Emitted by `resolve_pool`. `full_write_down` is true when the reconcile",
        "exceeded the per-call drop bound (i.e. required acknowledgement)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "solInVaultBefore",
            "type": "u64"
          },
          {
            "name": "solInVaultAfter",
            "type": "u64"
          },
          {
            "name": "prevNps",
            "type": "u128"
          },
          {
            "name": "newNps",
            "type": "u128"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "fullWriteDown",
            "type": "bool"
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
      "name": "settleHarvestZincEvent",
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
            "name": "smeltedZinc",
            "type": "u64"
          },
          {
            "name": "credited",
            "docs": [
              "Smelted ZINC grams credited to the held custody balance this settle."
            ],
            "type": "u64"
          },
          {
            "name": "accZincPerShare",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "settleUoreEvent",
      "docs": [
        "dORE Stage 2: per-cycle settle (SOL claim + uORE accumulator advance)."
      ],
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
            "name": "rewardsGrowth",
            "type": "u64"
          },
          {
            "name": "refinedGrowth",
            "type": "u64"
          },
          {
            "name": "accRewardsUorePerShare",
            "type": "u128"
          },
          {
            "name": "accRefinedUorePerShare",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "settlementAuthoritySetEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oldAuthority",
            "type": "pubkey"
          },
          {
            "name": "newAuthority",
            "type": "pubkey"
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
    },
    {
      "name": "withdrawZincEvent",
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
            "name": "exitFeeLamports",
            "type": "u64"
          },
          {
            "name": "userPayoutLamports",
            "type": "u64"
          },
          {
            "name": "zincPayoutAtomic",
            "docs": [
              "Atomic ZINC units paid in-kind pro-rata alongside the SOL payout."
            ],
            "type": "u64"
          },
          {
            "name": "zincUnstaked",
            "docs": [
              "Atomic ZINC unstaked from the staking vault to cover the exit shortfall",
              "(custody was near-zero in OPEN with all backing staked)."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "zincPool",
      "docs": [
        "Per-bucket dZINC pool sidecar. PDA([ZINC_POOL_SEED, bucket_id]). Its",
        "EXISTENCE turns a bucket into a dZINC pool. Created by `init_zinc_pool`."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "paused",
            "docs": [
              "Per-pool pause, INDEPENDENT of `Bucket.paused`. Kills the ZINC crank",
              "(e.g. a ZINC god-key incident) without touching the dORE pool."
            ],
            "type": "bool"
          },
          {
            "name": "ddHalt",
            "docs": [
              "Drawdown kill switch: when true, the ZINC crank is refused."
            ],
            "type": "bool"
          },
          {
            "name": "accZincPerShare",
            "docs": [
              "Smelted-ZINC-per-share accumulator (ACC_SCALE-scaled). Advanced from",
              "REALIZED smelted grams at `settle_harvest_zinc` over the BLENDED",
              "`bucket.total_shares`. Mirrors the dORE `acc_store_per_share` path; the",
              "SIMPLE single-accumulator model (smelt+hold is one leg), not the dORE",
              "two-leg uORE/reserve path."
            ],
            "type": "u128"
          },
          {
            "name": "zincInVault",
            "docs": [
              "Total smelted+compounded ZINC grams BACKING the pool. Post-staking this is",
              "the staked balance (in the ZINC staking vault); the custody ATA is now a",
              "transient hop (smelt-dest / restake-source / unstake-dest), near-zero",
              "between handlers. Grows at settle (smelt+stake) and at",
              "`crank_claim_zinc_yield` (yield+restake); shrinks by exactly the exiter's",
              "pro-rata on withdraw_zinc (unstake -> pay). Logical mirror; the physical",
              "solvency check at withdraw is post-unstake on the reloaded custody ATA."
            ],
            "type": "u64"
          },
          {
            "name": "pendingZincCredit",
            "docs": [
              "Carry-forward: realized smelted ZINC credited while `total_shares == 0`",
              "(no LPs to distribute to). Folded into `acc_zinc_per_share` at the next",
              "settle once shares exist, so no realized ZINC is stranded un-allocatable",
              "(the `advance(_, 0)` dust trap). Normally 0."
            ],
            "type": "u64"
          },
          {
            "name": "bettingRoundId",
            "docs": [
              "Last ZINC round cranked this betting window (anti-double-crank; the ZINC",
              "analogue of `Bucket.betting_round_id`, kept here so the dORE field is",
              "untouched on a ZINC bucket)."
            ],
            "type": "u64"
          },
          {
            "name": "minRoundLamports",
            "docs": [
              "Min gross SOL to crank one ZINC round (default",
              "ZINC_POOL_MIN_ROUND_LAMPORTS_DEFAULT = 1.5 SOL; admin-tunable)."
            ],
            "type": "u64"
          },
          {
            "name": "maxInflightLamports",
            "docs": [
              "Per-WINDOW SOL exposure ceiling (admin-tunable, <= MAX_ZINC_INFLIGHT_CEIL).",
              "ZINC escrows into a DISTINCT per-round account each crank, so a per-crank",
              "cap would let N rounds stack N x cap in one window; tracking the running",
              "sum makes this a true per-window ceiling."
            ],
            "type": "u64"
          },
          {
            "name": "windowInflightLamports",
            "docs": [
              "Cumulative gross SOL deployed this betting window (lazy epoch reset)."
            ],
            "type": "u64"
          },
          {
            "name": "inflightWindowEpoch",
            "docs": [
              "The window epoch `window_inflight_lamports` accrues against. Standalone",
              "has no basket window_epoch, so this is the BETTING window's",
              "`bucket.phase_started_slot`: the cap resets when this != the current",
              "betting phase_started_slot (its only job is \"don't over-expose within one",
              "betting window\")."
            ],
            "type": "u64"
          },
          {
            "name": "lastSeenRewards",
            "docs": [
              "Telemetry: last smelted ZINC observed at a settle."
            ],
            "type": "u64"
          },
          {
            "name": "zincProfile",
            "docs": [
              "Cached PDA([b\"player-profile\", mining_authority], ZINC) — the ZINC player",
              "profile (created lazily by the first deploy). Cache only."
            ],
            "type": "pubkey"
          },
          {
            "name": "zincCustodyAta",
            "docs": [
              "Cached ATA(mining_authority, ZINC_MINT) = the held-ZINC custody account."
            ],
            "type": "pubkey"
          },
          {
            "name": "stakePosition",
            "docs": [
              "Cached PDA([\"stake-position\", mining_authority], ZINC). The pool's single",
              "StakePosition (mining_authority IS the staker). Cache only; created lazily",
              "by the first `ix_stake`."
            ],
            "type": "pubkey"
          },
          {
            "name": "lastSeenStakeBalance",
            "docs": [
              "Yield-delta watermark: the post-CPI `stake_position.balance` after the last",
              "stake/unstake/claim. The single-leg twin of the dORE `last_*_ore_watermark`",
              "pair. Telemetry + sanity; crediting is driven by the MEASURED custody delta,",
              "never this field."
            ],
            "type": "u64"
          },
          {
            "name": "totalYieldCompounded",
            "docs": [
              "Cumulative realized staking yield restaked (compounded). Telemetry."
            ],
            "type": "u64"
          },
          {
            "name": "maxStakedGrams",
            "docs": [
              "Circuit breaker: max ZINC grams allowed staked (0 = unlimited). When",
              "`zinc_in_vault >= max_staked_grams`, settle/yield skip the `ix_stake` (grams",
              "stay in custody, still credited + recoverable) so an incident response can",
              "stop further restaking without pausing the bucket. The ZINC-staking",
              "analogue of `max_inflight_lamports`."
            ],
            "type": "u64"
          },
          {
            "name": "minCustodyFloat",
            "docs": [
              "Fallback-path only: custody float kept liquid for fast exits IF the sandbox",
              "shows partial unstake re-vests the remainder (the `batch_unstake_zinc`",
              "buffer model). 0 in the per-exit-unstake model."
            ],
            "type": "u64"
          },
          {
            "name": "stockpileEnabled",
            "docs": [
              "Master switch for the Stockpile join/payout cranks. Default OFF (dark",
              "rollout); flipped on via `set_zinc_pool_stockpile_cfg` once staking is",
              "proven live."
            ],
            "type": "bool"
          },
          {
            "name": "lastJoinedStockpileId",
            "docs": [
              "Last Stockpile cycle id we joined (advisory; ZINC enforces single-join per",
              "cycle itself). Sentinel u64::MAX = never joined."
            ],
            "type": "u64"
          },
          {
            "name": "stockpileEntryZincBudget",
            "docs": [
              "War-chest TARGET size in ZINC grams: the settle skim fills the war chest up",
              "to this cap, and the join crank spends Stockpile entry fees from the war",
              "chest. 0 = no war chest (Stockpile inert even if enabled)."
            ],
            "type": "u64"
          },
          {
            "name": "stockpileMinJoinBricksX10k",
            "docs": [
              "Min available Bricks (x10k) before the join crank will enter a cycle."
            ],
            "type": "u64"
          },
          {
            "name": "stockpileSkimBps",
            "docs": [
              "War-chest skim rate (bps of each settle's smelted ZINC diverted to the war",
              "chest BEFORE crediting holders, up to stockpile_entry_zinc_budget). This is",
              "the ONLY holder cost of the Stockpile: house money, never part of",
              "zinc_in_vault / the accumulator, so exits stay fully solvent. 0 = off."
            ],
            "type": "u16"
          },
          {
            "name": "stockpileWarChestGrams",
            "docs": [
              "Current war-chest balance in ZINC grams (house money). Physically STAKED",
              "alongside holder backing (part of StakePosition.balance) but tracked",
              "separately and NEVER drawn by exits: total staked ~= zinc_in_vault +",
              "stockpile_war_chest_grams. Grows by the settle skim, shrinks by join entry",
              "fees."
            ],
            "type": "u64"
          },
          {
            "name": "stockpileSolWon",
            "docs": [
              "Telemetry: cumulative Stockpile SOL + ZINC won (lifetime)."
            ],
            "type": "u64"
          },
          {
            "name": "stockpileZincWon",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "zincPoolConfigEvent",
      "docs": [
        "dZINC pool config change (caps / dd_halt / pause). `field`: 0=caps, 1=dd_halt,",
        "2=pause; `flag` carries the new bool for dd_halt/pause (ignored for caps)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "field",
            "type": "u8"
          },
          {
            "name": "flag",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "zincPoolInitializedEvent",
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
            "name": "zincProfile",
            "type": "pubkey"
          },
          {
            "name": "zincCustodyAta",
            "type": "pubkey"
          },
          {
            "name": "minRoundLamports",
            "type": "u64"
          },
          {
            "name": "maxInflightLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "zincPoolMigratedEvent",
      "docs": [
        "Emitted by `migrate_zinc_pool_staking` (one-time realloc + field seed)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "stakePosition",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "zincPoolStockpileCfgEvent",
      "docs": [
        "Emitted by `set_zinc_pool_stockpile_cfg` (staking + Stockpile knobs)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bucketId",
            "type": "u8"
          },
          {
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "skimBps",
            "type": "u16"
          },
          {
            "name": "entryZincBudget",
            "type": "u64"
          },
          {
            "name": "minJoinBricksX10k",
            "type": "u64"
          },
          {
            "name": "maxStakedGrams",
            "type": "u64"
          },
          {
            "name": "minCustodyFloat",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "zincPosition",
      "docs": [
        "Per-user dZINC position. PDA([ZINC_POSITION_SEED, bucket_id, owner]). Created",
        "init_if_needed in `deposit_zinc`. Holds the reward-debt watermark + carried",
        "(floored) ZINC grams owed, collected by a later withdraw_zinc."
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
            "name": "accZincPerSharePaid",
            "docs": [
              "Reward-debt watermark: the pool's `acc_zinc_per_share` as of this",
              "holder's last settle. Owed smelted ZINC since = shares * (acc - paid) /",
              "ACC_SCALE. Set to the CURRENT acc on first deposit (no backdating)."
            ],
            "type": "u128"
          },
          {
            "name": "zincCreditGrams",
            "docs": [
              "Carried (floored) ZINC grams owed but not yet paid out — lets a later",
              "withdraw collect dust that an earlier partial withdraw floored."
            ],
            "type": "u64"
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
      "name": "pendingSeed",
      "docs": [
        "Per-user parked-deposit ticket: PDA([PENDING_SEED, bucket_id, owner]).",
        "Created on `park_deposit`, closed (rent -> owner) on finalize/cancel."
      ],
      "type": "bytes",
      "value": "[112, 101, 110, 100, 105, 110, 103]"
    },
    {
      "name": "pendingStateSeed",
      "docs": [
        "Per-bucket pending-buffer state PDA: PDA([PENDING_STATE_SEED, bucket_id]).",
        "Holds the running escrow total + open-record count. Kept in its OWN account",
        "(not on `Bucket`) so enabling the buffer needs no realloc of live buckets."
      ],
      "type": "bytes",
      "value": "[112, 101, 110, 100, 105, 110, 103, 95, 115, 116, 97, 116, 101]"
    },
    {
      "name": "pendingTreasurySeed",
      "docs": [
        "Per-bucket escrow holding parked SOL: PDA([PENDING_TREASURY_SEED, bucket_id]).",
        "System account, rent-seeded at `init_pending`. The rent seed is NEVER part of",
        "the tracked `pending_total`, so finalize/cancel can never drain it below",
        "rent-exempt."
      ],
      "type": "bytes",
      "value": "[112, 101, 110, 100, 105, 110, 103, 95, 116, 114, 101, 97, 115, 117, 114, 121]"
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
      "name": "referralConfigSeed",
      "docs": [
        "Global referral config PDA: PDA([REFERRAL_CONFIG_SEED]). Holds the settlement",
        "authority pubkey + the referral_treasury bump. Created once by init_referral."
      ],
      "type": "bytes",
      "value": "[114, 101, 102, 101, 114, 114, 97, 108, 95, 99, 111, 110, 102, 105, 103]"
    },
    {
      "name": "referralTreasurySeed",
      "docs": [
        "Global referral escrow PDA: PDA([REFERRAL_TREASURY_SEED]). System account,",
        "rent-seeded at init_referral. Receives the REFERRAL_BPS carve from every",
        "crank across all buckets; pays referrers via claim_referral. The rent seed is",
        "never part of any payout (claims keep it rent-exempt)."
      ],
      "type": "bytes",
      "value": "[114, 101, 102, 101, 114, 114, 97, 108, 95, 116, 114, 101, 97, 115, 117, 114, 121]"
    },
    {
      "name": "referrerSeed",
      "docs": [
        "Per-referrer claim-watermark PDA: PDA([REFERRER_SEED, referrer]). Stores the",
        "cumulative lamports already claimed (monotonic), making claims idempotent and",
        "replay-safe. Created on first claim."
      ],
      "type": "bytes",
      "value": "[114, 101, 102, 101, 114, 114, 101, 114]"
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
        "`Config.store_mint`; its authority is the bucket PDA. V5.",
        "NOTE (post stORE migration): the OLD-mint reserve lives at this seed; the",
        "live reserve moved to `STORE_TREASURY_V2_SEED` because a token account's mint",
        "is immutable, so the NEW-mint reserve cannot reuse the same PDA."
      ],
      "type": "bytes",
      "value": "[115, 116, 111, 114, 101, 95, 116, 114, 101, 97, 115, 117, 114, 121]"
    },
    {
      "name": "storeTreasuryV2Seed",
      "docs": [
        "Seed for the post-migration NEW-mint stORE reserve token account. Mint is the",
        "NEW `STORE_MINT`; authority is the bucket PDA. `migrate_ore_reserve` inits it",
        "and moves the unwrapped+rewrapped reserve here; withdraw/batch_replenish pin",
        "their `store_treasury` to this seed thereafter. See ore-stake-hack migration."
      ],
      "type": "bytes",
      "value": "[115, 116, 111, 114, 101, 95, 116, 114, 101, 97, 115, 117, 114, 121, 95, 118, 50]"
    },
    {
      "name": "treasurySeed",
      "type": "bytes",
      "value": "[116, 114, 101, 97, 115, 117, 114, 121]"
    },
    {
      "name": "zincPoolSeed",
      "docs": [
        "Per-bucket dZINC pool sidecar PDA: PDA([ZINC_POOL_SEED, bucket_id]). Its",
        "EXISTENCE turns a bucket into a dZINC pool. Holds the smelted-ZINC-per-share",
        "accumulator + custody mirror + inflight caps. Created once by init_zinc_pool."
      ],
      "type": "bytes",
      "value": "[122, 105, 110, 99, 95, 112, 111, 111, 108]"
    },
    {
      "name": "zincPositionSeed",
      "docs": [
        "Per-user dZINC position PDA: PDA([ZINC_POSITION_SEED, bucket_id, owner]).",
        "Holds the user's reward-debt watermark + carried (floored) ZINC grams owed.",
        "Created init_if_needed in deposit_zinc. Separate from the legacy `Position`",
        "so its layout is never touched."
      ],
      "type": "bytes",
      "value": "[122, 105, 110, 99, 95, 112, 111, 115, 105, 116, 105, 111, 110]"
    }
  ]
};
