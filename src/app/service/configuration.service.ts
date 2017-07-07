import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

    private configurationData: any[] = [
        {
            id: '100010',
            path: 'cps',
            name: 'program.tag.license.Pharmaserv',
            value: 'true'
        },
        {
            id: '100011',
            path: 'cps-ERX-NDCD01-ERX',
            name: 'program.tag.license.PCSTest',
            value: 'false'
        }
    ];

    constructor() { }

    getConfigurationData(): any[] {
        return this.configurationData;
    }

}
