import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenTransferserviceApi implements ICredentialType {
        name = 'N8nDevAdyenTransferserviceApi';

        displayName = 'Adyen Transferservice API';

        icon: Icon = { light: 'file:../nodes/AdyenTransferservice/adyen-transferservice.svg', dark: 'file:../nodes/AdyenTransferservice/adyen-transferservice.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://balanceplatform-api-test.adyen.com/btl/v3',
                        required: true,
                        placeholder: 'https://balanceplatform-api-test.adyen.com/btl/v3',
                        description: 'The base URL of your Adyen Transferservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
