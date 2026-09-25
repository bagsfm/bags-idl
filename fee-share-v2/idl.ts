/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/bags_fee_share.json`.
 */
export type BagsFeeShare = {
  "address": "FEE2tBhCKAt7shrod19QttSVREUYPiyMzoku1mL1gqVK",
  "metadata": {
    "name": "bagsFeeShare",
    "version": "2.10.0",
    "spec": "0.1.0",
    "description": "Bags Fee Share V2 Program"
  },
  "instructions": [
    {
      "name": "adminRefundLedger",
      "docs": [
        "Credit a config ledger with explicit per-claimer amounts funded by `funder`.",
        "One-shot via `refund_flag`. Withdrawal stays on `claim_user`."
      ],
      "discriminator": [
        245,
        116,
        19,
        153,
        172,
        230,
        208,
        153
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin authorizer (`ProgramConfig.admin`)"
          ],
          "signer": true
        },
        {
          "name": "funder",
          "docs": [
            "WSOL source signer; may be the same key as `admin`"
          ],
          "signer": true
        },
        {
          "name": "funderQuoteAta",
          "docs": [
            "Funder's WSOL token account"
          ],
          "writable": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose ledger is credited"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA) receiving the credit"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "docs": [
            "Authority's WSOL ATA (destination)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL)"
          ],
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "pool",
          "docs": [
            "DAMM v2 pool for this base/quote pair (protocol-claim event field)"
          ]
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "adminRefundLedgerParameters"
            }
          }
        }
      ]
    },
    {
      "name": "adminRefundUserVault",
      "docs": [
        "Deposit funded WSOL into a per-user vault. Withdrawal stays on `claim_user_vault`."
      ],
      "discriminator": [
        179,
        66,
        215,
        52,
        249,
        211,
        63,
        56
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin authorizer and rent payer for vault / ATA init"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "funder",
          "docs": [
            "WSOL source signer; may be the same key as `admin`"
          ],
          "signer": true
        },
        {
          "name": "funderQuoteAta",
          "docs": [
            "Funder's WSOL token account"
          ],
          "writable": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "user"
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (read-only; identifies the token in the event)"
          ],
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee share authority (read-only; identifies the token in the event)"
          ],
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
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "userFeeVault",
          "docs": [
            "Vault PDA. Initialized on first deposit; subsequent calls skip init."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  102,
                  101,
                  101,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "userVaultQuoteAta",
          "docs": [
            "Vault's WSOL ATA (destination)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "userFeeVault"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL)"
          ],
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "adminRefundUserVaultParameters"
            }
          }
        }
      ]
    },
    {
      "name": "assertManagerChangeReady",
      "docs": [
        "Read-only check of allocation phase, digest, deadline and kickoff drainage."
      ],
      "discriminator": [
        57,
        25,
        227,
        213,
        238,
        77,
        186,
        99
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "programConfig",
          "address": "8SrW8DjZcAPAWYSdSu468LKLQ7WDRaEUsswNvHCiAYs"
        },
        {
          "name": "feeShareConfig",
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
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
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "partner",
          "optional": true
        },
        {
          "name": "partnerConfig",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "deployerConfig",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "assertManagerChangeReadyParameters"
            }
          }
        }
      ]
    },
    {
      "name": "assertTransferFeeLimit",
      "docs": [
        "Assert the active epoch's transfer fee is within both ceilings. The mint must",
        "remain readonly for the entire transaction; invoke this directly before payouts."
      ],
      "discriminator": [
        135,
        134,
        145,
        133,
        72,
        121,
        207,
        228
      ],
      "accounts": [
        {
          "name": "mint"
        }
      ],
      "args": [
        {
          "name": "basisPoints",
          "type": "u16"
        },
        {
          "name": "maximumFee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimCustodyCreator",
      "docs": [
        "Claim creator-position fees to the recorded recipient"
      ],
      "discriminator": [
        59,
        220,
        93,
        36,
        149,
        172,
        66,
        82
      ],
      "accounts": [
        {
          "name": "signer",
          "docs": [
            "Recipient, admin, manager, partner, or deployer"
          ],
          "signer": true
        },
        {
          "name": "payer",
          "docs": [
            "Funds destination ATA rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "positionCustody",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "pool"
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
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121,
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
              },
              {
                "kind": "account",
                "path": "pool"
              }
            ]
          }
        },
        {
          "name": "recipient"
        },
        {
          "name": "recipientBaseAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "recipient"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "recipientQuoteAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "recipient"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partnerConfig",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "position_custody.partner",
                "account": "positionCustody"
              }
            ]
          }
        },
        {
          "name": "partnerVaultAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "deployerVaultAuthority",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "position_custody.deployer",
                "account": "positionCustody"
              }
            ]
          }
        },
        {
          "name": "deployerVaultAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployerVaultAuthority"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "custodyBaseAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "custodyQuoteAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "positionNftMint"
        },
        {
          "name": "positionNftAccount",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "token2022Program"
              },
              {
                "kind": "account",
                "path": "positionNftMint"
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
          "name": "dammProgram",
          "address": "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
        },
        {
          "name": "poolAuthority",
          "address": "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "dammEventAuthority",
          "address": "3rmHSu74h1ZcmAisVcWerTCiRDQbUrBKmcwptYGjHfet"
        },
        {
          "name": "tokenBaseProgram"
        },
        {
          "name": "tokenQuoteProgram"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimCustodyPlatform",
      "docs": [
        "Claim platform-position fees into the per-mint program vault"
      ],
      "discriminator": [
        170,
        54,
        177,
        128,
        60,
        83,
        140,
        188
      ],
      "accounts": [
        {
          "name": "signer",
          "docs": [
            "Admin, partner, or deployer. Pays destination ATA rent."
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "positionCustody",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "pool"
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
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121,
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
              },
              {
                "kind": "account",
                "path": "pool"
              }
            ]
          }
        },
        {
          "name": "platformBaseAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "programConfig"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "platformQuoteAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "programConfig"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partnerConfig",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "position_custody.partner",
                "account": "positionCustody"
              }
            ]
          }
        },
        {
          "name": "partnerVaultAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "deployerVaultAuthority",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "position_custody.deployer",
                "account": "positionCustody"
              }
            ]
          }
        },
        {
          "name": "deployerVaultAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployerVaultAuthority"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "positionNftMint"
        },
        {
          "name": "positionNftAccount",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "token2022Program"
              },
              {
                "kind": "account",
                "path": "positionNftMint"
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
          "name": "dammProgram",
          "address": "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
        },
        {
          "name": "poolAuthority",
          "address": "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "dammEventAuthority",
          "address": "3rmHSu74h1ZcmAisVcWerTCiRDQbUrBKmcwptYGjHfet"
        },
        {
          "name": "tokenBaseProgram"
        },
        {
          "name": "tokenQuoteProgram"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimDammV2",
      "docs": [
        "Claim DAMM v2 fees"
      ],
      "discriminator": [
        232,
        175,
        106,
        19,
        168,
        54,
        186,
        108
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer (covers any runtime init costs)"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA; seeds by base/quote mints)"
          ],
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA); signer for CPIs and fee distribution"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "docs": [
            "Authority's WSOL ATA (receives quote fees)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "feeShareAuthorityBaseAta",
          "docs": [
            "Authority's base mint ATA"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "writable": true,
          "address": "8SrW8DjZcAPAWYSdSu468LKLQ7WDRaEUsswNvHCiAYs"
        },
        {
          "name": "platformVault",
          "docs": [
            "Platform vault (receives bags fees)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "programConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partnerConfig",
          "docs": [
            "Optional partner config (PDA) used to compute/transfer partner share"
          ],
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "docs": [
            "Optional partner wallet (seed and key validation)"
          ],
          "optional": true
        },
        {
          "name": "partnerConfigQuoteAta",
          "docs": [
            "Optional partner's WSOL ATA (destination for partner share)"
          ],
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL; seed)"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Programs"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "dammProgram",
          "docs": [
            "----------- EXTRA ACCOUNTS FOR DAMM v2 -----------"
          ],
          "address": "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
        },
        {
          "name": "poolAuthority",
          "address": "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "positionNftAccount"
        },
        {
          "name": "dammEventAuthority",
          "address": "3rmHSu74h1ZcmAisVcWerTCiRDQbUrBKmcwptYGjHfet"
        },
        {
          "name": "tokenBaseProgram",
          "docs": [
            "SPL Token programs for both legs"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenQuoteProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimDammV2WithDeployer",
      "docs": [
        "Claim DAMM v2 fees for configs with deployer share enabled"
      ],
      "discriminator": [
        225,
        202,
        202,
        141,
        85,
        133,
        22,
        230
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "feeShareConfig",
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
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
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "feeShareAuthorityBaseAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "programConfig",
          "writable": true,
          "address": "8SrW8DjZcAPAWYSdSu468LKLQ7WDRaEUsswNvHCiAYs"
        },
        {
          "name": "platformVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "programConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partnerConfig",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "optional": true
        },
        {
          "name": "partnerConfigQuoteAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "deployerConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "deployer",
          "relations": [
            "deployerConfig",
            "deployerVault"
          ]
        },
        {
          "name": "deployerVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployer"
              }
            ]
          }
        },
        {
          "name": "deployerVaultQuoteAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployerVault"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "dammProgram",
          "address": "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
        },
        {
          "name": "poolAuthority",
          "address": "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "positionNftAccount"
        },
        {
          "name": "dammEventAuthority",
          "address": "3rmHSu74h1ZcmAisVcWerTCiRDQbUrBKmcwptYGjHfet"
        },
        {
          "name": "tokenBaseProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenQuoteProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimDbc",
      "docs": [
        "Claim DBC fees"
      ],
      "discriminator": [
        229,
        142,
        38,
        65,
        198,
        50,
        110,
        58
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding any init_if_needed ATAs"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA; seeds by base/quote mints)"
          ],
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA); signer for CPIs and fee distribution"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "docs": [
            "Authority's WSOL ATA (receives quote fees)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "feeShareAuthorityBaseAta",
          "docs": [
            "Authority's base mint ATA (DBC CPI interface)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "partnerConfig",
          "docs": [
            "Optional partner config (PDA) used to compute/transfer partner share"
          ],
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "docs": [
            "Optional partner wallet (seed and key validation)"
          ],
          "optional": true
        },
        {
          "name": "partnerConfigQuoteAta",
          "docs": [
            "Optional partner's WSOL ATA (destination for partner share)"
          ],
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "writable": true,
          "address": "8SrW8DjZcAPAWYSdSu468LKLQ7WDRaEUsswNvHCiAYs"
        },
        {
          "name": "platformVault",
          "docs": [
            "Platform vault (receives bags fees)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "programConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL; seed)"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Programs"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "dbcProgram",
          "address": "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
        },
        {
          "name": "poolAuthority",
          "docs": [
            "----------- EXTRA ACCOUNTS FOR METEORA -----------"
          ],
          "address": "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
        },
        {
          "name": "config"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "dbcEventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
            ],
            "program": {
              "kind": "const",
              "value": [
                9,
                96,
                12,
                165,
                36,
                247,
                177,
                183,
                214,
                204,
                177,
                195,
                151,
                58,
                160,
                51,
                13,
                25,
                3,
                218,
                96,
                28,
                201,
                181,
                222,
                227,
                198,
                98,
                180,
                202,
                209,
                73
              ]
            }
          }
        },
        {
          "name": "tokenBaseProgram",
          "docs": [
            "SPL Token programs for both legs (DBC interface)"
          ],
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenQuoteProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimDbcWithDeployer",
      "docs": [
        "Claim DBC fees for configs with deployer share enabled"
      ],
      "discriminator": [
        62,
        116,
        194,
        218,
        233,
        150,
        74,
        54
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "feeShareConfig",
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
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
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "feeShareAuthorityBaseAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "partnerConfig",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "optional": true
        },
        {
          "name": "partnerConfigQuoteAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "deployerConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "deployer",
          "relations": [
            "deployerConfig",
            "deployerVault"
          ]
        },
        {
          "name": "deployerVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployer"
              }
            ]
          }
        },
        {
          "name": "deployerVaultQuoteAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployerVault"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "programConfig",
          "writable": true,
          "address": "8SrW8DjZcAPAWYSdSu468LKLQ7WDRaEUsswNvHCiAYs"
        },
        {
          "name": "platformVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "programConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "dbcProgram",
          "address": "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
        },
        {
          "name": "poolAuthority",
          "address": "FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM"
        },
        {
          "name": "config"
        },
        {
          "name": "pool",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "dbcEventAuthority",
          "address": "8Ks12pbrD6PXxfty1hVQiE9sc289zgU1zHkvXhrSdriF"
        },
        {
          "name": "tokenBaseProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "tokenQuoteProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimDeployer",
      "docs": [
        "Claim deployer fees"
      ],
      "discriminator": [
        227,
        129,
        198,
        125,
        233,
        103,
        31,
        138
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding init_if_needed of deployer's ATA"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "deployer",
          "docs": [
            "Deployer signer receiving funds"
          ],
          "writable": true,
          "signer": true,
          "relations": [
            "deployerVault"
          ]
        },
        {
          "name": "deployerVault",
          "docs": [
            "Aggregate deployer vault (PDA), also PDA authority for its ATA"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployer"
              }
            ]
          }
        },
        {
          "name": "deployerQuoteAta",
          "docs": [
            "Deployer's WSOL ATA (destination; init-if-needed)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployer"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "deployerVaultQuoteAta",
          "docs": [
            "DeployerVault's WSOL ATA (source; PDA-owned)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployerVault"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL)"
          ],
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimDeployerVault",
      "docs": [
        "Drain a non-WSOL deployer vault to the deployer wallet"
      ],
      "discriminator": [
        19,
        223,
        244,
        248,
        132,
        55,
        132,
        211
      ],
      "accounts": [
        {
          "name": "signer",
          "docs": [
            "Deployer or admin"
          ],
          "signer": true
        },
        {
          "name": "payer",
          "docs": [
            "Funds destination ATA rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "deployer"
        },
        {
          "name": "deployerVaultAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployer"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "deployerVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployerVaultAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
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
          "name": "deployerWalletAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployer"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
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
          "name": "tokenProgram"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimPartner",
      "docs": [
        "Claim partner fees"
      ],
      "discriminator": [
        181,
        78,
        148,
        221,
        100,
        54,
        21,
        114
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding init_if_needed of partner's ATA"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "partner",
          "docs": [
            "Partner signer receiving funds"
          ],
          "writable": true,
          "signer": true,
          "relations": [
            "partnerConfig"
          ]
        },
        {
          "name": "partnerConfig",
          "docs": [
            "Partner config (PDA), also PDA authority for its ATA"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partnerQuoteAta",
          "docs": [
            "Partner's WSOL ATA (destination; init-if-needed)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partner"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partnerConfigQuoteAta",
          "docs": [
            "PartnerConfig's WSOL ATA (source; PDA-owned)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL)"
          ],
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimPartnerVault",
      "docs": [
        "Drain a non-WSOL partner vault to the partner wallet"
      ],
      "discriminator": [
        132,
        145,
        108,
        98,
        42,
        98,
        137,
        232
      ],
      "accounts": [
        {
          "name": "signer",
          "docs": [
            "Partner or admin"
          ],
          "signer": true
        },
        {
          "name": "payer",
          "docs": [
            "Funds destination ATA rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "partner",
          "relations": [
            "partnerConfig"
          ]
        },
        {
          "name": "partnerConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "partnerVaultAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
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
          "name": "partnerWalletAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partner"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
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
          "name": "tokenProgram"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimPlatformFees",
      "docs": [
        "Claim platform fees to the receiver"
      ],
      "discriminator": [
        159,
        129,
        37,
        35,
        170,
        99,
        163,
        16
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing the claim"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "receiver",
          "docs": [
            "Receiver of the platform fees (could be admin itself)"
          ]
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
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
                  103,
                  114,
                  97,
                  109,
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
          "name": "platformVault",
          "docs": [
            "Platform vault (receives bags fees)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "programConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "receiverQuoteAta",
          "docs": [
            "Receiver's WSOL ATA (destination; init-if-needed)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "receiver"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL)"
          ],
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimPlatformVault",
      "docs": [
        "Drain a non-WSOL per-mint platform vault to an admin-chosen receiver"
      ],
      "discriminator": [
        15,
        22,
        45,
        198,
        125,
        209,
        153,
        73
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "receiver"
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "mint"
        },
        {
          "name": "platformVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "programConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
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
          "name": "receiverAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "receiver"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
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
          "name": "tokenProgram"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "claimUser",
      "docs": [
        "Claim user fees"
      ],
      "discriminator": [
        164,
        64,
        55,
        199,
        90,
        78,
        147,
        188
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding init_if_needed of user's ATA"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "user",
          "docs": [
            "The claiming user; must match `claimers[idx]`"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA; seeds by base/quote mints)"
          ],
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA; source of funds)"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "docs": [
            "Authority's quote ATA (source)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "userQuoteAta",
          "docs": [
            "User's quote ATA (destination; init-if-needed)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (seed; exact token program)"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "claimUserParameters"
            }
          }
        }
      ]
    },
    {
      "name": "claimUserVault",
      "docs": [
        "Withdraw the holding balance: WSOL unwraps and closes its ATA; other quotes transfer the actual balance to the canonical user ATA in remaining_accounts[0] and leave the holding ATA open"
      ],
      "discriminator": [
        216,
        180,
        29,
        188,
        12,
        5,
        43,
        8
      ],
      "accounts": [
        {
          "name": "user",
          "docs": [
            "The claiming user; must match the vault PDA's user seed"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "userFeeVault",
          "docs": [
            "Vault PDA — authority for the vault ATA; persists across claims for GPA discoverability."
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  102,
                  101,
                  101,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "userVaultQuoteAta",
          "docs": [
            "Holding quote ATA (only WSOL closes and returns its lamports to the user)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "userFeeVault"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (exact token program)"
          ]
        },
        {
          "name": "tokenProgram",
          "docs": [
            "Programs"
          ]
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "confirmAdmin",
      "docs": [
        "Pending admin confirms and becomes the admin"
      ],
      "discriminator": [
        18,
        211,
        32,
        168,
        193,
        120,
        133,
        115
      ],
      "accounts": [
        {
          "name": "pendingAdmin",
          "docs": [
            "Pending admin must sign to accept"
          ],
          "signer": true
        },
        {
          "name": "programConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "createFeeConfig",
      "docs": [
        "Create fee config"
      ],
      "discriminator": [
        214,
        172,
        105,
        64,
        8,
        228,
        209,
        204
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding account creations and ATAs"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing creation"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "feeShareConfig",
          "docs": [
            "Initialize fee share config (PDA) with claimers/BPS"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Initialize fee ledger (PDA) sized to number of claimers"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "docs": [
            "Authority's quote ATA (init-if-needed)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partnerConfig",
          "docs": [
            "Optional partner config (PDA) for partner share"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "docs": [
            "Optional partner wallet used in seeds/header"
          ],
          "optional": true
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (seed)"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createFeeConfigParameters"
            }
          }
        }
      ]
    },
    {
      "name": "createFeeConfigWithDeployer",
      "docs": [
        "Create fee config with mandatory deployer config"
      ],
      "discriminator": [
        150,
        2,
        232,
        174,
        64,
        234,
        167,
        205
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding account creations and ATAs"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing creation"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "feeShareConfig",
          "docs": [
            "Initialize fee share config (PDA) with claimers/BPS"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Initialize fee ledger (PDA) sized to number of claimers"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "docs": [
            "Authority's quote ATA (init-if-needed)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partnerConfig",
          "docs": [
            "Optional partner config (PDA) for partner share"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "docs": [
            "Optional partner wallet used in seeds/header"
          ],
          "optional": true
        },
        {
          "name": "deployer",
          "docs": [
            "Mandatory deployer wallet used in per-pool config and aggregate vault seeds"
          ]
        },
        {
          "name": "deployerConfig",
          "docs": [
            "Initialize per-pool deployer config (PDA)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "deployerVault",
          "docs": [
            "Per-deployer aggregate vault (PDA) shared across all pools for this deployer"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "deployer"
              }
            ]
          }
        },
        {
          "name": "deployerVaultQuoteAta",
          "docs": [
            "DeployerVault's quote ATA (receives deployer share across all pools)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployerVault"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (seed)"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createFeeConfigWithDeployerParameters"
            }
          }
        }
      ]
    },
    {
      "name": "createPartnerConfig",
      "docs": [
        "Create partner config"
      ],
      "discriminator": [
        208,
        0,
        245,
        161,
        220,
        128,
        138,
        153
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding account creations and ATAs"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing creation"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "partnerConfig",
          "docs": [
            "Initialize partner config (PDA) for the given partner"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partnerConfigQuoteAta",
          "docs": [
            "PartnerConfig's WSOL ATA (receives partner share)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partner",
          "docs": [
            "Partner wallet associated with the config"
          ]
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL)"
          ],
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "createPartnerConfigParameters"
            }
          }
        }
      ]
    },
    {
      "name": "depositPosition",
      "docs": [
        "Deposit a DAMM v2 position NFT into isolated alt-quote custody"
      ],
      "discriminator": [
        54,
        60,
        131,
        57,
        173,
        187,
        233,
        96
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Funds custody account and NFT ATA rent"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "signer",
          "docs": [
            "Must equal `pool.creator`; current owner of the position NFT"
          ],
          "signer": true
        },
        {
          "name": "positionCustody",
          "docs": [
            "Per-launch custody state"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "pool"
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
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121,
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
              },
              {
                "kind": "account",
                "path": "pool"
              }
            ]
          }
        },
        {
          "name": "recipient",
          "docs": [
            "Creator fee recipient; required for Creator, omitted for Platform"
          ],
          "optional": true
        },
        {
          "name": "pool",
          "docs": [
            "DAMM v2 pool"
          ]
        },
        {
          "name": "position",
          "docs": [
            "DAMM v2 position"
          ]
        },
        {
          "name": "positionNftMint",
          "docs": [
            "Position NFT mint (Token-2022)"
          ]
        },
        {
          "name": "sourceNftAccount",
          "docs": [
            "Current NFT token account (amount == 1, authority == signer)"
          ],
          "writable": true
        },
        {
          "name": "custodyNftAta",
          "docs": [
            "Custody authority's NFT ATA"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "token2022Program"
              },
              {
                "kind": "account",
                "path": "positionNftMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "role",
          "type": {
            "defined": {
              "name": "positionCustodyRole"
            }
          }
        }
      ]
    },
    {
      "name": "dummy1",
      "docs": [
        "Dummy function to be used for IDL generation",
        "",
        "DO NOT CALL THIS FUNCTION"
      ],
      "discriminator": [
        159,
        255,
        61,
        156,
        197,
        198,
        94,
        200
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "feeShareConfig"
            }
          }
        }
      ]
    },
    {
      "name": "dummy2",
      "docs": [
        "Dummy function to be used for IDL generation",
        "",
        "DO NOT CALL THIS FUNCTION"
      ],
      "discriminator": [
        156,
        133,
        43,
        254,
        54,
        30,
        107,
        7
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": {
              "name": "feeShareAuthority"
            }
          }
        }
      ]
    },
    {
      "name": "extendCreatedFeeConfig",
      "docs": [
        "Extend fee config during init (append-only growth)"
      ],
      "discriminator": [
        205,
        172,
        113,
        254,
        225,
        59,
        82,
        79
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding reallocations during extend"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing the extend"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose claimers/BPS are extended"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA) whose fees array will be reallocated with zeros appended"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "partner",
          "docs": [
            "Optional partner wallet used in seeds/header"
          ],
          "optional": true
        },
        {
          "name": "partnerConfig",
          "docs": [
            "Optional partner config account; if provided must match seeds with `partner`"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program (realloc/rent)"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "extendCreatedFeeConfigParameters"
            }
          }
        }
      ]
    },
    {
      "name": "forceClaimCustodyPlatform",
      "docs": [
        "Admin-only platform claim that bypasses the pinned per-mint vault"
      ],
      "discriminator": [
        243,
        0,
        216,
        133,
        166,
        190,
        179,
        60
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "receiver"
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "positionCustody",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "pool"
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
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121,
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
              },
              {
                "kind": "account",
                "path": "pool"
              }
            ]
          }
        },
        {
          "name": "receiverBaseAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "receiver"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "receiverQuoteAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "receiver"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partnerConfig",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "position_custody.partner",
                "account": "positionCustody"
              }
            ]
          }
        },
        {
          "name": "partnerVaultAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "deployerVaultAuthority",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "position_custody.deployer",
                "account": "positionCustody"
              }
            ]
          }
        },
        {
          "name": "deployerVaultAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployerVaultAuthority"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "custodyBaseAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "custodyQuoteAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "positionNftMint"
        },
        {
          "name": "positionNftAccount",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "token2022Program"
              },
              {
                "kind": "account",
                "path": "positionNftMint"
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
          "name": "dammProgram",
          "address": "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
        },
        {
          "name": "poolAuthority",
          "address": "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "dammEventAuthority",
          "address": "3rmHSu74h1ZcmAisVcWerTCiRDQbUrBKmcwptYGjHfet"
        },
        {
          "name": "tokenBaseProgram"
        },
        {
          "name": "tokenQuoteProgram"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "forceClaimUser",
      "docs": [
        "Force claim user fees (admin only); delivers WSOL to user's ATA"
      ],
      "discriminator": [
        216,
        217,
        173,
        83,
        118,
        151,
        252,
        48
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing force claim"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "user",
          "docs": [
            "Claimer pubkey (no signature required). May be a wallet or external PDA."
          ],
          "writable": true
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA; seeds by base/quote mints)"
          ],
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA; source of funds)"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "docs": [
            "Authority's quote ATA (source)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "userQuoteAta",
          "docs": [
            "User's quote ATA (destination; init-if-needed)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (seed; exact token program)"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "forceClaimUserParameters"
            }
          }
        }
      ]
    },
    {
      "name": "forceClaimUserToVault",
      "docs": [
        "Force claim user fees into a program-controlled vault (admin or manager when unlocked).",
        "While manager-locked, only the current admin may settle; admin locks remain blocked.",
        "User can later claim from the vault via `claim_user_vault`."
      ],
      "discriminator": [
        9,
        21,
        27,
        21,
        209,
        150,
        12,
        142
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding vault account and ATA initialization"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "authority",
          "docs": [
            "Admin or manager signer authorizing the force claim to vault"
          ],
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey for auth check)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "user",
          "docs": [
            "Claimer pubkey (no signature required). May be a wallet or external PDA."
          ]
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA; seeds by base/quote mints)"
          ],
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA; source of funds)"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "docs": [
            "Authority's quote ATA (source)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "userFeeVault",
          "docs": [
            "Vault PDA — authority for the vault ATA; stores seed components for GPA discoverability.",
            "Initialized on first force-claim; subsequent calls skip init."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  102,
                  101,
                  101,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "userVaultQuoteAta",
          "docs": [
            "Vault's quote ATA (destination; init-if-needed, authority = user_fee_vault PDA)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "userFeeVault"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (exact token program)"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "forceClaimUserToVaultParameters"
            }
          }
        }
      ]
    },
    {
      "name": "forceSolClaimUser",
      "docs": [
        "Force claim user fees as native SOL (admin only); unwraps WSOL and sends SOL to user"
      ],
      "discriminator": [
        78,
        63,
        180,
        4,
        151,
        16,
        107,
        241
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing force claim"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "user",
          "docs": [
            "Claimer pubkey (no signature required). May be a wallet or external PDA and receives",
            "native SOL when escrow is closed."
          ],
          "writable": true
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA; seeds by base/quote mints)"
          ],
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA; source of funds)"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthorityQuoteAta",
          "docs": [
            "Authority's WSOL ATA (source)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "feeShareAuthority"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "escrowWsolAccount",
          "docs": [
            "Ephemeral WSOL escrow. Created and closed atomically within",
            "this instruction. All lamports (claimed amount + rent) are",
            "sent to `user` as native SOL when the account is closed."
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  111,
                  114,
                  99,
                  101,
                  95,
                  99,
                  108,
                  97,
                  105,
                  109,
                  95,
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL; seed)"
          ],
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "systemProgram",
          "docs": [
            "Programs"
          ],
          "address": "11111111111111111111111111111111"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "forceSolClaimUserParameters"
            }
          }
        }
      ]
    },
    {
      "name": "forceUpdateCustodyRecipient",
      "docs": [
        "Admin-only recipient rotation that skips the settle CPI"
      ],
      "discriminator": [
        176,
        116,
        242,
        161,
        163,
        17,
        236,
        66
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "positionCustody",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              }
            ]
          }
        },
        {
          "name": "newRecipient"
        },
        {
          "name": "pool"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "initProgramConfig",
      "docs": [
        "Initialize the singleton ProgramConfig. Callable once."
      ],
      "discriminator": [
        185,
        54,
        237,
        229,
        219,
        179,
        109,
        20
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding the account creation"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "admin",
          "docs": [
            "Initial admin who will control the program"
          ],
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Initialize the singleton ProgramConfig PDA"
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
                  103,
                  114,
                  97,
                  109,
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
          "name": "platformVault",
          "docs": [
            "Program vault (receives bags fees)"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "programConfig"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "quoteMint",
          "docs": [
            "Quote mint (WSOL)"
          ],
          "address": "So11111111111111111111111111111111111111112"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "managerTransferFeeConfig",
      "docs": [
        "Manager transfers their managerial position (requires both old and new manager signatures)"
      ],
      "discriminator": [
        141,
        74,
        17,
        174,
        124,
        11,
        170,
        227
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding the transfer"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "manager",
          "docs": [
            "Current manager signer authorizing the transfer"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "newManager"
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose manager is being transferred"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee share authority (PDA) - needed for event emission and validation"
          ],
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
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        },
        {
          "name": "programConfig",
          "docs": [
            "Current program config. Authenticates `admin` without shifting the legacy prefix."
          ],
          "address": "8SrW8DjZcAPAWYSdSu468LKLQ7WDRaEUsswNvHCiAYs"
        },
        {
          "name": "admin",
          "docs": [
            "Current program admin. Pending admin is not accepted."
          ],
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "managerUpdateFeeConfig",
      "docs": [
        "Manager update fee config (claimers + bps)"
      ],
      "discriminator": [
        84,
        56,
        125,
        101,
        210,
        214,
        195,
        197
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding the update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "manager",
          "docs": [
            "Manager signer authorizing the update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose claimers/BPS are updated"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA) whose fees array may be reallocated/reordered"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program (realloc/rent)"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        },
        {
          "name": "programConfig",
          "docs": [
            "Current program config. Authenticates `admin` without shifting the legacy prefix."
          ],
          "address": "8SrW8DjZcAPAWYSdSu468LKLQ7WDRaEUsswNvHCiAYs"
        },
        {
          "name": "admin",
          "docs": [
            "Current program admin. Pending admin is not accepted."
          ],
          "signer": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "managerUpdateFeeConfigParameters"
            }
          }
        }
      ]
    },
    {
      "name": "managerWaiveFeeConfig",
      "docs": [
        "Manager waives their managerial position (sets manager to Pubkey::default)"
      ],
      "discriminator": [
        105,
        51,
        140,
        114,
        254,
        160,
        173,
        172
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding the operation"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "manager",
          "docs": [
            "Current manager signer waiving their role"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose manager is being waived"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee share authority (PDA) - needed for event emission and validation"
          ],
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
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        },
        {
          "name": "programConfig",
          "docs": [
            "Current program config. Authenticates `admin` without shifting the legacy prefix."
          ],
          "address": "8SrW8DjZcAPAWYSdSu468LKLQ7WDRaEUsswNvHCiAYs"
        },
        {
          "name": "admin",
          "docs": [
            "Current program admin. Pending admin is not accepted."
          ],
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "updateCustodyDeployer",
      "docs": [
        "Set, rotate, or clear the custody deployer (admin only)"
      ],
      "discriminator": [
        17,
        69,
        2,
        117,
        240,
        55,
        35,
        70
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "positionCustody",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "pool"
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
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121,
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
              },
              {
                "kind": "account",
                "path": "pool"
              }
            ]
          }
        },
        {
          "name": "partnerConfig",
          "docs": [
            "Required when a partner is already recorded (joint-cap check)"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "position_custody.partner",
                "account": "positionCustody"
              }
            ]
          }
        },
        {
          "name": "pool"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "custodyDeployerTerms"
            }
          }
        }
      ]
    },
    {
      "name": "updateCustodyManager",
      "docs": [
        "Set or clear the custody manager (admin only)"
      ],
      "discriminator": [
        201,
        185,
        146,
        62,
        93,
        58,
        42,
        48
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "positionCustody",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "pool"
              }
            ]
          }
        },
        {
          "name": "newManager"
        },
        {
          "name": "pool"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "updateCustodyPartner",
      "docs": [
        "Set, rotate, or clear the custody partner (admin only)"
      ],
      "discriminator": [
        233,
        71,
        53,
        134,
        170,
        137,
        233,
        229
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "positionCustody",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "pool"
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
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121,
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
              },
              {
                "kind": "account",
                "path": "pool"
              }
            ]
          }
        },
        {
          "name": "newPartner"
        },
        {
          "name": "partnerConfig",
          "docs": [
            "Required when setting a partner"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "newPartner"
              }
            ]
          }
        },
        {
          "name": "pool"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "updateCustodyRecipient",
      "docs": [
        "Claim pending creator fees to the current recipient, then set a new recipient"
      ],
      "discriminator": [
        34,
        64,
        14,
        59,
        220,
        0,
        198,
        41
      ],
      "accounts": [
        {
          "name": "signer",
          "docs": [
            "Admin or manager"
          ],
          "signer": true
        },
        {
          "name": "payer",
          "docs": [
            "Funds old-recipient ATA rent if missing"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "positionCustody",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "pool"
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
                  112,
                  111,
                  115,
                  105,
                  116,
                  105,
                  111,
                  110,
                  95,
                  99,
                  117,
                  115,
                  116,
                  111,
                  100,
                  121,
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
              },
              {
                "kind": "account",
                "path": "pool"
              }
            ]
          }
        },
        {
          "name": "recipient"
        },
        {
          "name": "newRecipient"
        },
        {
          "name": "recipientBaseAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "recipient"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "recipientQuoteAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "recipient"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "partnerConfig",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "position_custody.partner",
                "account": "positionCustody"
              }
            ]
          }
        },
        {
          "name": "partnerVaultAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "partnerConfig"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "deployerVaultAuthority",
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "position_custody.deployer",
                "account": "positionCustody"
              }
            ]
          }
        },
        {
          "name": "deployerVaultAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "deployerVaultAuthority"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "custodyBaseAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "tokenBaseProgram"
              },
              {
                "kind": "account",
                "path": "baseMint"
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
          "name": "custodyQuoteAta",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "tokenQuoteProgram"
              },
              {
                "kind": "account",
                "path": "quoteMint"
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
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "positionNftMint"
        },
        {
          "name": "positionNftAccount",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "custodyAuthority"
              },
              {
                "kind": "account",
                "path": "token2022Program"
              },
              {
                "kind": "account",
                "path": "positionNftMint"
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
          "name": "dammProgram",
          "address": "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
        },
        {
          "name": "poolAuthority",
          "address": "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC"
        },
        {
          "name": "pool"
        },
        {
          "name": "position",
          "writable": true
        },
        {
          "name": "baseVault",
          "writable": true
        },
        {
          "name": "quoteVault",
          "writable": true
        },
        {
          "name": "dammEventAuthority",
          "address": "3rmHSu74h1ZcmAisVcWerTCiRDQbUrBKmcwptYGjHfet"
        },
        {
          "name": "tokenBaseProgram"
        },
        {
          "name": "tokenQuoteProgram"
        },
        {
          "name": "token2022Program",
          "address": "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "updateDeployerFeeCollection",
      "docs": [
        "Updates:",
        "* deployer fee collection mode",
        "* deployer fee collection platform bps",
        "* deployer fee collection claimers bps"
      ],
      "discriminator": [
        224,
        27,
        9,
        209,
        106,
        181,
        19,
        55
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose deployer config is being updated"
          ],
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
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "deployerConfig",
          "docs": [
            "Per-pool deployer config (PDA) to update; must belong to `deployer`"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  108,
                  111,
                  121,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "deployer",
          "docs": [
            "Deployer wallet referenced by the config"
          ],
          "relations": [
            "deployerConfig"
          ]
        },
        {
          "name": "partnerConfig",
          "docs": [
            "Optional partner config; required when the fee config has a partner"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "docs": [
            "Optional partner wallet used in partner_config seeds"
          ],
          "optional": true
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program (future-proofing)"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateDeployerFeeCollectionParameters"
            }
          }
        }
      ]
    },
    {
      "name": "updateFeeConfig",
      "docs": [
        "Update fee config (claimers + bps + partner_bps)"
      ],
      "discriminator": [
        104,
        184,
        103,
        242,
        88,
        151,
        107,
        20
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing the update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose claimers/BPS are updated"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee ledger (PDA) whose fees array may be reallocated/reordered"
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
                  115,
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program (realloc/rent)"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateFeeConfigParameters"
            }
          }
        }
      ]
    },
    {
      "name": "updateFeeConfigManager",
      "docs": [
        "Update the manager on an existing fee config"
      ],
      "discriminator": [
        196,
        8,
        168,
        199,
        166,
        4,
        77,
        212
      ],
      "accounts": [
        {
          "name": "payer",
          "docs": [
            "Payer funding the update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing the update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose manager is being updated"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee share authority (PDA) - needed for event emission and validation"
          ],
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
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "newManager",
          "docs": [
            "New manager wallet."
          ]
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "updateFeeConfigPartner",
      "docs": [
        "Update partner on an existing fee config"
      ],
      "discriminator": [
        175,
        155,
        78,
        199,
        239,
        2,
        95,
        77
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing the update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose partner is being updated"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee share authority (PDA) - needed for event emission"
          ],
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
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "partnerConfig",
          "docs": [
            "Optional new partner config (PDA); must belong to `partner` if provided"
          ],
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "docs": [
            "Optional new partner wallet; must match partner_config if provided"
          ],
          "optional": true
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": []
    },
    {
      "name": "updateFeeConfigPlatformBps",
      "docs": [
        "Set or clear a per-config platform BPS override"
      ],
      "discriminator": [
        237,
        73,
        242,
        185,
        157,
        148,
        80,
        207
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing the update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "feeShareConfig",
          "docs": [
            "Fee share config (PDA) whose platform override is being updated"
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
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "feeShareAuthority",
          "docs": [
            "Fee share authority (PDA) - needed for event emission"
          ],
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
                  104,
                  97,
                  114,
                  101,
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
              },
              {
                "kind": "account",
                "path": "baseMint"
              },
              {
                "kind": "account",
                "path": "quoteMint"
              }
            ]
          }
        },
        {
          "name": "baseMint"
        },
        {
          "name": "quoteMint"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateFeeConfigPlatformBpsParameters"
            }
          }
        }
      ]
    },
    {
      "name": "updatePartnerConfig",
      "docs": [
        "**@deprecated: use `update_partner_fee_collection` instead (2.1.0)**"
      ],
      "discriminator": [
        111,
        77,
        242,
        174,
        244,
        48,
        138,
        213
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "partnerConfig",
          "docs": [
            "Partner config (PDA) to update BPS; must belong to `partner`"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "docs": [
            "Partner wallet referenced by the config"
          ],
          "relations": [
            "partnerConfig"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program (if realloc/rent needed)"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updatePartnerConfigParameters"
            }
          }
        }
      ]
    },
    {
      "name": "updatePartnerFeeCollection",
      "docs": [
        "Updates:",
        "* partner fee collection mode",
        "* partner fee collection platform bps",
        "* partner fee collection claimers bps"
      ],
      "discriminator": [
        155,
        56,
        159,
        217,
        130,
        217,
        252,
        72
      ],
      "accounts": [
        {
          "name": "admin",
          "docs": [
            "Admin signer authorizing update"
          ],
          "writable": true,
          "signer": true
        },
        {
          "name": "programConfig",
          "docs": [
            "Singleton program config PDA (holds admin pubkey)"
          ],
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "partnerConfig",
          "docs": [
            "Partner config (PDA) to update; must belong to `partner`"
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  114,
                  116,
                  110,
                  101,
                  114,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "partner"
              }
            ]
          }
        },
        {
          "name": "partner",
          "docs": [
            "Partner wallet referenced by the config"
          ],
          "relations": [
            "partnerConfig"
          ]
        },
        {
          "name": "systemProgram",
          "docs": [
            "System program (future-proofing)"
          ],
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updatePartnerFeeCollectionParameters"
            }
          }
        }
      ]
    },
    {
      "name": "updateProgramConfig",
      "docs": [
        "Set or clear a pending admin (two-step transfer)"
      ],
      "discriminator": [
        214,
        3,
        187,
        98,
        170,
        106,
        33,
        45
      ],
      "accounts": [
        {
          "name": "admin",
          "signer": true
        },
        {
          "name": "programConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  103,
                  114,
                  97,
                  109,
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
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
          "name": "program"
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "updateProgramConfigParameters"
            }
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "deployerConfig",
      "discriminator": [
        32,
        81,
        114,
        92,
        51,
        105,
        30,
        134
      ]
    },
    {
      "name": "deployerVault",
      "discriminator": [
        66,
        189,
        74,
        88,
        226,
        57,
        203,
        5
      ]
    },
    {
      "name": "feeShareAuthorityHeader",
      "discriminator": [
        82,
        28,
        140,
        167,
        168,
        216,
        93,
        211
      ]
    },
    {
      "name": "feeShareConfigHeader",
      "discriminator": [
        40,
        71,
        136,
        156,
        222,
        49,
        31,
        201
      ]
    },
    {
      "name": "partnerConfig",
      "discriminator": [
        212,
        110,
        106,
        253,
        66,
        131,
        77,
        96
      ]
    },
    {
      "name": "pool",
      "discriminator": [
        241,
        154,
        109,
        4,
        17,
        177,
        109,
        188
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
      "name": "positionCustody",
      "discriminator": [
        132,
        171,
        246,
        123,
        219,
        119,
        108,
        106
      ]
    },
    {
      "name": "programConfig",
      "discriminator": [
        196,
        210,
        90,
        231,
        144,
        149,
        140,
        63
      ]
    },
    {
      "name": "userFeeVault",
      "discriminator": [
        117,
        20,
        152,
        251,
        163,
        18,
        193,
        192
      ]
    }
  ],
  "events": [
    {
      "name": "bagsFeeShareForceClaimToVaultEvent",
      "discriminator": [
        166,
        72,
        246,
        84,
        221,
        200,
        105,
        114
      ]
    },
    {
      "name": "bagsFeeSharePartnerClaimEvent",
      "discriminator": [
        180,
        40,
        86,
        176,
        242,
        25,
        220,
        77
      ]
    },
    {
      "name": "bagsFeeShareProtocolClaimEvent",
      "discriminator": [
        168,
        122,
        235,
        187,
        157,
        4,
        94,
        126
      ]
    },
    {
      "name": "bagsFeeShareUserClaimEvent",
      "discriminator": [
        115,
        178,
        50,
        219,
        175,
        234,
        48,
        101
      ]
    },
    {
      "name": "bagsFeeShareUserClaimV2Event",
      "discriminator": [
        195,
        23,
        211,
        154,
        30,
        157,
        169,
        52
      ]
    },
    {
      "name": "bagsFeeShareUserVaultClaimEvent",
      "discriminator": [
        58,
        0,
        147,
        243,
        250,
        139,
        221,
        102
      ]
    },
    {
      "name": "deployerAccumulatedEvent",
      "discriminator": [
        7,
        70,
        219,
        16,
        62,
        203,
        48,
        86
      ]
    },
    {
      "name": "deployerClaimEvent",
      "discriminator": [
        193,
        119,
        57,
        155,
        52,
        46,
        190,
        168
      ]
    },
    {
      "name": "deployerConfigCreatedEvent",
      "discriminator": [
        46,
        220,
        101,
        31,
        130,
        152,
        166,
        158
      ]
    },
    {
      "name": "deployerConfigUpdatedEvent",
      "discriminator": [
        98,
        207,
        253,
        84,
        69,
        134,
        115,
        83
      ]
    },
    {
      "name": "deployerVaultClaimedEvent",
      "discriminator": [
        26,
        54,
        191,
        123,
        202,
        104,
        232,
        18
      ]
    },
    {
      "name": "feeConfigPlatformBpsUpdatedEvent",
      "discriminator": [
        240,
        12,
        85,
        170,
        189,
        94,
        60,
        206
      ]
    },
    {
      "name": "feeConfigSnapshotEvent",
      "discriminator": [
        121,
        73,
        0,
        217,
        175,
        252,
        147,
        193
      ]
    },
    {
      "name": "feeConfigSnapshotEventV2",
      "discriminator": [
        119,
        106,
        2,
        17,
        241,
        76,
        128,
        184
      ]
    },
    {
      "name": "feeConfigUpdatedEvent",
      "discriminator": [
        139,
        188,
        235,
        116,
        222,
        55,
        95,
        201
      ]
    },
    {
      "name": "partnerAccumulatedEvent",
      "discriminator": [
        114,
        92,
        185,
        185,
        201,
        162,
        75,
        240
      ]
    },
    {
      "name": "partnerConfigCreatedEvent",
      "discriminator": [
        110,
        5,
        186,
        72,
        118,
        105,
        115,
        126
      ]
    },
    {
      "name": "partnerConfigUpdatedEvent",
      "discriminator": [
        131,
        8,
        238,
        0,
        102,
        179,
        81,
        241
      ]
    },
    {
      "name": "partnerConfigV2SnapshotEvent",
      "discriminator": [
        44,
        79,
        22,
        247,
        183,
        216,
        168,
        183
      ]
    },
    {
      "name": "partnerVaultClaimedEvent",
      "discriminator": [
        226,
        182,
        149,
        172,
        249,
        245,
        144,
        203
      ]
    },
    {
      "name": "platformAccumulatedEvent",
      "discriminator": [
        135,
        109,
        121,
        126,
        171,
        62,
        118,
        76
      ]
    },
    {
      "name": "platformClaimedEvent",
      "discriminator": [
        147,
        166,
        33,
        185,
        161,
        49,
        207,
        139
      ]
    },
    {
      "name": "platformVaultClaimedEvent",
      "discriminator": [
        223,
        215,
        28,
        80,
        122,
        76,
        8,
        41
      ]
    },
    {
      "name": "positionCustodyCreatorClaimedEvent",
      "discriminator": [
        188,
        170,
        99,
        241,
        147,
        143,
        118,
        210
      ]
    },
    {
      "name": "positionCustodyDeployerAccumulatedEvent",
      "discriminator": [
        11,
        87,
        149,
        121,
        160,
        180,
        182,
        89
      ]
    },
    {
      "name": "positionCustodyDeployerUpdatedEvent",
      "discriminator": [
        169,
        63,
        154,
        101,
        24,
        175,
        49,
        140
      ]
    },
    {
      "name": "positionCustodyDepositedEvent",
      "discriminator": [
        72,
        235,
        41,
        63,
        97,
        122,
        9,
        148
      ]
    },
    {
      "name": "positionCustodyManagerUpdatedEvent",
      "discriminator": [
        44,
        229,
        194,
        12,
        142,
        101,
        45,
        138
      ]
    },
    {
      "name": "positionCustodyPartnerAccumulatedEvent",
      "discriminator": [
        29,
        60,
        58,
        1,
        106,
        101,
        200,
        131
      ]
    },
    {
      "name": "positionCustodyPartnerUpdatedEvent",
      "discriminator": [
        124,
        138,
        72,
        152,
        216,
        15,
        129,
        195
      ]
    },
    {
      "name": "positionCustodyPlatformClaimedEvent",
      "discriminator": [
        20,
        23,
        134,
        9,
        225,
        178,
        18,
        137
      ]
    },
    {
      "name": "positionCustodyRecipientUpdatedEvent",
      "discriminator": [
        242,
        65,
        171,
        193,
        86,
        214,
        203,
        22
      ]
    },
    {
      "name": "programConfigAdminUpdatedEvent",
      "discriminator": [
        19,
        215,
        161,
        37,
        149,
        193,
        142,
        93
      ]
    },
    {
      "name": "programConfigInitializedEvent",
      "discriminator": [
        210,
        169,
        156,
        90,
        13,
        171,
        254,
        140
      ]
    },
    {
      "name": "programConfigUpdatedEvent",
      "discriminator": [
        14,
        133,
        50,
        100,
        0,
        210,
        124,
        228
      ]
    },
    {
      "name": "quoteCollectionEvent",
      "discriminator": [
        15,
        157,
        118,
        164,
        29,
        8,
        57,
        184
      ]
    },
    {
      "name": "quoteHoldingWithdrawalEvent",
      "discriminator": [
        96,
        32,
        48,
        199,
        68,
        127,
        55,
        232
      ]
    },
    {
      "name": "quotePairSettlementEvent",
      "discriminator": [
        2,
        160,
        204,
        13,
        96,
        102,
        187,
        136
      ]
    },
    {
      "name": "quoteRoleTransferEvent",
      "discriminator": [
        180,
        118,
        17,
        95,
        219,
        182,
        190,
        49
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "typeConversionFailed",
      "msg": "Type conversion failed"
    },
    {
      "code": 6001,
      "name": "checkedCalculationOverflow",
      "msg": "Checked Calculation overflowed"
    },
    {
      "code": 6002,
      "name": "invalidBps",
      "msg": "Invalid BPS provided, total of all should equal 10_000"
    },
    {
      "code": 6003,
      "name": "invalidPartnerBps",
      "msg": "When partner is provided, partner_bps must be gt 0 and lt 10_000"
    },
    {
      "code": 6004,
      "name": "invalidPartnerFeeCollectionMode",
      "msg": "Invalid partner fee collection mode"
    },
    {
      "code": 6005,
      "name": "invalidPartnerFeeCollectionBps",
      "msg": "Invalid partner fee collection BPS (must be < 10_000)"
    },
    {
      "code": 6006,
      "name": "missingPartnerFeeCollectionPlatformBps",
      "msg": "Missing partner platform fee collection BPS for selected mode"
    },
    {
      "code": 6007,
      "name": "invalidPlatformBps",
      "msg": "Invalid platform BPS provided, must be lt 10_000"
    },
    {
      "code": 6008,
      "name": "invalidPartnerAccounts",
      "msg": "Invalid partner accounts provided"
    },
    {
      "code": 6009,
      "name": "unauthorized",
      "msg": "unauthorized"
    },
    {
      "code": 6010,
      "name": "nothingToClaim",
      "msg": "Nothing to claim"
    },
    {
      "code": 6011,
      "name": "invalidDataLength",
      "msg": "Invalid data length"
    },
    {
      "code": 6012,
      "name": "mismatchedLengths",
      "msg": "Mismatched claimers and bps lengths"
    },
    {
      "code": 6013,
      "name": "indexOutOfBounds",
      "msg": "Index out of bounds"
    },
    {
      "code": 6014,
      "name": "onlyWsolSupported",
      "msg": "Only WSOL is supported as quote mint"
    },
    {
      "code": 6015,
      "name": "duplicateClaimer",
      "msg": "Duplicate claimer provided"
    },
    {
      "code": 6016,
      "name": "invalidClaimer",
      "msg": "Invalid claimer: Bags-owned or Bags-related account is not allowed"
    },
    {
      "code": 6017,
      "name": "cannotRemoveClaimerWithFees",
      "msg": "Cannot remove claimer that still has outstanding fees"
    },
    {
      "code": 6018,
      "name": "cannotChangeClaimerIndexWithFees",
      "msg": "Cannot change index for claimer that still has outstanding fees"
    },
    {
      "code": 6019,
      "name": "unreachable",
      "msg": "Shouldn't happen, but fell through to here"
    },
    {
      "code": 6020,
      "name": "noPendingAdmin",
      "msg": "No pending admin"
    },
    {
      "code": 6021,
      "name": "invalidAmountOut",
      "msg": "Invalid amount out provided"
    },
    {
      "code": 6022,
      "name": "cannotSetSelfAsPendingAdmin",
      "msg": "Cannot set self as pending admin"
    },
    {
      "code": 6023,
      "name": "invalidUpdateIndex",
      "msg": "Invalid update index"
    },
    {
      "code": 6024,
      "name": "configNotInitialized",
      "msg": "Config not initialized"
    },
    {
      "code": 6025,
      "name": "configUpdateLocked",
      "msg": "Config update is currently locked"
    },
    {
      "code": 6026,
      "name": "invalidNumClaimers",
      "msg": "Invalid number of claimers, must be between 1 and MAX_CLAIMERS"
    },
    {
      "code": 6027,
      "name": "configAlreadyFinalized",
      "msg": "Config already finalized"
    },
    {
      "code": 6028,
      "name": "invalidFeeShareAuthority",
      "msg": "Invalid fee share authority provided"
    },
    {
      "code": 6029,
      "name": "updatePartnerConfigDeprecated",
      "msg": "Deprecated ix, use update_partner_fee_collection instead"
    },
    {
      "code": 6030,
      "name": "noManagerSet",
      "msg": "No manager set on this fee config"
    },
    {
      "code": 6031,
      "name": "unauthorizedManager",
      "msg": "Unauthorized manager"
    },
    {
      "code": 6032,
      "name": "invalidNewManager",
      "msg": "Cannot transfer manager role to the zero address"
    },
    {
      "code": 6033,
      "name": "configLockedByAnotherActor",
      "msg": "Config is locked by another actor"
    },
    {
      "code": 6034,
      "name": "invalidDeployerAccounts",
      "msg": "Invalid deployer accounts provided"
    },
    {
      "code": 6035,
      "name": "invalidDeployerFeeCollectionMode",
      "msg": "Invalid deployer fee collection mode"
    },
    {
      "code": 6036,
      "name": "invalidDeployerFeeCollectionBps",
      "msg": "Invalid deployer fee collection BPS (must be < 10_000)"
    },
    {
      "code": 6037,
      "name": "deployerClaimRequired",
      "msg": "Config has deployer settings; use deployer-aware claim instruction"
    },
    {
      "code": 6038,
      "name": "custodyRoleOccupied",
      "msg": "Custody role slot is already occupied"
    },
    {
      "code": 6039,
      "name": "custodyRecipientRequired",
      "msg": "Creator deposit requires a recipient"
    },
    {
      "code": 6040,
      "name": "custodyRecipientForbidden",
      "msg": "Platform deposit must not include a recipient"
    },
    {
      "code": 6041,
      "name": "custodyPoolMismatch",
      "msg": "Custody is bound to a different pool"
    },
    {
      "code": 6042,
      "name": "custodyPositionNotDeposited",
      "msg": "Position is not deposited for this custody role"
    },
    {
      "code": 6043,
      "name": "custodyInvalidPosition",
      "msg": "Position does not match the provided pool or NFT mint"
    },
    {
      "code": 6044,
      "name": "custodyInvalidNftAccount",
      "msg": "Position NFT account is invalid"
    },
    {
      "code": 6045,
      "name": "custodyMintMismatch",
      "msg": "Pool token mints do not match the custody pair"
    },
    {
      "code": 6046,
      "name": "custodyInvalidRecipient",
      "msg": "Custody recipient is invalid"
    },
    {
      "code": 6047,
      "name": "custodyInvalidCollectFeeMode",
      "msg": "Custody requires a DAMM v2 pool with collect_fee_mode OnlyB"
    },
    {
      "code": 6048,
      "name": "wsolMustUseClaimPlatformFees",
      "msg": "WSOL platform fees must be claimed via claim_platform_fees"
    },
    {
      "code": 6049,
      "name": "custodyWsolQuoteNotAllowed",
      "msg": "Custody quote mint cannot be WSOL"
    },
    {
      "code": 6050,
      "name": "custodyInvalidParticipant",
      "msg": "Custody partner or deployer wallet is invalid"
    },
    {
      "code": 6051,
      "name": "custodyWsolVaultNotAllowed",
      "msg": "Custody vault claims cannot use WSOL"
    },
    {
      "code": 6052,
      "name": "custodyMissingHopAccounts",
      "msg": "Custody hop ATAs are required when a partner or deployer is recorded"
    },
    {
      "code": 6053,
      "name": "invalidPlatformBps",
      "msg": "Invalid custom platform BPS (must be < 10_000 or PLATFORM_BPS_WAIVED)"
    },
    {
      "code": 6054,
      "name": "configNotWaived",
      "msg": "Config is not waived (custom_platform_bps must be PLATFORM_BPS_WAIVED)"
    },
    {
      "code": 6055,
      "name": "refundAlreadyApplied",
      "msg": "Refund already applied to this config"
    },
    {
      "code": 6056,
      "name": "claimersHashMismatch",
      "msg": "Claimers hash does not match the on-chain claimers array"
    },
    {
      "code": 6057,
      "name": "invalidRefundAmount",
      "msg": "Invalid refund amount"
    },
    {
      "code": 6058,
      "name": "invalidRefundUser",
      "msg": "Invalid refund user"
    },
    {
      "code": 6059,
      "name": "invalidPool",
      "msg": "Pool is not a DAMM v2 pool for this base/quote pair"
    },
    {
      "code": 6060,
      "name": "quoteInvalidTokenProgram",
      "msg": "Quote mint owner does not match the supported token program"
    },
    {
      "code": 6061,
      "name": "quoteNativeMintForbidden",
      "msg": "Token-2022 native SOL is unsupported"
    },
    {
      "code": 6062,
      "name": "quoteMalformedExtension",
      "msg": "Malformed token extension data"
    },
    {
      "code": 6063,
      "name": "quoteUnsupportedExtension",
      "msg": "Unsupported token extension or combination"
    },
    {
      "code": 6064,
      "name": "quoteDefaultFrozen",
      "msg": "New quote accounts would be frozen"
    },
    {
      "code": 6065,
      "name": "quoteActiveTransferHook",
      "msg": "Active transfer hooks are unsupported"
    },
    {
      "code": 6066,
      "name": "quoteMintPaused",
      "msg": "Quote mint is paused"
    },
    {
      "code": 6067,
      "name": "quoteDbcTransferFee",
      "msg": "DBC requires zero current and scheduled transfer fee basis points"
    },
    {
      "code": 6068,
      "name": "quoteAccountFrozen",
      "msg": "Token account is frozen"
    },
    {
      "code": 6069,
      "name": "quoteCpiGuard",
      "msg": "Source account disallows CPI transfers"
    },
    {
      "code": 6070,
      "name": "quoteMemoRequired",
      "msg": "Destination requires an incoming memo"
    },
    {
      "code": 6071,
      "name": "quotePublicCreditsDisabled",
      "msg": "Destination disallows public credits"
    },
    {
      "code": 6072,
      "name": "quoteInvalidTokenAccount",
      "msg": "Invalid quote token account"
    },
    {
      "code": 6073,
      "name": "quoteBackingShortfall",
      "msg": "Spendable balance is below outstanding pair fees"
    },
    {
      "code": 6074,
      "name": "quoteAliasedAccounts",
      "msg": "Transfer source and destination must differ"
    },
    {
      "code": 6075,
      "name": "quoteTransferMismatch",
      "msg": "Measured transfer does not match the active fee schedule"
    },
    {
      "code": 6076,
      "name": "quoteTransferFeeLimit",
      "msg": "Active transfer fee exceeds the requested ceiling"
    },
    {
      "code": 6077,
      "name": "quoteFeeAssertionMustBeTopLevel",
      "msg": "Transfer fee assertion must be a top-level instruction"
    },
    {
      "code": 6078,
      "name": "quoteFeeAssertionWritableMint",
      "msg": "Transfer fee assertion requires a transaction-wide readonly mint"
    },
    {
      "code": 6079,
      "name": "quoteUnexpectedBaseFees",
      "msg": "Collection observed unexpected base-token fees"
    },
    {
      "code": 6080,
      "name": "quoteAccountingInvariant",
      "msg": "Quote collection allocation does not conserve token units"
    },
    {
      "code": 6081,
      "name": "managerChangeExpired",
      "msg": "Manager change approval has expired"
    },
    {
      "code": 6082,
      "name": "managerChangePhaseMismatch",
      "msg": "Manager change phase does not match the config lock"
    },
    {
      "code": 6083,
      "name": "allocationDigestMismatch",
      "msg": "Allocation digest does not match"
    },
    {
      "code": 6084,
      "name": "sourceNotDrained",
      "msg": "Supported source fees remain upstream"
    },
    {
      "code": 6085,
      "name": "sourceLifecycleMismatch",
      "msg": "Source lifecycle does not match the approval"
    },
    {
      "code": 6086,
      "name": "sourceAlias",
      "msg": "Duplicate or aliased source account"
    },
    {
      "code": 6087,
      "name": "affectedDebtRemains",
      "msg": "Affected ledger entry is not settled"
    },
    {
      "code": 6088,
      "name": "managerLockRequired",
      "msg": "Locked settlement requires the manager update lock"
    }
  ],
  "types": [
    {
      "name": "adminRefundLedgerParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amounts",
            "docs": [
              "Per-claimer credit amounts, aligned to the current claimers array."
            ],
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "expectedClaimersHash",
            "docs": [
              "SHA-256 over the concatenated 32-byte claimer keys in array order."
            ],
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
      "name": "adminRefundUserVaultParameters",
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
      "name": "assertManagerChangeReadyParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "phase",
            "type": "u8"
          },
          {
            "name": "expectedDigest",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "targetDigest",
            "docs": [
              "Signed commitment to the complete unlocked target. The backend preserves",
              "this value across stages; the final phase also verifies it on chain."
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "deadlineSlot",
            "type": "u64"
          },
          {
            "name": "affectedIndexes",
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "sources",
            "type": {
              "vec": {
                "defined": {
                  "name": "managerSourceDescriptor"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "bagsFeeShareForceClaimToVaultEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "user",
            "docs": [
              "The user whose fees were distributed to vault"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "docs": [
              "Mint of the base token"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Mint of the quote token (WSOL)"
            ],
            "type": "pubkey"
          },
          {
            "name": "userFeeVault",
            "docs": [
              "The vault PDA address"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeShareConfig",
            "docs": [
              "Fee share config account"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeShareAuthority",
            "docs": [
              "Fee share authority account"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimerIndex",
            "docs": [
              "Index of the claimer within the config's claimers array"
            ],
            "type": "u32"
          },
          {
            "name": "amount",
            "docs": [
              "Amount distributed to the vault (quote token units)"
            ],
            "type": "u64"
          },
          {
            "name": "vaultBalanceAfter",
            "docs": [
              "Vault ATA balance after this distribution"
            ],
            "type": "u64"
          },
          {
            "name": "isNewVault",
            "docs": [
              "Whether this distribution created a new vault (first-time init)"
            ],
            "type": "bool"
          },
          {
            "name": "forceClaimExecutor",
            "docs": [
              "Who executed the force claim"
            ],
            "type": "pubkey"
          },
          {
            "name": "forceClaimType",
            "docs": [
              "Type of force claim (Admin or Manager)"
            ],
            "type": {
              "defined": {
                "name": "forceClaimType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "bagsFeeSharePartnerClaimEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "partner",
            "docs": [
              "The partner who claimed"
            ],
            "type": "pubkey"
          },
          {
            "name": "partnerConfig",
            "docs": [
              "Partner config account"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Amount transferred to partner in this ix (quote token units)"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedFees",
            "docs": [
              "Cumulative amount the partner has claimed to date (quote token units)"
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "bagsFeeShareProtocolClaimEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "payer",
            "docs": [
              "Payer account"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "docs": [
              "Mint of the base token"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Mint of the quote token"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "Pool of the protocol"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeShareConfig",
            "docs": [
              "Fee share config account"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeShareAuthority",
            "docs": [
              "Fee share authority account"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimers",
            "docs": [
              "Claimers list (ordered)"
            ],
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "fees",
            "docs": [
              "Per-claimer accrued amounts matching `claimers` (quote token units)"
            ],
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "protocol",
            "docs": [
              "Source protocol for this claim snapshot"
            ],
            "type": {
              "defined": {
                "name": "claimProtocol"
              }
            }
          }
        ]
      }
    },
    {
      "name": "bagsFeeShareUserClaimEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "user",
            "docs": [
              "The user who claimed"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeShareConfig",
            "docs": [
              "Fee share config account"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeShareAuthority",
            "docs": [
              "Fee share authority account"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimerIndex",
            "docs": [
              "Index of the claimer within the config's claimers array"
            ],
            "type": "u32"
          },
          {
            "name": "claimed",
            "docs": [
              "Amount transferred to user (quote token units)"
            ],
            "type": "u64"
          },
          {
            "name": "isForced",
            "docs": [
              "Whether this claim was forced by an admin"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "bagsFeeShareUserClaimV2Event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "user",
            "docs": [
              "The user who claimed"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeShareConfig",
            "docs": [
              "Fee share config account"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeShareAuthority",
            "docs": [
              "Fee share authority account"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimerIndex",
            "docs": [
              "Index of the claimer within the config's claimers array"
            ],
            "type": "u32"
          },
          {
            "name": "claimed",
            "docs": [
              "Amount transferred to user (quote token units)"
            ],
            "type": "u64"
          },
          {
            "name": "forceClaimExecutor",
            "docs": [
              "Who force-executed the claim"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "forceClaimType",
            "docs": [
              "Who forced the claim"
            ],
            "type": {
              "option": {
                "defined": {
                  "name": "forceClaimType"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "bagsFeeShareUserVaultClaimEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "user",
            "docs": [
              "The user who claimed from their vault"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "docs": [
              "Mint of the base token (identifies the fee config pair)"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Mint of the quote token (WSOL)"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Amount of native SOL delivered to user (WSOL balance + rent from closed ATA)"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "baseFeeStruct",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cliffFeeNumerator",
            "type": "u64"
          },
          {
            "name": "feeSchedulerMode",
            "type": "u8"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "numberOfPeriod",
            "type": "u16"
          },
          {
            "name": "periodFrequency",
            "type": "u64"
          },
          {
            "name": "reductionFactor",
            "type": "u64"
          },
          {
            "name": "padding1",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "claimProtocol",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "dbc"
          },
          {
            "name": "dammV2"
          }
        ]
      }
    },
    {
      "name": "claimUserParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "claimerIndex",
            "docs": [
              "Index of claimer in the config claimers array"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "createFeeConfigParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bps",
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "finalizeInit",
            "docs": [
              "Whether the initialization is finalized.",
              "`true`: this is the final ix and wont be able to extend later",
              "`false`: this is not the final ix and can be extended later"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "createFeeConfigWithDeployerParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bps",
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "finalizeInit",
            "docs": [
              "Whether the initialization is finalized.",
              "`true`: this is the final ix and wont be able to extend later",
              "`false`: this is not the final ix and can be extended later"
            ],
            "type": "bool"
          },
          {
            "name": "deployerFeeCollectionMode",
            "docs": [
              "Deployer fee collection mode.",
              "",
              "`0` is the safe default: collect from platform pool only."
            ],
            "type": "u8"
          },
          {
            "name": "deployerFeeCollectionPlatformBps",
            "docs": [
              "Deployer fee collection bps from the platform pool."
            ],
            "type": "u16"
          },
          {
            "name": "deployerFeeCollectionClaimersBps",
            "docs": [
              "Deployer fee collection bps from the claimers pool."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "createPartnerConfigParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bps",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "custodyDeployerTerms",
      "docs": [
        "Optional per-pool deployer terms written onto [`PositionCustody`]."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "deployer",
            "docs": [
              "Deployer wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeCollectionMode",
            "docs": [
              "[`DeployerFeeCollectionMode`] as `u8`"
            ],
            "type": "u8"
          },
          {
            "name": "platformBps",
            "docs": [
              "Cut of the platform stream in bps"
            ],
            "type": "u16"
          },
          {
            "name": "claimersBps",
            "docs": [
              "Cut of the creator stream in bps"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "deployerAccumulatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit."
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint."
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint."
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "Pool."
            ],
            "type": "pubkey"
          },
          {
            "name": "deployerConfig",
            "docs": [
              "Per-pool deployer config account (PDA)."
            ],
            "type": "pubkey"
          },
          {
            "name": "deployerVault",
            "docs": [
              "Per-deployer aggregate vault account (PDA)."
            ],
            "type": "pubkey"
          },
          {
            "name": "deployer",
            "docs": [
              "Deployer wallet receiving share."
            ],
            "type": "pubkey"
          },
          {
            "name": "accumulated",
            "docs": [
              "Amount added to deployer's pending balance in this claim (quote units)."
            ],
            "type": "u64"
          },
          {
            "name": "totalAccumulatedFees",
            "docs": [
              "Current pending balance available to claim (quote units)."
            ],
            "type": "u64"
          },
          {
            "name": "totalLifetimeAccumulatedFees",
            "docs": [
              "All-time accumulated into deployer vault before claims (quote units)."
            ],
            "type": "u128"
          },
          {
            "name": "protocol",
            "docs": [
              "Source protocol that yielded these fees."
            ],
            "type": {
              "defined": {
                "name": "claimProtocol"
              }
            }
          }
        ]
      }
    },
    {
      "name": "deployerClaimEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit."
            ],
            "type": "i64"
          },
          {
            "name": "deployer",
            "docs": [
              "Deployer who claimed."
            ],
            "type": "pubkey"
          },
          {
            "name": "deployerVault",
            "docs": [
              "Per-deployer aggregate vault account (PDA)."
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Amount transferred to deployer in this ix (quote token units)."
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedFees",
            "docs": [
              "Cumulative amount the deployer has claimed to date (quote token units)."
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "deployerConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "deployer",
            "docs": [
              "Deployer wallet tied to the fee config."
            ],
            "type": "pubkey"
          },
          {
            "name": "feeCollectionMode",
            "docs": [
              "Deployer fee collection mode (stored as u8; see [`DeployerFeeCollectionMode`]).",
              "",
              "Defaults to 0 (CollectFromPlatform)."
            ],
            "type": "u8"
          },
          {
            "name": "feeCollectionPlatformBps",
            "docs": [
              "Deployer fee collection bps from platform share."
            ],
            "type": "u16"
          },
          {
            "name": "feeCollectionClaimersBps",
            "docs": [
              "Deployer fee collection bps from claimers share."
            ],
            "type": "u16"
          },
          {
            "name": "padding1",
            "docs": [
              "Reserved for future use."
            ],
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for the config account."
            ],
            "type": "u8"
          },
          {
            "name": "padding0",
            "docs": [
              "Padding reserved for future use (8-byte aligned)."
            ],
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "deployerConfigCreatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit."
            ],
            "type": "i64"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that created the deployer config."
            ],
            "type": "pubkey"
          },
          {
            "name": "deployerConfig",
            "docs": [
              "Per-pool deployer config account (PDA)."
            ],
            "type": "pubkey"
          },
          {
            "name": "deployerVault",
            "docs": [
              "Per-deployer aggregate vault account (PDA)."
            ],
            "type": "pubkey"
          },
          {
            "name": "deployer",
            "docs": [
              "Deployer wallet associated with the config and vault."
            ],
            "type": "pubkey"
          },
          {
            "name": "feeCollectionMode",
            "docs": [
              "Deployer fee collection mode."
            ],
            "type": "u8"
          },
          {
            "name": "feeCollectionPlatformBps",
            "docs": [
              "Deployer fee collection platform bps."
            ],
            "type": "u16"
          },
          {
            "name": "feeCollectionClaimersBps",
            "docs": [
              "Deployer fee collection claimers bps."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "deployerConfigUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit."
            ],
            "type": "i64"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that updated the deployer config."
            ],
            "type": "pubkey"
          },
          {
            "name": "deployerConfig",
            "docs": [
              "Per-pool deployer config account (PDA)."
            ],
            "type": "pubkey"
          },
          {
            "name": "deployer",
            "docs": [
              "Deployer wallet associated with the config."
            ],
            "type": "pubkey"
          },
          {
            "name": "feeCollectionMode",
            "docs": [
              "Deployer fee collection mode."
            ],
            "type": "u8"
          },
          {
            "name": "feeCollectionPlatformBps",
            "docs": [
              "Deployer fee collection platform bps."
            ],
            "type": "u16"
          },
          {
            "name": "feeCollectionClaimersBps",
            "docs": [
              "Deployer fee collection claimers bps."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "deployerVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalClaimedFees",
            "docs": [
              "Total claimed fees for the deployer (cumulative, quote units)."
            ],
            "type": "u128"
          },
          {
            "name": "totalAccumulatedFees",
            "docs": [
              "Pending deployer fees accumulated from all configured pools."
            ],
            "type": "u64"
          },
          {
            "name": "totalLifetimeAccumulatedFees",
            "docs": [
              "All-time fees accumulated into the deployer vault (quote units)."
            ],
            "type": "u128"
          },
          {
            "name": "deployer",
            "docs": [
              "Deployer wallet associated with this aggregate vault."
            ],
            "type": "pubkey"
          },
          {
            "name": "padding1",
            "docs": [
              "Reserved for future use."
            ],
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for the vault account."
            ],
            "type": "u8"
          },
          {
            "name": "padding0",
            "docs": [
              "Padding reserved for future use (8-byte aligned)."
            ],
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "deployerVaultClaimedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "deployer",
            "docs": [
              "Deployer wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "deployerVault",
            "docs": [
              "Deployer vault authority PDA"
            ],
            "type": "pubkey"
          },
          {
            "name": "mint",
            "docs": [
              "Mint drained"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Quote units swept to the deployer wallet"
            ],
            "type": "u64"
          },
          {
            "name": "signer",
            "docs": [
              "Signer that triggered the sweep"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "dynamicFeeStruct",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "type": "u8"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "maxVolatilityAccumulator",
            "type": "u32"
          },
          {
            "name": "variableFeeControl",
            "type": "u32"
          },
          {
            "name": "binStep",
            "type": "u16"
          },
          {
            "name": "filterPeriod",
            "type": "u16"
          },
          {
            "name": "decayPeriod",
            "type": "u16"
          },
          {
            "name": "reductionFactor",
            "type": "u16"
          },
          {
            "name": "lastUpdateTimestamp",
            "type": "u64"
          },
          {
            "name": "binStepU128",
            "type": "u128"
          },
          {
            "name": "sqrtPriceReference",
            "type": "u128"
          },
          {
            "name": "volatilityAccumulator",
            "type": "u128"
          },
          {
            "name": "volatilityReference",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "extendCreatedFeeConfigParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bps",
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "finalizeInit",
            "docs": [
              "Whether the initialization is finalized by this call.",
              "`true`: finalize now and prevent further extends/updates until normal update flow",
              "`false`: allow further extends until finalization"
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "feeConfigPlatformBpsUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that updated the override"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeConfig",
            "docs": [
              "Fee share config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeAuthority",
            "docs": [
              "Fee share authority account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint of the bonding curve token"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint of the bonding curve token"
            ],
            "type": "pubkey"
          },
          {
            "name": "oldPlatformBps",
            "docs": [
              "Previous stored override (raw sentinel values included)"
            ],
            "type": "u16"
          },
          {
            "name": "newPlatformBps",
            "docs": [
              "New stored override (raw sentinel values included)"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "feeConfigSnapshotEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that created/updated the fee config"
            ],
            "type": "pubkey"
          },
          {
            "name": "payer",
            "docs": [
              "Payer account (creator)"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeConfig",
            "docs": [
              "Fee share config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeAuthority",
            "docs": [
              "Fee share authority account (PDA holding ledger and ATAs)"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint of the bonding curve token"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint of the bonding curve token"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Optional partner wallet tied to this config"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "partnerBps",
            "docs": [
              "Partner share in basis points"
            ],
            "type": "u16"
          },
          {
            "name": "bps",
            "docs": [
              "Per-claimer shares in basis points (aligned with `claimers`)"
            ],
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "claimers",
            "docs": [
              "Ordered claimer addresses for this config"
            ],
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "feeConfigSnapshotEventV2",
      "docs": [
        "V2 snapshot event that includes the `manager` field and reserved padding for future extensibility.",
        "This event also removed the `partner_bps` field as it is meant to be tracked differently via partner-related events."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "admin",
            "docs": [
              "Admin or manager that triggered the update"
            ],
            "type": "pubkey"
          },
          {
            "name": "payer",
            "docs": [
              "Payer account"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeConfig",
            "docs": [
              "Fee share config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeAuthority",
            "docs": [
              "Fee share authority account (PDA holding ledger and ATAs)"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint of the bonding curve token"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint of the bonding curve token"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Optional partner wallet tied to this config"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "manager",
            "docs": [
              "Manager pubkey"
            ],
            "type": "pubkey"
          },
          {
            "name": "customPlatformBps",
            "docs": [
              "Per-config platform BPS override (`0` = program-config fallback, `u16::MAX` = waived)"
            ],
            "type": "u16"
          },
          {
            "name": "refundFlag",
            "docs": [
              "One-shot admin refund marker (`0` = not refunded, `1` = applied)"
            ],
            "type": "u8"
          },
          {
            "name": "paddingA",
            "docs": [
              "Reserved for future event fields"
            ],
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "padding",
            "docs": [
              "Reserved for future event fields"
            ],
            "type": {
              "array": [
                "u64",
                3
              ]
            }
          },
          {
            "name": "bps",
            "docs": [
              "Per-claimer shares in basis points (aligned with `claimers`)"
            ],
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "claimers",
            "docs": [
              "Ordered claimer addresses for this config"
            ],
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "feeConfigUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that updated the fee config"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeConfig",
            "docs": [
              "Fee share config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeAuthority",
            "docs": [
              "Fee share authority account (PDA holding ledger and ATAs)"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint of the bonding curve token"
            ],
            "type": "pubkey"
          },
          {
            "name": "newBps",
            "docs": [
              "Per-claimer shares in basis points (aligned with `claimers`)"
            ],
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "newClaimers",
            "docs": [
              "Ordered claimer addresses for this config"
            ],
            "type": {
              "vec": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "feeShareAuthority",
      "docs": [
        "Legacy serialized layout for IDL/IDL tests only. Not used at runtime."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "config",
            "docs": [
              "Fee share config public key"
            ],
            "type": "pubkey"
          },
          {
            "name": "totalLifetimeAccumulatedFees",
            "docs": [
              "Cumulative fees ever accumulated from protocols into the authority ATA"
            ],
            "type": "u128"
          },
          {
            "name": "totalUserClaimedFees",
            "docs": [
              "Cumulative fees ever claimed out by users"
            ],
            "type": "u128"
          },
          {
            "name": "totalPartnerClaimedFees",
            "docs": [
              "Cumulative fees ever claimed out by partner"
            ],
            "type": "u128"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for the authority account"
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "docs": [
              "Future use"
            ],
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "fees",
            "docs": [
              "Per-claimer accrued amounts (payload is variable-length at runtime)"
            ],
            "type": {
              "array": [
                "u64",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "feeShareAuthorityHeader",
      "docs": [
        "Zero-copy header for fixed fields. This is the `T` in `AccountLoader<'info, T>`."
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "config",
            "docs": [
              "Fee share config public key"
            ],
            "type": "pubkey"
          },
          {
            "name": "totalLifetimeAccumulatedFees",
            "docs": [
              "Cumulative fees ever accumulated from protocols into the authority ATA"
            ],
            "type": "u128"
          },
          {
            "name": "totalUserClaimedFees",
            "docs": [
              "Cumulative fees ever claimed out by users"
            ],
            "type": "u128"
          },
          {
            "name": "totalPartnerClaimedFees",
            "docs": [
              "Cumulative fees ever claimed out by partner"
            ],
            "type": "u128"
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for the authority account"
            ],
            "type": "u8"
          },
          {
            "name": "padding",
            "docs": [
              "Future use"
            ],
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          }
        ]
      }
    },
    {
      "name": "feeShareConfig",
      "docs": [
        "Legacy serialized layout for IDL/IDL tests only. Not used at runtime."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseMint",
            "docs": [
              "Base mint public key"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint public key (currently only WSOL is supported)"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Optional partner public"
            ],
            "type": "pubkey"
          },
          {
            "name": "partnerConfig",
            "docs": [
              "Optional partner config"
            ],
            "type": "pubkey"
          },
          {
            "name": "manager",
            "docs": [
              "Optional manager pubkey (defaults to Pubkey::default() if no manager is set)"
            ],
            "type": "pubkey"
          },
          {
            "name": "customPlatformBps",
            "docs": [
              "Per-config platform share override in basis points.",
              "`0` uses `ProgramConfig.platform_bps`; `u16::MAX` waives the platform cut."
            ],
            "type": "u16"
          },
          {
            "name": "refundFlag",
            "docs": [
              "One-shot admin refund marker (`0` = not refunded, `1` = `admin_refund_ledger` applied)."
            ],
            "type": "u8"
          },
          {
            "name": "padding0",
            "docs": [
              "Reserved for future use"
            ],
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "isInitFinalized",
            "docs": [
              "When this is `0` - it's initialization is not done yet (claim/update ixs will fail)"
            ],
            "type": "u8"
          },
          {
            "name": "isUpdateLocked",
            "docs": [
              "When this is `1` - config is locked for pending updates (claim ixs will fail)",
              "**AVOID** setting this manually, use update methods"
            ],
            "type": "u8"
          },
          {
            "name": "isSeparateDeployer",
            "docs": [
              "When this is `1` - config has an associated deployer config"
            ],
            "type": "u8"
          },
          {
            "name": "padding1",
            "docs": [
              "Reserved for future use"
            ],
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for the config account"
            ],
            "type": "u8"
          },
          {
            "name": "claimers",
            "docs": [
              "Claimers (payload is variable-length at runtime)"
            ],
            "type": {
              "array": [
                "pubkey",
                1
              ]
            }
          },
          {
            "name": "bps",
            "docs": [
              "Claimer shares in basis points (aligned to `claimers`)"
            ],
            "type": {
              "array": [
                "u16",
                1
              ]
            }
          }
        ]
      }
    },
    {
      "name": "feeShareConfigHeader",
      "docs": [
        "Zero-copy header for fixed fields. This is the `T` in `AccountLoader<'info, T>`."
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseMint",
            "docs": [
              "Base mint public key"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint public key (currently only WSOL is supported)"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Optional partner public"
            ],
            "type": "pubkey"
          },
          {
            "name": "partnerConfig",
            "docs": [
              "Optional partner config"
            ],
            "type": "pubkey"
          },
          {
            "name": "manager",
            "docs": [
              "Optional manager pubkey (defaults to Pubkey::default() if no manager is set)"
            ],
            "type": "pubkey"
          },
          {
            "name": "customPlatformBps",
            "docs": [
              "Per-config platform share override in basis points.",
              "`0` uses `ProgramConfig.platform_bps`; `u16::MAX` waives the platform cut."
            ],
            "type": "u16"
          },
          {
            "name": "refundFlag",
            "docs": [
              "One-shot admin refund marker (`0` = not refunded, `1` = `admin_refund_ledger` applied)."
            ],
            "type": "u8"
          },
          {
            "name": "padding0",
            "docs": [
              "Reserved for future use"
            ],
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "isInitFinalized",
            "docs": [
              "When this is `0` - it's initialization is not done yet (claim/update ixs will fail)"
            ],
            "type": "u8"
          },
          {
            "name": "isUpdateLocked",
            "docs": [
              "When this is `1` - config is locked for pending updates (claim ixs will fail)",
              "**AVOID** setting this manually, use update methods"
            ],
            "type": "u8"
          },
          {
            "name": "isSeparateDeployer",
            "docs": [
              "When this is `1` - config has an associated deployer config"
            ],
            "type": "u8"
          },
          {
            "name": "padding1",
            "docs": [
              "Reserved for future use"
            ],
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for the config account"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "forceClaimType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "unknown"
          },
          {
            "name": "admin"
          },
          {
            "name": "manager"
          }
        ]
      }
    },
    {
      "name": "forceClaimUserParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "claimerIndex",
            "docs": [
              "Index of claimer in the config claimers array"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "forceClaimUserToVaultParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "claimerIndex",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "forceSolClaimUserParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "claimerIndex",
            "docs": [
              "Index of claimer in the config claimers array"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "managerSourceDescriptor",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "kind",
            "type": "u8"
          },
          {
            "name": "expectedMigrated",
            "type": "u8"
          },
          {
            "name": "expectedMigrationProgress",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "managerUpdateFeeConfigParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bps",
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "finalizeUpdate",
            "docs": [
              "Whether the update is finalized.",
              "`true`: this is the final ix and wont be able to further update later",
              "`false`: this is not the final ix and can be updated again later"
            ],
            "type": "bool"
          },
          {
            "name": "fromIdx",
            "docs": [
              "The index of the claimer to update from"
            ],
            "type": "u8"
          },
          {
            "name": "toIdx",
            "docs": [
              "The index of the claimer to update to"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "partnerAccumulatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "pool"
            ],
            "type": "pubkey"
          },
          {
            "name": "partnerConfig",
            "docs": [
              "Partner config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Partner wallet receiving share"
            ],
            "type": "pubkey"
          },
          {
            "name": "accumulated",
            "docs": [
              "Amount added to partner's pending balance in this claim (quote units)"
            ],
            "type": "u64"
          },
          {
            "name": "totalAccumulatedFees",
            "docs": [
              "Current pending balance available to claim (quote units)"
            ],
            "type": "u64"
          },
          {
            "name": "totalLifetimeAccumulatedFees",
            "docs": [
              "All-time accumulated into partner config before claims (quote units)"
            ],
            "type": "u128"
          },
          {
            "name": "protocol",
            "docs": [
              "Source protocol that yielded these fees"
            ],
            "type": {
              "defined": {
                "name": "claimProtocol"
              }
            }
          }
        ]
      }
    },
    {
      "name": "partnerConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalClaimedFees",
            "docs": [
              "Total claimed fees for the partner (cumulative, quote units)"
            ],
            "type": "u128"
          },
          {
            "name": "totalAccumulatedFees",
            "docs": [
              "Pending partner fees (sum of last protocol claims not yet claimed)"
            ],
            "type": "u64"
          },
          {
            "name": "totalLifetimeAccumulatedFees",
            "docs": [
              "All-time fees accumulated into the partner config (quote units)"
            ],
            "type": "u128"
          },
          {
            "name": "partner",
            "docs": [
              "Partner public key"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeCollectionMode",
            "docs": [
              "Partner fee collection mode (stored as u8; see [`PartnerFeeCollectionMode`])",
              "",
              "Defaults to 0 (CollectFromClaimers)."
            ],
            "type": "u8"
          },
          {
            "name": "feeCollectionPlatformBps",
            "docs": [
              "Partner fee collection bps from platform share (used for CollectFromPlatform and CollectFromAll)",
              "",
              "Defaults to 0."
            ],
            "type": "u16"
          },
          {
            "name": "padding1",
            "docs": [
              "Reserved for future use"
            ],
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "bump",
            "docs": [
              "Bump seed for the config account"
            ],
            "type": "u8"
          },
          {
            "name": "bps",
            "docs": [
              "Partner share in basis points (before distribution to claimers)",
              "",
              "Updated name: **fee_collection_claimers_bps**"
            ],
            "type": "u16"
          },
          {
            "name": "padding0",
            "docs": [
              "Padding reserved for future use (8-byte aligned; kept for backwards-compatible account size)"
            ],
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "partnerConfigCreatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that created the partner config"
            ],
            "type": "pubkey"
          },
          {
            "name": "partnerConfig",
            "docs": [
              "Partner config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Partner wallet associated with the config"
            ],
            "type": "pubkey"
          },
          {
            "name": "bps",
            "docs": [
              "Partner's fee share in basis points"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "partnerConfigUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that updated the partner config"
            ],
            "type": "pubkey"
          },
          {
            "name": "partnerConfig",
            "docs": [
              "Partner config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Partner wallet associated with the config"
            ],
            "type": "pubkey"
          },
          {
            "name": "oldBps",
            "docs": [
              "Previous partner BPS before update"
            ],
            "type": "u16"
          },
          {
            "name": "updatedBps",
            "docs": [
              "New partner BPS after update"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "partnerConfigV2SnapshotEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that updated the partner config"
            ],
            "type": "pubkey"
          },
          {
            "name": "partnerConfig",
            "docs": [
              "Partner config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Partner wallet associated with the config"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeCollectionMode",
            "docs": [
              "Partner fee collection mode"
            ],
            "type": "u8"
          },
          {
            "name": "feeCollectionPlatformBps",
            "docs": [
              "Partner fee collection platform bps"
            ],
            "type": "u16"
          },
          {
            "name": "feeCollectionClaimersBps",
            "docs": [
              "Partner fee collection claimers bps"
            ],
            "type": "u16"
          },
          {
            "name": "padding0",
            "docs": [
              "Padding reserved for future use (8-byte aligned; kept for backwards-compatible account size)"
            ],
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "partnerVaultClaimedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "partner",
            "docs": [
              "Partner wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "partnerConfig",
            "docs": [
              "Partner config PDA"
            ],
            "type": "pubkey"
          },
          {
            "name": "mint",
            "docs": [
              "Mint drained"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Quote units swept to the partner wallet"
            ],
            "type": "u64"
          },
          {
            "name": "signer",
            "docs": [
              "Signer that triggered the sweep"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "platformAccumulatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "pool"
            ],
            "type": "pubkey"
          },
          {
            "name": "platformVault",
            "docs": [
              "Platform vault account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "accumulated",
            "docs": [
              "Amount added to platform's pending balance in this claim (quote units)"
            ],
            "type": "u64"
          },
          {
            "name": "totalAccumulatedFees",
            "docs": [
              "Current pending balance available to claim (quote units)"
            ],
            "type": "u64"
          },
          {
            "name": "totalLifetimeAccumulatedFees",
            "docs": [
              "All-time accumulated into platform config before claims (quote units)"
            ],
            "type": "u128"
          },
          {
            "name": "protocol",
            "docs": [
              "Source protocol that yielded these fees"
            ],
            "type": {
              "defined": {
                "name": "claimProtocol"
              }
            }
          }
        ]
      }
    },
    {
      "name": "platformClaimedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "platformVault",
            "docs": [
              "Platform vault account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that initiated the claim"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Amount claimed from platform (quote units)"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedFees",
            "docs": [
              "Cumulative amount the platform has claimed to date (quote units)"
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "platformVaultClaimedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "platformVault",
            "docs": [
              "Per-mint platform vault that was drained"
            ],
            "type": "pubkey"
          },
          {
            "name": "mint",
            "docs": [
              "Mint withdrawn from the vault"
            ],
            "type": "pubkey"
          },
          {
            "name": "receiver",
            "docs": [
              "Admin-chosen receiver"
            ],
            "type": "pubkey"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that initiated the withdraw"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Amount transferred (mint units)"
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "pool",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "poolFees",
            "docs": [
              "Pool fee"
            ],
            "type": {
              "defined": {
                "name": "poolFeesStruct"
              }
            }
          },
          {
            "name": "tokenAMint",
            "docs": [
              "token a mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenBMint",
            "docs": [
              "token b mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenAVault",
            "docs": [
              "token a vault"
            ],
            "type": "pubkey"
          },
          {
            "name": "tokenBVault",
            "docs": [
              "token b vault"
            ],
            "type": "pubkey"
          },
          {
            "name": "whitelistedVault",
            "docs": [
              "Whitelisted vault to be able to buy pool before activation_point"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "partner"
            ],
            "type": "pubkey"
          },
          {
            "name": "liquidity",
            "docs": [
              "liquidity share"
            ],
            "type": "u128"
          },
          {
            "name": "padding",
            "docs": [
              "padding, previous reserve amount, be careful to use that field"
            ],
            "type": "u128"
          },
          {
            "name": "protocolAFee",
            "docs": [
              "protocol a fee"
            ],
            "type": "u64"
          },
          {
            "name": "protocolBFee",
            "docs": [
              "protocol b fee"
            ],
            "type": "u64"
          },
          {
            "name": "partnerAFee",
            "docs": [
              "partner a fee"
            ],
            "type": "u64"
          },
          {
            "name": "partnerBFee",
            "docs": [
              "partner b fee"
            ],
            "type": "u64"
          },
          {
            "name": "sqrtMinPrice",
            "docs": [
              "min price"
            ],
            "type": "u128"
          },
          {
            "name": "sqrtMaxPrice",
            "docs": [
              "max price"
            ],
            "type": "u128"
          },
          {
            "name": "sqrtPrice",
            "docs": [
              "current price"
            ],
            "type": "u128"
          },
          {
            "name": "activationPoint",
            "docs": [
              "Activation point, can be slot or timestamp"
            ],
            "type": "u64"
          },
          {
            "name": "activationType",
            "docs": [
              "Activation type, 0 means by slot, 1 means by timestamp"
            ],
            "type": "u8"
          },
          {
            "name": "poolStatus",
            "docs": [
              "pool status, 0: enable, 1 disable"
            ],
            "type": "u8"
          },
          {
            "name": "tokenAFlag",
            "docs": [
              "token a flag"
            ],
            "type": "u8"
          },
          {
            "name": "tokenBFlag",
            "docs": [
              "token b flag"
            ],
            "type": "u8"
          },
          {
            "name": "collectFeeMode",
            "docs": [
              "0 is collect fee in both token, 1 only collect fee in token a, 2 only collect fee in token b"
            ],
            "type": "u8"
          },
          {
            "name": "poolType",
            "docs": [
              "pool type"
            ],
            "type": "u8"
          },
          {
            "name": "padding0",
            "docs": [
              "padding"
            ],
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "feeAPerLiquidity",
            "docs": [
              "cumulative"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "feeBPerLiquidity",
            "docs": [
              "cumulative"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "permanentLockLiquidity",
            "type": "u128"
          },
          {
            "name": "metrics",
            "docs": [
              "metrics"
            ],
            "type": {
              "defined": {
                "name": "poolMetrics"
              }
            }
          },
          {
            "name": "creator",
            "docs": [
              "pool creator"
            ],
            "type": "pubkey"
          },
          {
            "name": "padding1",
            "docs": [
              "Padding for further use"
            ],
            "type": {
              "array": [
                "u64",
                6
              ]
            }
          },
          {
            "name": "rewardInfos",
            "docs": [
              "Farming reward information"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "rewardInfo"
                  }
                },
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "poolFeesStruct",
      "docs": [
        "Information regarding fee charges",
        "trading_fee = amount * trade_fee_numerator / denominator",
        "protocol_fee = trading_fee * protocol_fee_percentage / 100",
        "referral_fee = protocol_fee * referral_percentage / 100",
        "partner_fee = (protocol_fee - referral_fee) * partner_fee_percentage / denominator"
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseFee",
            "docs": [
              "Trade fees are extra token amounts that are held inside the token",
              "accounts during a trade, making the value of liquidity tokens rise.",
              "Trade fee numerator"
            ],
            "type": {
              "defined": {
                "name": "baseFeeStruct"
              }
            }
          },
          {
            "name": "protocolFeePercent",
            "docs": [
              "Protocol trading fees are extra token amounts that are held inside the token",
              "accounts during a trade, with the equivalent in pool tokens minted to",
              "the protocol of the program.",
              "Protocol trade fee numerator"
            ],
            "type": "u8"
          },
          {
            "name": "partnerFeePercent",
            "docs": [
              "partner fee"
            ],
            "type": "u8"
          },
          {
            "name": "referralFeePercent",
            "docs": [
              "referral fee"
            ],
            "type": "u8"
          },
          {
            "name": "padding0",
            "docs": [
              "padding"
            ],
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          },
          {
            "name": "dynamicFee",
            "docs": [
              "dynamic fee"
            ],
            "type": {
              "defined": {
                "name": "dynamicFeeStruct"
              }
            }
          },
          {
            "name": "padding1",
            "docs": [
              "padding"
            ],
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          }
        ]
      }
    },
    {
      "name": "poolMetrics",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalLpAFee",
            "type": "u128"
          },
          {
            "name": "totalLpBFee",
            "type": "u128"
          },
          {
            "name": "totalProtocolAFee",
            "type": "u64"
          },
          {
            "name": "totalProtocolBFee",
            "type": "u64"
          },
          {
            "name": "totalPartnerAFee",
            "type": "u64"
          },
          {
            "name": "totalPartnerBFee",
            "type": "u64"
          },
          {
            "name": "totalPosition",
            "type": "u64"
          },
          {
            "name": "padding",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "position",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "nftMint",
            "docs": [
              "nft mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeAPerTokenCheckpoint",
            "docs": [
              "fee a checkpoint"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "feeBPerTokenCheckpoint",
            "docs": [
              "fee b checkpoint"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "feeAPending",
            "docs": [
              "fee a pending"
            ],
            "type": "u64"
          },
          {
            "name": "feeBPending",
            "docs": [
              "fee b pending"
            ],
            "type": "u64"
          },
          {
            "name": "unlockedLiquidity",
            "docs": [
              "unlock liquidity"
            ],
            "type": "u128"
          },
          {
            "name": "vestedLiquidity",
            "docs": [
              "vesting liquidity"
            ],
            "type": "u128"
          },
          {
            "name": "permanentLockedLiquidity",
            "docs": [
              "permanent locked liquidity"
            ],
            "type": "u128"
          },
          {
            "name": "metrics",
            "docs": [
              "metrics"
            ],
            "type": {
              "defined": {
                "name": "positionMetrics"
              }
            }
          },
          {
            "name": "rewardInfos",
            "docs": [
              "Farming reward information"
            ],
            "type": {
              "array": [
                {
                  "defined": {
                    "name": "userRewardInfo"
                  }
                },
                2
              ]
            }
          },
          {
            "name": "padding",
            "docs": [
              "padding for future usage"
            ],
            "type": {
              "array": [
                "u128",
                6
              ]
            }
          }
        ]
      }
    },
    {
      "name": "positionCustody",
      "docs": [
        "Per-pool custody of DAMM v2 position NFTs.",
        "",
        "The authority PDA (`position_custody_authority`) owns the NFT ATAs and",
        "signs `claim_position_fee` CPIs. Quote mint is classic SPL or Token-2022",
        "except WSOL. Isolated from the WSOL-only fee-share path."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "baseMint",
            "docs": [
              "Base token mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote token mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "DAMM v2 pool the custodied positions belong to"
            ],
            "type": "pubkey"
          },
          {
            "name": "platformPositionNftMint",
            "docs": [
              "Platform position NFT mint; default until that role is deposited"
            ],
            "type": "pubkey"
          },
          {
            "name": "creatorPositionNftMint",
            "docs": [
              "Creator position NFT mint; default until that role is deposited"
            ],
            "type": "pubkey"
          },
          {
            "name": "recipient",
            "docs": [
              "Wallet that receives creator-position fee claims"
            ],
            "type": "pubkey"
          },
          {
            "name": "manager",
            "docs": [
              "Optional manager; default means none"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Optional partner wallet; default means none"
            ],
            "type": "pubkey"
          },
          {
            "name": "deployer",
            "docs": [
              "Optional deployer wallet; default means none"
            ],
            "type": "pubkey"
          },
          {
            "name": "totalCreatorClaimed",
            "docs": [
              "Cumulative quote units claimed from the creator position"
            ],
            "type": "u128"
          },
          {
            "name": "totalPlatformClaimed",
            "docs": [
              "Cumulative quote units claimed from the platform position"
            ],
            "type": "u128"
          },
          {
            "name": "totalPartnerClaimed",
            "docs": [
              "Cumulative quote units paid to the partner from this custody"
            ],
            "type": "u128"
          },
          {
            "name": "totalDeployerClaimed",
            "docs": [
              "Cumulative quote units paid to the deployer from this custody"
            ],
            "type": "u128"
          },
          {
            "name": "deployerPlatformBps",
            "docs": [
              "Deployer cut of the platform stream"
            ],
            "type": "u16"
          },
          {
            "name": "deployerClaimersBps",
            "docs": [
              "Deployer cut of the creator stream"
            ],
            "type": "u16"
          },
          {
            "name": "deployerFeeCollectionMode",
            "docs": [
              "[`DeployerFeeCollectionMode`] as `u8`"
            ],
            "type": "u8"
          },
          {
            "name": "padding1",
            "docs": [
              "Reserved"
            ],
            "type": {
              "array": [
                "u8",
                3
              ]
            }
          },
          {
            "name": "padding0",
            "docs": [
              "Reserved"
            ],
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          },
          {
            "name": "padding2",
            "docs": [
              "Reserved"
            ],
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "bump",
            "docs": [
              "Bump for this account"
            ],
            "type": "u8"
          },
          {
            "name": "authorityBump",
            "docs": [
              "Bump for the custody authority PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "positionCustodyCreatorClaimedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "DAMM v2 pool"
            ],
            "type": "pubkey"
          },
          {
            "name": "positionCustody",
            "docs": [
              "Custody state account"
            ],
            "type": "pubkey"
          },
          {
            "name": "recipient",
            "docs": [
              "Recipient that received the net quote fees"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Gross quote units claimed from DAMM"
            ],
            "type": "u64"
          },
          {
            "name": "partnerCut",
            "docs": [
              "Partner cut of this claim"
            ],
            "type": "u64"
          },
          {
            "name": "deployerCut",
            "docs": [
              "Deployer cut of this claim"
            ],
            "type": "u64"
          },
          {
            "name": "net",
            "docs": [
              "Quote units delivered to the recipient"
            ],
            "type": "u64"
          },
          {
            "name": "totalCreatorClaimed",
            "docs": [
              "Cumulative creator quote units claimed"
            ],
            "type": "u128"
          },
          {
            "name": "signer",
            "docs": [
              "Signer that triggered the claim"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "positionCustodyDeployerAccumulatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "DAMM v2 pool"
            ],
            "type": "pubkey"
          },
          {
            "name": "positionCustody",
            "docs": [
              "Custody state account"
            ],
            "type": "pubkey"
          },
          {
            "name": "deployerVault",
            "docs": [
              "Deployer vault authority PDA"
            ],
            "type": "pubkey"
          },
          {
            "name": "deployer",
            "docs": [
              "Deployer wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "role",
            "docs": [
              "Stream the cut was taken from"
            ],
            "type": {
              "defined": {
                "name": "positionCustodyRole"
              }
            }
          },
          {
            "name": "accumulated",
            "docs": [
              "Quote units paid to the deployer vault"
            ],
            "type": "u64"
          },
          {
            "name": "totalDeployerClaimed",
            "docs": [
              "Cumulative deployer quote units from this custody"
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "positionCustodyDeployerUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "positionCustody",
            "docs": [
              "Custody state account"
            ],
            "type": "pubkey"
          },
          {
            "name": "oldDeployer",
            "docs": [
              "Previous deployer (default if none)"
            ],
            "type": "pubkey"
          },
          {
            "name": "newDeployer",
            "docs": [
              "New deployer (default if cleared)"
            ],
            "type": "pubkey"
          },
          {
            "name": "feeCollectionMode",
            "docs": [
              "New deployer collection mode"
            ],
            "type": "u8"
          },
          {
            "name": "platformBps",
            "docs": [
              "New deployer platform-stream bps"
            ],
            "type": "u16"
          },
          {
            "name": "claimersBps",
            "docs": [
              "New deployer creator-stream bps"
            ],
            "type": "u16"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that performed the update"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "positionCustodyDepositedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "DAMM v2 pool"
            ],
            "type": "pubkey"
          },
          {
            "name": "positionCustody",
            "docs": [
              "Custody state account"
            ],
            "type": "pubkey"
          },
          {
            "name": "custodyAuthority",
            "docs": [
              "Custody authority PDA"
            ],
            "type": "pubkey"
          },
          {
            "name": "position",
            "docs": [
              "DAMM v2 position account"
            ],
            "type": "pubkey"
          },
          {
            "name": "positionNftMint",
            "docs": [
              "Deposited position NFT mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "lockedLiquidity",
            "docs": [
              "Permanent locked liquidity on the deposited position"
            ],
            "type": "u128"
          },
          {
            "name": "role",
            "docs": [
              "Role of the deposited position"
            ],
            "type": {
              "defined": {
                "name": "positionCustodyRole"
              }
            }
          },
          {
            "name": "recipient",
            "docs": [
              "Creator fee recipient after this deposit"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Optional partner after this deposit"
            ],
            "type": "pubkey"
          },
          {
            "name": "deployer",
            "docs": [
              "Optional deployer after this deposit"
            ],
            "type": "pubkey"
          },
          {
            "name": "signer",
            "docs": [
              "Pool creator who signed the deposit"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "positionCustodyManagerUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "positionCustody",
            "docs": [
              "Custody state account"
            ],
            "type": "pubkey"
          },
          {
            "name": "oldManager",
            "docs": [
              "Previous manager (default if none)"
            ],
            "type": "pubkey"
          },
          {
            "name": "newManager",
            "docs": [
              "New manager (default if cleared)"
            ],
            "type": "pubkey"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that performed the update"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "positionCustodyPartnerAccumulatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "DAMM v2 pool"
            ],
            "type": "pubkey"
          },
          {
            "name": "positionCustody",
            "docs": [
              "Custody state account"
            ],
            "type": "pubkey"
          },
          {
            "name": "partnerConfig",
            "docs": [
              "Partner config PDA"
            ],
            "type": "pubkey"
          },
          {
            "name": "partner",
            "docs": [
              "Partner wallet"
            ],
            "type": "pubkey"
          },
          {
            "name": "role",
            "docs": [
              "Stream the cut was taken from"
            ],
            "type": {
              "defined": {
                "name": "positionCustodyRole"
              }
            }
          },
          {
            "name": "accumulated",
            "docs": [
              "Quote units paid to the partner vault"
            ],
            "type": "u64"
          },
          {
            "name": "totalPartnerClaimed",
            "docs": [
              "Cumulative partner quote units from this custody"
            ],
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "positionCustodyPartnerUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "positionCustody",
            "docs": [
              "Custody state account"
            ],
            "type": "pubkey"
          },
          {
            "name": "oldPartner",
            "docs": [
              "Previous partner (default if none)"
            ],
            "type": "pubkey"
          },
          {
            "name": "newPartner",
            "docs": [
              "New partner (default if cleared)"
            ],
            "type": "pubkey"
          },
          {
            "name": "admin",
            "docs": [
              "Admin that performed the update"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "positionCustodyPlatformClaimedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "DAMM v2 pool"
            ],
            "type": "pubkey"
          },
          {
            "name": "positionCustody",
            "docs": [
              "Custody state account"
            ],
            "type": "pubkey"
          },
          {
            "name": "receiver",
            "docs": [
              "Destination owner: `program_config` on the vault path, chosen receiver when forced"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Gross quote units claimed from DAMM"
            ],
            "type": "u64"
          },
          {
            "name": "partnerCut",
            "docs": [
              "Partner cut of this claim"
            ],
            "type": "u64"
          },
          {
            "name": "deployerCut",
            "docs": [
              "Deployer cut of this claim"
            ],
            "type": "u64"
          },
          {
            "name": "net",
            "docs": [
              "Quote units left with the receiver after cuts"
            ],
            "type": "u64"
          },
          {
            "name": "totalPlatformClaimed",
            "docs": [
              "Cumulative platform quote units claimed"
            ],
            "type": "u128"
          },
          {
            "name": "forced",
            "docs": [
              "True when the claim bypassed the pinned per-mint vault"
            ],
            "type": "bool"
          },
          {
            "name": "signer",
            "docs": [
              "Signer that triggered the claim"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "positionCustodyRecipientUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint"
            ],
            "type": "pubkey"
          },
          {
            "name": "pool",
            "docs": [
              "DAMM v2 pool"
            ],
            "type": "pubkey"
          },
          {
            "name": "positionCustody",
            "docs": [
              "Custody state account"
            ],
            "type": "pubkey"
          },
          {
            "name": "oldRecipient",
            "docs": [
              "Previous recipient"
            ],
            "type": "pubkey"
          },
          {
            "name": "newRecipient",
            "docs": [
              "New recipient"
            ],
            "type": "pubkey"
          },
          {
            "name": "claimed",
            "docs": [
              "Gross quote units claimed from DAMM during a settle-first update"
            ],
            "type": "u64"
          },
          {
            "name": "partnerCut",
            "docs": [
              "Partner cut of the settle claim"
            ],
            "type": "u64"
          },
          {
            "name": "deployerCut",
            "docs": [
              "Deployer cut of the settle claim"
            ],
            "type": "u64"
          },
          {
            "name": "net",
            "docs": [
              "Quote units delivered to the outgoing recipient"
            ],
            "type": "u64"
          },
          {
            "name": "forced",
            "docs": [
              "True when the update skipped the settle CPI"
            ],
            "type": "bool"
          },
          {
            "name": "signer",
            "docs": [
              "Signer that performed the update"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "positionCustodyRole",
      "docs": [
        "Role of a DAMM v2 position NFT held in custody."
      ],
      "repr": {
        "kind": "rust"
      },
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "platform"
          },
          {
            "name": "creator"
          }
        ]
      }
    },
    {
      "name": "positionMetrics",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalClaimedAFee",
            "type": "u64"
          },
          {
            "name": "totalClaimedBFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "programConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "docs": [
              "Current program admin"
            ],
            "type": "pubkey"
          },
          {
            "name": "pendingAdmin",
            "docs": [
              "Optional pending admin awaiting confirmation"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "platformVault",
            "docs": [
              "Platform vault (receives bags fees)"
            ],
            "type": "pubkey"
          },
          {
            "name": "platformBps",
            "docs": [
              "Platform share in basis points (before distribution to partner)"
            ],
            "type": "u16"
          },
          {
            "name": "totalClaimedFees",
            "docs": [
              "Total claimed fees for the platform (cumulative, quote units)"
            ],
            "type": "u128"
          },
          {
            "name": "totalAccumulatedFees",
            "docs": [
              "Pending platform fees (sum of last protocol claims not yet claimed)"
            ],
            "type": "u64"
          },
          {
            "name": "totalLifetimeAccumulatedFees",
            "docs": [
              "All-time fees accumulated into the platform config (quote units)"
            ],
            "type": "u128"
          },
          {
            "name": "padding0",
            "docs": [
              "Reserved for future use (8-byte aligned)"
            ],
            "type": {
              "array": [
                "u64",
                5
              ]
            }
          },
          {
            "name": "padding1",
            "docs": [
              "Reserved for future use (1-byte aligned)"
            ],
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          },
          {
            "name": "bump",
            "docs": [
              "Bump for the PDA"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "programConfigAdminUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "programConfig",
            "docs": [
              "Program config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "oldAdmin",
            "docs": [
              "Previous admin (before update)"
            ],
            "type": "pubkey"
          },
          {
            "name": "newAdmin",
            "docs": [
              "New admin (after update)"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "programConfigInitializedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "programConfig",
            "docs": [
              "Program config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "platformVault",
            "docs": [
              "Platform vault account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "platformBps",
            "docs": [
              "Platform share in basis points"
            ],
            "type": "u16"
          },
          {
            "name": "admin",
            "docs": [
              "Admin wallet that initialized the config"
            ],
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "programConfigUpdatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "docs": [
              "Unix timestamp (seconds) at emit"
            ],
            "type": "i64"
          },
          {
            "name": "programConfig",
            "docs": [
              "Program config account (PDA)"
            ],
            "type": "pubkey"
          },
          {
            "name": "newPlatformBps",
            "docs": [
              "Platform share in basis points (after update)"
            ],
            "type": "u16"
          },
          {
            "name": "oldPlatformBps",
            "docs": [
              "Previous platform share in basis points (before update)"
            ],
            "type": "u16"
          },
          {
            "name": "pendingAdmin",
            "docs": [
              "Pending admin (if any)"
            ],
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "quoteCollectionEvent",
      "docs": [
        "Emitted once per non-WSOL collection, including a zero receipt. Protocol: 0 DBC, 1 DAMM."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "protocol",
            "type": "u8"
          },
          {
            "name": "actor",
            "type": "pubkey"
          },
          {
            "name": "pool",
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "type": "pubkey"
          },
          {
            "name": "quoteTokenProgram",
            "type": "pubkey"
          },
          {
            "name": "feeShareConfig",
            "type": "pubkey"
          },
          {
            "name": "feeShareAuthority",
            "type": "pubkey"
          },
          {
            "name": "upstreamTransfer",
            "type": {
              "defined": {
                "name": "quoteCollectionTransfer"
              }
            }
          },
          {
            "name": "roleTransfers",
            "type": {
              "vec": {
                "defined": {
                  "name": "quoteCollectionRoleTransfer"
                }
              }
            }
          },
          {
            "name": "recipientDeltas",
            "docs": [
              "Actual new credits in the same order as ledger_after_recipients."
            ],
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "ledgerAfterRecipients",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "ledgerAfterAmounts",
            "type": {
              "vec": "u64"
            }
          },
          {
            "name": "pairBalanceAfter",
            "type": "u64"
          },
          {
            "name": "pairOutstandingAfter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "quoteCollectionRoleTransfer",
      "docs": [
        "Role numbers: 0 platform, 1 partner, 2 deployer. No shared monetary counter is implied."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "role",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "transfer",
            "type": {
              "defined": {
                "name": "quoteCollectionTransfer"
              }
            }
          }
        ]
      }
    },
    {
      "name": "quoteCollectionTransfer",
      "docs": [
        "One measured token movement, including public balances and withheld balances after CPI."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "source",
            "type": "pubkey"
          },
          {
            "name": "destination",
            "type": "pubkey"
          },
          {
            "name": "grossDebit",
            "type": "u64"
          },
          {
            "name": "netReceipt",
            "type": "u64"
          },
          {
            "name": "withheld",
            "type": "u64"
          },
          {
            "name": "sourceBalanceAfter",
            "type": "u64"
          },
          {
            "name": "destinationBalanceAfter",
            "type": "u64"
          },
          {
            "name": "sourceWithheldAfter",
            "type": "u64"
          },
          {
            "name": "destinationWithheldAfter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "quoteHoldingWithdrawalEvent",
      "docs": [
        "Kind 2: withdrawal of actual public holding balance, never new pair income or debt."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "actor",
            "type": "pubkey"
          },
          {
            "name": "classification",
            "type": "u8"
          },
          {
            "name": "kind",
            "type": "u8"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "type": "pubkey"
          },
          {
            "name": "quoteTokenProgram",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "source",
            "type": "pubkey"
          },
          {
            "name": "destination",
            "type": "pubkey"
          },
          {
            "name": "transfer",
            "type": {
              "defined": {
                "name": "quoteTransferResult"
              }
            }
          },
          {
            "name": "debtDebit",
            "type": "u64"
          },
          {
            "name": "debtAfter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "quotePairSettlementEvent",
      "docs": [
        "Authoritative non-WSOL pair entitlement settlement. Classification: 0 user, 1 admin,",
        "2 manager. Kind: 0 direct, 1 holding deposit. Holding deposits settle gross debt once."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "actor",
            "type": "pubkey"
          },
          {
            "name": "classification",
            "type": "u8"
          },
          {
            "name": "kind",
            "type": "u8"
          },
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "claimerIndex",
            "type": "u32"
          },
          {
            "name": "feeShareConfig",
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "type": "pubkey"
          },
          {
            "name": "quoteTokenProgram",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "source",
            "type": "pubkey"
          },
          {
            "name": "destination",
            "type": "pubkey"
          },
          {
            "name": "transfer",
            "type": {
              "defined": {
                "name": "quoteTransferResult"
              }
            }
          },
          {
            "name": "debtDebit",
            "type": "u64"
          },
          {
            "name": "debtAfter",
            "type": "u64"
          },
          {
            "name": "pairOutstandingAfter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "quoteRoleTransferEvent",
      "docs": [
        "Companion to the legacy gross role claim event in the same parent invocation.",
        "Ordinal 0 identifies its single transfer. Role: 0 platform, 1 partner, 2 deployer.",
        "Classification: 1 admin, 3 owner. Kind 3: shared role withdrawal, no new income."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "actor",
            "type": "pubkey"
          },
          {
            "name": "classification",
            "type": "u8"
          },
          {
            "name": "kind",
            "type": "u8"
          },
          {
            "name": "role",
            "type": "u8"
          },
          {
            "name": "ordinal",
            "type": "u8"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "type": "pubkey"
          },
          {
            "name": "quoteTokenProgram",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "source",
            "type": "pubkey"
          },
          {
            "name": "destination",
            "type": "pubkey"
          },
          {
            "name": "transfer",
            "type": {
              "defined": {
                "name": "quoteTransferResult"
              }
            }
          }
        ]
      }
    },
    {
      "name": "quoteTransferResult",
      "docs": [
        "A measured transfer is cash movement, not an instruction to count new fee income."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "grossDebit",
            "type": "u64"
          },
          {
            "name": "netReceipt",
            "type": "u64"
          },
          {
            "name": "withheld",
            "type": "u64"
          },
          {
            "name": "sourceAfter",
            "type": "u64"
          },
          {
            "name": "destinationAfter",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "rewardInfo",
      "docs": [
        "Stores the state relevant for tracking liquidity mining rewards"
      ],
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "initialized",
            "docs": [
              "Indicates if the reward has been initialized"
            ],
            "type": "u8"
          },
          {
            "name": "rewardTokenFlag",
            "docs": [
              "reward token flag"
            ],
            "type": "u8"
          },
          {
            "name": "padding0",
            "docs": [
              "padding"
            ],
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "padding1",
            "docs": [
              "Padding to ensure `reward_rate: u128` is 16-byte aligned"
            ],
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "mint",
            "docs": [
              "Reward token mint."
            ],
            "type": "pubkey"
          },
          {
            "name": "vault",
            "docs": [
              "Reward vault token account."
            ],
            "type": "pubkey"
          },
          {
            "name": "funder",
            "docs": [
              "Authority account that allows to fund rewards"
            ],
            "type": "pubkey"
          },
          {
            "name": "rewardDuration",
            "docs": [
              "reward duration"
            ],
            "type": "u64"
          },
          {
            "name": "rewardDurationEnd",
            "docs": [
              "reward duration end"
            ],
            "type": "u64"
          },
          {
            "name": "rewardRate",
            "docs": [
              "reward rate"
            ],
            "type": "u128"
          },
          {
            "name": "rewardPerTokenStored",
            "docs": [
              "Reward per token stored"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "lastUpdateTime",
            "docs": [
              "The last time reward states were updated."
            ],
            "type": "u64"
          },
          {
            "name": "cumulativeSecondsWithEmptyLiquidityReward",
            "docs": [
              "Accumulated seconds when the farm distributed rewards but the bin was empty.",
              "These rewards will be carried over to the next reward time window."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateDeployerFeeCollectionParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeCollectionMode",
            "docs": [
              "Deployer fee collection mode."
            ],
            "type": "u8"
          },
          {
            "name": "feeCollectionPlatformBps",
            "docs": [
              "Deployer fee collection bps from the platform pool."
            ],
            "type": "u16"
          },
          {
            "name": "feeCollectionClaimersBps",
            "docs": [
              "Deployer fee collection bps from the claimers pool."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateFeeConfigParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bps",
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "finalizeUpdate",
            "docs": [
              "Whether the update is finalized.",
              "`true`: this is the final ix and wont be able to further update later",
              "`false`: this is not the final ix and can be updated again later"
            ],
            "type": "bool"
          },
          {
            "name": "fromIdx",
            "docs": [
              "The index of the claimer to update from"
            ],
            "type": "u8"
          },
          {
            "name": "toIdx",
            "docs": [
              "The index of the claimer to update to"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "updateFeeConfigPlatformBpsParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "platformBps",
            "docs": [
              "Stored override: `0` falls back to `ProgramConfig.platform_bps`,",
              "`1..=9999` overrides, `PLATFORM_BPS_WAIVED` waives the platform cut."
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updatePartnerConfigParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bps",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updatePartnerFeeCollectionParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeCollectionMode",
            "docs": [
              "Partner fee collection mode"
            ],
            "type": "u8"
          },
          {
            "name": "feeCollectionPlatformBps",
            "docs": [
              "Partner fee collection bps from the platform pool."
            ],
            "type": "u16"
          },
          {
            "name": "feeCollectionClaimersBps",
            "docs": [
              "Partner fee collection claimers bps"
            ],
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "updateProgramConfigParameters",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pendingAdmin",
            "docs": [
              "Pending admin to update (None = don't update)",
              "Pass in Pubkey::default() to clear"
            ],
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "platformBps",
            "docs": [
              "Platform BPS to update (None = don't update)"
            ],
            "type": {
              "option": "u16"
            }
          }
        ]
      }
    },
    {
      "name": "userFeeVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "docs": [
              "The user (claimer) this vault belongs to"
            ],
            "type": "pubkey"
          },
          {
            "name": "baseMint",
            "docs": [
              "Base mint of the fee share config"
            ],
            "type": "pubkey"
          },
          {
            "name": "quoteMint",
            "docs": [
              "Quote mint (WSOL)"
            ],
            "type": "pubkey"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userRewardInfo",
      "serialization": "bytemuck",
      "repr": {
        "kind": "c"
      },
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardPerTokenCheckpoint",
            "docs": [
              "The latest update reward checkpoint"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "rewardPendings",
            "docs": [
              "Current pending rewards"
            ],
            "type": "u64"
          },
          {
            "name": "totalClaimedRewards",
            "docs": [
              "Total claimed rewards"
            ],
            "type": "u64"
          }
        ]
      }
    }
  ]
};
