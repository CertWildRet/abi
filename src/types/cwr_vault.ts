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
      "name": "claimWithdraw",
      "discriminator": [
        232,
        89,
        154,
        117,
        16,
        204,
        182,
        224
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
          "name": "escrowAta",
          "writable": true
        },
        {
          "name": "withdrawRequest",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true,
          "relations": [
            "withdrawRequest"
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
      "args": []
    },
    {
      "name": "deposit",
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
          "docs": [
            "SOL-only PDA. System-owned, derived; lamports tracked off this account."
          ],
          "writable": true
        },
        {
          "name": "shareMint",
          "writable": true
        },
        {
          "name": "escrowAta",
          "writable": true
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
          "name": "feeRecipient",
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
          "name": "operatorWallet",
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
      "name": "requestWithdraw",
      "discriminator": [
        137,
        95,
        187,
        96,
        250,
        138,
        31,
        182
      ],
      "accounts": [
        {
          "name": "bucket",
          "writable": true
        },
        {
          "name": "userShareAta",
          "writable": true
        },
        {
          "name": "escrowAta",
          "writable": true
        },
        {
          "name": "withdrawRequest",
          "writable": true
        },
        {
          "name": "user",
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
          "name": "shares",
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
      "name": "withdrawRequest",
      "discriminator": [
        186,
        239,
        174,
        191,
        189,
        13,
        47,
        196
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
      "name": "claimWithdrawEvent",
      "discriminator": [
        194,
        116,
        164,
        10,
        49,
        123,
        24,
        113
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
      "name": "requestWithdrawEvent",
      "discriminator": [
        8,
        19,
        138,
        15,
        73,
        48,
        140,
        155
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
      "name": "bucketPaused",
      "msg": "Bucket is paused"
    },
    {
      "code": 6003,
      "name": "bucketAlreadyInitialized",
      "msg": "Bucket already initialized"
    },
    {
      "code": 6004,
      "name": "invalidBucketId",
      "msg": "Invalid bucket id"
    },
    {
      "code": 6005,
      "name": "depositBelowMinimum",
      "msg": "Deposit amount below bucket minimum"
    },
    {
      "code": 6006,
      "name": "depositExceedsCap",
      "msg": "Deposit would exceed bucket cap"
    },
    {
      "code": 6007,
      "name": "zeroShares",
      "msg": "Withdraw shares must be greater than zero"
    },
    {
      "code": 6008,
      "name": "lockupActive",
      "msg": "Lockup has not elapsed"
    },
    {
      "code": 6009,
      "name": "outstandingWithdraw",
      "msg": "Outstanding withdraw request already exists"
    },
    {
      "code": 6010,
      "name": "noOutstandingWithdraw",
      "msg": "No outstanding withdraw request"
    },
    {
      "code": 6011,
      "name": "insufficientVaultSol",
      "msg": "Insufficient SOL in vault to fulfill withdraw — backend must top up"
    },
    {
      "code": 6012,
      "name": "insufficientPullable",
      "msg": "Insufficient SOL in vault to pull"
    },
    {
      "code": 6013,
      "name": "mathOverflow",
      "msg": "Math overflow"
    },
    {
      "code": 6014,
      "name": "mathUnderflow",
      "msg": "Math underflow"
    },
    {
      "code": 6015,
      "name": "badPerformanceFee",
      "msg": "Performance fee out of range"
    },
    {
      "code": 6016,
      "name": "navJumpExceeded",
      "msg": "NAV update would move share price beyond allowed jump bounds"
    },
    {
      "code": 6017,
      "name": "navRateLimited",
      "msg": "NAV update too soon after last update"
    },
    {
      "code": 6018,
      "name": "badLockup",
      "msg": "Lockup duration out of allowed range"
    },
    {
      "code": 6019,
      "name": "emptyVault",
      "msg": "Cannot operate on empty vault"
    },
    {
      "code": 6020,
      "name": "bucketNotEmpty",
      "msg": "Bucket has outstanding shares — cannot reinitialize"
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
            "name": "escrowBump",
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
            "name": "escrowAta",
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
            "name": "pendingWithdrawShares",
            "type": "u64"
          },
          {
            "name": "highWaterNavPerShare",
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
            "name": "lockupSeconds",
            "type": "i64"
          },
          {
            "name": "performanceFeeBps",
            "type": "u16"
          },
          {
            "name": "maxNavJumpUpBps",
            "type": "u16"
          },
          {
            "name": "maxNavDropDownBps",
            "type": "u16"
          },
          {
            "name": "minNavUpdateInterval",
            "type": "i64"
          },
          {
            "name": "minDeposit",
            "type": "u64"
          },
          {
            "name": "depositCap",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "claimWithdrawEvent",
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
            "name": "payoutLamports",
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
      "name": "requestWithdrawEvent",
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
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "unlockAt",
            "type": "i64"
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
      "name": "withdrawRequest",
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
            "name": "shares",
            "type": "u64"
          },
          {
            "name": "requestedAt",
            "type": "i64"
          },
          {
            "name": "unlockAt",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
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
      "name": "escrowSeed",
      "type": "bytes",
      "value": "[101, 115, 99, 114, 111, 119]"
    },
    {
      "name": "shareMintSeed",
      "type": "bytes",
      "value": "[115, 104, 97, 114, 101, 95, 109, 105, 110, 116]"
    },
    {
      "name": "treasurySeed",
      "type": "bytes",
      "value": "[116, 114, 101, 97, 115, 117, 114, 121]"
    },
    {
      "name": "withdrawSeed",
      "type": "bytes",
      "value": "[119, 105, 116, 104, 100, 114, 97, 119]"
    }
  ]
};
