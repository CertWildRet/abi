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
        "BATCH: finalize the window (BATCH → OPEN). Crystallization hooks here."
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
        "§5.6b ABORT — admin-gated recovery for a keeper-dead cycle (admin settles the SOL,",
        "takes the custody stORE, unsticks so FOLD can complete). Conserving."
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
        "live position's ORE annex to the Staking Pool at the net mark. DORMANT (no-op)",
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
            "Read-only: supplies the current ORE factor mirror for the phantom + book roll."
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
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "exiter"
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
          "name": "cranker",
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
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "exiter"
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
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "exiter"
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
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "exiter"
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
          "writable": true,
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
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "exiter"
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
            "rather than left to wedge the DEPOSITS phase forever."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "owner"
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
            "the PP H1 refund). init_if_needed so a first-time depositor is still refundable."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "owner"
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
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "exiter"
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
      "name": "batchCrystallized",
      "discriminator": [
        91,
        0,
        110,
        197,
        181,
        191,
        100,
        14
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
      "name": "treasuryAdvance",
      "discriminator": [
        149,
        129,
        85,
        229,
        154,
        74,
        94,
        125
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
      "msg": "Protocol Pool recovery top-ups without share minting are only allowed while pp_mode = WHITELIST"
    },
    {
      "code": 6041,
      "name": "protocolTopUpWindDownForbidden",
      "msg": "Protocol Pool sponsor top-ups are forbidden once terminal wind-down is armed"
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
      "name": "monetizeCycleOpen",
      "msg": "a monetize cycle is already open (pending proceeds or staged SOL); one cycle at a time"
    },
    {
      "code": 6067,
      "name": "monetizeBelowMinOut",
      "msg": "the measured swap return is below the client min-out floor; abort and retain, never stage a bad swap"
    },
    {
      "code": 6068,
      "name": "monetizeFoldPositionLocked",
      "msg": "cannot fold monetize proceeds into a position with a pending (locked) exit — its cached exit leg would over-commit uore_base; retry after the exit settles"
    },
    {
      "code": 6069,
      "name": "positionNotEmpty",
      "msg": "position is not empty (shares / locked / uORE / rORE / pending must all be 0 to close)"
    },
    {
      "code": 6070,
      "name": "externalFeeRebateOutstanding",
      "msg": "external-fee rebate remains claimable; claim it before clearing the exemption or closing the position"
    },
    {
      "code": 6071,
      "name": "externalFeeRebateReserveMismatch",
      "msg": "external-fee rebate reserve is inconsistent with fee-bucket custody"
    },
    {
      "code": 6072,
      "name": "darkPathInterlock",
      "msg": "dark money path is missing a required safety interlock"
    },
    {
      "code": 6073,
      "name": "ppExitNoticeMissing",
      "msg": "no PP exit notice on file; submit_pp_exit_notice first and wait the notice period"
    },
    {
      "code": 6074,
      "name": "ppExitNoticeNotAged",
      "msg": "PP exit notice has not aged the required pp_exit_notice_windows yet"
    },
    {
      "code": 6075,
      "name": "ppExitNotAtEpochBoundary",
      "msg": "PP exits are only allowed at an epoch boundary (window_id % epoch_len_windows == 0)"
    },
    {
      "code": 6076,
      "name": "ppExitIlliquid",
      "msg": "Protocol Pool is illiquid for this exit right now; re-notice and retry next epoch boundary"
    },
    {
      "code": 6077,
      "name": "phantomConservationBreak",
      "msg": "LITE phantom per-leg conservation check failed"
    },
    {
      "code": 6078,
      "name": "remarkNotDue",
      "msg": "phantom re-mark is not due yet (rate-limited to once per window)"
    },
    {
      "code": 6079,
      "name": "alreadyEvacuated",
      "msg": "the mining miner has already been evacuated (single-shot terminal drain)"
    },
    {
      "code": 6080,
      "name": "notEvacuated",
      "msg": "the pool has not been evacuated; this action is only valid after evacuate_claim_all"
    },
    {
      "code": 6081,
      "name": "windDownRequired",
      "msg": "terminal wind-down is not armed; set the wind_down switch (cosigned) first"
    },
    {
      "code": 6082,
      "name": "evacCycleBusy",
      "msg": "the cascade is not quiescent (wrong phase, staged monetize, or in-flight deploy) — cannot evacuate mid-cycle"
    },
    {
      "code": 6083,
      "name": "notEvacAuthority",
      "msg": "signer is neither an admin cosigner nor the program upgrade authority"
    },
    {
      "code": 6084,
      "name": "evacRedemptionsPending",
      "msg": "custody dust sweep blocked: not every pool has fully redeemed (holders still owed custody)"
    },
    {
      "code": 6085,
      "name": "cosignerIsAdmin",
      "msg": "the admin key may not also be the fee-holder cosigner; the second factor must be a DISTINCT key (separation of duties)"
    },
    {
      "code": 6086,
      "name": "feeCosignerSetCollapse",
      "msg": "set_fee_schedule may not evict a majority of the current fee-cosigner set in one cosigned tx"
    },
    {
      "code": 6087,
      "name": "notUpgradeAuthority",
      "msg": "initialize is gated to the program's upgrade authority (the deployer); the signer is not it"
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
      "name": "batchCrystallized",
      "docs": [
        "Crystallization (batch): a fractional whole-miner claim + wrap into a pool vault."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "claimBps",
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
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "wrappedStore",
            "type": "u64"
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
              "Mirror of ORE `treasury.miner_rewards_factor` (2^64 frac). Re-read AFTER",
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
              "§5.6b: stORE the pool HOLDS after SELL, before the off-chain swap (ST paid it in)."
            ],
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
      "name": "treasuryAdvance",
      "docs": [
        "A treasury advance (§5.6) routed the pool's own book to ST (dormant at launch)."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "windowId",
            "type": "u64"
          },
          {
            "name": "advancedU",
            "type": "u64"
          },
          {
            "name": "advancedR",
            "type": "u64"
          },
          {
            "name": "storeCredited",
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
            "name": "bump",
            "type": "u8"
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
