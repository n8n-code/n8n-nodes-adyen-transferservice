import type { INodeProperties } from 'n8n-workflow';

export const transactionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					]
				}
			},
			"options": [
				{
					"name": "Get Transactions",
					"value": "Get Transactions",
					"action": "Get all transactions",
					"description": "Returns all transactions related to a balance account with a payment instrument of type **bankAccount**.\n\nThis endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/transactions"
						}
					}
				},
				{
					"name": "Get Transactions ID",
					"value": "Get Transactions ID",
					"action": "Get a transaction",
					"description": "Returns a transaction.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/transactions/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /transactions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Balance Platform",
			"name": "balancePlatform",
			"description": "Unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "balancePlatform",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Payment Instrument ID",
			"name": "paymentInstrumentId",
			"description": "Unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "paymentInstrumentId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Account Holder ID",
			"name": "accountHolderId",
			"description": "Unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accountHolderId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Balance Account ID",
			"name": "balanceAccountId",
			"description": "Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "balanceAccountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "The `cursor` returned in the links of the previous response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Created Since",
			"name": "createdSince",
			"required": true,
			"description": "Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdSince",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Created Until",
			"name": "createdUntil",
			"required": true,
			"description": "Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdUntil",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions"
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
						"Transactions"
					],
					"operation": [
						"Get Transactions"
					]
				}
			}
		},
		{
			"displayName": "GET /transactions/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Unique identifier of the transaction.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transactions"
					],
					"operation": [
						"Get Transactions ID"
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
						"Transactions"
					],
					"operation": [
						"Get Transactions ID"
					]
				}
			}
		},
];
