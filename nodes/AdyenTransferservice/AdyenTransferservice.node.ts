import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { transactionsDescription } from './resources/transactions';
import { transfersDescription } from './resources/transfers';

export class AdyenTransferservice implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'adyen-transferservice',
		name: 'N8nDevAdyenTransferservice',
		icon: { light: 'file:./adyen-transferservice.svg', dark: 'file:./adyen-transferservice.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Transfers API provides endpoints that you can use to get information about all your transactions, move funds within your balance platform or send funds from your balance platform to a [transfer..',
		defaults: { name: 'adyen-transferservice' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAdyenTransferserviceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Transactions",
					"value": "Transactions",
					"description": ""
				},
				{
					"name": "Transfers",
					"value": "Transfers",
					"description": ""
				}
			],
			"default": ""
		},
		...transactionsDescription,
		...transfersDescription
		],
	};
}
