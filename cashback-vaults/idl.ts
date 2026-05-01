/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/bags_claim_vault_program.json`.
 */
export type BagsClaimVaultProgram = {
	address: 'BANKjMoSxHmETcmAJXuh6kBvF2TN2UJ4UerJM8q1BqyC';
	metadata: {
		name: 'bagsClaimVaultProgram';
		version: '0.1.0';
		spec: '0.1.0';
		description: 'Created with Anchor';
	};
	instructions: [
		{
			name: 'claimFromUserVault';
			discriminator: [31, 114, 48, 238, 96, 195, 61, 187];
			accounts: [
				{
					name: 'user';
					signer: true;
					relations: ['userVault'];
				},
				{
					name: 'payer';
					writable: true;
					signer: true;
				},
				{
					name: 'userVault';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'const';
								value: [117, 115, 101, 114, 95, 118, 97, 117, 108, 116];
							},
							{
								kind: 'account';
								path: 'user';
							},
						];
					};
				},
				{
					name: 'mint';
				},
				{
					name: 'vaultAta';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'userVault';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mint';
							},
						];
						program: {
							kind: 'const';
							value: [
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
								89,
							];
						};
					};
				},
				{
					name: 'userAta';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'account';
								path: 'user';
							},
							{
								kind: 'account';
								path: 'tokenProgram';
							},
							{
								kind: 'account';
								path: 'mint';
							},
						];
						program: {
							kind: 'const';
							value: [
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
								89,
							];
						};
					};
				},
				{
					name: 'tokenProgram';
				},
				{
					name: 'associatedTokenProgram';
					address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
				},
				{
					name: 'systemProgram';
					address: '11111111111111111111111111111111';
				},
			];
			args: [];
		},
		{
			name: 'closeUserVault';
			discriminator: [65, 92, 132, 113, 45, 163, 253, 201];
			accounts: [
				{
					name: 'user';
					writable: true;
					signer: true;
					relations: ['userVault'];
				},
				{
					name: 'userVault';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'const';
								value: [117, 115, 101, 114, 95, 118, 97, 117, 108, 116];
							},
							{
								kind: 'account';
								path: 'user';
							},
						];
					};
				},
			];
			args: [];
		},
		{
			name: 'createUserVault';
			discriminator: [94, 115, 173, 163, 159, 129, 198, 249];
			accounts: [
				{
					name: 'user';
				},
				{
					name: 'payer';
					writable: true;
					signer: true;
				},
				{
					name: 'userVault';
					writable: true;
					pda: {
						seeds: [
							{
								kind: 'const';
								value: [117, 115, 101, 114, 95, 118, 97, 117, 108, 116];
							},
							{
								kind: 'account';
								path: 'user';
							},
						];
					};
				},
				{
					name: 'systemProgram';
					address: '11111111111111111111111111111111';
				},
			];
			args: [];
		},
	];
	accounts: [
		{
			name: 'userVault';
			discriminator: [23, 76, 96, 159, 210, 10, 5, 22];
		},
	];
	events: [
		{
			name: 'claimedFromUserVault';
			discriminator: [208, 62, 26, 145, 138, 20, 225, 200];
		},
		{
			name: 'userVaultClosed';
			discriminator: [38, 129, 61, 196, 48, 190, 138, 217];
		},
		{
			name: 'userVaultCreated';
			discriminator: [27, 147, 127, 79, 98, 58, 5, 25];
		},
	];
	errors: [
		{
			code: 6000;
			name: 'vaultEmpty';
			msg: 'Vault token account has zero balance';
		},
	];
	types: [
		{
			name: 'claimedFromUserVault';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'user';
						type: 'pubkey';
					},
					{
						name: 'vault';
						type: 'pubkey';
					},
					{
						name: 'mint';
						type: 'pubkey';
					},
					{
						name: 'amount';
						type: 'u64';
					},
					{
						name: 'timestamp';
						type: 'i64';
					},
				];
			};
		},
		{
			name: 'userVault';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'user';
						type: 'pubkey';
					},
					{
						name: 'bump';
						type: 'u8';
					},
				];
			};
		},
		{
			name: 'userVaultClosed';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'user';
						type: 'pubkey';
					},
					{
						name: 'vault';
						type: 'pubkey';
					},
					{
						name: 'timestamp';
						type: 'i64';
					},
				];
			};
		},
		{
			name: 'userVaultCreated';
			type: {
				kind: 'struct';
				fields: [
					{
						name: 'user';
						type: 'pubkey';
					},
					{
						name: 'vault';
						type: 'pubkey';
					},
					{
						name: 'timestamp';
						type: 'i64';
					},
				];
			};
		},
	];
};
