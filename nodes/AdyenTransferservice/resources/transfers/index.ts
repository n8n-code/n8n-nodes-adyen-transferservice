import type { INodeProperties } from 'n8n-workflow';

export const transfersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					]
				}
			},
			"options": [
				{
					"name": "Post Transfers",
					"value": "Post Transfers",
					"action": "Transfer funds",
					"description": "Starts a request to transfer funds to [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts), [transfer instruments](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments), or third-party bank accounts. Adyen sends the outcome of the transfer request through webhooks.\n\nTo use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/transfers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /transfers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Amount",
			"name": "amount",
			"type": "json",
			"default": "{}",
			"description": "The amount of the transfer.",
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"displayName": "Balance Account ID",
			"name": "balanceAccountId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).",
			"routing": {
				"send": {
					"property": "balanceAccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Category",
			"name": "category",
			"type": "options",
			"default": "bank",
			"description": "The type of transfer.\n\nPossible values:\n\n - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\n- **issuedCard**: Transfer initiated by a Adyen-issued card.\n\n- **platformPayment**: Fund movements related to payments that are acquired for your users.",
			"options": [
				{
					"name": "Bank",
					"value": "bank"
				},
				{
					"name": "Internal",
					"value": "internal"
				},
				{
					"name": "Issued Card",
					"value": "issuedCard"
				},
				{
					"name": "Platform Payment",
					"value": "platformPayment"
				}
			],
			"routing": {
				"send": {
					"property": "category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Counterparty",
			"name": "counterparty",
			"type": "json",
			"default": "{\n  \"bankAccount\": {\n    \"accountHolder\": {\n      \"address\": {},\n      \"type\": \"unknown\"\n    },\n    \"accountIdentification\": {\n      \"type\": \"auLocal\"\n    }\n  }\n}",
			"description": "The recipient of the funds transfer. A bank account, a balance account, or a transfer instrument is required.",
			"routing": {
				"send": {
					"property": "counterparty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**\n\nSupported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' \" ! ?**",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "The ID of the resource.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"displayName": "Payment Instrument ID",
			"name": "paymentInstrumentId",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).",
			"routing": {
				"send": {
					"property": "paymentInstrumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"type": "options",
			"default": "crossBorder",
			"description": "The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.\n\n* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: High-value transfer to a recipient in a different country.\n\n* **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).",
			"options": [
				{
					"name": "Cross Border",
					"value": "crossBorder"
				},
				{
					"name": "Direct Debit",
					"value": "directDebit"
				},
				{
					"name": "Fast",
					"value": "fast"
				},
				{
					"name": "Instant",
					"value": "instant"
				},
				{
					"name": "Internal",
					"value": "internal"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Wire",
					"value": "wire"
				}
			],
			"routing": {
				"send": {
					"property": "priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "reference",
			"type": "string",
			"default": "",
			"description": "Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.",
			"routing": {
				"send": {
					"property": "reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"displayName": "Reference For Beneficiary",
			"name": "referenceForBeneficiary",
			"type": "string",
			"default": "",
			"description": " A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.\n\n Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.\n\n- **internal**: 80 characters\n\n- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.",
			"routing": {
				"send": {
					"property": "referenceForBeneficiary",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"displayName": "Ultimate Party",
			"name": "ultimateParty",
			"type": "json",
			"default": "{\n  \"address\": {},\n  \"type\": \"unknown\"\n}",
			"description": "The ultimate sender of the funds of the transfer (ultimate debtor).",
			"routing": {
				"send": {
					"property": "ultimateParty",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfers"
					],
					"operation": [
						"Post Transfers"
					]
				}
			}
		},
];
