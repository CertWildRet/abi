/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/diamond_pools.json`.
 */
export type DiamondPools = {
  "address": "FMecQfZ1qbt87GNGVU1xNDnsFnHH78Dwz74qaTumSRsB",
  "metadata": {
    "name": "diamondPools",
    "version": "1.0.0",
    "spec": "0.1.0",
    "description": "Diamond Pools: non-custodial three-pool ORE vault on Solana (Mining/Staking/Protocol). Oracle-free, forward-priced dealing windows, fee-wash advances."
  },
  "instructions": [
    {
      "name": "acceptAdmin",
      "docs": [
        "Admin handover step 3: the incoming admin accepts (proves key control)."
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
      "name": "addWhitelist",
      "docs": [
        "Whitelist a wallet for the Protocol Pool (cosigned)."
      ],
      "discriminator": [
        215,
        46,
        143,
        176,
        108,
        113,
        24,
        1
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
          "name": "whitelistEntry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  104,
                  105,
                  116,
                  101,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "wallet"
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
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "cancelAdminTransfer",
      "docs": [
        "Abort an in-flight admin handover (cosigned)."
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
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "claimExternalFeeRebate",
      "docs": [
        "Claim the exact SOL rebate accrued while this mining wallet was exempt",
        "from the external deploy-fee slice."
      ],
      "discriminator": [
        49,
        147,
        143,
        253,
        43,
        144,
        166,
        134
      ],
      "accounts": [
        {
          "name": "miningPool",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
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
          "name": "feeExemptEntry",
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
                  101,
                  120,
                  101,
                  109,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "position"
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
          "name": "owner",
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
      "name": "claimReferral",
      "docs": [
        "PULL claim: referrer signs + attests cumulative owed → payout."
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
          "name": "ixSysvar",
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
      "name": "claimUnclaimed",
      "docs": [
        "rev-13. Pay a claimant the operators verified OFF-CHAIN out of the segregated unclaimed pot.",
        "One of exactly two ways value ever leaves that pot. Cosigned. `asset`: 0 = SOL, 1 = stORE."
      ],
      "discriminator": [
        83,
        180,
        69,
        217,
        176,
        246,
        35,
        175
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
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "debit it (rev-11 F1: a transfer source declared without `mut` aborts with a bare",
            "PrivilegeEscalation and no program error code)."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "storeMint"
        },
        {
          "name": "claimant",
          "docs": [
            "owed what from `UnclaimedRecorded` events and satisfy themselves before cosigning) — the",
            "program deliberately holds no per-beneficiary ledger, so it cannot and does not re-check it."
          ],
          "writable": true
        },
        {
          "name": "claimantStoreAta",
          "docs": [
            "`payout_target_ready`. NOT `init_if_needed`: creating a user-authority account here at the",
            "admin's expense is the rent-pump shape invariant V1a removed. The claimant provides a working",
            "account or the operators retry — this rail is not phase-advancing, so refusing is safe."
          ],
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "ixSysvar"
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
          "name": "asset",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "clearFeeExempt",
      "docs": [
        "Clear a wallet's external-fee exemption entry and reclaim rent (cosigned)."
      ],
      "discriminator": [
        88,
        213,
        17,
        123,
        123,
        187,
        127,
        33
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "feeExemptEntry",
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
                  101,
                  120,
                  101,
                  109,
                  112,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "wallet"
              }
            ]
          }
        },
        {
          "name": "miningPosition"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "closeMiningPosition",
      "docs": [
        "§5.6b registry hygiene: permissionlessly close a fully-empty mining position PDA",
        "and decrement the live-position count (reaps exited zombies). Dormant-relevant."
      ],
      "discriminator": [
        236,
        24,
        17,
        223,
        170,
        67,
        114,
        82
      ],
      "accounts": [
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "owner",
          "docs": [
            "(which include owner.key()), so rent can only be refunded to the true owner."
          ],
          "writable": true
        },
        {
          "name": "feeExemptEntry",
          "docs": [
            "wallet are validated by the rebate adapter."
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
                  101,
                  120,
                  101,
                  109,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "cranker",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "closeWindow",
      "docs": [
        "Reclaim the rent of a fully-cascaded (OPEN, strictly older than the live window) Window",
        "PDA to the fee bucket. Permissionless housekeeping — see `instructions::batch::close_window`",
        "for why the rent goes to the protocol rather than the caller."
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
          "name": "window",
          "docs": [
            "The spent window. Closed here; its rent goes back to whoever FUNDED it."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "rentPayer",
          "docs": [
            "it cannot be redirected, and the CLOSER still receives nothing — housekeeping must never",
            "become a race prize (that property is why this is not simply `close = cranker`)."
          ],
          "writable": true
        },
        {
          "name": "cranker",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "confirmAdminTransfer",
      "docs": [
        "Admin handover step 2: the confirmer role approves."
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
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "crankAdvancePhase",
      "docs": [
        "Advance the cascade to the next phase (completion-gated)."
      ],
      "discriminator": [
        76,
        168,
        61,
        239,
        57,
        251,
        81,
        225
      ],
      "accounts": [
        {
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "cranker",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "crankBatch",
      "docs": [
        "BATCH: finalize the window (BATCH → OPEN). Crystallization hooks here.",
        "",
        "Deliberately does NOT wait for the weekly perf pass (`crank_perf_charge`) to finish. BATCH",
        "is irrevocable; gating it on a paged pass that a stalled keeper may never complete would be",
        "a permanent wedge. An unfinished pass merges into the next cycle instead — see perf_fee.rs."
      ],
      "discriminator": [
        245,
        173,
        253,
        14,
        154,
        110,
        89,
        45
      ],
      "accounts": [
        {
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "docs": [
            "§5.5: mut so this window's cascade completion decrements cascades_in_flight (the",
            "evacuate_claim_all all-drained gate)."
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "cranker",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "crankCapRebalance",
      "docs": [
        "TREASURY_ADV: window-close concentration rebalance (I7 ii+iii) → BATCH."
      ],
      "discriminator": [
        201,
        209,
        253,
        87,
        35,
        98,
        143,
        246
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "storeMint"
        },
        {
          "name": "stakingVaultAuthority"
        },
        {
          "name": "stakingVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "stakingVaultAuthority"
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
          "name": "protocolVaultAuthority"
        },
        {
          "name": "protocolVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "cranker",
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "crankCheckpoint",
      "docs": [
        "Settle an ORE round (permissionless; unblocks FREEZE's round-settled gate)."
      ],
      "discriminator": [
        138,
        8,
        179,
        13,
        100,
        7,
        37,
        150
      ],
      "accounts": [
        {
          "name": "miningPool",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "miningAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "oreAutomation",
          "writable": true
        },
        {
          "name": "oreBoard",
          "writable": true
        },
        {
          "name": "oreMiner",
          "writable": true
        },
        {
          "name": "oreRound",
          "writable": true
        },
        {
          "name": "oreTreasury",
          "writable": true
        },
        {
          "name": "oreProgram",
          "address": "oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv"
        },
        {
          "name": "cranker",
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
      "name": "crankFreeze",
      "docs": [
        "FREEZE: harvest-first, capture frozen marks, roll to the next window."
      ],
      "discriminator": [
        67,
        208,
        61,
        76,
        98,
        47,
        79,
        22
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
          "name": "window",
          "docs": [
            "The window being frozen (the current INTAKE window)."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "config.current_window_id",
                "account": "config"
              }
            ]
          }
        },
        {
          "name": "nextWindow",
          "docs": [
            "The next INTAKE window (created here)."
          ],
          "writable": true
        },
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "phantomMember",
          "docs": [
            "§5.2 LITE phantom buffer — its u leg refines in lockstep with the un-reduced",
            "physical base every freeze (signed roll). A no-op at the (0,0) dormant state."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  97,
                  110,
                  116,
                  111,
                  109,
                  95,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "miningAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "miningVault",
          "writable": true
        },
        {
          "name": "oreMiner",
          "writable": true
        },
        {
          "name": "oreBoard",
          "writable": true
        },
        {
          "name": "oreTreasury"
        },
        {
          "name": "oreStakeStake"
        },
        {
          "name": "storeMint",
          "docs": [
            "stORE mint — ratio denominator (supply)."
          ]
        },
        {
          "name": "oreProgram",
          "address": "oreV3EG1i9BEgiAJ8b177Z2S2rMarzak4NMv1kULvWv"
        },
        {
          "name": "cranker",
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
      "name": "crankMine",
      "docs": [
        "Keeper-gated bounded ORE Deploy: `per_tile` on each tile of `tiles_mask`."
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
          "name": "window",
          "docs": [
            "The current INTAKE window — read only for the guard-band cutoff (critic 1)."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "config.current_window_id",
                "account": "config"
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
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
          "name": "miningVault",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "protocolVault",
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
          "name": "oreAutomation",
          "writable": true
        },
        {
          "name": "oreBoard",
          "writable": true
        },
        {
          "name": "oreConfig"
        },
        {
          "name": "oreMiner",
          "writable": true
        },
        {
          "name": "oreRound",
          "writable": true
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
          "name": "keeper",
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
          "name": "roundId",
          "type": "u64"
        },
        {
          "name": "tilesMask",
          "type": "u32"
        },
        {
          "name": "perTile",
          "type": "u64"
        }
      ]
    },
    {
      "name": "crankMonetizeAbort",
      "docs": [
        "§5.6b ABORT — cosigned-admin recovery for a keeper-dead cycle (admin settles the",
        "SOL, takes the custody stORE, unsticks so FOLD can complete). Conserving."
      ],
      "discriminator": [
        154,
        68,
        246,
        246,
        70,
        130,
        205,
        198
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "miningVault",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "storeMint"
        },
        {
          "name": "monetizeStoreAta",
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
          "name": "adminStoreAta",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
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
          "name": "solIn",
          "type": "u64"
        }
      ]
    },
    {
      "name": "crankMonetizeClaimResidual",
      "docs": [
        "§5.6b residual rung — after all SELL pages, measure one partial claim from the",
        "shared miner, reconcile the intended-vs-physical leg mix through LITE, wrap the",
        "credited amount to stORE, and quarantine wrapper overage in the claim reserve."
      ],
      "discriminator": [
        190,
        213,
        63,
        51,
        100,
        113,
        235,
        65
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
          "name": "window",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "phantomMember",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  97,
                  110,
                  116,
                  111,
                  109,
                  95,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "storeMint"
        },
        {
          "name": "cranker",
          "docs": [
            "Permissionless liveness signer. Every value and CPI account is sealed or pinned."
          ],
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
      "name": "crankMonetizeFold",
      "docs": [
        "§5.6b FOLD — paged (one position/call) after a freeze. Mints monetizing positions",
        "shares at the settled NAV + folds staged SOL into the vault. NAV/share invariant."
      ],
      "discriminator": [
        35,
        231,
        71,
        122,
        18,
        203,
        203,
        72
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
          "name": "window",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "feeExemptEntry",
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
                  101,
                  120,
                  101,
                  109,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "position.owner",
                "account": "position"
              }
            ]
          }
        },
        {
          "name": "cranker",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "crankMonetizeSell",
      "docs": [
        "§5.6b SELL — keeper-gated, paged (one position/call). Sells fraction f of each",
        "live position's ORE annex at the net mark: ST first up to cap headroom, then PP",
        "above its I10 reserve, then an attributed residual claim. DORMANT (no-op)",
        "until monetize_share_bps > 0."
      ],
      "discriminator": [
        82,
        4,
        153,
        209,
        245,
        187,
        23,
        108
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
          "name": "window",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "phantomMember",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  97,
                  110,
                  116,
                  111,
                  109,
                  95,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "oreMiner"
        },
        {
          "name": "position",
          "docs": [
            "The position being swept this call (mining pool)."
          ],
          "writable": true
        },
        {
          "name": "storeMint"
        },
        {
          "name": "stakingVaultAuthority"
        },
        {
          "name": "stakingVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "stakingVaultAuthority"
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
          "name": "protocolVaultAuthority"
        },
        {
          "name": "protocolVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "miningAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "monetizeStoreAta",
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
          "name": "keeper",
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "crankMonetizeStage",
      "docs": [
        "§5.6b STAGE — keeper deposits swap-return SOL (staged off-ledger) and takes the",
        "custody stORE to swap. Atomic; no pool-stORE float. DORMANT-only in practice."
      ],
      "discriminator": [
        182,
        18,
        169,
        57,
        64,
        205,
        149,
        215
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "miningVault",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "storeMint"
        },
        {
          "name": "monetizeStoreAta",
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
          "name": "keeperStoreAta",
          "writable": true
        },
        {
          "name": "keeper",
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
          "name": "solIn",
          "type": "u64"
        }
      ]
    },
    {
      "name": "crankPerfCharge",
      "docs": [
        "The WEEKLY PERFORMANCE PASS, one position per call. Permissionless, idempotent per",
        "(position, cycle), and free of any revert a caller cannot fix by waiting."
      ],
      "discriminator": [
        177,
        170,
        254,
        91,
        198,
        185,
        162,
        210
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
          "name": "window",
          "docs": [
            "The window whose BATCH phase this pass runs in. Read for `frozen_mining_nps` at pass open",
            "only; later pages price against the sealed `mining_pool.perf_pass_nps`."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "docs": [
            "The position being charged this call (mining pool)."
          ],
          "writable": true
        },
        {
          "name": "miningVault",
          "writable": true
        },
        {
          "name": "protocolVaultAuthority",
          "writable": true
        },
        {
          "name": "feeBucket",
          "docs": [
            "the cosigned `distribute_fees`."
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
          "name": "feeExemptEntry",
          "docs": [
            "none. Address/owner/wallet validated inside `fee_exempt_flags_for_wallet`; deliberately not",
            "`Account<..>`, because most holders have no entry and Anchor would reject the absent",
            "account outright. Read-only — the pass has no business mutating an exemption."
          ]
        },
        {
          "name": "cranker",
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
      "name": "crankPpConvertSolToOre",
      "docs": [
        "rev-13 #5. Convert PP's accrued fee SOL into ORE through Jupiter v6 — the first hop of the",
        "SOL -> ORE -> stORE convert rail, and the ONLY drain PP's accumulating SOL has.",
        "",
        "The Jupiter route is supplied OPAQUELY: its accounts come in `remaining_accounts` and its",
        "data in `swap_data`, exactly as ORE's own buyback does it. A route cannot be validated",
        "on-chain; the OUTCOME can, and is — measured deltas, a client min-out, and an assertion that",
        "the authority's lamports did not move."
      ],
      "discriminator": [
        87,
        89,
        27,
        162,
        158,
        119,
        16,
        147
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
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolVaultAuthority",
          "docs": [
            "it (rev-11 F1: a transfer source without `mut` aborts with a bare PrivilegeEscalation)."
          ],
          "writable": true
        },
        {
          "name": "ppWsolAta",
          "docs": [
            "PP's wSOL ATA — the swap's INPUT account.",
            "",
            "`init_if_needed` at the KEEPER's expense is legitimate here and is NOT the rent pump",
            "invariant V1a removed: the authority is a PROGRAM PDA, so nobody holds a key that can sign",
            "`CloseAccount` for it and the program never closes it. That makes the account uncloseable",
            "and therefore creatable AT MOST ONCE EVER — bounded, unlike a user-authority ATA which the",
            "owner can close and reopen to drain the keeper repeatedly."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
                "path": "wsolMint"
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
          "name": "ppOreAta",
          "docs": [
            "PP's ORE ATA — the swap OUTPUT, and the input to the wrap hop. Same bounded reasoning."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "wsolMint",
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "oreMint",
          "address": "oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp"
        },
        {
          "name": "swapProgram"
        },
        {
          "name": "keeper",
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
      "args": [
        {
          "name": "lamports",
          "type": "u64"
        },
        {
          "name": "minOreOut",
          "type": "u64"
        },
        {
          "name": "swapData",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "crankPpWrapOreToStore",
      "docs": [
        "rev-13 #5 hop 2. Wrap PP's ORE into stORE natively (`storeD7`, the mainnet-drilled path) and",
        "credit the MEASURED delta as PP backing. Completes SOL -> ORE -> stORE."
      ],
      "discriminator": [
        110,
        30,
        228,
        10,
        11,
        101,
        39,
        63
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
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolVaultAuthority"
        },
        {
          "name": "ppOreAta",
          "docs": [
            "PP's ORE ATA — the wrap INPUT (filled by `crank_pp_convert_sol_to_ore`)."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "protocolVaultAta",
          "docs": [
            "PP's stORE vault ATA — the wrap OUTPUT, and PP's actual backing."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "address": "oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp"
        },
        {
          "name": "storeMint"
        },
        {
          "name": "keeper",
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
      "args": [
        {
          "name": "amountOre",
          "type": "u64"
        }
      ]
    },
    {
      "name": "crankRemarkPhantom",
      "docs": [
        "§5.2 LITE: refine the pool-mix phantom + fold a pure surplus into the PP book",
        "(permissionless, once/window, conserving, no CPI). Inert while dormant."
      ],
      "discriminator": [
        59,
        3,
        254,
        25,
        56,
        54,
        106,
        251
      ],
      "accounts": [
        {
          "name": "config",
          "docs": [
            "MUT (rev-14 Option B): the observer raises `defensive_mode` on a breach. Without `mut` that",
            "write is silently DROPPED — the rev-11 F1 class — and the monitor would look green forever."
          ],
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
          "name": "miningPool",
          "docs": [
            "Read-only: supplies the current ORE factor mirror for the phantom + book roll, plus the",
            "pinned miner key and the post-evacuation flag."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "docs": [
            "The backstop that absorbs a realized surplus (book credit target)."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
          "docs": [
            "Read-only (rev-14 Option B): the ST book is half of the enumerable claims."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimed",
          "docs": [
            "Read-only (rev-14 Option B): the unclaimed pot is a REAL fourth claimant on the shared",
            "miner (`state.rs`: \"Sum(all book entries + unclaimed) == miner physical\"). Omitting it",
            "would understate the claims and hide exactly the breaches this exists to catch."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "oreMiner",
          "docs": [
            "Read-only, never a CPI — which is why this observer is testable in bankrun at all."
          ]
        },
        {
          "name": "phantomMember",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  97,
                  110,
                  116,
                  111,
                  109,
                  95,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "cranker",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "distributeFees",
      "docs": [
        "Pay the SOL fee bucket to the 3-way schedule (recipients in remaining_accounts)."
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
          "name": "caller",
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
      "name": "distributeFeesStore",
      "docs": [
        "Pay the stORE fee account to the 3-way schedule (recipient ATAs in order)."
      ],
      "discriminator": [
        53,
        122,
        239,
        112,
        156,
        58,
        50,
        103
      ],
      "accounts": [
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
          "name": "storeMint",
          "docs": [
            "Pinned to the immutable stORE mint (defense-in-depth; consistent with every",
            "other instruction) so no look-alike mint can be substituted."
          ],
          "address": "storenSbvkfzircixnaosc5CbzNZVrHJ6S3EKrS1yqR"
        },
        {
          "name": "feeStore",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeBucket"
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
          "name": "caller",
          "signer": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "distributeReferrals",
      "docs": [
        "PUSH: a relayer pays the attestation-bound referrer (shared watermark)."
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
          "writable": true,
          "signer": true
        },
        {
          "name": "referrer",
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
          "name": "ixSysvar",
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
      "name": "evacuateClaimAll",
      "docs": [
        "§5.5 evacuation: FULL-drain the ORE miner to program custody (terminal wind-down /",
        "PP recovery). Authorized by admin cosign OR the upgrade authority; gated on the",
        "monotonic wind_down switch. ORE accounts in remaining_accounts (16)."
      ],
      "discriminator": [
        155,
        3,
        62,
        101,
        215,
        80,
        83,
        166
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "phantomMember",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  97,
                  110,
                  116,
                  111,
                  109,
                  95,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "window",
          "docs": [
            "The current window (always INTAKE; its registered_* counts gate on pending orders).",
            "The mid-cascade check is the pool's cascades_in_flight counter, not a per-window",
            "phase read (the cascading window is never at current_window_id)."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "config.current_window_id",
                "account": "config"
              }
            ]
          }
        },
        {
          "name": "miningAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "miningVault",
          "writable": true
        },
        {
          "name": "storeMint"
        },
        {
          "name": "protocolVaultAuthority",
          "docs": [
            "terminal snapshot can sweep an UNOWNED Protocol-Pool stORE balance into custody (see the",
            "share-less PP drain in `evacuate_assets`); signs that transfer.",
            "",
            "rev-11 F1: `mut` is LOAD-BEARING. Step 9c does `invoke_signed(system_instruction::transfer(",
            "from = this PDA, ..))` for `orphan_sol`, and a system transfer builds its source as",
            "writable+signer. Without `mut` the CPI aborted with a bare runtime PrivilegeEscalation --",
            "no program error code -- and since that fires before `mp.evacuated = true` latches, the",
            "TERMINAL ESCAPE HATCH was dead for every config where PP had accrued any fee SOL (i.e. after",
            "the first `crank_mine`: trip-wire is ONE lamport, at `deploy_total >= 800`). Both sibling",
            "rails that debit this same PDA already carry `mut` (`pp_exit.rs`, `evacuate.rs:1122`).",
            "The bankrun harness loads no ORE program, so 9b/9c are unreachable in tests and this",
            "shipped green -- see `scripts/gate-transfer-source-mut.mjs`, which now enforces the rule."
          ],
          "writable": true
        },
        {
          "name": "protocolVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "custodyAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  97,
                  99,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "custodyAta",
          "docs": [
            "The custody stORE ATA — the redemption pot. Created here if absent."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
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
          "name": "admin",
          "docs": [
            "The authorizer: a fee cosigner (via require_admin_cosign) OR the upgrade authority."
          ],
          "signer": true
        },
        {
          "name": "programData"
        },
        {
          "name": "ixSysvar",
          "docs": [
            "every other cosign site (cosign.rs also validates it internally)."
          ],
          "address": "Sysvar1nstructions1111111111111111111111111"
        },
        {
          "name": "cranker",
          "docs": [
            "may fund `init_if_needed` ATAs whose authority is a PROGRAM PDA. A PDA cannot sign",
            "`CloseAccount`, and this program never closes them, so they are creatable at most",
            "ONCE EVER (bounded, ~0.002 SOL lifetime) -- unlike a user-authority ATA, which the",
            "user can close and reclaim repeatedly to pump the keeper. Do NOT add a `payer =",
            "cranker` here for any account with a user-controlled authority."
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
      "name": "fundMiningAuthority",
      "docs": [
        "Top up the mining authority's rent + checkpoint-fee reserve (keeper)."
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
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
          "name": "miningVault",
          "writable": true
        },
        {
          "name": "miningAuthority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "keeper",
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
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initReferral",
      "docs": [
        "One-time: rent-seed the referral treasury + record its bump (cosigned)."
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
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "ixSysvar",
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
      "name": "initialize",
      "docs": [
        "Bootstrap: seed Config + the three pools + fee schedule + referral config.",
        "One-time; the signer becomes the initial admin."
      ],
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
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
          "name": "window",
          "docs": [
            "The first INTAKE window (id 0). Cutoff = now + window_period."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "const",
                "value": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              }
            ]
          }
        },
        {
          "name": "phantomMember",
          "docs": [
            "§5.2 LITE phantom buffer (singleton). Created here so it is ALWAYS present on",
            "the freeze / mining-exit account lists (the dark-launch plumbing must be wired",
            "before the feature is config-flipped on — you cannot add an account without a",
            "redeploy). Born at the zero steady state (0,0); untouched while dormant."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  97,
                  110,
                  116,
                  111,
                  109,
                  95,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "miningAuthority",
          "docs": [
            "the mining SOL. System-owned; funded later via `fund_mining_authority`."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "miningVault",
          "docs": [
            "(NOT counted in `sol_in_vault`) so the SOL-leg payout can drain the ledger",
            "to the MIN_LIQUIDITY floor without ever leaving the vault non-zero-but-",
            "below-rent-exempt (which the runtime rejects). Physical == reserve + ledger."
          ],
          "writable": true
        },
        {
          "name": "protocolVault",
          "docs": [
            "(`fee_sol_accrued`, credited by crank_mine). Seeded here with a rent-exempt reserve",
            "(NOT counted in `fee_sol_accrued`) so the SOL-leg payouts (settle_pp_exit /",
            "redeem_evacuated_protocol) can drain the accrued SOL to zero without leaving a",
            "sub-rent-exempt balance the runtime rejects. Physical == reserve + fee_sol_accrued.",
            "Mirrors mining_vault. (Same PDA that also authorities the PP stORE vault ATA.)"
          ],
          "writable": true
        },
        {
          "name": "feeBucket",
          "docs": [
            "the two vaults are (audit fix — it was the one SOL-holding PDA left unfunded)."
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
          "name": "storeMint",
          "docs": [
            "The stORE mint — pinned into Config. Immutable after init."
          ],
          "address": "storenSbvkfzircixnaosc5CbzNZVrHJ6S3EKrS1yqR"
        },
        {
          "name": "programData",
          "docs": [
            "CHECK (audit S5/M6): the program's ProgramData account. The handler verifies it",
            "is the canonical PDA, owned by the upgradeable loader, and that its upgrade",
            "authority == `admin` — so ONLY the deployer can bootstrap (no front-run squat)."
          ]
        },
        {
          "name": "unclaimed",
          "docs": [
            "The unclaimed ledger. Created ONCE here, so no permissionless rail ever needs to fund it",
            "(invariant V1a: the cranker is non-writable on the payout rails and could not)."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "SOL. Rent-seeded below for the same reason the vaults are."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "docs": [
            "The segregated custody ATA that physically holds undeliverable stORE. A",
            "PROGRAM-PDA-AUTHORITY ATA, so it is uncloseable by anyone and creatable at most once ever —",
            "the bounded pattern invariant V1a sanctions, which is why funding it here (admin-paid, one",
            "time) is not a rent pump."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "admin",
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
      "args": [
        {
          "name": "settlementAuthority",
          "type": "pubkey"
        },
        {
          "name": "adminTransferConfirmer",
          "type": "pubkey"
        },
        {
          "name": "keeper",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "measureMiningExit",
      "docs": [
        "MINING_EXITS pass 1: measure one exit's stORE need; the last one seals the",
        "cap-gated ST/PP waterfall split."
      ],
      "discriminator": [
        165,
        216,
        94,
        200,
        145,
        123,
        102,
        85
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "cranker",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "opsWithdraw",
      "docs": [
        "Cosigned Team Ops Treasury withdrawal from the retained external-fee balances."
      ],
      "discriminator": [
        66,
        153,
        121,
        46,
        16,
        198,
        151,
        98
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
          "name": "storeMint"
        },
        {
          "name": "feeStore",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeBucket"
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
          "name": "opsTreasury",
          "writable": true
        },
        {
          "name": "opsStoreAta",
          "writable": true
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
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
          "name": "asset",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "payMiningExit",
      "docs": [
        "MINING_EXITS pass 2: deliver one exit (SOL + token leg) and allocate its",
        "frozen book slice ST/PP by the uniform fs."
      ],
      "discriminator": [
        24,
        168,
        45,
        77,
        90,
        207,
        176,
        52
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "phantomMember",
          "docs": [
            "§5.2 LITE phantom buffer. Touched ONLY on a self-claim exit under",
            "`lite_phantom_enabled` (the pool-mix reduction diverts its clamp deficit /",
            "full-exit swap here); untouched on the normal STORE path. Always present so",
            "the dark path needs no redeploy to enable."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  97,
                  110,
                  116,
                  111,
                  109,
                  95,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "miningVault",
          "writable": true
        },
        {
          "name": "storeMint"
        },
        {
          "name": "stakingVaultAuthority"
        },
        {
          "name": "stakingVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "stakingVaultAuthority"
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
          "name": "protocolVaultAuthority",
          "docs": [
            "landed here it is ALSO a lamport destination — hence `mut`. Without it the SOL leg pays,",
            "the fee transfer aborts with a bare PrivilegeEscalation, and the whole exit reverts: the",
            "rev-11 F1 class, which I re-created one field above the comment warning about it."
          ],
          "writable": true
        },
        {
          "name": "protocolVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "feeBucket",
          "docs": [
            "transfer target without `mut` aborts with a bare PrivilegeEscalation (rev-11 F1 class).",
            "A fixed bump-derived PDA, never an admin-settable key: value leaves it only through the",
            "cosigned `distribute_fees` on a schedule summing to 10000."
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
          "name": "exiter",
          "writable": true
        },
        {
          "name": "exiterStoreAta",
          "docs": [
            "`init_if_needed` — resolving it in Anchor validation let any exiter permanently wedge",
            "MINING_EXITS by re-owning their own ATA. Address- and state-checked in the handler,",
            "where an unusable one CANCELS the exit. See `common::store_ata_is_payable`."
          ],
          "writable": true
        },
        {
          "name": "feeExemptEntry",
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
                  101,
                  120,
                  101,
                  109,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "order.owner",
                "account": "order"
              }
            ]
          }
        },
        {
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "docs": [
            "The segregated custody ATA. Never `init_if_needed` on a permissionless rail — it is created",
            "once at `initialize` (program-PDA authority, uncloseable, bounded), so it always exists."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "the pot, and the token transfer is signed by the SOURCE vault authority, not by this."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "cranker",
          "docs": [
            "non-writable signer is structurally incapable of funding an account, so no future",
            "edit can reintroduce a keeper-paid rent pump on this rail. Account creation belongs",
            "at the owner-signed submit rails, at `payer = owner`."
          ],
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
      "name": "proposeAdmin",
      "docs": [
        "Admin handover step 1: propose a new admin (cosigned)."
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
          "signer": true
        },
        {
          "name": "ixSysvar",
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
      "name": "redeemEvacuatedMining",
      "docs": [
        "§5.5 evacuation redemption (post-drain): pay a mining holder their pro-rata custody",
        "stORE + SOL leg, then close the position. Supersedes the normal exit cascade."
      ],
      "discriminator": [
        177,
        127,
        111,
        160,
        224,
        47,
        179,
        171
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "feeExemptEntry",
          "docs": [
            "wallet are validated by the rebate adapter."
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
                  101,
                  120,
                  101,
                  109,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "exiter"
              }
            ]
          }
        },
        {
          "name": "miningVault",
          "writable": true
        },
        {
          "name": "custodyAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  97,
                  99,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "custodyAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
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
          "name": "storeMint"
        },
        {
          "name": "exiter",
          "writable": true
        },
        {
          "name": "exiterStoreAta",
          "docs": [
            "`init_if_needed` — this is the TERMINAL payout rail and a re-owned ATA reverted the whole",
            "instruction in ACCOUNT VALIDATION, taking the SOL leg down with it even though that leg",
            "needs no token account at all. It also hostaged `sweep_evac_custody`, whose",
            "`total_shares <= MIN_LIQUIDITY_SHARES` predicate can never be met while one holder is",
            "unredeemable. Resolved in-handler instead: vacant is created, unusable skips ONLY the",
            "custody stORE leg. See `common::store_ata_is_payable`."
          ],
          "writable": true
        },
        {
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "docs": [
            "The segregated custody ATA. Never `init_if_needed` on a permissionless rail — it is created",
            "once at `initialize` (program-PDA authority, uncloseable, bounded), so it always exists."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "the pot, and the token transfer is signed by the SOURCE vault authority, not by this."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "cranker",
          "docs": [
            "non-writable signer is structurally incapable of funding an account, so no future",
            "edit can reintroduce a keeper-paid rent pump on this rail. Account creation belongs",
            "at the owner-signed submit rails, at `payer = owner`."
          ],
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
      "name": "redeemEvacuatedProtocol",
      "docs": [
        "§5.5 evacuation redemption: a protocol holder's pro-rata custody stORE + liquid stORE."
      ],
      "discriminator": [
        14,
        63,
        227,
        38,
        241,
        117,
        106,
        255
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "protocolVaultAuthority",
          "docs": [
            "leg (fee_sol_accrued). `mut` so the SOL-leg invoke_signed(transfer) can debit it."
          ],
          "writable": true
        },
        {
          "name": "protocolVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "custodyAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  97,
                  99,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "custodyAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
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
          "name": "storeMint"
        },
        {
          "name": "exiter",
          "writable": true
        },
        {
          "name": "exiterStoreAta",
          "docs": [
            "`init_if_needed` — this is the TERMINAL payout rail and a re-owned ATA reverted the whole",
            "instruction in ACCOUNT VALIDATION, taking the SOL leg down with it even though that leg",
            "needs no token account at all. It also hostaged `sweep_evac_custody`, whose",
            "`total_shares <= MIN_LIQUIDITY_SHARES` predicate can never be met while one holder is",
            "unredeemable. Resolved in-handler instead: vacant is created, unusable skips ONLY the",
            "custody stORE leg. See `common::store_ata_is_payable`."
          ],
          "writable": true
        },
        {
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "docs": [
            "The segregated custody ATA. Never `init_if_needed` on a permissionless rail — it is created",
            "once at `initialize` (program-PDA authority, uncloseable, bounded), so it always exists."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "the pot, and the token transfer is signed by the SOURCE vault authority, not by this."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "cranker",
          "docs": [
            "non-writable signer is structurally incapable of funding an account, so no future",
            "edit can reintroduce a keeper-paid rent pump on this rail. Account creation belongs",
            "at the owner-signed submit rails, at `payer = owner`."
          ],
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
      "name": "redeemEvacuatedStaking",
      "docs": [
        "§5.5 evacuation redemption: a staking holder's pro-rata custody stORE + liquid stORE."
      ],
      "discriminator": [
        119,
        177,
        202,
        230,
        103,
        129,
        167,
        237
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "stakingVaultAuthority"
        },
        {
          "name": "stakingVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "stakingVaultAuthority"
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
          "name": "custodyAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  97,
                  99,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "custodyAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
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
          "name": "storeMint"
        },
        {
          "name": "exiter"
        },
        {
          "name": "exiterStoreAta",
          "docs": [
            "`init_if_needed` — this is the TERMINAL payout rail and a re-owned ATA reverted the whole",
            "instruction in ACCOUNT VALIDATION, taking the SOL leg down with it even though that leg",
            "needs no token account at all. It also hostaged `sweep_evac_custody`, whose",
            "`total_shares <= MIN_LIQUIDITY_SHARES` predicate can never be met while one holder is",
            "unredeemable. Resolved in-handler instead: vacant is created, unusable skips ONLY the",
            "custody stORE leg. See `common::store_ata_is_payable`."
          ],
          "writable": true
        },
        {
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "docs": [
            "The segregated custody ATA. Never `init_if_needed` on a permissionless rail — it is created",
            "once at `initialize` (program-PDA authority, uncloseable, bounded), so it always exists."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "the pot, and the token transfer is signed by the SOURCE vault authority, not by this."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "cranker",
          "docs": [
            "non-writable signer is structurally incapable of funding an account, so no future",
            "edit can reintroduce a keeper-paid rent pump on this rail. Account creation belongs",
            "at the owner-signed submit rails, at `payer = owner`."
          ],
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
      "name": "removeWhitelist",
      "docs": [
        "Remove a Protocol Pool whitelist entry, reclaiming rent (cosigned)."
      ],
      "discriminator": [
        148,
        244,
        73,
        234,
        131,
        55,
        247,
        90
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
          "name": "whitelistEntry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  104,
                  105,
                  116,
                  101,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "wallet"
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
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "restoreUnclaimedOre",
      "docs": [
        "rev-13 (ORE leg). Restore an owed ORE annex to a verified claimant's Position. Cosigned.",
        "A RESTORE, not a payout: the entitlement was always an annex, so putting `(u, r)` back",
        "returns the holder to their pre-failure state and they exit through the ordinary rail."
      ],
      "discriminator": [
        239,
        13,
        230,
        140,
        208,
        142,
        168,
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
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "docs": [
            "The claimant's mining Position. Must already exist — this rail restores an entitlement to a",
            "holder, it does not open a position for one."
          ],
          "writable": true
        },
        {
          "name": "claimant"
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "uAmount",
          "type": "u64"
        },
        {
          "name": "rAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setAdminTransferConfirmer",
      "docs": [
        "Rotate the admin-transfer confirmer role (immediate; audit hardening)."
      ],
      "discriminator": [
        249,
        205,
        84,
        7,
        30,
        196,
        151,
        35
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
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newConfirmer",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "setEmergency",
      "docs": [
        "Immediate safety switch: mining/staking open, or defensive mode."
      ],
      "discriminator": [
        179,
        20,
        193,
        82,
        138,
        173,
        228,
        62
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
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "switch",
          "type": "u8"
        },
        {
          "name": "value",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setFeeExempt",
      "docs": [
        "Set/update a wallet's scoped external-fee exemption flags (cosigned)."
      ],
      "discriminator": [
        224,
        228,
        88,
        87,
        69,
        164,
        109,
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
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "feeExemptEntry",
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
                  101,
                  120,
                  101,
                  109,
                  112,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "wallet"
              }
            ]
          }
        },
        {
          "name": "miningPosition"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "pubkey"
        },
        {
          "name": "flags",
          "type": "u8"
        }
      ]
    },
    {
      "name": "setFeePolicy",
      "docs": [
        "Immediate fee-pipe policy: retention ratio + Team Ops Treasury destination."
      ],
      "discriminator": [
        91,
        32,
        224,
        109,
        147,
        98,
        71,
        132
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
          "name": "admin",
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "retainBps",
          "type": "u16"
        },
        {
          "name": "opsTreasury",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "setFeeSchedule",
      "docs": [
        "Replace the 3-way fee split and re-mirror the cosigner set (immediate)."
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
          "name": "admin",
          "signer": true
        },
        {
          "name": "ixSysvar",
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
      "name": "setKeeper",
      "docs": [
        "Rotate the whitelisted mining keeper (immediate)."
      ],
      "discriminator": [
        102,
        94,
        23,
        78,
        157,
        222,
        243,
        214
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
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newKeeper",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "setParam",
      "docs": [
        "Enqueue a bounded, prospective config change (applied at the next window roll)."
      ],
      "discriminator": [
        116,
        174,
        75,
        208,
        210,
        13,
        144,
        56
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
          "signer": true
        },
        {
          "name": "ixSysvar",
          "address": "Sysvar1nstructions1111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "field",
          "type": "u16"
        },
        {
          "name": "value",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setSettlementAuthority",
      "docs": [
        "Rotate the referral settlement authority (immediate)."
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
          "name": "admin",
          "signer": true
        },
        {
          "name": "ixSysvar",
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
      "name": "settleMiningDeposit",
      "docs": [
        "DEPOSITS: settle one SOL mining deposit at the frozen mining nps."
      ],
      "discriminator": [
        151,
        88,
        74,
        238,
        111,
        15,
        101,
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "miningVault",
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
          "name": "feeExemptEntry",
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
                  101,
                  120,
                  101,
                  109,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "order.owner",
                "account": "order"
              }
            ]
          }
        },
        {
          "name": "owner",
          "writable": true
        },
        {
          "name": "cranker",
          "docs": [
            "non-writable signer is structurally incapable of funding an account, so no future",
            "edit can reintroduce a keeper-paid rent pump on this rail. Account creation belongs",
            "at the owner-signed submit rails, at `payer = owner`."
          ],
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "settlePpExit",
      "docs": [
        "§5.4: settle a queued PP exit in the PP_EXITS phase (stORE + SOL in-kind)."
      ],
      "discriminator": [
        205,
        248,
        49,
        192,
        54,
        32,
        112,
        250
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "docs": [
            "mut: supplies mining_authority / ore_miner / bump for the D2 B′ crystallize AND",
            "takes the last_rewards_ore_watermark reconcile (the crystallize lowers the shared",
            "miner's rewards_ore — the watermark must drop by the same amount, else the next",
            "freeze under-credits mining depositors; mirrors pay_mining_exit's bug-#2 reconcile)."
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "phantomMember",
          "docs": [
            "§5.2 LITE buffer — absorbs the B′ crystallize's miner-mix vs book-mix residue. mut."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  104,
                  97,
                  110,
                  116,
                  111,
                  109,
                  95,
                  109,
                  101,
                  109,
                  98,
                  101,
                  114
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "storeMint"
        },
        {
          "name": "protocolVaultAuthority",
          "writable": true
        },
        {
          "name": "protocolVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "exiter",
          "writable": true
        },
        {
          "name": "exiterStoreAta",
          "docs": [
            "`init_if_needed` — resolving it in Anchor validation let any exiter permanently wedge",
            "PP_EXITS by re-owning their own ATA. Address- and state-checked in the handler, where",
            "an unusable one CANCELS the exit. See `common::store_ata_is_payable`."
          ],
          "writable": true
        },
        {
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "docs": [
            "The segregated custody ATA. Never `init_if_needed` on a permissionless rail — it is created",
            "once at `initialize` (program-PDA authority, uncloseable, bounded), so it always exists."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "the pot, and the token transfer is signed by the SOURCE vault authority, not by this."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "cranker",
          "docs": [
            "non-writable signer is structurally incapable of funding an account, so no future",
            "edit can reintroduce a keeper-paid rent pump on this rail. Account creation belongs",
            "at the owner-signed submit rails, at `payer = owner`."
          ],
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
      "name": "settleProtocolDeposit",
      "docs": [
        "DEPOSITS: settle one PP in-kind deposit at the frozen protocol nps (§5.4)."
      ],
      "discriminator": [
        144,
        6,
        120,
        18,
        75,
        185,
        211,
        166
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "protocolVaultAuthority"
        },
        {
          "name": "feeBucket",
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
          "name": "storeMint"
        },
        {
          "name": "protocolVaultAta",
          "docs": [
            "The PP stORE vault — escrow source; also pays out the entry fee slice."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "feeStoreAta",
          "docs": [
            "Protocol fee stORE account — receives the entry fee. AUTHORITY-PINNED."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeBucket"
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
          "name": "owner",
          "writable": true
        },
        {
          "name": "ownerStoreAta",
          "docs": [
            "The depositor's stORE ATA — receives the escrow REFUND when the PP SOL-leg is",
            "unavailable at settle (audit H1): an admitted-but-unsettleable order is refunded",
            "rather than left to wedge the DEPOSITS phase forever.",
            "`UncheckedAccount`, NOT `init_if_needed` — resolving it in Anchor validation meant a",
            "depositor who re-owned their own ATA reverted the settle EVEN ON THE MINT PATH that",
            "never touches it, permanently wedging the irrevocable DEPOSITS phase. Address- and",
            "state-checked in the handler. See `common::store_ata_is_payable`."
          ],
          "writable": true
        },
        {
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "docs": [
            "The segregated custody ATA. Never `init_if_needed` on a permissionless rail — it is created",
            "once at `initialize` (program-PDA authority, uncloseable, bounded), so it always exists."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "the pot, and the token transfer is signed by the SOURCE vault authority, not by this."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "cranker",
          "docs": [
            "may fund `init_if_needed` ATAs whose authority is a PROGRAM PDA. A PDA cannot sign",
            "`CloseAccount`, and this program never closes them, so they are creatable at most",
            "ONCE EVER (bounded, ~0.002 SOL lifetime) -- unlike a user-authority ATA, which the",
            "user can close and reclaim repeatedly to pump the keeper. Do NOT add a `payer =",
            "cranker` here for any account with a user-controlled authority."
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
      "name": "settleStakingDeposit",
      "docs": [
        "DEPOSITS: settle one stORE staking deposit at the frozen staking nps."
      ],
      "discriminator": [
        237,
        169,
        236,
        243,
        211,
        103,
        150,
        14
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "stakingVaultAuthority"
        },
        {
          "name": "protocolVaultAuthority"
        },
        {
          "name": "feeBucket",
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
          "name": "storeMint"
        },
        {
          "name": "stakingVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "stakingVaultAuthority"
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
          "name": "ppVaultAta",
          "docs": [
            "PP stORE vault — receives the PP share of the entry fee. AUTHORITY-PINNED",
            "(review fix 1): a cranker cannot substitute an attacker account."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "feeStoreAta",
          "docs": [
            "Protocol fee stORE account — receives the residual entry fee. AUTHORITY-PINNED."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeBucket"
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
          "name": "owner",
          "writable": true
        },
        {
          "name": "ownerStoreAta",
          "docs": [
            "The depositor's stORE ATA — receives the escrow REFUND on a 0-share / below-min settle",
            "(refund-not-revert, so an unsettleable dust order can't wedge the DEPOSITS phase; mirrors",
            "the PP H1 refund).",
            "`UncheckedAccount`, NOT `init_if_needed` — resolving it in Anchor validation meant a",
            "depositor who re-owned their own ATA reverted the settle EVEN ON THE MINT PATH that",
            "never touches it, permanently wedging the irrevocable DEPOSITS phase. Address- and",
            "state-checked in the handler. See `common::store_ata_is_payable`."
          ],
          "writable": true
        },
        {
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "docs": [
            "The segregated custody ATA. Never `init_if_needed` on a permissionless rail — it is created",
            "once at `initialize` (program-PDA authority, uncloseable, bounded), so it always exists."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "the pot, and the token transfer is signed by the SOURCE vault authority, not by this."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "cranker",
          "docs": [
            "may fund `init_if_needed` ATAs whose authority is a PROGRAM PDA. A PDA cannot sign",
            "`CloseAccount`, and this program never closes them, so they are creatable at most",
            "ONCE EVER (bounded, ~0.002 SOL lifetime) -- unlike a user-authority ATA, which the",
            "user can close and reclaim repeatedly to pump the keeper. Do NOT add a `payer =",
            "cranker` here for any account with a user-controlled authority."
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
      "name": "settleStakingExit",
      "docs": [
        "STAKING_EXITS: pay one staker `due` stORE (vault-first + PP subentry)."
      ],
      "discriminator": [
        98,
        48,
        99,
        211,
        65,
        194,
        247,
        4
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "window.id",
                "account": "window"
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "miningPool",
          "docs": [
            "rev-11 F2: READ-ONLY, and required. This rail drains BOTH the ST and PP stORE vaults and was",
            "the only drain in the program honouring NEITHER exit reservation — `st_exit_promised` was in",
            "fact read at ZERO drain sites. Without this account the rail is *structurally* incapable of",
            "seeing what a sealed `measure_mining_exit` already promised, which is how an ordinary staker",
            "exit could spend a mining exiter's sealed slice and hard-revert the irrevocable MINING_EXITS",
            "phase. Never `mut`: this rail only READS the counters; they are bumped at the seal and",
            "released by `pay_mining_exit`."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "storeMint"
        },
        {
          "name": "stakingVaultAuthority"
        },
        {
          "name": "stakingVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "stakingVaultAuthority"
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
          "name": "protocolVaultAuthority"
        },
        {
          "name": "protocolVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "exiter",
          "writable": true
        },
        {
          "name": "exiterStoreAta",
          "docs": [
            "`init_if_needed` — see `common::store_ata_is_payable`. Resolving it in Anchor",
            "validation let any exiter permanently wedge STAKING_EXITS (and with it the whole",
            "cascade and the evacuation hatch) by re-owning their own ATA. It is address-checked",
            "and state-checked in the handler instead, where an unusable one CANCELS the exit",
            "rather than reverting."
          ],
          "writable": true
        },
        {
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "docs": [
            "The segregated custody ATA. Never `init_if_needed` on a permissionless rail — it is created",
            "once at `initialize` (program-PDA authority, uncloseable, bounded), so it always exists."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "unclaimedCustodyAuthority",
          "docs": [
            "the pot, and the token transfer is signed by the SOURCE vault authority, not by this."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "feeBucket",
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
          "name": "feeStoreAta",
          "docs": [
            "The staking EXIT fee's team leg lands here, in stORE.",
            "",
            "Deliberately NOT `init_if_needed`: `cranker` on this rail is non-writable by design (V1a),",
            "so there is no payer available and creating it here is structurally impossible. It does not",
            "need to be created: `settle_staking_deposit` resolves the same ATA with `init_if_needed` on",
            "EVERY staking deposit, and shares cannot exist to exit without a settled deposit. So by the",
            "time any exit can run, this account exists.",
            "",
            "Mandatory rather than `Option`: this rail is permissionless, and an optional fee destination",
            "would let anyone settle an exit with it omitted and skip the fee entirely."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeBucket"
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
          "name": "cranker",
          "docs": [
            "non-writable signer is structurally incapable of funding an account, so no future",
            "edit can reintroduce a keeper-paid rent pump on this rail. Account creation belongs",
            "at the owner-signed submit rails, at `payer = owner`."
          ],
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
      "name": "submitMiningDeposit",
      "docs": [
        "Queue a SOL deposit into the Mining Pool for the current window's cutoff."
      ],
      "discriminator": [
        76,
        34,
        93,
        231,
        108,
        150,
        15,
        202
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "config.current_window_id",
                "account": "config"
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "miningPool",
          "docs": [
            "§5.6b registry: bumped once when this deposit CREATES the position, so the",
            "monetize sweep can enumerate live positions. Maintained from launch (dormant)."
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "owner",
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
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "submitPpExit",
      "docs": [
        "§5.4: at an epoch boundary, after the notice aged, queue the PP exit (consumes notice)."
      ],
      "discriminator": [
        149,
        182,
        201,
        136,
        144,
        59,
        228,
        71
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "config.current_window_id",
                "account": "config"
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "notice",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  112,
                  95,
                  101,
                  120,
                  105,
                  116,
                  95,
                  110,
                  111,
                  116,
                  105,
                  99,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "storeMint"
        },
        {
          "name": "ownerStoreAta",
          "docs": [
            "(finding #9). Without it a PP holder who has never held stORE would age a notice for a",
            "full `pp_exit_notice_windows`, submit at the epoch boundary — which CONSUMES the notice —",
            "and then hit the settle-side fail-soft, costing them another whole notice period.",
            "",
            "DELIBERATELY `UncheckedAccount` + in-handler creation, NOT `init_if_needed` — see the",
            "identical note on `SubmitWithdraw`. `init_if_needed` raises `ConstraintTokenOwner` on a",
            "re-owned ATA, which would stop a PP holder queueing an exit at all and strand their shares",
            "and SOL leg permanently. Mirrors `SubmitWithdraw`."
          ],
          "writable": true
        },
        {
          "name": "owner",
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
      "args": [
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "submitPpExitNotice",
      "docs": [
        "§5.4 PP epoch-exit: file the exit notice (starts the pp_exit_notice_windows clock)."
      ],
      "discriminator": [
        225,
        104,
        80,
        78,
        199,
        46,
        26,
        217
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
          "name": "notice",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  112,
                  95,
                  101,
                  120,
                  105,
                  116,
                  95,
                  110,
                  111,
                  116,
                  105,
                  99,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "owner",
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
      "name": "submitStoreDeposit",
      "docs": [
        "Queue a stORE deposit into the Staking or Protocol Pool."
      ],
      "discriminator": [
        230,
        130,
        91,
        224,
        94,
        95,
        212,
        125
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "config.current_window_id",
                "account": "config"
              }
            ]
          }
        },
        {
          "name": "vaultAuthority"
        },
        {
          "name": "storeMint"
        },
        {
          "name": "vaultStoreAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "vaultAuthority"
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
          "name": "ownerStoreAta",
          "docs": [
            "target at settle. It used to be any `token::authority = owner` account, which meant a",
            "depositor could fund from an auxiliary account and never own a canonical ATA at all; the",
            "settle-side refund resolves strictly against the canonical address, so that mismatch was",
            "the root of the deposit-refund defects (rev-7 C-1) AND of a repeatable rent pump — the",
            "cranker paid to create it at settle and the depositor could close it and pocket the rent,",
            "~400x their transaction cost, repeatable.",
            "",
            "Creating it HERE at the depositor's own signature (`payer = owner`) makes the funding",
            "source and the refund target the same account and moves the rent onto the party that",
            "causes it. `UncheckedAccount` + `create_store_ata_if_vacant` rather than `init_if_needed`,",
            "for the same reason as the exit-side submits: `init_if_needed` raises",
            "`ConstraintTokenOwner` on a re-owned ATA, which would lock a self-hijacked wallet out of",
            "depositing entirely. The SPL transfer below still validates mint and authority."
          ],
          "writable": true
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "whitelistEntry",
          "docs": [
            "Required (and checked) only when depositing into the whitelisted Protocol Pool."
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  104,
                  105,
                  116,
                  101,
                  108,
                  105,
                  115,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "docs": [
            "Required (and checked) only when depositing into the Protocol Pool: the S2",
            "settleability precondition (`fee_sol_accrued == 0 && sol_sleeve == 0`) is read",
            "here so an un-settleable PP order is never queued. Omitted for STAKING deposits."
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
          "docs": [
            "Required (and checked) only for a STAKING deposit when `st_tvl_cap != 0`: the deposit-cap",
            "precondition reads the ST vault backing here. Omitted for PROTOCOL deposits / when uncapped."
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "owner",
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
      "args": [
        {
          "name": "poolId",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "submitWithdraw",
      "docs": [
        "Queue a share-denominated withdrawal (Mining or Staking)."
      ],
      "discriminator": [
        25,
        109,
        160,
        187,
        65,
        192,
        40,
        251
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
          "name": "window",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  119,
                  105,
                  110,
                  100,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "config.current_window_id",
                "account": "config"
              }
            ]
          }
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "order",
          "writable": true
        },
        {
          "name": "storeMint"
        },
        {
          "name": "ownerStoreAta",
          "docs": [
            "own expense (finding #9 — settlement is permissionless and the beneficiary does not sign",
            "it, so this is the only moment the protocol can charge the party that causes the cost).",
            "",
            "DELIBERATELY `UncheckedAccount` + in-handler creation, NOT `init_if_needed`. Anchor's",
            "already-exists branch checks `pa.owner != owner` and raises `ConstraintTokenOwner`, so a",
            "wallet that had re-owned its own canonical ATA could not even QUEUE an exit — and since",
            "only the NEW owner can undo `SetAuthority(AccountOwner)`, that locked their shares AND the",
            "SOL leg they were owed, permanently. Verified in bankrun. See",
            "`common::create_store_ata_if_vacant`: it creates only a genuinely vacant address and never",
            "touches an account that exists in any other state, so it cannot revert on holder-controlled",
            "state. The settle-side fail-soft handles the rest."
          ],
          "writable": true
        },
        {
          "name": "oreMint",
          "docs": [
            "default) this account is unused, and requiring a live `Account<Mint>` would force every",
            "caller to supply an initialized ORE mint just to queue an ordinary withdrawal."
          ],
          "address": "oreoU2P8bN6jkk3jbaiVxYnG1dCXcYxwhwyK9jSybcp"
        },
        {
          "name": "ownerOreAta",
          "docs": [
            "",
            "rev-11 F5: PROVISIONED HERE, at `payer = owner`, exactly as `owner_store_ata` is. Nothing in",
            "the program used to create it, so a merely ABSENT ORE ATA at PAY forfeited the exiter's whole",
            "(u,r) annex to the PP book at a purchase price of zero — imposed, not self-inflicted, since",
            "absence is the NORMAL state for a SOL depositor who has never held ORE. Created only when",
            "the order is stamped for ORE delivery, so stORE-mode exits are not charged rent for an",
            "account they will never use. `UncheckedAccount` + in-handler creation for the same reason as",
            "`owner_store_ata`: resolving a payout target in Anchor validation is what made #17 a wedge."
          ],
          "writable": true
        },
        {
          "name": "owner",
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
      "args": [
        {
          "name": "poolId",
          "type": "u8"
        },
        {
          "name": "shares",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sweepEvacCustody",
      "docs": [
        "§5.5 evacuation cleanup: cosigned sweep of the post-redemption custody dust remainder",
        "to protocol revenue (the fee bucket's stORE ATA). Caps at the live balance."
      ],
      "discriminator": [
        251,
        124,
        160,
        94,
        94,
        57,
        92,
        248
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
          "name": "miningPool",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
          "docs": [
            "Read-only: all three pools' total_shares gate the \"every holder redeemed\" precondition."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  107,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "custodyAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  97,
                  99,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "custodyAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
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
          "name": "storeMint"
        },
        {
          "name": "feeBucket",
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
          "name": "feeStoreAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeBucket"
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
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "ixSysvar",
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
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sweepReferralSurplus",
      "docs": [
        "Reclaim referral-pool surplus to the protocol fee bucket (attested)."
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
          "signer": true
        },
        {
          "name": "ixSysvar",
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
      "name": "sweepUnclaimedOreToPool",
      "docs": [
        "rev-13 (ORE leg). THE ORE SAFETY HATCH: move an explicit owed annex into a pool's book for",
        "all its holders. Cosigned. The deliberate, auditable version of what the old code did",
        "silently on every ORE forfeit."
      ],
      "discriminator": [
        0,
        146,
        90,
        119,
        118,
        158,
        175,
        107
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
          "name": "miningPool",
          "docs": [
            "Read-only: supplies the current ORE factor mirror for the book roll below."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "ixSysvar"
        }
      ],
      "args": [
        {
          "name": "poolId",
          "type": "u8"
        },
        {
          "name": "uAmount",
          "type": "u64"
        },
        {
          "name": "rAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sweepUnclaimedToPool",
      "docs": [
        "rev-13. THE SAFETY HATCH: claw an explicit amount of unclaimed stORE back into a pool,",
        "distributed to all its holders by raising per-share backing. The other of the two exits.",
        "Cosigned. Mining is excluded — its shares price off SOL only."
      ],
      "discriminator": [
        77,
        199,
        159,
        170,
        163,
        253,
        25,
        44
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
          "name": "unclaimed",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  110,
                  99,
                  108,
                  97,
                  105,
                  109,
                  101,
                  100,
                  45,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "unclaimedCustodyAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "unclaimedCustodyAuthority"
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
          "name": "storeMint"
        },
        {
          "name": "stakingPool",
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
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "destVaultAuthority",
          "docs": [
            "against `pool_id`, because the seed depends on a runtime argument."
          ]
        },
        {
          "name": "destVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "destVaultAuthority"
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
          "name": "admin",
          "signer": true
        },
        {
          "name": "ixSysvar"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "poolId",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "topUpProtocolLiquidity",
      "docs": [
        "Add liquid stORE backing to the Protocol Pool without minting PP shares. Recovery /",
        "sponsor-capital rail, restricted to PP whitelist mode."
      ],
      "discriminator": [
        88,
        68,
        181,
        186,
        109,
        80,
        46,
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
          "name": "miningPool",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  110,
                  103,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolPool",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108,
                  95,
                  112,
                  111,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "protocolVaultAuthority"
        },
        {
          "name": "storeMint"
        },
        {
          "name": "protocolVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "protocolVaultAuthority"
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
          "name": "funderStoreAta",
          "writable": true
        },
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "funder",
          "writable": true,
          "signer": true
        },
        {
          "name": "ixSysvar",
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
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
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
      "name": "feeExemptEntry",
      "discriminator": [
        185,
        67,
        198,
        0,
        186,
        140,
        124,
        204
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
      "name": "miningPool",
      "discriminator": [
        134,
        149,
        193,
        160,
        11,
        139,
        229,
        253
      ]
    },
    {
      "name": "order",
      "discriminator": [
        134,
        173,
        223,
        185,
        77,
        86,
        28,
        51
      ]
    },
    {
      "name": "phantomMember",
      "discriminator": [
        72,
        225,
        172,
        204,
        229,
        189,
        96,
        9
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
      "name": "ppExitNotice",
      "discriminator": [
        122,
        5,
        146,
        225,
        234,
        11,
        87,
        153
      ]
    },
    {
      "name": "protocolPool",
      "discriminator": [
        138,
        111,
        184,
        14,
        192,
        55,
        244,
        195
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
      "name": "stakingPool",
      "discriminator": [
        203,
        19,
        214,
        220,
        220,
        154,
        24,
        102
      ]
    },
    {
      "name": "unclaimed",
      "discriminator": [
        207,
        197,
        248,
        238,
        244,
        218,
        119,
        44
      ]
    },
    {
      "name": "whitelistEntry",
      "discriminator": [
        51,
        70,
        173,
        81,
        219,
        192,
        234,
        62
      ]
    },
    {
      "name": "window",
      "discriminator": [
        66,
        77,
        66,
        242,
        153,
        13,
        1,
        69
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
      "name": "capOverflow",
      "discriminator": [
        85,
        175,
        194,
        142,
        221,
        7,
        105,
        235
      ]
    },
    {
      "name": "capStressed",
      "discriminator": [
        82,
        178,
        194,
        7,
        104,
        46,
        147,
        144
      ]
    },
    {
      "name": "configChanged",
      "discriminator": [
        147,
        25,
        86,
        98,
        98,
        77,
        78,
        192
      ]
    },
    {
      "name": "conservationGateArmed",
      "discriminator": [
        205,
        14,
        127,
        238,
        93,
        158,
        154,
        69
      ]
    },
    {
      "name": "conservationObserved",
      "discriminator": [
        54,
        195,
        108,
        3,
        164,
        148,
        97,
        184
      ]
    },
    {
      "name": "defensiveModeChanged",
      "discriminator": [
        165,
        95,
        128,
        201,
        120,
        240,
        160,
        191
      ]
    },
    {
      "name": "depositRefundUndeliverable",
      "discriminator": [
        251,
        188,
        251,
        229,
        108,
        45,
        96,
        193
      ]
    },
    {
      "name": "depositSettled",
      "discriminator": [
        154,
        83,
        222,
        39,
        153,
        147,
        84,
        58
      ]
    },
    {
      "name": "evacOrphanProtocolSolSwept",
      "discriminator": [
        129,
        162,
        62,
        177,
        137,
        48,
        62,
        184
      ]
    },
    {
      "name": "evacOrphanProtocolStoreSwept",
      "discriminator": [
        2,
        245,
        106,
        211,
        58,
        237,
        80,
        149
      ]
    },
    {
      "name": "evacRedeemed",
      "discriminator": [
        125,
        113,
        22,
        229,
        96,
        15,
        185,
        249
      ]
    },
    {
      "name": "evacuationExecuted",
      "discriminator": [
        30,
        50,
        203,
        74,
        182,
        189,
        159,
        16
      ]
    },
    {
      "name": "exitCancelledUnusableAta",
      "discriminator": [
        225,
        188,
        233,
        248,
        205,
        216,
        172,
        176
      ]
    },
    {
      "name": "exitDeferredReservedLiquidity",
      "discriminator": [
        50,
        252,
        83,
        69,
        255,
        195,
        8,
        10
      ]
    },
    {
      "name": "exitTokenLegForfeited",
      "discriminator": [
        20,
        178,
        83,
        217,
        84,
        60,
        224,
        29
      ]
    },
    {
      "name": "externalFeeRebateClaimed",
      "discriminator": [
        110,
        204,
        235,
        225,
        122,
        79,
        17,
        234
      ]
    },
    {
      "name": "feeDistributed",
      "discriminator": [
        6,
        133,
        116,
        50,
        44,
        151,
        179,
        65
      ]
    },
    {
      "name": "feeExemptCleared",
      "discriminator": [
        189,
        173,
        129,
        152,
        188,
        192,
        78,
        2
      ]
    },
    {
      "name": "feeExemptSet",
      "discriminator": [
        253,
        67,
        32,
        130,
        84,
        68,
        232,
        59
      ]
    },
    {
      "name": "feePolicyChanged",
      "discriminator": [
        112,
        219,
        125,
        195,
        71,
        65,
        141,
        191
      ]
    },
    {
      "name": "miningExitSettled",
      "discriminator": [
        58,
        8,
        18,
        20,
        224,
        145,
        227,
        20
      ]
    },
    {
      "name": "monetizeFoldPricedAtPar",
      "discriminator": [
        114,
        16,
        242,
        183,
        66,
        54,
        114,
        227
      ]
    },
    {
      "name": "monetizeFolded",
      "discriminator": [
        239,
        249,
        90,
        50,
        136,
        146,
        248,
        175
      ]
    },
    {
      "name": "monetizePageSkipped",
      "discriminator": [
        234,
        109,
        225,
        204,
        43,
        118,
        59,
        141
      ]
    },
    {
      "name": "monetizeResidualClaimed",
      "discriminator": [
        176,
        150,
        116,
        13,
        41,
        204,
        232,
        183
      ]
    },
    {
      "name": "monetizeSold",
      "discriminator": [
        96,
        10,
        182,
        31,
        134,
        54,
        37,
        1
      ]
    },
    {
      "name": "monetizeStaged",
      "discriminator": [
        141,
        97,
        66,
        32,
        2,
        221,
        97,
        242
      ]
    },
    {
      "name": "navPerShareClamped",
      "discriminator": [
        46,
        26,
        32,
        42,
        226,
        129,
        126,
        38
      ]
    },
    {
      "name": "opsWithdrawn",
      "discriminator": [
        106,
        100,
        74,
        180,
        40,
        53,
        229,
        189
      ]
    },
    {
      "name": "orderSubmitted",
      "discriminator": [
        234,
        9,
        195,
        214,
        22,
        135,
        46,
        248
      ]
    },
    {
      "name": "perfFeeCharged",
      "discriminator": [
        249,
        1,
        120,
        220,
        66,
        214,
        79,
        197
      ]
    },
    {
      "name": "perfPassOpened",
      "discriminator": [
        237,
        4,
        189,
        129,
        86,
        3,
        116,
        152
      ]
    },
    {
      "name": "perfPositionSkipped",
      "discriminator": [
        243,
        104,
        212,
        47,
        182,
        116,
        24,
        167
      ]
    },
    {
      "name": "phantomDustCeilingBreached",
      "discriminator": [
        214,
        118,
        67,
        87,
        235,
        16,
        154,
        29
      ]
    },
    {
      "name": "phantomRemarked",
      "discriminator": [
        192,
        24,
        148,
        173,
        61,
        242,
        227,
        102
      ]
    },
    {
      "name": "poolsInitialized",
      "discriminator": [
        65,
        82,
        34,
        152,
        207,
        96,
        108,
        77
      ]
    },
    {
      "name": "ppExitNoticeSubmitted",
      "discriminator": [
        89,
        222,
        223,
        226,
        180,
        17,
        201,
        164
      ]
    },
    {
      "name": "ppExitSettled",
      "discriminator": [
        102,
        11,
        3,
        230,
        54,
        5,
        252,
        51
      ]
    },
    {
      "name": "ppOreWrapped",
      "discriminator": [
        57,
        64,
        185,
        97,
        251,
        102,
        169,
        117
      ]
    },
    {
      "name": "ppSolConverted",
      "discriminator": [
        43,
        80,
        144,
        18,
        0,
        121,
        122,
        162
      ]
    },
    {
      "name": "protocolLiquidityToppedUp",
      "discriminator": [
        119,
        150,
        142,
        45,
        105,
        21,
        24,
        57
      ]
    },
    {
      "name": "referralClaimed",
      "discriminator": [
        195,
        109,
        77,
        196,
        134,
        226,
        78,
        108
      ]
    },
    {
      "name": "referralSwept",
      "discriminator": [
        228,
        104,
        215,
        222,
        92,
        109,
        103,
        48
      ]
    },
    {
      "name": "stakingExitFeeCharged",
      "discriminator": [
        8,
        42,
        186,
        79,
        48,
        109,
        235,
        47
      ]
    },
    {
      "name": "stakingExitSettled",
      "discriminator": [
        14,
        88,
        181,
        110,
        58,
        250,
        33,
        231
      ]
    },
    {
      "name": "unclaimedClawedBack",
      "discriminator": [
        137,
        74,
        31,
        47,
        179,
        36,
        227,
        199
      ]
    },
    {
      "name": "unclaimedOreClawedBack",
      "discriminator": [
        175,
        34,
        147,
        88,
        235,
        228,
        240,
        86
      ]
    },
    {
      "name": "unclaimedOreRecorded",
      "discriminator": [
        206,
        77,
        48,
        139,
        168,
        16,
        182,
        61
      ]
    },
    {
      "name": "unclaimedOreRestored",
      "discriminator": [
        116,
        113,
        123,
        67,
        190,
        236,
        85,
        185
      ]
    },
    {
      "name": "unclaimedPaidOut",
      "discriminator": [
        127,
        9,
        68,
        90,
        109,
        13,
        14,
        73
      ]
    },
    {
      "name": "unclaimedRecorded",
      "discriminator": [
        54,
        145,
        148,
        254,
        149,
        9,
        223,
        245
      ]
    },
    {
      "name": "windowClosed",
      "discriminator": [
        121,
        79,
        118,
        86,
        121,
        66,
        96,
        11
      ]
    },
    {
      "name": "windowFrozen",
      "discriminator": [
        203,
        76,
        212,
        21,
        140,
        139,
        113,
        234
      ]
    },
    {
      "name": "windowPhaseAdvanced",
      "discriminator": [
        210,
        180,
        19,
        139,
        149,
        47,
        201,
        63
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidMinerAccount",
      "msg": "ORE miner/treasury account failed owner/discriminator/length validation"
    },
    {
      "code": 6001,
      "name": "claimMeasurementMismatch",
      "msg": "ORE claim measurement mismatch (before/after treasury delta != expected)"
    },
    {
      "code": 6002,
      "name": "miningAuthorityNotInit",
      "msg": "mining authority PDA is not initialized"
    },
    {
      "code": 6003,
      "name": "badCosign",
      "msg": "missing or malformed Ed25519 cosign instruction/message"
    },
    {
      "code": 6004,
      "name": "missingCosign",
      "msg": "no Ed25519 precompile cosign instruction found in the transaction"
    },
    {
      "code": 6005,
      "name": "staleCosign",
      "msg": "cosign message is stale or too far in the future"
    },
    {
      "code": 6006,
      "name": "badCosignNonce",
      "msg": "cosign nonce does not match the current admin_auth_nonce (replay/out-of-order)"
    },
    {
      "code": 6007,
      "name": "cosignIxMismatch",
      "msg": "cosign does not authorize this exact instruction (data/accounts binding mismatch)"
    },
    {
      "code": 6008,
      "name": "notFeeCosigner",
      "msg": "cosigner is not a current fee holder"
    },
    {
      "code": 6009,
      "name": "missingReferralAttest",
      "msg": "no settlement-authority Ed25519 attestation found for this referral action"
    },
    {
      "code": 6010,
      "name": "notSettlementAuthority",
      "msg": "referral attestation signer is not the settlement authority"
    },
    {
      "code": 6011,
      "name": "badReferralAttest",
      "msg": "malformed referral attestation message (tag/program/referrer/length)"
    },
    {
      "code": 6012,
      "name": "staleReferralAttest",
      "msg": "referral attestation has expired"
    },
    {
      "code": 6013,
      "name": "referralCumulativeRegression",
      "msg": "attested cumulative regressed below the on-chain swept watermark"
    },
    {
      "code": 6014,
      "name": "mathOverflow",
      "msg": "arithmetic overflow"
    },
    {
      "code": 6015,
      "name": "mathUnderflow",
      "msg": "arithmetic underflow"
    },
    {
      "code": 6016,
      "name": "paramOutOfBounds",
      "msg": "config value out of allowed bounds"
    },
    {
      "code": 6017,
      "name": "uoreAccountingError",
      "msg": "uORE accumulator/leg-settle accounting error"
    },
    {
      "code": 6018,
      "name": "noBatchNeeded",
      "msg": "no batch needed (nothing to claim)"
    },
    {
      "code": 6019,
      "name": "emptyVault",
      "msg": "operation requires a non-empty vault"
    },
    {
      "code": 6020,
      "name": "notAdmin",
      "msg": "signer is not the admin"
    },
    {
      "code": 6021,
      "name": "unknownConfigField",
      "msg": "unknown config field discriminant"
    },
    {
      "code": 6022,
      "name": "pendingQueueFull",
      "msg": "prospective-change queue is full"
    },
    {
      "code": 6023,
      "name": "noPendingAdminTransfer",
      "msg": "no pending admin transfer to act on"
    },
    {
      "code": 6024,
      "name": "adminTransferNotConfirmed",
      "msg": "admin transfer not yet confirmed by the confirmer role"
    },
    {
      "code": 6025,
      "name": "notPendingAdmin",
      "msg": "signer is not the pending admin"
    },
    {
      "code": 6026,
      "name": "notAdminTransferConfirmer",
      "msg": "signer is not the admin-transfer confirmer"
    },
    {
      "code": 6027,
      "name": "invalidFeeSchedule",
      "msg": "fee schedule shares must sum to 10000 with no gaps"
    },
    {
      "code": 6028,
      "name": "invalidFeeAsset",
      "msg": "unknown fee asset discriminant"
    },
    {
      "code": 6029,
      "name": "insufficientRetainedBalance",
      "msg": "requested amount exceeds the retained external-fee balance available for ops withdrawal"
    },
    {
      "code": 6030,
      "name": "invalidFeeExemptFlags",
      "msg": "fee-exempt flags are empty or contain unsupported scope bits"
    },
    {
      "code": 6031,
      "name": "invalidFeeExemptAccount",
      "msg": "fee-exempt registry PDA is missing, malformed, or not the expected wallet entry"
    },
    {
      "code": 6032,
      "name": "invalidFeeExemptPosition",
      "msg": "mining position PDA is missing, malformed, or not the expected wallet position"
    },
    {
      "code": 6033,
      "name": "emergencyRestrictOnly",
      "msg": "an emergency switch may only tighten (restrict), never loosen"
    },
    {
      "code": 6034,
      "name": "windowNotReady",
      "msg": "window cutoff has not been reached yet"
    },
    {
      "code": 6035,
      "name": "wrongPhase",
      "msg": "cascade is in the wrong phase for this instruction"
    },
    {
      "code": 6036,
      "name": "orderAlreadySettled",
      "msg": "order already settled (single-settle guard)"
    },
    {
      "code": 6037,
      "name": "orderWrongWindow",
      "msg": "order does not belong to the window being processed"
    },
    {
      "code": 6038,
      "name": "poolClosed",
      "msg": "this pool is closed for the requested action"
    },
    {
      "code": 6039,
      "name": "notWhitelisted",
      "msg": "wallet is not whitelisted for the Protocol Pool"
    },
    {
      "code": 6040,
      "name": "protocolTopUpPublicForbidden",
      "msg": "no-share Protocol Pool top-ups require pp_mode = WHITELIST AND pp_deposit_mode != OPEN (a public-open pool would be subsidised by the sponsor)"
    },
    {
      "code": 6041,
      "name": "protocolTopUpWindDownForbidden",
      "msg": "RESERVED — no longer raised; the PP sponsor top-up rail is now bounded by mining_pool.evacuated (AlreadyEvacuated) so the terminal hatch stays reachable"
    },
    {
      "code": 6042,
      "name": "protocolTopUpMidPpExits",
      "msg": "Protocol Pool sponsor top-ups cannot land after PP exits from the current cohort have started settling"
    },
    {
      "code": 6043,
      "name": "zeroAmount",
      "msg": "amount or share count must be non-zero"
    },
    {
      "code": 6044,
      "name": "belowMinDeposit",
      "msg": "deposit below the pool minimum"
    },
    {
      "code": 6045,
      "name": "insufficientShares",
      "msg": "withdraw exceeds the position's share balance"
    },
    {
      "code": 6046,
      "name": "ppExitNotEligible",
      "msg": "PP exit is only permitted at an epoch boundary after notice"
    },
    {
      "code": 6047,
      "name": "roundNotSettled",
      "msg": "freeze requires the current ORE round to be settled (checkpoint_id == round_id)"
    },
    {
      "code": 6048,
      "name": "guardBandViolation",
      "msg": "crank_mine is inside the guard band before cutoff"
    },
    {
      "code": 6049,
      "name": "defensiveModeActive",
      "msg": "defensive mode active: mining deploys are suspended"
    },
    {
      "code": 6050,
      "name": "reserveShortfall",
      "msg": "staking/PP reserve cannot cover the required funding (fail-closed)"
    },
    {
      "code": 6051,
      "name": "protocolPoolIlliquid",
      "msg": "Protocol Pool is illiquid for the required backstop (fail-closed)"
    },
    {
      "code": 6052,
      "name": "stakingDepositsFrozen",
      "msg": "new Staking-Pool deposits are frozen while a concentration-cap breach is being worked down (D1)"
    },
    {
      "code": 6053,
      "name": "stakingTvlCapExceeded",
      "msg": "this deposit would push the Staking-Pool vault above st_tvl_cap (or the staking_pool account was omitted while the cap is set)"
    },
    {
      "code": 6054,
      "name": "capExceeded",
      "msg": "concentration cap would be exceeded"
    },
    {
      "code": 6055,
      "name": "nothingToProcess",
      "msg": "nothing to process in this phase"
    },
    {
      "code": 6056,
      "name": "exitDeliveryModeUnavailable",
      "msg": "exit_delivery_asset is ORE but this exit's token leg is funded by ST/PP; ORE delivery is only for a fully self-claimed (standalone) exit — flip config back to STORE"
    },
    {
      "code": 6057,
      "name": "oreClaimFeeMismatch",
      "msg": "exit_delivery_asset is ORE but claim_fee_bps does not match ORE's hardcoded claim fee (1000); the modeled and physical fee must agree — fix claim_fee_bps or flip config back to STORE"
    },
    {
      "code": 6058,
      "name": "rung3AccountsMissing",
      "msg": "rung-3 self-claim required (claim residual > 0) but the ORE/ore-lst accounts were not provided"
    },
    {
      "code": 6059,
      "name": "ppDepositsDisabled",
      "msg": "Protocol Pool deposits are disabled (pp_deposit_mode = DISABLED)"
    },
    {
      "code": 6060,
      "name": "ppSolLegUnavailable",
      "msg": "PP has SOL-side backing (sleeve or accrued fees); the in-kind SOL leg is not built yet, so PP deposits require a pure-stORE pool for now"
    },
    {
      "code": 6061,
      "name": "keeperOnly",
      "msg": "crank_mine is keeper-gated; signer is not the whitelisted keeper"
    },
    {
      "code": 6062,
      "name": "deployBoundsExceeded",
      "msg": "deploy exceeds the configured mining bounds"
    },
    {
      "code": 6063,
      "name": "tileMaskInvalid",
      "msg": "tile selection is invalid (empty, > 25, or out of the configured tile range)"
    },
    {
      "code": 6064,
      "name": "monetizeStaged",
      "msg": "monetize SOL is staged awaiting fold; mining deploys/funding are paused until the fold clears it"
    },
    {
      "code": 6065,
      "name": "monetizeSweepIncomplete",
      "msg": "a monetize SELL sweep is incomplete for this window; finish the sweep before advancing the phase"
    },
    {
      "code": 6066,
      "name": "monetizeClaimPending",
      "msg": "the attributed monetize residual must be claimed and LITE-reconciled before STAGE or ABORT"
    },
    {
      "code": 6067,
      "name": "claimReserveMismatch",
      "msg": "mining-authority claim-reserve custody does not match its explicit reserve ledgers"
    },
    {
      "code": 6068,
      "name": "monetizeCycleOpen",
      "msg": "a monetize cycle is already open (pending proceeds or staged SOL); one cycle at a time"
    },
    {
      "code": 6069,
      "name": "monetizePositionPendingFold",
      "msg": "position has unsettled monetization proceeds; fold them before submitting a mining withdrawal"
    },
    {
      "code": 6070,
      "name": "cascadeInFlight",
      "msg": "mining/checkpoint mutation is blocked while a settlement cascade is in flight"
    },
    {
      "code": 6071,
      "name": "monetizeBelowMinOut",
      "msg": "the measured swap return is below the client min-out floor; abort and retain, never stage a bad swap"
    },
    {
      "code": 6072,
      "name": "monetizeFoldPositionLocked",
      "msg": "cannot fold monetize proceeds into a position with a pending (locked) exit — its cached exit leg would over-commit uore_base; retry after the exit settles"
    },
    {
      "code": 6073,
      "name": "positionNotEmpty",
      "msg": "position is not empty (shares / locked / uORE / rORE / pending must all be 0 to close)"
    },
    {
      "code": 6074,
      "name": "externalFeeRebateOutstanding",
      "msg": "external-fee rebate remains claimable; claim it before clearing the exemption or closing the position"
    },
    {
      "code": 6075,
      "name": "externalFeeRebateReserveMismatch",
      "msg": "external-fee rebate reserve is inconsistent with fee-bucket custody"
    },
    {
      "code": 6076,
      "name": "darkPathInterlock",
      "msg": "dark money path is missing a required safety interlock"
    },
    {
      "code": 6077,
      "name": "ppExitNoticeMissing",
      "msg": "no PP exit notice on file; submit_pp_exit_notice first and wait the notice period"
    },
    {
      "code": 6078,
      "name": "ppExitNoticeNotAged",
      "msg": "PP exit notice has not aged the required pp_exit_notice_windows yet"
    },
    {
      "code": 6079,
      "name": "ppExitNotAtEpochBoundary",
      "msg": "PP exits are only allowed at an epoch boundary (window_id % epoch_len_windows == 0)"
    },
    {
      "code": 6080,
      "name": "ppExitIlliquid",
      "msg": "Protocol Pool is illiquid for this exit right now; re-notice and retry next epoch boundary"
    },
    {
      "code": 6081,
      "name": "phantomConservationBreak",
      "msg": "LITE phantom per-leg conservation check failed"
    },
    {
      "code": 6082,
      "name": "remarkNotDue",
      "msg": "phantom re-mark is not due yet (rate-limited to once per window)"
    },
    {
      "code": 6083,
      "name": "alreadyEvacuated",
      "msg": "the mining miner has already been evacuated (single-shot terminal drain)"
    },
    {
      "code": 6084,
      "name": "notEvacuated",
      "msg": "the pool has not been evacuated; this action is only valid after evacuate_claim_all"
    },
    {
      "code": 6085,
      "name": "windDownRequired",
      "msg": "terminal wind-down is not armed; set the wind_down switch (cosigned) first"
    },
    {
      "code": 6086,
      "name": "evacCycleBusy",
      "msg": "the cascade is not quiescent (wrong phase, staged monetize, or in-flight deploy) — cannot evacuate mid-cycle"
    },
    {
      "code": 6087,
      "name": "notEvacAuthority",
      "msg": "signer is neither an admin cosigner nor the program upgrade authority"
    },
    {
      "code": 6088,
      "name": "evacRedemptionsPending",
      "msg": "custody dust sweep blocked: not every pool has fully redeemed (holders still owed custody)"
    },
    {
      "code": 6089,
      "name": "cosignerIsAdmin",
      "msg": "the admin key may not also be the fee-holder cosigner; the second factor must be a DISTINCT key (separation of duties)"
    },
    {
      "code": 6090,
      "name": "feeCosignerSetCollapse",
      "msg": "set_fee_schedule may not evict a majority of the current fee-cosigner set in one cosigned tx"
    },
    {
      "code": 6091,
      "name": "notUpgradeAuthority",
      "msg": "initialize is gated to the program's upgrade authority (the deployer); the signer is not it"
    },
    {
      "code": 6092,
      "name": "positionDepositPending",
      "msg": "this position still has an unsettled deposit order; settling it needs the position account, so it may not be closed yet"
    },
    {
      "code": 6093,
      "name": "windowStillLive",
      "msg": "that window is still live (>= config.current_window_id); only a strictly older, fully-cascaded window may be closed"
    },
    {
      "code": 6094,
      "name": "invalidBeneficiaryAta",
      "msg": "the supplied account is not the beneficiary's canonical stORE associated-token account; pass the derived ATA address"
    },
    {
      "code": 6095,
      "name": "monetizeSkipDebtOpen",
      "msg": "this position owes a deferred monetization slice from a skipped SELL page; it must be swept once before a new mining withdrawal can be locked"
    },
    {
      "code": 6096,
      "name": "unclaimedInsufficient",
      "msg": "the unclaimed pot does not hold that much of the requested asset"
    },
    {
      "code": 6097,
      "name": "unclaimedNothingOwed",
      "msg": "nothing is owed in the unclaimed pot"
    },
    {
      "code": 6098,
      "name": "swapBelowMinOut",
      "msg": "the swap returned less than the caller's min-out bound"
    },
    {
      "code": 6099,
      "name": "swapOverspent",
      "msg": "the swap spent more than was wrapped for it, or moved authority lamports"
    },
    {
      "code": 6100,
      "name": "adminTransferTimelockActive",
      "msg": "the admin-transfer timelock has not elapsed yet"
    },
    {
      "code": 6101,
      "name": "bankrollFloorUnset",
      "msg": "mining cannot be opened until bankroll_floor is set (see deploy/GENESIS_CONFIG.md)"
    }
  ],
  "types": [
    {
      "name": "adminCosignEvent",
      "docs": [
        "A fee-holder cosign authorized an admin instruction."
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
      "name": "book",
      "docs": [
        "A frozen IOU book: ORE-denominated entitlement transferred at the net mark.",
        "rORE keeps accruing on the FROZEN base (holder yield); the base never grows (I6)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uFrozen",
            "type": "u64"
          },
          {
            "name": "rStock",
            "type": "u64"
          },
          {
            "name": "factorCheckpoint",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "capOverflow",
      "docs": [
        "A cap-triggered overflow book slice routed to the Protocol Pool (I7)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "trigger",
            "type": "u8"
          },
          {
            "name": "overflowU",
            "type": "u64"
          },
          {
            "name": "overflowR",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "capStressed",
      "docs": [
        "D1 fail-soft: emitted by `crank_cap_rebalance` on a CLAMPED window (PP could not",
        "buy the full overflow). Distinct from the deploy halt so monitoring sees the",
        "condition immediately. `wanted` = full overflow, `bought` = what PP could afford,",
        "`book_ratio_bps` = ST book-ratio AFTER the partial buy, `deposits_frozen` = whether",
        "this breach tripped an escalation ceiling (freezing new Staking-Pool deposits)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "breachWindows",
            "type": "u16"
          },
          {
            "name": "bookRatioBps",
            "type": "u16"
          },
          {
            "name": "wanted",
            "type": "u64"
          },
          {
            "name": "bought",
            "type": "u64"
          },
          {
            "name": "depositsFrozen",
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
            "type": "pubkey"
          },
          {
            "name": "pendingAdmin",
            "type": "pubkey"
          },
          {
            "name": "pendingAdminProposedAt",
            "type": "i64"
          },
          {
            "name": "pendingAdminConfirmed",
            "type": "bool"
          },
          {
            "name": "adminTransferConfirmer",
            "docs": [
              "The confirmer role for the admin-transfer flow (deposits a bond at confirm)."
            ],
            "type": "pubkey"
          },
          {
            "name": "adminAuthNonce",
            "docs": [
              "Monotone one-time nonce; every post-bootstrap admin ix bumps it."
            ],
            "type": "u64"
          },
          {
            "name": "feeCosigners",
            "docs": [
              "Denormalized mirror of FeeSchedule.recipients[*].recipient — the keys",
              "allowed to co-sign. Empty slots = default()."
            ],
            "type": {
              "array": [
                "pubkey",
                4
              ]
            }
          },
          {
            "name": "storeMint",
            "type": "pubkey"
          },
          {
            "name": "settlementAuthority",
            "type": "pubkey"
          },
          {
            "name": "keeper",
            "docs": [
              "The whitelisted keeper — the ONLY signer `crank_mine` accepts (§6). A",
              "compromised keeper mines badly at worst (bounded), never drains. Cosign-settable."
            ],
            "type": "pubkey"
          },
          {
            "name": "claimFeeBps",
            "type": "u16"
          },
          {
            "name": "adminFeeBps",
            "type": "u16"
          },
          {
            "name": "ppShareMiningBps",
            "type": "u16"
          },
          {
            "name": "ppShareStakingBps",
            "type": "u16"
          },
          {
            "name": "entryFeeMiningBps",
            "type": "u16"
          },
          {
            "name": "entryFeeStakingBps",
            "type": "u16"
          },
          {
            "name": "entryFeeProtocolBps",
            "type": "u16"
          },
          {
            "name": "windowPeriodSecs",
            "type": "i64"
          },
          {
            "name": "epochLenWindows",
            "type": "u32"
          },
          {
            "name": "ppExitNoticeWindows",
            "type": "u32"
          },
          {
            "name": "advanceCapRBps",
            "type": "u16"
          },
          {
            "name": "capBreachMaxWindows",
            "docs": [
              "D1 (fail-soft cap rebalance): consecutive clamped windows before NEW",
              "Staking-Pool deposits are frozen (default 4). Cosign-settable."
            ],
            "type": "u16"
          },
          {
            "name": "capHardCeilingBps",
            "docs": [
              "D1: post-rebalance ST book-ratio ceiling (bps) that ALSO freezes new ST",
              "deposits even on the first clamped window (default 6000). Cosign-settable."
            ],
            "type": "u16"
          },
          {
            "name": "stakingDepositsFrozen",
            "docs": [
              "D1: runtime gate (NOT a policy field) — set by `crank_cap_rebalance` when a",
              "breach hits either ceiling, auto-cleared when the breach clears. Blocks new",
              "Staking-Pool deposits so no entrant buys an above-cap book share."
            ],
            "type": "bool"
          },
          {
            "name": "treasuryAdvanceBudgetBps",
            "type": "u16"
          },
          {
            "name": "monetizeShareBps",
            "type": "u16"
          },
          {
            "name": "ppSolSleeveMaxBps",
            "docs": [
              "PP treasury diversification sleeve cap.",
              "",
              "⚠ SUPERSEDED AND UNREAD, deliberately. This bounded a \"hold some SOL for diversification\"",
              "sleeve that was never built — `sol_sleeve` is only ever written as 0. The founder decision of",
              "2026-07-26 went the other way: PP's SOL is CONVERTED to stORE via the rev-13 convert rail",
              "(`crank_pp_convert_sol_to_ore` + `crank_pp_wrap_ore_to_store`), so PP stays single-asset and",
              "there is no sleeve to cap.",
              "",
              "Kept rather than deleted so the field ordering of a not-yet-deployed account is not churned",
              "for a rename, and so the intent is recorded where someone would look for it. Do NOT wire a",
              "half-sleeve to \"use\" it: reintroducing SOL as PP backing would re-break share pricing, which",
              "is the whole reason `PpSolLegUnavailable` exists."
            ],
            "type": "u16"
          },
          {
            "name": "claimGranularity",
            "type": "u8"
          },
          {
            "name": "exitDeliveryAsset",
            "type": "u8"
          },
          {
            "name": "ppMode",
            "type": "u8"
          },
          {
            "name": "ppDepositMode",
            "type": "u8"
          },
          {
            "name": "rung3Enabled",
            "docs": [
              "Waterfall rung 3 (attributed self-claim) enable. DARK-LAUNCHED OFF: when a",
              "mining-exit seal leaves a claim residual (ST+PP can't cover), the seal",
              "fail-closes unless this is set — the pay-side self-claim is a live-verified-",
              "later feature. Unreachable under v1 PP-seeded sizing; gates standalone mode."
            ],
            "type": "bool"
          },
          {
            "name": "litePhantomEnabled",
            "type": "bool"
          },
          {
            "name": "ppShortfallCrystallizeEnabled",
            "docs": [
              "D2 B′: crystallize only an over-book PP exit's liquid shortfall. Separate",
              "from LITE so enabling reconciliation infrastructure alone moves no money."
            ],
            "type": "bool"
          },
          {
            "name": "defensiveMode",
            "type": "bool"
          },
          {
            "name": "defensiveAuto",
            "docs": [
              "TRUE ⇒ `defensive_mode` was raised by the CAPACITY monitor (I10 / cap-stress /",
              "phantom-dust) and is AUTO-RECOVERABLE — freeze clears it once capacity recovers",
              "with a 5% hysteresis band. FALSE when an admin raised it via set_emergency (a",
              "conduct/incident trip stays MANUAL — the resume call is human, Koala split-by-cause)."
            ],
            "type": "bool"
          },
          {
            "name": "miningOpen",
            "type": "bool"
          },
          {
            "name": "stakingOpen",
            "type": "bool"
          },
          {
            "name": "windDown",
            "docs": [
              "§5.5 terminal wind-down gate for `evacuate_claim_all`. MONOTONIC (false→true",
              "only, never cleared); set ONLY by set_emergency(EMERGENCY_WIND_DOWN) (cosigned).",
              "NOT auto-set — deliberately distinct from `defensive_mode` (which auto-sets on a",
              "transient I10 breach and would otherwise be an abusable drain-timing gate)."
            ],
            "type": "bool"
          },
          {
            "name": "maxDeployPerRound",
            "type": "u64"
          },
          {
            "name": "maxDeployPerWindow",
            "type": "u64"
          },
          {
            "name": "maxPerTile",
            "type": "u64"
          },
          {
            "name": "minTiles",
            "type": "u8"
          },
          {
            "name": "maxTiles",
            "type": "u8"
          },
          {
            "name": "bankrollFloor",
            "type": "u64"
          },
          {
            "name": "phantomDustCeilingGrams",
            "type": "u64"
          },
          {
            "name": "maxDeployIxsPerCrank",
            "type": "u8"
          },
          {
            "name": "guardBandSlots",
            "type": "u64"
          },
          {
            "name": "i10FloorBps",
            "docs": [
              "α — the I10 defensive-monitor coefficient (bps of 1e4). freeze raises `defensive_mode`",
              "when `PP.store_in_vault < α·st_book_net`. Default 10000 (α=1.0) == the pre-existing check."
            ],
            "type": "u16"
          },
          {
            "name": "stTvlCap",
            "docs": [
              "Staking-Pool deposit cap in stORE grams (ST `store_in_vault` ceiling). 0 = UNLIMITED.",
              "Enforced at intake (submit_store_deposit). A launch product guard, raised progressively."
            ],
            "type": "u64"
          },
          {
            "name": "conservationToleranceGrams",
            "docs": [
              "Grams of slack before a NEGATIVE conservation residual counts as a breach. Matches the",
              "keeper's existing 100-gram allowance so on-chain and off-chain agree on the threshold."
            ],
            "type": "u64"
          },
          {
            "name": "conservationBreachMaxWindows",
            "docs": [
              "Consecutive breached WINDOWS before the deposit gate bites. Mirrors",
              "`cap_breach_max_windows` — the ratified D1 escalation shape (observe, then shut intake)."
            ],
            "type": "u16"
          },
          {
            "name": "conservationGateArmed",
            "docs": [
              "ARMED? False at init. When false the observer still measures and emits; only the deposit",
              "gate is inert. Toggled by `set_emergency(4)` — NOT a ConfigField, deliberately: config",
              "changes apply at freeze, so a config-gated brake could not be released if freeze were the",
              "thing that broke. Disarming also clears the counter, so it is a real release."
            ],
            "type": "bool"
          },
          {
            "name": "conservationBreachWindows",
            "docs": [
              "CONSECUTIVE windows whose observation came back breached. Reset to 0 by any clean",
              "observation and by disarming. Counted per WINDOW, not per call: `crank_remark_phantom` is",
              "permissionless, so counting calls would let anyone inflate this at rent-only cost.",
              "",
              "Lives on Config, NOT MiningPool, for a concrete reason: the deposit gate must read it, and",
              "`submit_store_deposit` has no `mining_pool` in its frame. Putting it here keeps the gate a",
              "pure read of an account every deposit path already holds — no new account on the hottest",
              "instruction in the program."
            ],
            "type": "u32"
          },
          {
            "name": "conservationLastWindow",
            "docs": [
              "Window of the most recent observation, so repeated calls in one window cannot double-count.",
              "0 = never observed."
            ],
            "type": "u64"
          },
          {
            "name": "exitFeeStakingBps",
            "docs": [
              "Staking-pool EXIT fee, charged on `due` AFTER the subentry split so the ST/PP funding ratio",
              "(`f2 = from_pp / book_net`) is unaffected. PP leg stays in stORE -- no conversion, no oracle,",
              "and notably it never touches `fee_sol_accrued`."
            ],
            "type": "u16"
          },
          {
            "name": "ppShareStakingExitBps",
            "type": "u16"
          },
          {
            "name": "perfFeeBps",
            "docs": [
              "Performance fee on Mining-Pool gains above each position's own high-water mark. Charged on",
              "the SOL leg ONLY: an HWM over a combined NAV would need an ORE/SOL price and would",
              "reintroduce the oracle this design removes by construction."
            ],
            "type": "u16"
          },
          {
            "name": "ppSharePerfBps",
            "type": "u16"
          },
          {
            "name": "perfPeriodSecs",
            "docs": [
              "Crystallization cadence. 0 = charge ONLY on the exit MEASURE pass (the fallback posture,",
              "reachable by cosigned set_param with no upgrade); otherwise the weekly BATCH pass also fires",
              "on a FIXED EPOCH measured from `FeeSchedule.genesis_ts`."
            ],
            "type": "i64"
          },
          {
            "name": "perfFeeEnabled",
            "docs": [
              "Master switch. `apply_due` collapses `perf_fee_bps` and `perf_period_secs` to 0 whenever this",
              "is false, so an unsafe partial bundle can never leave a live charge armed."
            ],
            "type": "bool"
          },
          {
            "name": "currentWindowId",
            "type": "u64"
          },
          {
            "name": "pending",
            "docs": [
              "Queued param changes; applied at the window roll once their eta arrives."
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "pendingChange"
                  }
                },
                8
              ]
            }
          },
          {
            "name": "pendingCount",
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
      "name": "configChanged",
      "docs": [
        "One cosigned config field changed (prospective-only — takes effect next window)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "field",
            "type": "u8"
          },
          {
            "name": "oldValue",
            "type": "u64"
          },
          {
            "name": "newValue",
            "type": "u64"
          },
          {
            "name": "etaWindow",
            "type": "u64"
          },
          {
            "name": "cosigner",
            "type": "pubkey"
          },
          {
            "name": "nonce",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "conservationGateArmed",
      "docs": [
        "The conservation deposit gate was armed or disarmed by `set_emergency(4)`."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "armed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "conservationObserved",
      "docs": [
        "rev-14 Option B. Every conservation observation, breached or not.",
        "",
        "Emitted unconditionally so the clean case is on the record too: \"no event\" must never be",
        "ambiguous between \"observed and fine\" and \"the observer never ran\". The residuals are SIGNED —",
        "negative means the enumerable claims exceed miner physical, which is the insolvent direction and",
        "the only one this test can prove (see `math::conservation_residual` for why the live-positions",
        "term is not computable on-chain)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "residualU",
            "type": "i128"
          },
          {
            "name": "residualR",
            "type": "i128"
          },
          {
            "name": "toleranceGrams",
            "type": "u64"
          },
          {
            "name": "breached",
            "type": "bool"
          },
          {
            "name": "consecutiveWindows",
            "docs": [
              "Consecutive breached windows AFTER this observation."
            ],
            "type": "u32"
          },
          {
            "name": "armed",
            "docs": [
              "Whether the deposit gate is armed. A breach with `armed == false` is observation only."
            ],
            "type": "bool"
          },
          {
            "name": "depositGateEngaged",
            "docs": [
              "True on the observation that first pushes the counter to/past the threshold."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "defensiveModeChanged",
      "docs": [
        "I10 defensive mode toggled."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "enabled",
            "type": "bool"
          },
          {
            "name": "ppLiquid",
            "type": "u64"
          },
          {
            "name": "netLiability",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "depositRefundUndeliverable",
      "docs": [
        "A deposit REFUND could not be delivered for the same reason. The escrowed stORE is REROUTED",
        "TO THE FEE BUCKET — it is deliberately NOT left in the vault ATA, because every stORE outflow",
        "from those vaults is ledger-bounded and this escrow was never credited to `store_in_vault`,",
        "so an above-ledger surplus there would be unreachable forever. The order is closed and the",
        "phase counter advanced. Note \"undeliverable\" includes a simply ABSENT canonical ATA, which is",
        "reachable with no adversary at all, so this is not purely a self-inflicted path."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "depositSettled",
      "docs": [
        "A deposit order minted shares at the frozen mark (cascade step 1)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "deposited",
            "type": "u64"
          },
          {
            "name": "entryFee",
            "type": "u64"
          },
          {
            "name": "sharesMinted",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "evacOrphanProtocolSolSwept",
      "docs": [
        "Terminal evacuation recovered a holder-less Protocol Pool's SOL income to the fee bucket.",
        "Companion to `EvacOrphanProtocolStoreSwept` for the SOL leg (spec §5.4 PP income)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "evacOrphanProtocolStoreSwept",
      "docs": [
        "Terminal evacuation swept an UNOWNED Protocol-Pool stORE balance into the redemption custody",
        "because PP had no redeemable holders (`total_shares <= MIN_LIQUIDITY_SHARES`).",
        "",
        "Audit fix (permanent fund-lock class): `redeem_evacuated_protocol` needs `shares > 0`,",
        "`settle_pp_exit` needs a PP Order, and `sweep_evac_custody` only touches the custody ATA — so",
        "accrued PP stORE and cosigned sponsor top-ups would otherwise be destroyed on the terminal path."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "custodyTotalAfter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "evacRedeemed",
      "docs": [
        "§5.5 evacuation redemption: a holder redeemed pro-rata against custody."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "sharesBurned",
            "type": "u64"
          },
          {
            "name": "liquidOut",
            "type": "u64"
          },
          {
            "name": "custodyOut",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "evacuationExecuted",
      "docs": [
        "§5.5 evacuation hatch: the miner was fully drained to program custody."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "claimedRewards",
            "type": "u64"
          },
          {
            "name": "claimedRefined",
            "type": "u64"
          },
          {
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "netClaimedOre",
            "type": "u64"
          },
          {
            "name": "wrappedStore",
            "type": "u64"
          },
          {
            "name": "basisTotal",
            "type": "u64"
          },
          {
            "name": "harvestedSol",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "exitCancelledUnusableAta",
      "docs": [
        "A settlement could not deliver its stORE leg because the beneficiary's own canonical",
        "stORE ATA is UNUSABLE (re-owned via `SetAuthority(AccountOwner)`, frozen, wrong mint, or",
        "simply absent). Rather than revert — which would permanently wedge an irrevocable phase,",
        "see `store_ata_is_payable` — the settlement is CANCELLED: no ledger is debited, no stORE",
        "moves, the position's shares are left INTACT and its lock released, the phase counter is",
        "still advanced and the order still closed. The beneficiary loses nothing; they repair the",
        "ATA and submit again. A non-zero rate of these is an alertable operational signal."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "sharesReturned",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "exitDeferredReservedLiquidity",
      "docs": [
        "rev-11 F2. A staking exit was DEFERRED (not forfeited, not reverted) because paying it would",
        "have spent stORE already SEALED to a mining exit by `measure_mining_exit`. No ledger is debited,",
        "no stORE moves, and the shares stay on the position — only the lock is released and the phase",
        "counter advances, so the holder re-queues next window and the sealed exit can still pay.",
        "",
        "Carries both sides of the comparison so an indexer can tell a genuine ST/PP illiquidity from a",
        "mere ENCUMBRANCE, which the old hard `require!(ProtocolPoolIlliquid)` could not distinguish."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "sharesReturned",
            "type": "u64"
          },
          {
            "name": "due",
            "type": "u64"
          },
          {
            "name": "stNeeded",
            "type": "u64"
          },
          {
            "name": "stLiquid",
            "type": "u64"
          },
          {
            "name": "ppNeeded",
            "type": "u64"
          },
          {
            "name": "ppLiquid",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "exitTokenLegForfeited",
      "docs": [
        "An exit COMPLETED (SOL paid, shares burned, book absorbed by ST/PP as usual) but its stORE/ORE",
        "token leg could not be delivered, because the beneficiary's own canonical ATA exists and is",
        "unusable. The undelivered stORE stays with the pools that would have paid it — the ratified",
        "§5.4 branch-(A) shape, NAV-favourable to survivors — rather than being routed to the fee bucket",
        "or stranding the exiter in an indefinite retry queue.",
        "",
        "TRANSITIONAL AND INTERNAL. Pre-TGE this must become a preserved claim right (the B′ upgrade),",
        "per contracts_guide D2§3: silent forfeiture is not an investor-facing term."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "storeForfeited",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "externalFeeRebateClaimed",
      "docs": [
        "An exempt mining holder reclaimed the external deploy-fee share that the",
        "fungible SOL vault initially socialized onto their position."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "feeDistributed",
      "docs": [
        "Protocol-revenue fees distributed to the 3-way schedule."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "solDistributed",
            "type": "u64"
          },
          {
            "name": "storeDistributed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "feeExemptCleared",
      "docs": [
        "External-fee exemption registry entry removed for a wallet."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "feeExemptEntry",
      "docs": [
        "External-fee exemption flags. PDA([FEE_EXEMPT_SEED, wallet]). Scoped bits so the same",
        "registry can later govern the future performance-fee path without coupling it to the",
        "current deploy-fee exemption semantics."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "flags",
            "type": "u8"
          },
          {
            "name": "externalFeeRebateAccCkpt",
            "docs": [
              "Checkpoint into MiningPool.external_fee_rebate_acc_per_share."
            ],
            "type": "u128"
          },
          {
            "name": "externalFeeRebateAccrued",
            "docs": [
              "Materialized SOL rebate claim, paid permissionlessly to `wallet`."
            ],
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
      "name": "feeExemptSet",
      "docs": [
        "External-fee exemption registry set/updated for a wallet. Flags are scoped bits",
        "so deploy-fee exemption now and perf-fee exemption later can share one registry."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "flags",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "feePolicyChanged",
      "docs": [
        "Immediate fee-pipe policy (retain stage + team treasury destination) changed."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "retainBps",
            "type": "u16"
          },
          {
            "name": "opsTreasury",
            "type": "pubkey"
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
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "feeSchedule",
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
          },
          {
            "name": "retainBps",
            "docs": [
              "External-fee treasury retention (bps of the current bucket balance). The",
              "permissionless distribute handlers classify newly-arrived fees by this split."
            ],
            "type": "u16"
          },
          {
            "name": "retainedSol",
            "docs": [
              "Retained SOL already classified into the Team Ops Treasury stage and still",
              "parked in fee_bucket (not yet ops-withdrawn)."
            ],
            "type": "u64"
          },
          {
            "name": "retainedStore",
            "docs": [
              "Retained stORE already classified into the Team Ops Treasury stage and still",
              "parked in fee_store (not yet ops-withdrawn)."
            ],
            "type": "u64"
          },
          {
            "name": "externalFeeRebateReservedSol",
            "docs": [
              "SOL in fee_bucket owed back to external-fee-exempt mining holders. It is",
              "excluded from both permissionless distribution and retained ops withdrawals."
            ],
            "type": "u64"
          },
          {
            "name": "opsTreasury",
            "docs": [
              "Team Ops Treasury wallet — the explicit admin/cosign withdrawal destination",
              "for retained balances. Distinct from the Protocol Pool / Diamond Treasury."
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "miningExitSettled",
      "docs": [
        "A miner exit settled (cascade step 2): SOL leg + token leg (delivered in ORE),",
        "with the book split ST/PP by `fs`."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "sharesBurned",
            "type": "u64"
          },
          {
            "name": "solOut",
            "type": "u64"
          },
          {
            "name": "oreOut",
            "type": "u64"
          },
          {
            "name": "needStore",
            "type": "u64"
          },
          {
            "name": "fsBps",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "miningPool",
      "docs": [
        "Mining Pool (dORE). PDA([MINING_POOL_SEED]). Shares price off `sol_in_vault`",
        "ONLY (dual-ledger). Each holder's ORE entitlement is a per-Position accumulator."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "solInVault",
            "type": "u64"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "feeExemptExternalShares",
            "docs": [
              "User-owned mining shares currently exempt from the external deploy-fee slice",
              "only. The internal PP/backstop slice still applies to everyone. Updated exactly at the",
              "real mining-share mutation points (deposit settle, exit burn, monetize fold) and by the",
              "admin fee-exempt registry toggles when a live position is reclassified."
            ],
            "type": "u64"
          },
          {
            "name": "externalFeeRebateAccPerShare",
            "docs": [
              "Lazy SOL-rebate accumulator for the external deploy-fee slice. The shared",
              "vault pays the full external fee, then exempt holders accrue their",
              "pro-rata share here and claim it from the fee bucket. This preserves one",
              "fungible mining share class while making the exemption wallet-exact."
            ],
            "type": "u128"
          },
          {
            "name": "uoreAccPerShare",
            "docs": [
              "Per-share accumulator for newly-mined uORE (1e18 scale). A Position",
              "materializes `Δacc × shares` into its `uore_base`."
            ],
            "type": "u128"
          },
          {
            "name": "factorMirror",
            "docs": [
              "Mirror of ORE `treasury.miner_rewards_factor` (2^48 frac, steel Numeric = I80F48). Re-read AFTER",
              "every claim's fee bump (critic 2). Positions accrue rORE off this."
            ],
            "type": "u128"
          },
          {
            "name": "lastRewardsOreWatermark",
            "docs": [
              "Watermark of the miner's `rewards_ore` leg — the mined-leg growth since here",
              "is what `uore_acc_per_share` advances by at each freeze (mirror of the",
              "reference's `last_rewards_ore_watermark`). The refined leg needs no watermark",
              "(the factor is absolute)."
            ],
            "type": "u64"
          },
          {
            "name": "rewardsOreClaimCarry",
            "docs": [
              "Rewards-leg claims that exceeded the zero-bounded watermark. Added once",
              "to the next freeze delta so claims can never erase uncredited new mining."
            ],
            "type": "u64"
          },
          {
            "name": "miningAuthority",
            "docs": [
              "The mining authority PDA = signer of all ORE/ore-lst CPIs + ORE Miner authority."
            ],
            "type": "pubkey"
          },
          {
            "name": "miningAuthorityBump",
            "type": "u8"
          },
          {
            "name": "oreMiner",
            "type": "pubkey"
          },
          {
            "name": "inFlightSol",
            "docs": [
              "In-flight SOL currently deployed in an unresolved ORE round (critic 1:",
              "the SOL-leg NAV must include this at freeze, or freeze requires all rounds",
              "settled). Swept to sol_in_vault at harvest."
            ],
            "type": "u64"
          },
          {
            "name": "monetizeInFlight",
            "docs": [
              "§5.6b monetization (dormant, monetize_share_bps=0): measured swap-return SOL",
              "awaiting fold into sol_in_vault (Koala's `monetize_in_flight`). POST-swap SOL",
              "only — pre-swap stORE never crosses a freeze (no oracle). Folded ATOMICALLY with",
              "the per-position share mint before the next freeze, so NAV/share stays invariant",
              "(no redistribution to non-monetizers). 0 while dormant."
            ],
            "type": "u64"
          },
          {
            "name": "pendingMonetizeTotal",
            "docs": [
              "§5.6b: Σ of positions' un-folded monetize proceeds (stORE-value) recorded at the",
              "SELL crank, converted to mining shares + cleared at the FOLD crank. 0 while dormant."
            ],
            "type": "u64"
          },
          {
            "name": "miningPositionCount",
            "docs": [
              "§5.6b: live mining-position registry — bounds/enumerates the EAGER SELL/FOLD sweep.",
              "Incremented at genuine position creation, decremented at close_mining_position."
            ],
            "type": "u32"
          },
          {
            "name": "storeHolding",
            "docs": [
              "§5.6b: stORE the pool HOLDS after SELL / residual CLAIM, before the",
              "off-chain swap. Internal buyers pay into this custody account directly;",
              "the attributed residual claim wraps only its exact credited amount here."
            ],
            "type": "u64"
          },
          {
            "name": "claimReserveOre",
            "docs": [
              "Claim headroom and integer rounding can leave value in the mining-authority",
              "token accounts after an attributed claim pays its exact target. These",
              "reserves are system backing, not ST/PP revenue and not part of any normal",
              "pool NAV. Emergency evacuation consumes both balances into common custody."
            ],
            "type": "u64"
          },
          {
            "name": "claimReserveStore",
            "type": "u64"
          },
          {
            "name": "monetizeFrozenF",
            "docs": [
              "§5.6b SELL-cycle seal scalars (stamped at SELL page 0, consumed across pages):"
            ],
            "type": "u128"
          },
          {
            "name": "monetizeBudget",
            "type": "u64"
          },
          {
            "name": "monetizePaid",
            "type": "u64"
          },
          {
            "name": "monetizeStBudget",
            "type": "u64"
          },
          {
            "name": "monetizeStPaid",
            "type": "u64"
          },
          {
            "name": "monetizePpBudget",
            "type": "u64"
          },
          {
            "name": "monetizePpPaid",
            "type": "u64"
          },
          {
            "name": "monetizeClaimStore",
            "docs": [
              "Residual legs debited from positions but not bought into ST/PP books.",
              "Once every SELL page completes, `crank_monetize_claim_residual` claims this",
              "attributed slice from the shared miner, reconciles the measured pool-mix",
              "claim through LITE, wraps it, and clears all three fields atomically."
            ],
            "type": "u64"
          },
          {
            "name": "monetizeClaimU",
            "type": "u64"
          },
          {
            "name": "monetizeClaimR",
            "type": "u64"
          },
          {
            "name": "monetizeRegistered",
            "type": "u32"
          },
          {
            "name": "monetizeProcessed",
            "type": "u32"
          },
          {
            "name": "monetizeFoldNav",
            "type": "u128"
          },
          {
            "name": "monetizeCycleId",
            "type": "u32"
          },
          {
            "name": "perfCycleId",
            "docs": [
              "FROZEN perf cycle id for the open weekly pass. Derived as",
              "`floor((now - genesis_ts) / perf_period_secs)` and STAMPED when the pass opens -- never",
              "recomputed per page. A paged pass can straddle an epoch boundary, and a drifting `k` would",
              "break idempotence exactly where it matters. Same discipline as `monetize_window_id`."
            ],
            "type": "u64"
          },
          {
            "name": "perfPassNps",
            "docs": [
              "The NPS the open pass prices against, SEALED with `perf_cycle_id` at pass open.",
              "",
              "Without it every page would read `window.frozen_mining_nps` live, and several windows can",
              "sit in BATCH at once (`cascades_in_flight`): a cranker who also holds a position could then",
              "route their own page through whichever in-flight window carries the LOWEST mark and pay",
              "less. Sealing removes the choice — the mark is whatever the window that OPENED the pass",
              "carried, for every position in it."
            ],
            "type": "u128"
          },
          {
            "name": "perfCharged",
            "docs": [
              "Positions charged in the open perf cycle (paging cursor, mirrors `monetize_processed`)."
            ],
            "type": "u32"
          },
          {
            "name": "monetizeWindowId",
            "docs": [
              "Window whose frozen accumulator/factor/ratio sealed the open SELL cycle.",
              "Every SELL page must use this same window; otherwise a delayed page could",
              "mix accounting marks from overlapping cascades."
            ],
            "type": "u64"
          },
          {
            "name": "currentRoundId",
            "docs": [
              "Per-round deploy accounting so `max_deploy_per_round` binds across the",
              "keeper's several `crank_mine` calls in one round (grid-flatten = many calls)."
            ],
            "type": "u64"
          },
          {
            "name": "deployedThisRound",
            "type": "u64"
          },
          {
            "name": "deployWindowId",
            "docs": [
              "Per-WINDOW deploy accounting so `max_deploy_per_window` binds across all of the",
              "keeper's `crank_mine` calls within one dealing window (independent of the",
              "per-round cap). Reset when `deploy_window_id != config.current_window_id`."
            ],
            "type": "u64"
          },
          {
            "name": "deployedThisWindow",
            "type": "u64"
          },
          {
            "name": "cascadesInFlight",
            "docs": [
              "§5.5: count of windows currently mid-cascade (FROZEN..BATCH) — incremented at",
              "crank_freeze (a window starts cascading), decremented at crank_batch (BATCH→OPEN,",
              "cascade done). evacuate_claim_all requires this == 0, so the terminal drain can",
              "only run when EVERY window has fully cascaded — robust against any overlap depth",
              "(the single prev-window check missed current−2+; adversarial-verify F2)."
            ],
            "type": "u32"
          },
          {
            "name": "ppExitCohortsMidSettlement",
            "docs": [
              "Number of PP-exit cohorts with at least one, but not all, payouts completed.",
              "Sponsor top-ups are blocked while nonzero so an older overlapping cohort",
              "cannot be repriced between its members. Zero before the first and after the",
              "final payout keeps the recovery rail available at fair cohort boundaries."
            ],
            "type": "u32"
          },
          {
            "name": "stExitPromised",
            "docs": [
              "stORE this pool has already PROMISED to sealed-but-unpaid mining exits, per funding leg.",
              "",
              "AUDIT FIX (stall class): `seal_mining_waterfall_r3` sizes `st_pay`/`pp_pay` against the LIVE",
              "ST/PP balances but deliberately debits nothing (PAY debits per-exit). `crank_freeze` imposes",
              "no ordering on prior windows, so when the keeper falls behind, two windows cascade at once",
              "and each seals against the SAME undebited balance — then whichever pays second reverts with",
              "its sealed need fixed forever, stalling an irrevocable MINING_EXITS phase until someone",
              "refills the pool (at launch PP is refillable only through the cosigned top-up rail).",
              "state.rs' own docstring below claims \"no per-exit debit can overshoot the sealed",
              "reservation\" — true only within ONE cascade. These counters make the reservation real:",
              "bumped at seal, released as each exit pays, and subtracted from the balance the next seal",
              "(and cap-rebalance) is allowed to see."
            ],
            "type": "u64"
          },
          {
            "name": "ppExitPromised",
            "type": "u64"
          },
          {
            "name": "evacuated",
            "docs": [
              "Single-shot: the miner has been fully drained to custody. Guards re-entry and",
              "fail-closes the normal mining / freeze / deposit / exit paths."
            ],
            "type": "bool"
          },
          {
            "name": "evacStoreCustody",
            "docs": [
              "C0: the wrapped stORE parked in custody at evacuation — the FIXED pro-rata",
              "NUMERATOR for redemption (payout_i = ⌊basis_i·C0/basis_total⌋). NOT decremented",
              "per redeem (that would shrink the numerator against a fixed denominator and",
              "underpay later redeemers); the custody ATA balance is the physical remaining and",
              "Σ payouts ≤ C0 by flooring, so transfers are always covered."
            ],
            "type": "u64"
          },
          {
            "name": "evacBasisTotal",
            "docs": [
              "Aggregate net-stORE basis at evacuation = book_net_store(rewards0, refined0, …);",
              "the pro-rata redemption denominator (payout_i = ⌊basis_i · C / basis_total⌋)."
            ],
            "type": "u64"
          },
          {
            "name": "evacStakeBalance",
            "docs": [
              "Frozen native-ratio numerator/denominator at evacuation (per-holder basis_i)."
            ],
            "type": "u64"
          },
          {
            "name": "evacStoreSupply",
            "type": "u64"
          },
          {
            "name": "evacFactor",
            "docs": [
              "Frozen refining factor + mined-acc at evacuation (roll positions/books at redeem)."
            ],
            "type": "u128"
          },
          {
            "name": "evacUoreAcc",
            "type": "u128"
          },
          {
            "name": "evacCustodyBump",
            "docs": [
              "Cached custody-authority PDA bump (signs redemption payouts)."
            ],
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
      "name": "monetizeFoldPricedAtPar",
      "docs": [
        "A FOLD page whose PRICED share mint was unrepresentable in u64 (a degenerate, tiny-but-non-zero",
        "frozen mining NAV), so it was minted at PAR instead.",
        "",
        "Emitted by the audit fix that removed a hard `MathOverflow` here: reverting the page latched the",
        "cycle open forever (`monetize_in_flight`/`monetize_registered` never clear), which blocks mining,",
        "blocks `evacuate_claim_all`, and traps the holder (submit_withdraw rejects a position with",
        "pending proceeds). Par is pool-favor — the folder is UNDER-credited and other holders gain — but",
        "it signals a degenerate pool state the operator should investigate. Dormant while monetize is dark."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cycleId",
            "type": "u32"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "sI",
            "type": "u64"
          },
          {
            "name": "foldNav",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "monetizeFolded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "foldNav",
            "type": "u128"
          },
          {
            "name": "solFolded",
            "type": "u64"
          },
          {
            "name": "sharesMinted",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "monetizePageSkipped",
      "docs": [
        "A SELL page that was COUNTED but not sold, because the position had a pending locked exit",
        "(selling would reduce `uore_base` under a measured exit's cached leg and underflow at PAY).",
        "",
        "Emitted by the audit fix that replaced a fatal `require!` with skip-and-count: reverting the",
        "page made `processed == registered` unreachable and permanently bricked the protocol. The",
        "position is monetized in a later cycle; the keeper should treat this as normal progress, not",
        "an error. Dormant until `monetize_share_bps > 0`."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cycleId",
            "type": "u32"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "lockedShares",
            "type": "u64"
          },
          {
            "name": "processed",
            "docs": [
              "Page accounting, identical in meaning to `MonetizeSold`'s — a skipped page still COUNTS",
              "against the sealed `monetize_registered` snapshot, so `processed/registered` stays",
              "reconstructible off-chain from the two events together."
            ],
            "type": "u32"
          },
          {
            "name": "registered",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "monetizeResidualClaimed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cycleId",
            "type": "u32"
          },
          {
            "name": "intendedU",
            "type": "u64"
          },
          {
            "name": "intendedR",
            "type": "u64"
          },
          {
            "name": "claimedRewards",
            "type": "u64"
          },
          {
            "name": "claimedRefined",
            "type": "u64"
          },
          {
            "name": "storeCredited",
            "type": "u64"
          },
          {
            "name": "storeReserveAdded",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "monetizeSold",
      "docs": [
        "§5.6b monetization telemetry (dormant at launch). MonetizeStaged carries the",
        "realized-rate inputs (SOL in vs stORE released) the off-chain benchmark judges."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cycleId",
            "type": "u32"
          },
          {
            "name": "processed",
            "type": "u32"
          },
          {
            "name": "registered",
            "type": "u32"
          },
          {
            "name": "paid",
            "type": "u64"
          },
          {
            "name": "stPaid",
            "type": "u64"
          },
          {
            "name": "ppPaid",
            "type": "u64"
          },
          {
            "name": "claimPending",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "monetizeStaged",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "solIn",
            "type": "u64"
          },
          {
            "name": "storeReleased",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "navPerShareClamped",
      "docs": [
        "A pool's NAV-per-share hit the runaway ceiling at freeze and was CLAMPED.",
        "",
        "Audit fix (permanent-brick class): `nav_per_share` used to hard-error here, which made",
        "`crank_freeze` — and therefore the entire cascade — revert forever. Reachable with no attacker",
        "once every real holder has exited and only the unowned MIN_LIQUIDITY shares remain. Clamping",
        "keeps the protocol alive; this event is the operator's signal that a pool is in that degenerate",
        "state and needs attention (typically: re-seed it, or wind down)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "totalNav",
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
      "name": "opsWithdrawn",
      "docs": [
        "Explicit Team Ops Treasury withdrawal from the retained fee buckets."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "asset",
            "type": "u8"
          },
          {
            "name": "amount",
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
      "name": "order",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "kind",
            "type": "u8"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "amountOrShares",
            "docs": [
              "deposit: escrowed amount (lamports or stORE grams). withdraw: shares locked."
            ],
            "type": "u64"
          },
          {
            "name": "computedNeed",
            "docs": [
              "MINING EXIT only: the stORE need computed in the MEASURE pass, consumed in",
              "the PAY pass (so the uniform `fs` can be applied without recomputation)."
            ],
            "type": "u64"
          },
          {
            "name": "computedUOut",
            "docs": [
              "MINING EXIT only: the frozen (uORE, rORE) exit legs measured in the MEASURE pass.",
              "PAY consumes THESE rather than recomputing `exit_legs` off live position state — the",
              "position can be mutated between MEASURE and PAY (a same-owner deposit settling in an",
              "overlapping later window rolls it and adds shares, with no locked_shares interlock), so",
              "a recompute would diverge from the sealed `need` and break conservation (ST/PP pay",
              "value(measure legs) stORE while the books would only gain value(pay legs)). 0 for all",
              "non-mining-exit orders. (economics-audit conservation fix.)"
            ],
            "type": "u64"
          },
          {
            "name": "computedROut",
            "type": "u64"
          },
          {
            "name": "deliverOre",
            "docs": [
              "MINING EXIT only: the exit-delivery mode STAMPED AT SUBMIT from",
              "`config.exit_delivery_asset`, not read live at PAY.",
              "",
              "rev-11 F5. The ORE leg is delivered to the exiter's canonical ORE ATA, and nothing used to",
              "create that account — so absence (the normal state for a SOL depositor who has never held",
              "ORE) forfeited the whole token leg. `submit_withdraw` now provisions it at `payer = owner`,",
              "which only works if PAY honours the SAME mode SUBMIT provisioned for: a config flip landing",
              "between the two would otherwise ask PAY to deliver into an account that was never created.",
              "Stamping makes the order self-describing, so a flip affects only orders queued after it —",
              "consistent with every other quantity on an irrevocable order.",
              "",
              "This is a REQUEST, not a guarantee. `pay_mining_exit` degrades it to stORE delivery when ORE",
              "delivery is not serviceable (LITE disabled, or ST/PP funded part of the leg). Degrading",
              "rather than reverting is required because PAY advances `mining_paid` on an irrevocable",
              "phase; both ATAs are provisioned at submit, so stORE is always deliverable."
            ],
            "type": "bool"
          },
          {
            "name": "computedPerfFee",
            "docs": [
              "PERF FEE sealed at MEASURE, consumed at PAY. Same seal-then-consume discipline as",
              "`computed_need` / `computed_u_out`: a recompute at PAY could price against live,",
              "possibly deposit-mutated, position state."
            ],
            "type": "u64"
          },
          {
            "name": "feeBpsSnapshot",
            "docs": [
              "Fee rate SNAPSHOT taken when the order was submitted, for the `min(snapshot, live)` cap.",
              "",
              "Orders are irrevocable and forward-priced: a user commits before the applicable fee is",
              "knowable, and a cosigned raise landing between submission and settlement would otherwise",
              "charge a fee they never agreed to and cannot withdraw from. Prospective-only params narrow",
              "that window but do not close it. Comparing computed FEES (not bps) is what makes the",
              "enable-flags compose. Meaning by order kind: mining withdraw -> perf bps; staking entry ->",
              "entry bps; staking exit -> exit bps."
            ],
            "type": "u16"
          },
          {
            "name": "settled",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "orderSubmitted",
      "docs": [
        "An irrevocable order was queued for the next cutoff."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "kind",
            "type": "u8"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "amountOrShares",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pendingChange",
      "docs": [
        "A prospective config change awaiting its effect window. `field` is a",
        "`ConfigField` discriminant (see `config_params.rs`); `value` is the u64-encoded",
        "new value (bounds already validated at enqueue). Applied at `crank_open_window`",
        "once `current_window_id >= eta_window`."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "field",
            "type": "u16"
          },
          {
            "name": "value",
            "type": "u64"
          },
          {
            "name": "etaWindow",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "perfFeeCharged",
      "docs": [
        "A performance-fee charge, on either trigger point. One event shape for both so the off-chain",
        "P&L/HWM tracker reconciles against EVENTS, never against inferred state.",
        "",
        "`shares_burned` is 0 on the exit trigger (the shares are being redeemed anyway) and non-zero on",
        "the weekly pass, which is what distinguishes the two without a second event type."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stream",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "base",
            "docs": [
              "The quantity the rate was applied to: `s * frozen_nps` for an exit, the position's SOL-leg",
              "value for the weekly pass."
            ],
            "type": "u64"
          },
          {
            "name": "bps",
            "type": "u16"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          },
          {
            "name": "teamLeg",
            "type": "u64"
          },
          {
            "name": "ppLeg",
            "type": "u64"
          },
          {
            "name": "cycleId",
            "type": "u64"
          },
          {
            "name": "sharesBurned",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "perfPassOpened",
      "docs": [
        "A weekly perf pass opened: `k` and the mark are now SEALED for every page of this cycle.",
        "`positions` is the size of the work list the keeper has to page through."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cycleId",
            "type": "u64"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "nps",
            "type": "u128"
          },
          {
            "name": "positions",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "perfPositionSkipped",
      "docs": [
        "A position the pass could NOT collect from this cycle — all-or-nothing, no ratchet, merges into",
        "the next one. Distinctly labelled because the three causes need different operator responses:",
        "`vault_lamports` near `bankroll_floor` is a liquidity signal, while `free_shares < shares_needed`",
        "just means the holder has a sealed exit in flight and will pay at that exit instead."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "cycleId",
            "type": "u64"
          },
          {
            "name": "feeOwed",
            "type": "u64"
          },
          {
            "name": "sharesNeeded",
            "type": "u64"
          },
          {
            "name": "freeShares",
            "type": "u64"
          },
          {
            "name": "vaultLamports",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "phantomDustCeilingBreached",
      "docs": [
        "§5.2 LITE phantom telemetry (dormant). Observability so \"LITE suffices permanently\"",
        "stays continuously auditable rather than believed."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maxLeg",
            "type": "u64"
          },
          {
            "name": "ceiling",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "phantomMember",
      "docs": [
        "§5.2 LITE phantom buffer. PDA([PHANTOM_MEMBER_SEED]) singleton, pool-owned, EXCLUDED",
        "FROM ALL SHARE-PRICING (never read by nav / freeze marks / deposit / staking_due).",
        "Holds the accumulated net-zero per-leg composition swaps as SIGNED-MAGNITUDE u64",
        "legs — the whole point of clamp-to-buffer: Position/Book legs stay clean u64≥0, the",
        "signed residue is quarantined HERE where it cannot leak into ST/PP pricing.",
        "CONVENTION: phantom == physical_legs − Σ(user ledger legs). A leg ≥0 (is_debit=false)",
        "= pool holds MORE physical than users claim (surplus, pool-favor); <0 (is_debit=true)",
        "= users over-claim (the dangerous direction). Ideal steady state (0,0). Dormant."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uMag",
            "type": "u64"
          },
          {
            "name": "uIsDebit",
            "type": "bool"
          },
          {
            "name": "rMag",
            "type": "u64"
          },
          {
            "name": "rIsDebit",
            "type": "bool"
          },
          {
            "name": "factorCheckpoint",
            "type": "u128"
          },
          {
            "name": "lastRemarkWindow",
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
      "name": "phantomRemarked",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uMag",
            "type": "u64"
          },
          {
            "name": "uIsDebit",
            "type": "bool"
          },
          {
            "name": "rMag",
            "type": "u64"
          },
          {
            "name": "rIsDebit",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "poolsInitialized",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "storeMint",
            "type": "pubkey"
          },
          {
            "name": "miningAuthority",
            "type": "pubkey"
          },
          {
            "name": "settlementAuthority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "position",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "lockedShares",
            "docs": [
              "Shares committed to unsettled withdraw orders (escrow lock). Available =",
              "`shares - locked_shares`; a withdraw order locks here at submit and burns",
              "at settle, so a position can never over-commit across concurrent windows."
            ],
            "type": "u64"
          },
          {
            "name": "uoreBase",
            "type": "u64"
          },
          {
            "name": "roreStock",
            "type": "u64"
          },
          {
            "name": "uoreAccCkpt",
            "type": "u128"
          },
          {
            "name": "factorCkpt",
            "type": "u128"
          },
          {
            "name": "pendingMonetizeProceeds",
            "docs": [
              "§5.6b monetization (dormant): this position's own_proceeds from SELLs not yet",
              "folded into shares (stORE-value). Recorded at the SELL crank, materialized to",
              "mining shares at the FOLD crank — EAGER, because a single lazy per-share factor",
              "cannot express `own_proceeds = f·annex` (per-annex, and multiplicative monetize",
              "does not commute with additive mining). 0 while dormant."
            ],
            "type": "u64"
          },
          {
            "name": "monetizeCycleCkpt",
            "docs": [
              "§5.6b: the last SELL cycle this position was swept in (double-sell guard — a",
              "position sells at most once per cycle). 0 while dormant."
            ],
            "type": "u32"
          },
          {
            "name": "perfHwmNps",
            "docs": [
              "PERFORMANCE-FEE HIGH-WATER MARK, same 1e18 scale as `NAV_SCALE`.",
              "",
              "THREE MINTING PATHS, THREE RULES -- and they are not interchangeable:",
              "mint    := the settlement NPS of the minting window",
              "top-up  := (s_old*hwm_old + s_new*nps_now) / (s_old + s_new)   -- deposits are BASIS",
              "fold    := hwm * s_old / s_new                                 -- folds are GAIN",
              "",
              "The fold rule is what makes this fee collect anything at all. The strategy's SOL leg LOSES",
              "on average (-0.58% of budget) and the entire profit arrives through the ORE leg, i.e.",
              "through fold mints (+1.04%). So NPS DECLINES between folds and gain arrives as share COUNT,",
              "not as price. Under the top-up weighting a fold-NAV watermark tracks NPS from above and the",
              "excess never turns positive: measured over a 26-week path, that rule collects 0.0% of the",
              "ground-truth fee -- the entire revenue line, silently gone. Dilution conserves the watermark",
              "VALUE (`s * hwm`) through the mint, which is what converts a value-watermark into a",
              "per-share one, and it reproduces the backtested ground truth exactly, including on paths",
              "that mix real deposits in."
            ],
            "type": "u128"
          },
          {
            "name": "perfCycleCkpt",
            "docs": [
              "Last perf cycle id this position was charged in -- paging idempotence, exactly like",
              "`monetize_cycle_ckpt`. A position is charged at most once per cycle."
            ],
            "type": "u64"
          },
          {
            "name": "monetizeSkips",
            "docs": [
              "§5.6b: consecutive SELL cycles this position was SKIPPED in for a pending locked exit.",
              "A skip is a DEFERRAL, not an exemption — the next sweep that CAN touch this position",
              "applies the compounded make-up fraction `1-(1-f)^(skips+1)`, capped by",
              "MONETIZE_SKIP_CATCHUP_MAX. Always 0 while monetization is dormant."
            ],
            "type": "u16"
          },
          {
            "name": "pendingDepositOrders",
            "docs": [
              "Unsettled DEPOSIT orders that require this Position account to still exist.",
              "Bumped at `submit_mining_deposit`, dropped on BOTH exits of",
              "`settle_mining_deposit` (mint AND refund), and required to be 0 by",
              "`close_mining_position`.",
              "",
              "WHY (audit fix, permanent-wedge class): a deposit order lives on its own Order",
              "PDA and leaves NO trace on the Position, while a brand-new Position is all-zero",
              "— so it satisfied every emptiness check `close_mining_position` makes. Any",
              "third party could reap a first-time depositor's Position while their order was",
              "still queued; `settle_mining_deposit` then failed Anchor account resolution",
              "FOREVER, so `processed_deposits` could never reach `registered_deposits`, the",
              "irrevocable DEPOSITS phase never advanced, `cascades_in_flight` stayed pinned",
              ">= 1, and (via `require_accounting_idle` / the evacuate gate) mining AND the",
              "terminal evacuation hatch were bricked permanently for ~0.0008 SOL.",
              "`locked_shares` already covers the WITHDRAW side of the same hazard; this is",
              "its deposit-side twin. Window-scoped counters cannot substitute: an order may",
              "sit in an OLDER still-cascading window that this instruction never sees."
            ],
            "type": "u32"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ppExitNotice",
      "docs": [
        "§5.4 PP epoch-exit notice. PDA([PP_EXIT_NOTICE_SEED, owner]). A PP holder files a",
        "notice, waits `pp_exit_notice_windows`, and may then `submit_pp_exit` at an epoch",
        "boundary. Consumed (closed) at submit_pp_exit."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "submitWindow",
            "type": "u64"
          },
          {
            "name": "eligibleWindow",
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
      "name": "ppExitNoticeSubmitted",
      "docs": [
        "§5.4 PP epoch-exit telemetry."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "submitWindow",
            "type": "u64"
          },
          {
            "name": "eligibleWindow",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ppExitSettled",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "sharesBurned",
            "type": "u64"
          },
          {
            "name": "storeOut",
            "type": "u64"
          },
          {
            "name": "solOut",
            "type": "u64"
          },
          {
            "name": "due",
            "docs": [
              "rev-13: the FULL entitlement before any branch-(A) haircut.",
              "",
              "Without this, a haircut exit was byte-identical on the wire to a full payment: `store_out`",
              "already reports the clamped figure and `ExitTokenLegForfeited` fires only on the ATA arm, so",
              "an indexer could not tell \"paid in full\" from \"paid less because PP was illiquid\". Anyone",
              "reconciling holder statements would have silently under-counted what was owed.",
              "`due > store_out` is exactly the haircut."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "ppOreWrapped",
      "docs": [
        "rev-13 #5 hop 2. PP's ORE wrapped into stORE natively (storeD7). `store_credited` is the",
        "MEASURED delta, not a modelled conversion — the live wrap lands slightly below the model."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "oreIn",
            "type": "u64"
          },
          {
            "name": "storeCredited",
            "type": "u64"
          },
          {
            "name": "newStoreInVault",
            "type": "u64"
          },
          {
            "name": "keeper",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "ppSolConverted",
      "docs": [
        "rev-13 #5. PP's accrued fee SOL converted to ORE through Jupiter v6, reported as MEASURED",
        "deltas rather than route-claimed amounts. `lamports_in` is what the route actually spent, so an",
        "under-spending route is visible rather than silently absorbed."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lamportsIn",
            "type": "u64"
          },
          {
            "name": "oreOut",
            "type": "u64"
          },
          {
            "name": "minOreOut",
            "type": "u64"
          },
          {
            "name": "feeSolRemaining",
            "type": "u64"
          },
          {
            "name": "keeper",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "protocolLiquidityToppedUp",
      "docs": [
        "A cosigned sponsor / recovery top-up added liquid stORE backing to the Protocol Pool",
        "without minting PP shares. Restricted to PP whitelist mode so it cannot silently act",
        "as a public-holder subsidy later."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "funder",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "newStoreInVault",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "protocolPool",
      "docs": [
        "Protocol Pool (aORE). PDA([PROTOCOL_POOL_SEED]). The backstop. No idle assets:",
        "SOL income → liquid-staked; all primary flows are in-kind ETF baskets."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "storeInVault",
            "type": "u64"
          },
          {
            "name": "solSleeve",
            "type": "u64"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "book",
            "type": {
              "defined": {
                "name": "book"
              }
            }
          },
          {
            "name": "feeSolAccrued",
            "type": "u64"
          },
          {
            "name": "bump",
            "docs": [
              "Epoch-exit bookkeeping: the window at which a notice becomes eligible."
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "referralClaimed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "referrer",
            "type": "pubkey"
          },
          {
            "name": "paid",
            "type": "u64"
          },
          {
            "name": "cumulative",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "referralConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "settlementAuthority",
            "type": "pubkey"
          },
          {
            "name": "swept",
            "docs": [
              "Cumulative lamports already swept to fee_bucket (anti-replay watermark)."
            ],
            "type": "u64"
          },
          {
            "name": "referralTreasuryBump",
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
      "name": "referralSwept",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "targetCumulative",
            "type": "u64"
          },
          {
            "name": "swept",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "referrerState",
      "docs": [
        "Per-referrer claim watermark. PDA([b\"referrer\", referrer])."
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
      "name": "stakingExitFeeCharged",
      "docs": [
        "A staking-pool EXIT fee charge. stORE-denominated: the PP leg stays in stORE with PP (no",
        "conversion, no oracle) and the team leg goes to the fee store."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "due",
            "type": "u64"
          },
          {
            "name": "bps",
            "type": "u16"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          },
          {
            "name": "teamLeg",
            "type": "u64"
          },
          {
            "name": "ppLeg",
            "type": "u64"
          },
          {
            "name": "dust",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "stakingExitSettled",
      "docs": [
        "A staker exit settled (cascade step 3, post-advance)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "sharesBurned",
            "type": "u64"
          },
          {
            "name": "storeOut",
            "type": "u64"
          },
          {
            "name": "ppSubentryStore",
            "type": "u64"
          },
          {
            "name": "branch",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "stakingPool",
      "docs": [
        "Staking Pool (dstORE). PDA([STAKING_POOL_SEED]). Holds NO SOL. Single-NAV",
        "fungible (values its book in stORE via the on-chain ratio)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "storeInVault",
            "type": "u64"
          },
          {
            "name": "totalShares",
            "type": "u64"
          },
          {
            "name": "book",
            "type": {
              "defined": {
                "name": "book"
              }
            }
          },
          {
            "name": "capBreachWindows",
            "docs": [
              "D1: consecutive windows `crank_cap_rebalance` was CLAMPED (PP couldn't buy the",
              "full overflow). Increments each clamped window, resets to 0 the first clean one."
            ],
            "type": "u16"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "unclaimed",
      "docs": [
        "rev-13. The single destination for every undeliverable payout, across all rails.",
        "",
        "WHY THIS EXISTS. Before this, seven rails did five different things with the same situation",
        "(credit survivors / route to the fee bucket / forfeit to the funding pools / cancel and return",
        "shares / refuse and retry), and the two deposit-refund siblings disagreed with each other. That",
        "divergence is the single most-churned defect in the project's history. `contracts_guide/` is",
        "SILENT on the question, which is why it kept being re-decided ad hoc.",
        "",
        "The ratified policy: HOLD the value, on its own ledger, in its own custody account. Two cosigned",
        "admin rails are the only way out — `claim_unclaimed` pays a verified claimant, and",
        "`sweep_unclaimed_to_pool` claws an explicit amount back into a pool for all holders.",
        "",
        "These balances are NOT part of any pool's NAV and must never be. The assets backing them live in",
        "a separate custody account precisely so that no share-pricing path can reach them."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "storeOwed",
            "docs": [
              "stORE grams held for beneficiaries we could not pay. Backed 1:1 by the unclaimed custody ATA."
            ],
            "type": "u64"
          },
          {
            "name": "oreOwedU",
            "docs": [
              "ORE annex held for a beneficiary whose ORE-delivery target was unusable.",
              "",
              "NOT a token balance — no ORE moves. On the ORE-delivery path the exiter is paid raw ORE",
              "claimed off the SHARED MINER, so an undeliverable leg means the claim simply never fires and",
              "the ORE stays in the miner exactly where it already was. What must be preserved is the",
              "ENTITLEMENT, so the position's `(u, r)` legs are moved here instead of being handed to the",
              "PP book. Conservation is exact and unchanged: the annex leaves the Position and lands here,",
              "so `Sum(all book entries + unclaimed) == miner physical` holds identically to before."
            ],
            "type": "u64"
          },
          {
            "name": "oreOwedR",
            "type": "u64"
          },
          {
            "name": "solOwed",
            "docs": [
              "Lamports held for beneficiaries we could not pay. Backed by the custody authority PDA."
            ],
            "type": "u64"
          },
          {
            "name": "recordedCount",
            "docs": [
              "Telemetry: how many times value has been recorded, paid out, and clawed back. Lets an",
              "indexer reconcile the off-chain per-beneficiary picture against on-chain totals."
            ],
            "type": "u64"
          },
          {
            "name": "paidCount",
            "type": "u64"
          },
          {
            "name": "clawedCount",
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
      "name": "unclaimedClawedBack",
      "docs": [
        "rev-13. A cosigned clawback of unclaimed value into a pool, distributed to all its holders by",
        "raising that pool's per-share backing. The safety hatch for value nobody ever claims."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "asset",
            "type": "u8"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "remainingOwed",
            "type": "u64"
          },
          {
            "name": "cosigner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "unclaimedOreClawedBack",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "uAmount",
            "type": "u64"
          },
          {
            "name": "rAmount",
            "type": "u64"
          },
          {
            "name": "remainingU",
            "type": "u64"
          },
          {
            "name": "remainingR",
            "type": "u64"
          },
          {
            "name": "cosigner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "unclaimedOreRecorded",
      "docs": [
        "rev-13. An ORE-delivery exit could not reach its beneficiary, so the (u, r) ANNEX — not a token",
        "— is held for them on the unclaimed ledger. No ORE moves: on this path the exiter would have",
        "been paid raw ORE claimed off the shared miner, so an undelivered leg simply means the claim",
        "never fired and the ORE is still in the miner. `restore_unclaimed_ore` puts it back on a",
        "Position; `sweep_unclaimed_ore_to_pool` is the safety hatch."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "type": "pubkey"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "uOwed",
            "type": "u64"
          },
          {
            "name": "rOwed",
            "type": "u64"
          },
          {
            "name": "newTotalU",
            "type": "u64"
          },
          {
            "name": "newTotalR",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "unclaimedOreRestored",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "claimant",
            "type": "pubkey"
          },
          {
            "name": "uRestored",
            "type": "u64"
          },
          {
            "name": "rRestored",
            "type": "u64"
          },
          {
            "name": "remainingU",
            "type": "u64"
          },
          {
            "name": "remainingR",
            "type": "u64"
          },
          {
            "name": "cosigner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "unclaimedPaidOut",
      "docs": [
        "rev-13. A cosigned payout from the unclaimed pot to a claimant the operators verified off-chain."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "claimant",
            "type": "pubkey"
          },
          {
            "name": "asset",
            "type": "u8"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "remainingOwed",
            "type": "u64"
          },
          {
            "name": "cosigner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "unclaimedRecorded",
      "docs": [
        "rev-13. Value could not be delivered to its beneficiary and has been moved into the segregated",
        "unclaimed pot. This event is the ONLY on-chain record of WHO is owed WHAT — the pot itself keeps",
        "totals only — so the indexer reconstructs the per-beneficiary picture from these, and",
        "`claim_unclaimed` verification is done against that reconstruction off-chain."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "beneficiary",
            "type": "pubkey"
          },
          {
            "name": "poolId",
            "type": "u8"
          },
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "asset",
            "docs": [
              "0 = SOL, 1 = stORE."
            ],
            "type": "u8"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "rail",
            "docs": [
              "Which rail could not deliver, so an operator can tell a broken ATA from an absent one."
            ],
            "type": "u8"
          },
          {
            "name": "newTotalOwed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "whitelistEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "window",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "phase",
            "type": "u8"
          },
          {
            "name": "cutoffTs",
            "type": "i64"
          },
          {
            "name": "frozenMiningNps",
            "type": "u128"
          },
          {
            "name": "frozenStakingNps",
            "type": "u128"
          },
          {
            "name": "frozenProtocolNps",
            "docs": [
              "PP share price frozen at cutoff = (store_in_vault + pp_book_net) / total_shares",
              "(stORE side; the SOL-sleeve leg is dormant at launch). Drives settle_protocol_deposit."
            ],
            "type": "u128"
          },
          {
            "name": "frozenFactor",
            "type": "u128"
          },
          {
            "name": "frozenUoreAcc",
            "docs": [
              "The mined-leg accumulator frozen at cutoff. Positions in THIS window's",
              "cascade roll against (frozen_uore_acc, frozen_factor) — NOT the live pool",
              "globals — so overlapping cascades price consistently even if `crank_freeze`",
              "advances the pool globals for a later window mid-cascade (review fix)."
            ],
            "type": "u128"
          },
          {
            "name": "frozenRatioStakeBalance",
            "type": "u64"
          },
          {
            "name": "frozenRatioStoreSupply",
            "type": "u64"
          },
          {
            "name": "miningTotalNeed",
            "type": "u64"
          },
          {
            "name": "miningFsBps",
            "type": "u32"
          },
          {
            "name": "miningSealed",
            "type": "bool"
          },
          {
            "name": "miningStPay",
            "docs": [
              "The sealed ST payment target (pp_pay = mining_total_need - mining_st_pay).",
              "The PAY pass makes the per-exit stORE debits sum EXACTLY to st_pay/pp_pay —",
              "the LAST exit absorbs the floor residual — so no per-exit debit can overshoot",
              "the sealed reservation and underflow the PP ledger (economics confirmation fix)."
            ],
            "type": "u64"
          },
          {
            "name": "miningStPaid",
            "type": "u64"
          },
          {
            "name": "miningPpPaid",
            "type": "u64"
          },
          {
            "name": "miningFsPpBps",
            "docs": [
              "Rung-3 seal outputs. `mining_fs_bps` is fs_st (ST's book+pay fraction);",
              "`mining_fs_pp_bps` is fs_pp (PP's); the remaining `1 − fs_st − fs_pp` is the",
              "self-claim fraction. `mining_claim_residual` is the aggregate stORE that must",
              "be sourced by claiming the exiters' own slices off the miner (0 in the v1",
              "PP-seeded path). `mining_claim_paid` tracks the PAY-pass self-claim total."
            ],
            "type": "u32"
          },
          {
            "name": "miningClaimResidual",
            "type": "u64"
          },
          {
            "name": "miningClaimPaid",
            "type": "u64"
          },
          {
            "name": "registeredDeposits",
            "type": "u32"
          },
          {
            "name": "processedDeposits",
            "type": "u32"
          },
          {
            "name": "registeredMiningExits",
            "type": "u32"
          },
          {
            "name": "processedMiningExits",
            "type": "u32"
          },
          {
            "name": "miningPaid",
            "type": "u32"
          },
          {
            "name": "registeredStakingExits",
            "type": "u32"
          },
          {
            "name": "processedStakingExits",
            "type": "u32"
          },
          {
            "name": "registeredPpExits",
            "docs": [
              "§5.4 PP epoch-exit counters (present only on epoch-boundary windows)."
            ],
            "type": "u32"
          },
          {
            "name": "processedPpExits",
            "type": "u32"
          },
          {
            "name": "rentPayer",
            "docs": [
              "The key that FUNDED this Window's rent (`crank_freeze`'s cranker; `admin` for window 0).",
              "`close_window` returns the rent HERE — not to the closer, which would turn housekeeping",
              "into a race prize, and not to the fee bucket, which made every single window a permanent,",
              "uncompensated transfer from whoever is keeping the protocol alive to the treasury",
              "(~20.9 SOL/yr at the 1h cadence). Finding #9, site 1."
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "windowClosed",
      "docs": [
        "A fully-cascaded window was closed and its rent reclaimed to the fee bucket.",
        "",
        "Audit fix (fund-lock class): `crank_batch` documented a `close_window` that was never built, so",
        "every window's ~0.0024 SOL of cranker rent was permanently unrecoverable (~20.7 SOL/year at the",
        "1h launch cadence, monotonically growing, unreachable even by terminal evacuation)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "windowId",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "windowFrozen",
      "docs": [
        "FREEZE captured the marks for a window (harvest-first)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "miningNps",
            "type": "u128"
          },
          {
            "name": "factor",
            "type": "u128"
          },
          {
            "name": "ratioStakeBalance",
            "type": "u64"
          },
          {
            "name": "ratioStoreSupply",
            "type": "u64"
          },
          {
            "name": "harvestedSol",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "windowPhaseAdvanced",
      "docs": [
        "A cascade phase advanced (processed == registered)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "fromPhase",
            "type": "u8"
          },
          {
            "name": "toPhase",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
